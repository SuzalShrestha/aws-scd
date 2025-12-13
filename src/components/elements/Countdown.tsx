'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const targetDate = new Date('2025-12-20T00:00:00').getTime();

type TimeLeft = {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
};

const getTimeRemaining = (): TimeLeft => {
    const now = Date.now();
    const difference = Math.max(targetDate - now, 0);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const pad = (value: number) => value.toString().padStart(2, '0');

    return {
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
    };
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeRemaining);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    const countdownItems = useMemo(
        () => [
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
        ],
        [timeLeft]
    );

    return (
        <section className='section-tight surface-muted' id='countdown'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className='page-container text-center'
            >
                {/* Header */}
                <h1 className='section-title sm:text-4xl font-semibold tracking-tight mb-3 text-[var(--aws-orange)]'>
                    Event Starts In
                </h1>
                <p className='text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto'>
                    December 20, 2025 • Ranjit Event Center, Pokhara
                </p>

                {/* Countdown Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6'>
                    {countdownItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className='rounded-2xl border border-border bg-card p-6 sm:p-7'
                        >
                            <div className='text-4xl sm:text-5xl font-semibold tabular-nums tracking-tight'>
                                {item.value}
                            </div>
                            <span className='mt-2 block text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground font-medium'>
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='mt-12'
                >
                    <a
                        href='#register'
                        className='inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white font-semibold rounded-xl transition-colors duration-200'
                    >
                        Reserve Your Spot
                        <svg
                            className='w-4 h-4'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Countdown;
