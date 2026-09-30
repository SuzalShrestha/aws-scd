import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHead } from '@/components/motion';

type EventItem = {
    title: string;
    href: string;
    meta: string;
    club?: string;
    ogImage?: string | null;
};

const ioeEvents: EventItem[] = [
    {
        title: 'AWS Fundamentals Workshop',
        href: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/310060476/?eventOrigin=group_past_events',
        meta: 'Fri, Jul 25 • 2:00 PM NPT',
    },
    {
        title: 'Cloud-Native Development: Accelerating Delivery with AWS',
        href: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/309171707/?eventOrigin=group_past_events',
        meta: 'Wed, Jul 16 • 8:00 PM NPT • Online',
    },
    {
        title: 'Official Launch Event Of AWS Cloud Club — IOE Pashchimanchal Campus',
        href: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/308662102/?eventOrigin=group_past_events',
        meta: 'Mon, Jun 30 • 7:30 PM NPT • Online',
    },
];

const pncEvents: EventItem[] = [
    {
        title: 'Our First Step into the Cloud: Discover AWS & its Community Programs',
        href: 'https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/events/308540761/?eventOrigin=group_events_list',
        meta: 'Fri, Jun 27, 2025 • 7:00 PM onwards • Online (Zoom)',
    },
    {
        title: 'Localhost to DevOps – Your First Step into Deployment',
        href: 'https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/events/309077434/?eventOrigin=group_events_list',
        meta: 'Thu–Fri, Jul 10–11, 2025 • 7:00 PM onwards • Online (Google Meet)',
    },
    {
        title: 'QODE & PLAY: Turn your curiosity into code and code into games with Amazon Q',
        href: 'https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/events/310210771/?eventOrigin=group_events_list',
        meta: 'Wed, Aug 13, 2025 • 12:00 PM onwards • Online',
    },
];

const OGCard = ({ item, index }: { item: EventItem; index: number }) => {
    const imgSrc = item.ogImage || '/logos/Meetup-Logo-1300x730.png';
    const displayDate = item.meta.split('•')[0]?.trim();

    return (
        <Reveal delay={(index % 3) * 0.06} className='h-full'>
            <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group card flex h-full flex-col overflow-hidden bg-white'
            >
                <div className='relative aspect-[16/9] overflow-hidden bg-mist'>
                    <Image
                        src={imgSrc}
                        alt={item.title}
                        fill
                        sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                        className='object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105'
                    />
                    <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur'>
                        {item.club}
                    </span>
                </div>
                <div className='flex flex-1 items-start justify-between gap-4 p-6'>
                    <div>
                        <p className='font-mono text-[11px] uppercase tracking-wider text-stone'>{displayDate}</p>
                        <h3 className='mt-2 line-clamp-2 font-medium leading-snug tracking-tight'>
                            {item.title}
                        </h3>
                    </div>
                    <ArrowUpRight className='size-5 shrink-0 text-stone transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink' />
                </div>
            </a>
        </Reveal>
    );
};

async function fetchOgImage(url: string): Promise<string | null> {
    try {
        const res = await fetch(url, { next: { revalidate: 21600 } });
        if (!res.ok) return null;
        const html = await res.text();
        const matchProperty = html.match(
            /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i
        );
        const matchName = html.match(
            /<meta[^>]*name=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i
        );
        const linkRel = html.match(
            /<link[^>]*rel=["']image_src["'][^>]*href=["']([^"']+)["'][^>]*>/i
        );
        const og = matchProperty?.[1] || matchName?.[1] || linkRel?.[1] || null;
        if (!og) return null;
        if (og.startsWith('//')) return `https:${og}`;
        return og;
    } catch {
        return null;
    }
}

const PastEvents = async () => {
    const ioeWithOG: EventItem[] = await Promise.all(
        ioeEvents.map(async (e) => ({
            ...e,
            club: 'IOE',
            ogImage: await fetchOgImage(e.href),
        }))
    );
    const pncWithOG: EventItem[] = await Promise.all(
        pncEvents.map(async (e) => ({
            ...e,
            club: 'PNC',
            ogImage: await fetchOgImage(e.href),
        }))
    );
    const allEvents: EventItem[] = [...ioeWithOG, ...pncWithOG];

    return (
        <section id='past-events' className='section bg-mist'>
            <div className='shell'>
                <SectionHead
                    index='07'
                    label='Year-round'
                    title={
                        <>
                            The clubs never <span className='accent text-glow-deep'>log off.</span>
                        </>
                    }
                >
                    Between conferences, both clubs run workshops, meetups and
                    launch events — online and on campus. A few from last
                    year:
                </SectionHead>

                <div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    {allEvents.map((e, index) => (
                        <OGCard key={e.href} item={e} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
