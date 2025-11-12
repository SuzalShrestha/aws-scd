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
            className='relative overflow-hidden bg-gradient-to-br from-orange-50/30 via-orange-50/20 to-white/10 py-12 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='countdown'
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='relative max-w-6xl mx-auto text-center'
            >
                <div className='inline-block space-y-3 mb-10'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                        Event Countdown
                    </h2>
                    <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                </div>
                {/* <p className='uppercase tracking-[0.3em] text-xs text-[var(--aws-orange)] mb-8 font-medium'></p> */}
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {countdownItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: 'easeOut',
                            }}
                            className='bg-white/60 border border-orange-100 rounded-lg p-4 shadow-sm'
                        >
                            <div className='text-2xl sm:text-3xl font-bold text-[var(--aws-orange)] mb-1'>
                                {item.value}
                            </div>
                            <span className='uppercase tracking-wide text-xs text-gray-600 font-medium'>
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Countdown;
