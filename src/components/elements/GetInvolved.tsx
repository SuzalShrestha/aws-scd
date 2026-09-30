import Image from 'next/image';
import { ArrowUpRight, Handshake, Mic } from 'lucide-react';
import { Reveal, SectionHead } from '@/components/motion';
import { EVENT, mailto } from '@/constants/Event';

const GetInvolved = () => {
    return (
        <section id='register' className='section bg-snow'>
            <div className='shell'>
                <SectionHead
                    index='05'
                    label='Get involved'
                    title={
                        <>
                            Be part of <span className='accent text-glow-deep'>{EVENT.year}.</span>
                        </>
                    }
                >
                    Attend, speak or partner — there&apos;s a seat at the lake
                    for everyone who cares about Nepal&apos;s cloud community.
                </SectionHead>

                <div className='mt-16 grid gap-4 lg:grid-cols-12'>
                    <Reveal className='lg:col-span-6'>
                        <div className='grain relative flex h-full min-h-[520px] flex-col justify-end overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-10'>
                            <Image
                                src='/pokhara/phewa-boats-sunset.jpg'
                                alt='Wooden boats moored on Phewa Lake at sunset'
                                fill
                                sizes='(min-width: 1024px) 50vw, 100vw'
                                className='object-cover opacity-60'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10' />
                            <div className='relative'>
                                <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur-md'>
                                    <span className='relative flex size-2'>
                                        <span className='absolute inset-0 animate-ping rounded-full bg-glow opacity-75' />
                                        <span className='relative size-2 rounded-full bg-glow' />
                                    </span>
                                    Registration opens soon
                                </span>
                                <h3 className='mt-6 text-4xl font-medium tracking-tight sm:text-5xl'>
                                    Attend — <span className='accent text-glow'>free.</span>
                                </h3>
                                <p className='mt-4 max-w-md text-white/70'>
                                    Seats are limited and went fast last year.
                                    Join either club on Meetup and you&apos;ll
                                    hear the moment registration opens.
                                </p>
                                <div className='mt-8 flex flex-wrap gap-3'>
                                    <a href={EVENT.meetup.ioe} target='_blank' rel='noopener noreferrer' className='btn-glow'>
                                        IOE Pashchimanchal <ArrowUpRight className='size-4' />
                                    </a>
                                    <a href={EVENT.meetup.pnc} target='_blank' rel='noopener noreferrer' className='btn-ghost-dark'>
                                        Prithvi Narayan Campus <ArrowUpRight className='size-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {[
                        {
                            icon: Mic,
                            kicker: 'Call for speakers · opening soon',
                            title: 'Speak',
                            text: 'Talks and hands-on workshops for a 500+ student audience. Have an idea already? Tell us early.',
                            cta: 'Pitch a talk',
                            href: mailto(`Speaking at AWS SCD Pokhara ${EVENT.year}`),
                            btn: 'btn-line',
                        },
                        {
                            icon: Handshake,
                            kicker: 'Partnerships · open now',
                            title: 'Partner',
                            text: "Put your brand in front of Nepal's next cloud builders — booths, sessions, workshops and custom packages.",
                            cta: 'Become a partner',
                            href: mailto(`Partnering with AWS SCD Pokhara ${EVENT.year}`),
                            btn: 'btn-ink',
                        },
                    ].map(({ icon: Icon, ...c }, i) => (
                        <Reveal key={c.title} delay={0.08 * (i + 1)} className='lg:col-span-3'>
                            <div className='card flex h-full flex-col p-8'>
                                <span className='grid size-12 place-items-center rounded-2xl bg-glow/15 text-glow-deep'>
                                    <Icon className='size-5' />
                                </span>
                                <p className='eyebrow mt-10 text-stone'>{c.kicker}</p>
                                <h3 className='mt-3 text-3xl font-medium tracking-tight'>{c.title}</h3>
                                <p className='mt-3 flex-1 text-stone'>{c.text}</p>
                                <a href={c.href} className={`${c.btn} mt-8 self-start`}>
                                    {c.cta} <ArrowUpRight className='size-4' />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
