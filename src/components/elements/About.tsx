'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='section surface' id='about'>
            <div className='page-container'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>
                        Nepal&apos;s Premier Student
                        <br />
                        <span className='text-[var(--aws-orange)]'>
                            Cloud Conference
                        </span>
                    </h2>
                </motion.div>

                <div className='grid lg:grid-cols-2 gap-6 lg:gap-8 items-start'>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.25 }}
                        className='rounded-2xl border border-border bg-card p-7 sm:p-8'
                    >
                        <h3 className='text-xl sm:text-2xl font-semibold leading-tight'>
                            AWS Cloud Club
                            <span className='block text-muted-foreground font-normal'>
                                IOE Pashchimanchal & PNC
                            </span>
                        </h3>
                        <p className='mt-4 text-muted-foreground leading-relaxed'>
                            We are a student community passionate about cloud
                            computing and emerging technologies. We bridge
                            academic learning with industry practice, fostering
                            innovation and technical excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.05,
                        }}
                        viewport={{ once: true, amount: 0.25 }}
                        className='rounded-2xl border border-border bg-card p-7 sm:p-8'
                    >
                        <h3 className='text-xl sm:text-2xl font-semibold leading-tight'>
                            A Full Day of
                            <span className='block text-muted-foreground font-normal'>
                                Learning & Networking
                            </span>
                        </h3>

                        <p className='mt-4 text-muted-foreground leading-relaxed'>
                            Expect practical sessions, workshops, and networking
                            with professionals—plus clear guidance on cloud
                            career paths.
                        </p>

                        <ul className='mt-5 space-y-3'>
                            {[
                                'Technical sessions by industry experts',
                                'Hands-on workshops',
                                'Networking opportunities',
                                'Career guidance',
                            ].map((item) => (
                                <li
                                    key={item}
                                    className='flex items-start gap-3 text-muted-foreground'
                                >
                                    <span className='mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--aws-orange)]/10'>
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
                                    <span>{item}</span>
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
