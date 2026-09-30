'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Ticket } from 'lucide-react';
import { useRef } from 'react';
import {
    FarRange,
    Machhapuchhre,
    MidHills,
    NearHills,
    Paraglider,
    Stars,
} from '@/components/art/Himalaya';
import Countdown from '@/components/elements/Countdown';
import { EASE } from '@/components/motion';
import { EVENT } from '@/constants/Event';

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 36, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1.1, ease: EASE, delay },
});

const Hero = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    // Descending into the valley: far layers lag, clouds rise to swallow the range.
    const yFar = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
    const yPeak = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const yMid = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
    const yClouds = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
    const yText = useTransform(scrollYProgress, [0, 0.7], [0, -140]);
    const fadeText = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
    const fadeStars = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

    return (
        <section
            ref={ref}
            id='home'
            className='grain relative isolate min-h-[118svh] overflow-hidden text-white'
            style={{
                background:
                    'linear-gradient(180deg,#060913 0%,#0d1430 30%,#2a2552 52%,#6b3f63 66%,#c8674a 78%,#f59a52 86%,#f6f4ef 100%)',
            }}
        >
            {/* Sunrise glow behind the range (sun rises in the east, right). */}
            <div
                aria-hidden
                className='pointer-events-none absolute left-[55%] top-[46%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-full opacity-70 blur-3xl'
                style={{
                    background:
                        'radial-gradient(closest-side,rgba(255,170,90,0.55),rgba(255,120,70,0.18) 60%,transparent)',
                }}
            />

            <motion.div style={{ opacity: fadeStars }} className='absolute inset-x-0 top-0 h-[60%]'>
                <Stars className='h-full w-full' />
            </motion.div>

            {/* Mountain stack */}
            <div className='absolute inset-x-0 bottom-0 h-[50%] sm:h-[62%] lg:h-[74%]'>
                <motion.div style={{ y: yFar }} className='absolute inset-0'>
                    <FarRange className='h-full w-full' />
                </motion.div>
                <motion.div style={{ y: yPeak }} className='absolute inset-0'>
                    <Machhapuchhre className='h-full w-full' />
                </motion.div>
                <motion.div style={{ y: yMid }} className='absolute inset-0'>
                    <MidHills className='h-full w-full' />
                </motion.div>
                <div
                    aria-hidden
                    className='cloudbank absolute bottom-[14%] left-0 h-[34%] w-[200%] animate-drift-slow opacity-70'
                    style={{ '--c': 'rgba(214,196,226,0.55)' } as React.CSSProperties}
                />
                <NearHills className='absolute inset-0 h-full w-full' />
            </div>

            {/* Paragliders over the valley */}
            <div className='pointer-events-none absolute right-[14%] top-[30%] w-10 animate-glide opacity-90 sm:w-14'>
                <Paraglider />
            </div>
            <div
                className='pointer-events-none absolute right-[34%] top-[44%] hidden w-6 animate-glide opacity-70 sm:block'
                style={{ animationDelay: '-9s', animationDuration: '34s' }}
            >
                <Paraglider />
            </div>

            {/* Cloud sea — rises on scroll and melts into the page */}
            <motion.div style={{ y: yClouds }} className='absolute inset-x-0 -bottom-[6%] h-[42%]'>
                <div
                    aria-hidden
                    className='cloudbank absolute bottom-[30%] left-0 h-[60%] w-[200%] animate-drift'
                    style={{ '--c': 'rgba(246,238,236,0.85)' } as React.CSSProperties}
                />
                <div className='absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-b from-transparent via-snow/90 to-snow' />
                {/* Trails the rising clouds so the foothills never peek through. */}
                <div className='absolute inset-x-0 top-[calc(100%-2px)] h-[60vh] bg-snow' />
            </motion.div>

            {/* Keeps copy legible where it overlaps the western ridge. */}
            <div
                aria-hidden
                className='pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[65%]'
                style={{
                    background:
                        'radial-gradient(ellipse 70% 55% at 22% 48%,rgba(6,9,19,0.6),transparent 70%)',
                }}
            />

            {/* Copy */}
            <motion.div
                style={{ y: yText, opacity: fadeText }}
                className='shell relative z-10 pt-32 sm:pt-40 lg:pt-44'
            >
                <motion.p
                    {...rise(0.1)}
                    className='inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-2 pr-4 text-xs text-white/80 backdrop-blur-md'
                >
                    <span className='rounded-full bg-glow px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink'>
                        {EVENT.year}
                    </span>
                    {EVENT.edition} · Registration opens soon
                </motion.p>

                <h1 className='display mt-7 text-[clamp(3.1rem,9.2vw,8.6rem)]'>
                    <motion.span {...rise(0.2)} className='block'>
                        Build above
                    </motion.span>
                    <motion.span
                        {...rise(0.32)}
                        className='accent block bg-gradient-to-r from-[#ffe2c4] via-[#ffb066] to-glow bg-clip-text pb-2 pr-3 text-transparent'
                    >
                        the clouds.
                    </motion.span>
                </h1>

                <motion.p
                    {...rise(0.45)}
                    className='mt-6 max-w-[34rem] text-base leading-relaxed text-white/70 sm:text-lg'
                >
                    {EVENT.name} returns to {EVENT.city} — a free, student-run
                    day of talks, workshops and people building on AWS,
                    beneath Machhapuchhre.
                </motion.p>

                <motion.ul
                    {...rise(0.55)}
                    className='mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80'
                >
                    <li className='flex items-center gap-2'>
                        <CalendarDays className='size-4 text-glow' />
                        {EVENT.dateLong}
                    </li>
                    <li className='flex items-center gap-2'>
                        <MapPin className='size-4 text-glow' />
                        {EVENT.city}, Nepal
                    </li>
                    <li className='flex items-center gap-2'>
                        <Ticket className='size-4 text-glow' />
                        Free for students
                    </li>
                </motion.ul>

                <motion.div {...rise(0.65)} className='mt-9 flex flex-wrap items-center gap-3'>
                    <a href='#register' className='btn-glow group'>
                        Get notified
                        <ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5' />
                    </a>
                    <a href='#agenda' className='btn-ghost-dark'>
                        See the day
                    </a>
                </motion.div>

                <motion.div {...rise(0.8)} className='mt-10'>
                    <Countdown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
