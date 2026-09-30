import Image from 'next/image';
import { Mic, Presentation, Users, Wrench } from 'lucide-react';
import { CountUp, Reveal, ScrollWords } from '@/components/motion';
import { EventSpeakers } from '@/constants/EventSpeakers';
import { EventTeam } from '@/constants/EventTeam';
import { KeynoteSpeakers } from '@/constants/KeynoteSpeakers';
import { partnerCategories } from '@/constants/Partners';
import { scheduleTables } from '@/constants/Schedules';

const topics = [
    'Serverless',
    'Generative AI',
    'Agentic AI',
    'DevOps & CI/CD',
    'Event-driven architecture',
    'Containers',
    'Data & ML',
    'Cloud careers',
    'Community',
];

const sessions = [
    ...scheduleTables.common.flatMap((t) => t.items),
    ...scheduleTables.halls.main.items,
    ...scheduleTables.halls.side.items,
].filter((i) => i.type).length;

const stats = [
    { value: 500, suffix: '+', label: 'Attendees' },
    { value: EventSpeakers.length + KeynoteSpeakers.length, label: 'Speakers' },
    { value: sessions, label: 'Sessions' },
    {
        value: partnerCategories.reduce((n, c) => n + c.items.length, 0),
        label: 'Partners',
    },
];

const expect = [
    { icon: Presentation, title: 'Technical talks', text: 'From engineers running AWS in production.' },
    { icon: Wrench, title: 'Hands-on workshops', text: 'Bring a laptop, leave with something built.' },
    { icon: Mic, title: 'Industry panel', text: 'Straight answers on careers and hiring.' },
    { icon: Users, title: 'People', text: 'Community Builders, founders and 500 peers.' },
];

const Marquee = () => (
    <div className='mask-fade-x overflow-hidden border-y border-ink/[0.07] py-6'>
        <div className='flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]'>
            {[...topics, ...topics].map((t, i) => (
                <span
                    key={i}
                    className='flex items-center gap-10 text-2xl font-medium tracking-tight text-ink/70 sm:text-3xl'
                    aria-hidden={i >= topics.length}
                >
                    {t}
                    <span className='text-base text-glow'>✦</span>
                </span>
            ))}
        </div>
    </div>
);

const About = () => {
    return (
        <section id='about' className='relative bg-snow pb-24 sm:pb-32'>
            <Marquee />

            <div className='shell pt-24 sm:pt-32'>
                <p className='eyebrow mb-8 flex items-center gap-3 text-stone'>
                    <span className='text-glow'>01</span>
                    <span className='h-px w-8 bg-ink/20' />
                    The conference
                </p>
                <ScrollWords
                    className='max-w-5xl text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em]'
                    text="AWS Student Community Day is a free, student-run conference where Nepal's next cloud builders learn from people already shipping on AWS — and in Pokhara, the view comes included."
                />

                <div className='mt-20 grid gap-4 lg:grid-cols-12'>
                    <Reveal className='lg:col-span-7'>
                        <div className='grain relative h-full overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-10'>
                            <div
                                aria-hidden
                                className='absolute -right-20 -top-24 size-80 rounded-full bg-glow/25 blur-3xl'
                            />
                            <p className='eyebrow text-white/45'>
                                Last December, in numbers
                            </p>
                            <div className='relative mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4'>
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <div className='text-5xl font-medium tracking-[-0.05em] tabular-nums sm:text-6xl'>
                                            <CountUp to={s.value} suffix={s.suffix} />
                                        </div>
                                        <div className='mt-2 font-mono text-xs uppercase tracking-wider text-white/45'>
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className='relative mt-12 max-w-md text-white/60'>
                                The first edition filled Ranjit Event Center in
                                2025. For the second, we&apos;re going bigger —
                                and staying free.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className='lg:col-span-5'>
                        <div className='relative h-full min-h-[320px] overflow-hidden rounded-[28px]'>
                            <Image
                                src='/pokhara/doonga-row.jpg'
                                alt='A row of colourful wooden doonga boats on Phewa Lake'
                                fill
                                sizes='(min-width: 1024px) 40vw, 100vw'
                                className='object-cover transition-transform duration-[1.6s] ease-out-expo hover:scale-105'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent' />
                            <div className='absolute inset-x-0 bottom-0 p-8 text-white'>
                                <p className='text-2xl font-medium tracking-tight'>
                                    Free for every student.
                                </p>
                                <p className='mt-1 text-white/70'>
                                    Just bring curiosity — and a laptop.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.05} className='lg:col-span-4'>
                        <div className='card flex h-full flex-col justify-between p-8'>
                            <p className='eyebrow text-stone'>Organised by</p>
                            <div className='mt-10 space-y-5'>
                                {['IOE Pashchimanchal Campus', 'Prithvi Narayan Campus'].map((c) => (
                                    <div key={c} className='flex items-center gap-4'>
                                        <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-ink font-mono text-[10px] font-semibold text-glow'>
                                            AWS
                                        </span>
                                        <div>
                                            <p className='text-sm text-stone'>AWS Cloud Club</p>
                                            <p className='font-medium'>{c}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className='mt-10 text-sm text-stone'>
                                {EventTeam.length} student organisers, zero
                                ticket price.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12} className='lg:col-span-8'>
                        <div className='card h-full p-8'>
                            <p className='eyebrow text-stone'>What the day holds</p>
                            <div className='mt-8 grid gap-6 sm:grid-cols-2'>
                                {expect.map(({ icon: Icon, title, text }) => (
                                    <div key={title} className='flex gap-4'>
                                        <span className='grid size-11 shrink-0 place-items-center rounded-xl bg-glow/15 text-glow-deep'>
                                            <Icon className='size-5' />
                                        </span>
                                        <div>
                                            <p className='font-medium'>{title}</p>
                                            <p className='mt-0.5 text-sm text-stone'>{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
