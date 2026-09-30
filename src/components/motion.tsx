'use client';

import {
    MotionConfig,
    animate,
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

export const EASE = [0.16, 1, 0.3, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}

/** Fade-and-rise when scrolled into view. */
export function Reveal({
    children,
    delay = 0,
    y = 28,
    className,
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

function Word({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: MotionValue<number>;
}) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <motion.span style={{ opacity }} className='inline'>
            {word}{' '}
        </motion.span>
    );
}

/** Words light up one by one as the paragraph scrolls through the viewport. */
export function ScrollWords({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'end 0.45'],
    });
    const words = text.split(' ');
    return (
        <p ref={ref} className={`relative ${className ?? ''}`}>
            {words.map((w, i) => (
                <Word
                    key={i}
                    word={w}
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1) / words.length]}
                />
            ))}
        </p>
    );
}

/** Image/element drifts vertically against scroll for depth. */
export function Parallax({
    children,
    className,
    distance = 60,
}: {
    children: ReactNode;
    className?: string;
    distance?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
    return (
        <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
            <motion.div style={{ y }} className='h-[calc(100%+120px)] -mt-[60px] relative'>
                {children}
            </motion.div>
        </div>
    );
}

export function SectionHead({
    index,
    label,
    title,
    children,
    dark,
}: {
    index: string;
    label: string;
    title: ReactNode;
    children?: ReactNode;
    dark?: boolean;
}) {
    return (
        <div className='grid gap-8 lg:grid-cols-12 lg:items-end'>
            <Reveal className='lg:col-span-7'>
                <p
                    className={`eyebrow mb-6 flex items-center gap-3 ${
                        dark ? 'text-white/50' : 'text-stone'
                    }`}
                >
                    <span className='text-glow'>{index}</span>
                    <span
                        className={`h-px w-8 ${dark ? 'bg-white/20' : 'bg-ink/20'}`}
                    />
                    {label}
                </p>
                <h2 className='display text-[clamp(2.5rem,6vw,5rem)]'>{title}</h2>
            </Reveal>
            {children && (
                <Reveal
                    delay={0.1}
                    className={`lg:col-span-5 text-lg leading-relaxed ${
                        dark ? 'text-white/60' : 'text-stone'
                    }`}
                >
                    {children}
                </Reveal>
            )}
        </div>
    );
}

/** Counts up from 0 the first time it scrolls into view. */
export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    const value = useMotionValue(0);
    const text = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

    useEffect(() => {
        if (!inView) return;
        if (reduce) return value.set(to);
        const controls = animate(value, to, { duration: 1.8, ease: EASE });
        return () => controls.stop();
    }, [inView, reduce, to, value]);

    return <motion.span ref={ref}>{text}</motion.span>;
}
