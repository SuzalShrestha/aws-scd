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
            className='group block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aws-orange)]'
        >
            <div className='flex items-start gap-3'>
                <div className='shrink-0 overflow-hidden rounded-md border border-gray-100 bg-white'>
                    <Image
                        src={imgSrc}
                        alt={item.title}
                        width={96}
                        height={54}
                        className='h-14 w-24 object-cover'
                    />
                </div>
                <div className='min-w-0'>
                    <h3 className='truncate text-base font-semibold text-slate-900 group-hover:text-[var(--aws-orange)]'>
                        {item.title}
                    </h3>
                    {displayDate && (
                        <div className='mt-1 inline-flex items-center gap-1.5 text-sm text-gray-600'>
                            <Calendar
                                className='h-4 w-4 text-gray-400'
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

    return (
        <section className='bg-white py-20 px-4' id='past-events'>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-12 text-center'>
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Past Events
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {/* IOE Paschimanchal */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-slate-900'>
                            AWS Cloud Club — IOE Pashchimanchal Campus
                        </h3>
                        <div className='space-y-4'>
                            {ioeWithOG.map((e) => (
                                <OGCard key={e.href} item={e} />
                            ))}
                        </div>
                    </div>

                    {/* Prithvi Narayan Campus */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold text-slate-900'>
                            AWS Cloud Club — Prithvi Narayan Campus
                        </h3>
                        <div className='space-y-4'>
                            {pncWithOG.map((e) => (
                                <OGCard key={e.href} item={e} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
