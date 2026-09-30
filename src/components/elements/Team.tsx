import Image from 'next/image';
import { Reveal, SectionHead } from '@/components/motion';
import { EventTeam } from '@/constants/EventTeam';

const Team = () => {
    return (
        <section id='team' className='section bg-snow'>
            <div className='shell'>
                <SectionHead
                    index='08'
                    label='The crew'
                    title={
                        <>
                            Built by <span className='accent text-glow-deep'>students,</span> for
                            students.
                        </>
                    }
                >
                    {EventTeam.length} organisers from AWS Cloud Club IOE
                    Pashchimanchal and AWS Cloud Club Prithvi Narayan Campus
                    — volunteering evenings and weekends to make this happen.
                </SectionHead>

                <div className='mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    {EventTeam.map((m, i) => (
                        <Reveal key={m.id} delay={(i % 6) * 0.04}>
                            <a
                                href={m.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group block'
                                aria-label={`${m.name} on LinkedIn`}
                            >
                                <div className='relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist'>
                                    <Image
                                        src={m.imgUrl}
                                        alt={m.name}
                                        fill
                                        sizes='(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw'
                                        className='object-cover transition-all [@media(hover:hover)]:grayscale duration-700 ease-out-expo group-hover:scale-105 [@media(hover:hover)]:group-hover:grayscale-0'
                                    />
                                </div>
                                <p className='mt-3 text-sm font-medium tracking-tight group-hover:text-glow-deep'>
                                    {m.name}
                                </p>
                                <p className='font-mono text-[11px] uppercase tracking-wider text-stone'>
                                    {m.faculty} · {m.club.replace('AWS ', '')}
                                </p>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
