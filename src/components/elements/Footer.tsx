import Image from 'next/image';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { Mark } from '@/components/elements/Navbar';
import { EVENT, navLinks, photoCredits } from '@/constants/Event';

const MeetupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' {...props}>
        <path d='M21.5 8.92c.4 1.54.26 3.2-.46 4.64-.72 1.44-1.96 2.57-3.5 3.18-1.53.61-3.26.64-4.81.08-1.55-.56-2.86-1.7-3.65-3.17-.79-1.47-.99-3.18-.54-4.78.45-1.6 1.53-2.98 2.98-3.82C13 4.2 14.7 3.98 16.34 4.4c1.64.43 3.07 1.43 4.03 2.83.47.67.84 1.42 1.13 1.69zm-6.83-.64c-.47 0-.9.24-1.16.64l-1.55 2.36-.88-1.41a1.35 1.35 0 0 0-2.31.08l-1.76 3.42a.75.75 0 1 0 1.33.68l1.67-3.25.93 1.49c.23.36.62.59 1.05.6.43 0 .83-.21 1.07-.57l1.63-2.49.95 3.46c.11.38.43.66.83.72.4.06.79-.12 1-.46l1.09-1.73.53.86c.21.34.61.52 1.01.46.4-.06.72-.34.83-.72a.95.95 0 0 0-.12-.8l-1.22-1.98a1.15 1.15 0 0 0-1.95.04l-.7 1.11-.87-3.14a1.35 1.35 0 0 0-1.3-.99z' />
    </svg>
);

const socials = [
    { name: 'Meetup', href: EVENT.meetup.ioe, Icon: MeetupIcon },
    { name: 'LinkedIn', href: EVENT.linkedin, Icon: Linkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/share/p/1BRAvghNGh/', Icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/p/DO3kFNkCODh', Icon: Instagram },
];

const coordinators = [
    { name: 'Yojana Ghimire', phone: '+977 9866212789' },
    { name: 'Aayusha Adhikari', phone: '+977 9703322118' },
    { name: 'Savyata Bhurtel', phone: '+977 9846917029' },
];

// Lungta — prayer flags strung across the lake, in their traditional order.
const FLAG_COLORS = ['#2f6fdb', '#f4f1ea', '#d64541', '#2e9e5b', '#f2c230'];
const flags = Array.from({ length: 30 }, (_, i) => {
    const t = (i + 0.5) / 30;
    const y = (1 - t) ** 2 * 8 + 2 * (1 - t) * t * 56 + t ** 2 * 8;
    const slope = 2 * (1 - t) * 48 - 2 * t * 48;
    return { x: 1200 * t, y, rot: (Math.atan2(slope, 1200) * 180) / Math.PI, fill: FLAG_COLORS[i % 5] };
});

const PrayerFlags = () => (
    <svg viewBox='0 0 1200 96' className='w-full' aria-hidden='true'>
        <path d='M0 8 Q600 104 1200 8' stroke='#fff' strokeOpacity='0.25' fill='none' />
        {flags.map((f, i) => (
            <rect
                key={i}
                x={(f.x - 13).toFixed(1)}
                y={f.y.toFixed(1)}
                width='26'
                height='30'
                fill={f.fill}
                opacity='0.85'
                transform={`rotate(${f.rot.toFixed(2)} ${f.x.toFixed(1)} ${f.y.toFixed(1)})`}
            />
        ))}
    </svg>
);

const Footer = () => {
    return (
        <footer className='relative overflow-hidden bg-ink text-white'>
            {/* Dusk over Phewa */}
            <div className='relative isolate'>
                <Image
                    src='/pokhara/phewa-dusk.jpg'
                    alt='Phewa Lake and Pokhara at dusk'
                    fill
                    sizes='100vw'
                    className='-z-10 object-cover opacity-70'
                />
                <div className='absolute inset-0 -z-10 bg-gradient-to-b from-snow via-ink/40 to-ink' />
                <div className='absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-snow to-transparent' />
                <div className='shell pb-10 pt-44 text-center sm:pt-56'>
                    <Reveal>
                        <p className='eyebrow text-white/60'>{EVENT.dateLong} · {EVENT.city}</p>
                        <h2 className='display mx-auto mt-6 max-w-4xl text-[clamp(3rem,9vw,8rem)]'>
                            See you by <span className='accent text-glow'>the lake.</span>
                        </h2>
                        <a href='#register' className='btn-glow mt-10'>
                            Get notified <ArrowUpRight className='size-4' />
                        </a>
                    </Reveal>
                </div>
                <PrayerFlags />
            </div>

            <div className='shell'>
                <div className='grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-12'>
                    <div className='lg:col-span-4'>
                        <div className='flex items-center gap-3'>
                            <Mark className='size-10 ring-1 ring-white/10 rounded-[11px]' />
                            <div>
                                <p className='font-semibold tracking-tight'>AWS SCD Pokhara</p>
                                <p className='text-sm text-white/45'>{EVENT.edition} · {EVENT.year}</p>
                            </div>
                        </div>
                        <p className='mt-6 max-w-xs text-sm leading-relaxed text-white/55'>
                            Organised by AWS Cloud Club IOE Pashchimanchal and
                            AWS Cloud Club Prithvi Narayan Campus.
                        </p>
                        <div className='mt-6 flex gap-2'>
                            {socials.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={name}
                                    className='grid size-10 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-glow hover:bg-glow hover:text-ink'
                                >
                                    <Icon className='size-4' />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <p className='eyebrow text-white/40'>Explore</p>
                        <ul className='mt-5 space-y-3 text-sm'>
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className='text-white/65 transition-colors hover:text-glow'>
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='lg:col-span-3'>
                        <p className='eyebrow text-white/40'>Contact</p>
                        <a href={`mailto:${EVENT.email}`} className='mt-5 flex items-center gap-2 text-sm text-white/65 hover:text-glow'>
                            <Mail className='size-4' /> {EVENT.email}
                        </a>
                        <p className='mt-3 text-sm text-white/45'>{EVENT.venue} · {EVENT.city}, Nepal</p>
                    </div>

                    <div className='lg:col-span-3'>
                        <p className='eyebrow text-white/40'>Coordinators</p>
                        <ul className='mt-5 space-y-4'>
                            {coordinators.map((c) => (
                                <li key={c.name}>
                                    <p className='text-sm text-white/80'>{c.name}</p>
                                    <a href={`tel:${c.phone.replace(/\s/g, '')}`} className='mt-0.5 flex items-center gap-2 font-mono text-xs text-white/45 hover:text-glow'>
                                        <Phone className='size-3' /> {c.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p
                    aria-hidden
                    className='accent select-none whitespace-nowrap pt-6 text-center text-[21vw] leading-[0.8] text-white/[0.06] lg:text-[17rem]'
                >
                    Pokhara ’{String(EVENT.year).slice(2)}
                </p>

                <div className='flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between'>
                    <p>© {EVENT.year} AWS Student Community Day Pokhara.</p>
                    <p>
                        Photos via Unsplash:{' '}
                        {photoCredits.map((c, i) => (
                            <span key={c.handle}>
                                <a href={c.href} target='_blank' rel='noopener noreferrer' className='hover:text-white'>
                                    @{c.handle}
                                </a>
                                {i < photoCredits.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                    <p>
                        Designed by{' '}
                        <a href='https://www.linkedin.com/in/shresthasujal' target='_blank' rel='noopener noreferrer' className='text-white/70 hover:text-glow'>
                            Sujal Shrestha
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
