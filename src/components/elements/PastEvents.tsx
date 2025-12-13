import Image from 'next/image';
import { Calendar, ArrowUpRight } from 'lucide-react';

type EventItem = {
    title: string;
    href: string;
    meta: string;
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
    const fallbackLogo = '/logos/Meetup-Logo-1300x730.png';
    const imgSrc = item.ogImage || fallbackLogo;
    const displayDate = item.meta.split('•')[0]?.trim();

    return (
        <a
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group block'
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className='relative overflow-hidden rounded-2xl bg-card border border-border transition-colors duration-200 hover:border-[var(--aws-orange)]/25'>
                {/* Image */}
                <div className='relative aspect-[16/9] w-full overflow-hidden bg-neutral-50'>
                    <Image
                        src={imgSrc}
                        alt={item.title}
                        width={1200}
                        height={630}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                        priority={false}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                    {/* Hover arrow */}
                    <div className='absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'>
                        <ArrowUpRight className='w-5 h-5 text-neutral-700' />
                    </div>
                </div>

                {/* Content */}
                <div className='p-5'>
                    <h3 className='line-clamp-2 text-base font-semibold text-neutral-900 mb-3 leading-snug group-hover:text-[var(--aws-orange)] transition-colors'>
                        {item.title}
                    </h3>
                    {displayDate && (
                        <div className='inline-flex items-center gap-2 text-sm text-neutral-500'>
                            <Calendar
                                className='h-4 w-4 text-neutral-400'
                                aria-hidden='true'
                            />
                            <span>{displayDate}</span>
                        </div>
                    )}
                </div>
            </div>
        </a>
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
            ogImage: await fetchOgImage(e.href),
        }))
    );
    const pncWithOG: EventItem[] = await Promise.all(
        pncEvents.map(async (e) => ({
            ...e,
            ogImage: await fetchOgImage(e.href),
        }))
    );
    const allEvents: EventItem[] = [...ioeWithOG, ...pncWithOG];

    return (
        <section className='section surface-muted' id='past-events'>
            <div className='page-container'>
                {/* Section Header */}
                <div className='section-header'>
                    <h2 className='section-title mb-6'>Past Events</h2>
                </div>

                {/* Events Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {allEvents.map((e, index) => (
                        <OGCard key={e.href} item={e} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
