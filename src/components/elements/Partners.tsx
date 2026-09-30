import Image from 'next/image';
import { Reveal, SectionHead } from '@/components/motion';
import { partnerCategories } from '@/constants/Partners';

const [sponsors, ...rest] = partnerCategories;
const others = rest.flatMap((c) =>
    c.items.map((item) => ({ ...item, category: c.title.replace(/s$/, '') }))
);

const Partners = () => {
    return (
        <section id='partners' className='section border-t border-ink/[0.06] bg-snow'>
            <div className='shell'>
                <SectionHead
                    index='06'
                    label='Partners'
                    title={
                        <>
                            Backed by people who{' '}
                            <span className='accent text-glow-deep'>believe in students.</span>
                        </>
                    }
                >
                    Thank you to everyone who made the 2025 edition possible.
                    Partnerships for 2026 are open.
                </SectionHead>

                <p className='eyebrow mb-4 mt-16 text-stone'>{sponsors.title} · 2025</p>
                <div className='grid gap-4 sm:grid-cols-3'>
                    {sponsors.items.map((p, i) => (
                        <Reveal key={p.id} delay={i * 0.06}>
                            <div className='group card grid h-44 place-items-center bg-white p-8'>
                                <div className='relative h-20 w-full max-w-[220px]'>
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        fill
                                        sizes='220px'
                                        className='object-contain transition-all [@media(hover:hover)]:grayscale duration-500 group-hover:scale-105 [@media(hover:hover)]:group-hover:grayscale-0'
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className='eyebrow mb-4 mt-12 text-stone'>Community, media & more</p>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
                    {others.map((p, i) => (
                        <Reveal key={p.id} delay={(i % 5) * 0.05}>
                            <div className='group card relative grid h-40 place-items-center bg-white px-6 pb-5 pt-8'>
                                <span className='absolute left-4 top-3 font-mono text-[10px] uppercase tracking-wider text-stone/70'>
                                    {p.category}
                                </span>
                                <div className='relative mt-3 h-20 w-full'>
                                    <Image
                                        src={p.logo}
                                        alt={p.name}
                                        fill
                                        sizes='200px'
                                        className='object-contain transition-all [@media(hover:hover)]:grayscale duration-500 [@media(hover:hover)]:group-hover:grayscale-0'
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
