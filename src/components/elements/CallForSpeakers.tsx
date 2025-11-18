'use client';

import { motion } from 'framer-motion';
import { Mic, Users, Award, Network, ExternalLink } from 'lucide-react';

const benefits = [
    {
        icon: Users,
        title: 'Connect with 500+ AWS professionals',
        description:
            'Engage with a diverse audience of students and cloud enthusiasts',
    },
    {
        icon: Mic,
        title: 'Share your expertise on stage',
        description: 'Present your knowledge and insights to an eager audience',
    },
    {
        icon: Award,
        title: 'Build your professional brand',
        description:
            'Establish yourself as a thought leader in the AWS community',
    },
    {
        icon: Network,
        title: 'Expand your network',
        description:
            'Connect with industry experts, students, and fellow speakers',
    },
];

const CallForSpeakers = () => {
    const handleApplyClick = () => {
        // Replace this URL with your actual Google Form URL
        window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLScofPsOeUJXeKtwrndEcY-S4qwaK4w9f7xH_x1RAuODhJ1Dkg/viewform',
            '_blank'
        );
    };

    return (
        <section
            className='bg-gradient-to-br from-orange-50 to-slate-50 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='speakers'
        >
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center mb-16'
                >
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Call for Speakers
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        Are you passionate about AWS, cloud technologies and
                        have insights, experiences, or innovations to share?
                        We&apos;re looking for dynamic speakers to join our AWS
                        Student Community Day Pokhara 2025
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
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
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'
                            >
                                <div className='flex items-start gap-4'>
                                    <div className='p-3 bg-[var(--aws-orange)]/10 rounded-lg flex-shrink-0'>
                                        <IconComponent className='h-6 w-6 text-[var(--aws-orange)]' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                                            {benefit.title}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center'
                >
                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                        Ready to Share Your Story?
                    </h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-md mx-auto'>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-[var(--aws-orange)] mb-1'>
                                30-45 min
                            </div>
                            <div className='text-sm text-gray-600'>
                                Talk Duration
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-[var(--aws-orange)] mb-1'>
                                500+
                            </div>
                            <div className='text-sm text-gray-600'>
                                Expected Audience
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleApplyClick}
                        className='inline-flex items-center gap-3 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105'
                    >
                        Apply as Speaker
                        <ExternalLink className='h-5 w-5' />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallForSpeakers;
