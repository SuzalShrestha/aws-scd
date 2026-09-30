import Image from 'next/image';
import { Parallax, Reveal, SectionHead } from '@/components/motion';

const facts = [
    { value: '822 m', label: 'Lakeside elevation' },
    { value: '6,993 m', label: 'Machhapuchhre — sacred, never summited' },
    { value: '8,091 m', label: 'Annapurna I, on the Sarangkot skyline' },
    { value: '~20°C', label: 'Clear, sunny December afternoons' },
];

const Photo = ({
    src,
    alt,
    tag,
    note,
    sizes,
    className,
}: {
    src: string;
    alt: string;
    tag: string;
    note?: string;
    sizes: string;
    className?: string;
}) => (
    <figure className={`group relative overflow-hidden rounded-[28px] bg-ink-2 ${className ?? ''}`}>
        <Parallax className='absolute inset-0' distance={40}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className='object-cover transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.04]'
            />
        </Parallax>
        <div className='absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent' />
        <figcaption className='absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-6'>
            <span className='rounded-full border border-white/20 bg-ink/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-md'>
                {tag}
            </span>
            {note && <span className='text-sm text-white/80'>{note}</span>}
        </figcaption>
    </figure>
);

const Pokhara = () => {
    return (
        <section id='pokhara' className='section grain relative overflow-hidden bg-ink text-white'>
            <span
                aria-hidden
                className='pointer-events-none absolute -top-10 right-[-4vw] select-none font-deva text-[28vw] font-semibold leading-none text-white/[0.035]'
            >
                पोखरा
            </span>

            <div className='shell relative'>
                <SectionHead
                    dark
                    index='02'
                    label='The place'
                    title={
                        <>
                            Where the Himalaya{' '}
                            <span className='accent text-glow'>meets the cloud.</span>
                        </>
                    }
                >
                    Pokhara sits at 822 metres with an eight-thousander on
                    its skyline. By late December the haze is long gone —
                    mornings are crisp, the Annapurna range is on full display
                    from the lakeside, and paragliders are drifting over Phewa
                    by ten.
                </SectionHead>

                <div className='mt-16 grid gap-4 lg:grid-cols-12'>
                    <Reveal className='lg:col-span-8'>
                        <Photo
                            src='/pokhara/machhapuchhre-paragliders.jpg'
                            alt='Paragliders circling in front of the snow-covered peak of Machhapuchhre'
                            tag='Machhapuchhre · 6,993 m'
                            note='The Fishtail, from the Pokhara valley'
                            sizes='(min-width: 1024px) 66vw, 100vw'
                            className='aspect-[4/3] sm:aspect-[16/10]'
                        />
                    </Reveal>
                    <Reveal delay={0.08} className='lg:col-span-4'>
                        <Photo
                            src='/pokhara/fishtail-dawn.jpg'
                            alt='First light on Machhapuchhre and the Annapurna range at sunrise'
                            tag='Sunrise · Sarangkot'
                            sizes='(min-width: 1024px) 33vw, 100vw'
                            className='aspect-[4/5] h-full lg:aspect-auto'
                        />
                    </Reveal>

                    <Reveal className='lg:col-span-4'>
                        <div className='flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.03] p-8'>
                            <p className='eyebrow text-white/45'>Pokhara, by the numbers</p>
                            <dl className='mt-8 space-y-6'>
                                {facts.map((f) => (
                                    <div key={f.value} className='border-t border-white/10 pt-4'>
                                        <dt className='text-3xl font-medium tracking-tight'>{f.value}</dt>
                                        <dd className='mt-1 text-sm text-white/55'>{f.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08} className='lg:col-span-8'>
                        <Photo
                            src='/pokhara/paragliding-phewa.jpg'
                            alt='Paragliders above Phewa Lake with hills and the city below'
                            tag="Phewa Tal · Nepal's 2nd-largest lake"
                            note='Come a day early. Fly.'
                            sizes='(min-width: 1024px) 66vw, 100vw'
                            className='aspect-[4/3] h-full sm:aspect-[16/9]'
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Pokhara;
