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
        <section
            className='relative py-20 sm:py-24 bg-[var(--aws-navy)] overflow-hidden'
            id='countdown'
        >
            {/* Background elements */}
            <div className='absolute inset-0'>
                <div className='absolute top-0 left-1/4 w-96 h-96 bg-[var(--aws-orange)]/5 rounded-full blur-3xl' />
                <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--aws-light-blue)]/5 rounded-full blur-3xl' />
            </div>
            <div className='noise-overlay' />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className='relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center'
            >
                {/* Header */}

                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4'>
                    Event Starts In
                </h2>
                <p className='text-white/40 text-lg mb-12 max-w-md mx-auto'>
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
                            className='relative group'
                        >
                            <div className='absolute inset-0 bg-gradient-to-b from-[var(--aws-orange)]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                            <div className='relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[var(--aws-orange)]/30'>
                                <div className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tabular-nums'>
                                    {item.value}
                                </div>
                                <span className='text-xs sm:text-sm uppercase tracking-[0.15em] text-white/40 font-medium'>
                                    {item.label}
                                </span>
                            </div>
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
                        className='inline-flex items-center gap-2 px-8 py-4 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-light)] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[var(--aws-orange)]/25'
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
