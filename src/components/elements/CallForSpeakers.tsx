'use client';

import { motion } from 'framer-motion';
import { Mic, Users, Award, Network, ArrowUpRight } from 'lucide-react';

const benefits = [
    {
        icon: Users,
        title: 'Reach 500+ attendees',
        description:
            'Share your expertise with a diverse audience of students and cloud enthusiasts',
    },
    {
        icon: Mic,
        title: 'Platform to shine',
        description:
            'Present your knowledge and insights on a professional stage',
    },
    {
        icon: Award,
        title: 'Build your brand',
        description:
            'Establish yourself as a thought leader in the AWS community',
    },
    {
        icon: Network,
        title: 'Expand network',
        description: 'Connect with industry experts and fellow speakers',
    },
];

const CallForSpeakers = () => {
    const handleApplyClick = () => {
        window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLScofPsOeUJXeKtwrndEcY-S4qwaK4w9f7xH_x1RAuODhJ1Dkg/viewform',
            '_blank'
        );
    };

    return (
        <section
            className='relative py-24 sm:py-32 bg-neutral-50 overflow-hidden'
            id='speakers'
        >
            {/* Background decoration */}
            <div className='absolute inset-0 grid-pattern opacity-40' />
            <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[var(--aws-orange)]/5 to-transparent' />

            <div className='relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center max-w-2xl mx-auto mb-16'
                >
                    <h2 className='section-title text-neutral-900 mb-6'>
                        Call for Speakers
                    </h2>
                    <p className='section-subtitle mx-auto text-neutral-500'>
                        Are you passionate about AWS and cloud technologies?
                        We&apos;re looking for dynamic speakers to join our
                        event.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16'
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='group bg-white rounded-2xl p-6 border border-neutral-100 hover:border-[var(--aws-orange)]/20 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300'
                            >
                                <div className='flex items-start gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--aws-orange)]/10 flex items-center justify-center group-hover:bg-[var(--aws-orange)]/15 transition-colors'>
                                        <IconComponent className='h-6 w-6 text-[var(--aws-orange)]' />
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-base font-semibold text-neutral-900 mb-1'>
                                            {benefit.title}
                                        </h3>
                                        <p className='text-sm text-neutral-500 leading-relaxed'>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 sm:p-12'
                >
                    {/* Background glow */}
                    <div className='absolute top-0 right-0 w-80 h-80 bg-[var(--aws-orange)]/20 rounded-full blur-3xl' />
                    <div className='noise-overlay' />

                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='text-center lg:text-left'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>
                                Ready to Share Your Story?
                            </h3>
                            <p className='text-white/60 max-w-md'>
                                Submit your proposal and join us on stage at AWS
                                Student Community Day Pokhara 2025.
                            </p>

                            {/* Stats */}
                            <div className='flex items-center justify-center lg:justify-start gap-8 mt-6'>
                                <div>
                                    <div className='text-2xl font-bold text-[var(--aws-orange)]'>
                                        30-45
                                    </div>
                                    <div className='text-xs text-white/40 uppercase tracking-wider'>
                                        Min Talk
                                    </div>
                                </div>
                                <div className='w-px h-10 bg-white/10' />
                                <div>
                                    <div className='text-2xl font-bold text-[var(--aws-orange)]'>
                                        500+
                                    </div>
                                    <div className='text-xs text-white/40 uppercase tracking-wider'>
                                        Audience
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleApplyClick}
                            className='group flex items-center gap-3 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-light)] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--aws-orange)]/30'
                        >
                            Apply Now
                            <ArrowUpRight className='w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallForSpeakers;
