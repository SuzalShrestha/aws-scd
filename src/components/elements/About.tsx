'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section
            className='relative py-24 sm:py-32 bg-white overflow-hidden'
            id='about'
        >
            {/* Subtle grid pattern */}
            <div className='absolute inset-0 grid-pattern opacity-50' />

            <div className='relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center max-w-3xl mx-auto mb-20'
                >
                    <h2 className='section-title text-neutral-900 mb-6'>
                        Nepal&apos;s Premier Student
                        <br />
                        <span className='text-[var(--aws-orange)]'>
                            Cloud Conference
                        </span>
                    </h2>
                </motion.div>

                {/* Two Column Content */}
                <div className='grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20'>
                    {/* Who We Are */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='space-y-6'
                    >
                        {/* <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--aws-orange)]/5 border border-[var(--aws-orange)]/10'>
                            <div className='w-1.5 h-1.5 rounded-full bg-[var(--aws-orange)]' />
                            <span className='text-xs font-semibold text-[var(--aws-orange)] uppercase tracking-wider'>
                                Who We Are
                            </span>
                        </div> */}

                        <h3 className='text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight'>
                            AWS Cloud Club
                            <br />
                            <span className='text-neutral-500 font-normal'>
                                IOE Pashchimanchal & PNC
                            </span>
                        </h3>

                        <p className='text-neutral-600 leading-relaxed'>
                            We are a vibrant community of students passionate
                            about cloud computing and emerging technologies. Our
                            clubs bridge academic learning with industry
                            practices, fostering innovation and technical
                            excellence among students in Nepal&apos;s growing
                            tech landscape.
                        </p>

                        <div className='flex items-center gap-4 pt-2'>
                            <div className='flex -space-x-3'>
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className='w-10 h-10 rounded-full bg-gradient-to-br from-[var(--aws-orange)] to-[var(--aws-orange-dark)] border-2 border-white flex items-center justify-center'
                                    >
                                        <span className='text-white text-xs font-bold'>
                                            ☁️
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <span className='text-sm text-neutral-500'>
                                Two campuses, one mission
                            </span>
                        </div>
                    </motion.div>

                    {/* What to Expect */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='space-y-6'
                    >
                        {/* <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--aws-orange)]/5 border border-[var(--aws-orange)]/10'>
                            <div className='w-1.5 h-1.5 rounded-full bg-[var(--aws-orange)]' />
                            <span className='text-xs font-semibold text-[var(--aws-orange)] uppercase tracking-wider'>
                                What to Expect
                            </span>
                        </div> */}

                        <h3 className='text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight'>
                            A Full Day of
                            <br />
                            <span className='text-neutral-500 font-normal'>
                                Learning & Networking
                            </span>
                        </h3>

                        <p className='text-neutral-600 leading-relaxed'>
                            Experience hands-on AWS workshops, real-world case
                            studies, networking opportunities with
                            professionals, and insights into cloud career paths
                            that will shape your future in technology.
                        </p>

                        <ul className='space-y-3 pt-2'>
                            {[
                                'Technical sessions by industry experts',
                                'Hands-on workshops',
                                'Networking opportunities',
                                'Career guidance',
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className='flex items-center gap-3 text-neutral-600'
                                >
                                    <span className='flex items-center justify-center w-5 h-5 rounded-full bg-[var(--aws-orange)]/10'>
                                        <svg
                                            className='w-3 h-3 text-[var(--aws-orange)]'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2.5}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
