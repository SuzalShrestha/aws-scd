import Image from 'next/image';
import { Calendar } from 'lucide-react';

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

const OGCard = ({ item }: { item: EventItem }) => {
    const fallbackLogo = '/logos/Meetup-Logo-1300x730.png';
    const imgSrc = item.ogImage || fallbackLogo;
    const displayDate = item.meta.split('•')[0]?.trim();
    return (
        <a
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group block overflow-hidden rounded-2xl border border-orange-100/60 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aws-orange)]'
        >
            {/* Open Graph preview */}
            <div className='relative'>
                <div className='relative aspect-[16/9] w-full overflow-hidden bg-orange-50'>
                    <Image
                        src={imgSrc}
                        alt={item.title}
                        width={1200}
                        height={630}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
                        priority={false}
                    />
                </div>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-black/0 to-black/0' />
            </div>

            {/* Content */}
            <div className='p-4'>
                <h3 className='line-clamp-2 text-base font-semibold text-slate-900 transition-colors group-hover:text-[var(--aws-orange)]'>
                    {item.title}
                </h3>
                {displayDate && (
                    <div className='mt-2 inline-flex items-center gap-1.5 text-sm text-gray-600'>
                        <Calendar
                            className='h-4 w-4 text-gray-400'
                            aria-hidden='true'
                        />
                        <span>{displayDate}</span>
                    </div>
                )}
            </div>
        </a>
    );
};

async function fetchOgImage(url: string): Promise<string | null> {
    try {
        const res = await fetch(url, { next: { revalidate: 21600 } }); // revalidate every 6h
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
        // Normalize protocol-relative URLs
        if (og.startsWith('//')) return `https:${og}`;
        return og;
    } catch {
        return null;
    }
}

const PastEvents = async () => {
    // Fetch OG images server-side for both lists
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
        <section
            className='relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-orange-50/20 to-white/10 py-20 px-4'
            id='past-events'
        >
            <div className='mx-auto max-w-6xl'>
                <div className='mb-12 text-center'>
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Past Events
                        </h2>
                        <div className='h-1 w-24 rounded-full bg-[var(--aws-orange)] mx-auto'></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {allEvents.map((e) => (
                        <OGCard key={e.href} item={e} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
