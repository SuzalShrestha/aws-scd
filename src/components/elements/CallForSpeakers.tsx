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
        <section className='section surface' id='speakers'>
            <div className='page-container'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Call for Speakers</h2>
                    <p className='section-subtitle mx-auto'>
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
                    className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12'
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
                                className='group bg-card rounded-2xl p-6 border border-border hover:border-[var(--aws-orange)]/25 transition-colors duration-200'
                            >
                                <div className='flex items-start gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--aws-orange)]/10 flex items-center justify-center'>
                                        <IconComponent className='h-6 w-6 text-[var(--aws-orange)]' />
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-base font-semibold mb-1'>
                                            {benefit.title}
                                        </h3>
                                        <p className='text-sm text-muted-foreground leading-relaxed'>
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
                    className='rounded-3xl border border-border bg-card p-8 sm:p-10'
                >
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='text-center lg:text-left'>
                            <h3 className='text-2xl sm:text-3xl font-semibold mb-3'>
                                Ready to Share Your Story?
                            </h3>
                            <p className='text-muted-foreground max-w-md'>
                                Submit your proposal and join us on stage at AWS
                                Student Community Day Pokhara 2025.
                            </p>

                            {/* Stats */}
                            <div className='flex items-center justify-center lg:justify-start gap-8 mt-6'>
                                <div>
                                    <div className='text-2xl font-semibold text-[var(--aws-orange)]'>
                                        30-45
                                    </div>
                                    <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                                        Min Talk
                                    </div>
                                </div>
                                <div className='w-px h-10 bg-border' />
                                <div>
                                    <div className='text-2xl font-semibold text-[var(--aws-orange)]'>
                                        500+
                                    </div>
                                    <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                                        Audience
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleApplyClick}
                            className='group flex items-center gap-3 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200'
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
