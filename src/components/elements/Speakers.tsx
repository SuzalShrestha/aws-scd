import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { Reveal, SectionHead } from '@/components/motion';
import { EventSpeakers } from '@/constants/EventSpeakers';
import { KeynoteSpeakers } from '@/constants/KeynoteSpeakers';

const Speakers = () => {
    return (
        <section id='speakers' className='section bg-snow'>
            <div className='shell'>
                <SectionHead
                    index='03'
                    label='Voices'
                    title={
                        <>
                            Learn from people{' '}
                            <span className='accent text-glow-deep'>shipping on AWS.</span>
                        </>
                    }
                >
                    <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink/70'>
                        <span className='size-1.5 rounded-full bg-glow' />
                        2025 lineup · 2026 announced soon
                    </span>
                    <p>
                        Last year brought AWS Community Builders, principal
                        engineers and founders to Pokhara. The 2026 lineup
                        will be announced here first.
                    </p>
                </SectionHead>

                {/* Keynotes */}
                <div className='mt-16 grid gap-4 md:grid-cols-3'>
                    {KeynoteSpeakers.map((s, i) => (
                        <Reveal key={s.id} delay={i * 0.08}>
                            <a
                                href={s.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-ink'
                            >
                                <Image
                                    src={s.image}
                                    alt={s.name}
                                    fill
                                    sizes='(min-width: 768px) 33vw, 100vw'
                                    className='object-cover transition-all [@media(hover:hover)]:grayscale-[35%] duration-[1.2s] ease-out-expo group-hover:scale-105 [@media(hover:hover)]:group-hover:grayscale-0'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent' />
                                <span className='absolute left-5 top-5 rounded-full bg-glow px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink'>
                                    Keynote
                                </span>
                                <span className='absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-ink'>
                                    <ArrowUpRight className='size-4' />
                                </span>
                                <div className='absolute inset-x-0 bottom-0 p-6 text-white'>
                                    <h3 className='text-2xl font-medium tracking-tight'>{s.name}</h3>
                                    <p className='mt-1 text-sm text-white/65'>{s.designation}</p>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>

                {/* Speakers */}
                <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-10 pt-10 md:grid-cols-3 lg:grid-cols-4'>
                    {EventSpeakers.map((s, i) => (
                        <Reveal key={s.id} delay={(i % 4) * 0.06}>
                            <a
                                href={s.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group block'
                                aria-label={`${s.name} on LinkedIn`}
                            >
                                <div className='relative aspect-square overflow-hidden rounded-3xl bg-mist'>
                                    <Image
                                        src={s.image}
                                        alt={s.name}
                                        fill
                                        sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
                                        className='object-cover transition-all [@media(hover:hover)]:grayscale duration-700 ease-out-expo group-hover:scale-105 [@media(hover:hover)]:group-hover:grayscale-0'
                                    />
                                    <span className='absolute bottom-3 right-3 grid size-9 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 shadow-lg transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100'>
                                        <Linkedin className='size-4' />
                                    </span>
                                </div>
                                <h3 className='mt-4 font-medium tracking-tight'>{s.name}</h3>
                                <p className='mt-1 line-clamp-2 text-sm text-stone'>{s.designation}</p>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
