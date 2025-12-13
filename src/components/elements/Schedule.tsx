'use client';

import { scheduleEvents } from '@/constants/Schedules';
import { motion } from 'framer-motion';
import { Clock, Coffee, Mic, Users, Award, MessageSquare } from 'lucide-react';

const getEventIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('lunch') || lower.includes('break')) return Coffee;
    if (lower.includes('speaker') || lower.includes('session')) return Mic;
    if (lower.includes('network')) return Users;
    if (lower.includes('closing') || lower.includes('opening')) return Award;
    if (lower.includes('panel')) return MessageSquare;
    return Clock;
};

const Schedule = () => {
    return (
        <section className='section surface-muted' id='schedule'>
            <div className='page-container max-w-5xl'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Full Day Schedule</h2>
                    <p className='section-subtitle mx-auto'>
                        A day full of learning, networking, and innovation with
                        AWS
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Timeline line */}
                    <div className='absolute left-[27px] sm:left-8 top-0 bottom-0 w-px bg-border' />

                    <div className='space-y-1'>
                        {scheduleEvents.map((event, index) => {
                            const Icon = getEventIcon(event.title);
                            const isBreak =
                                event.title.toLowerCase().includes('lunch') ||
                                event.title.toLowerCase().includes('break');

                            return (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: Math.min(index * 0.03, 0.3),
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className='relative flex gap-4 sm:gap-6 group'
                                >
                                    {/* Timeline dot and icon */}
                                    <div className='relative flex-shrink-0'>
                                        <div
                                            className={`relative z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl transition-all duration-300 ${
                                                isBreak
                                                    ? 'bg-amber-50'
                                                    : 'bg-[var(--aws-orange)]/10'
                                            }`}
                                        >
                                            <Icon
                                                className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                                                    isBreak
                                                        ? 'text-amber-600'
                                                        : 'text-[var(--aws-orange)]'
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`flex-1 pb-8 ${
                                            index === scheduleEvents.length - 1
                                                ? 'pb-0'
                                                : ''
                                        }`}
                                    >
                                        <div
                                            className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
                                                isBreak
                                                    ? 'bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100/50'
                                                    : 'bg-card border border-border'
                                            }`}
                                        >
                                            <div className='flex flex-wrap items-center gap-3 mb-3'>
                                                <span
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                                        isBreak
                                                            ? 'bg-amber-100 text-amber-700'
                                                            : 'bg-[var(--aws-orange)]/10 text-[var(--aws-orange)]'
                                                    }`}
                                                >
                                                    {event.time}
                                                </span>
                                            </div>

                                            <h3 className='text-lg font-semibold mb-2 leading-snug'>
                                                {event.title}
                                            </h3>

                                            <p className='text-sm text-muted-foreground leading-relaxed'>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
