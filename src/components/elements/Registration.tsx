'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Registration = () => {
    return (
        <section className='bg-gray-50 py-20 px-4' id='register'>
            <div className='mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid items-center gap-16 lg:grid-cols-2'
                >
                    {/* Ticket Details - Left Side */}
                    <div className='space-y-6'>
                        <h3 className='text-4xl font-semibold text-[var(--aws-orange)]'>
                            Join Us on Meetup
                        </h3>
                        <p className='leading-relaxed text-gray-600'>
                            Join our AWS Cloud Club Meetup group to register for
                            the AWS Student Community Day 2025! This completely
                            free event for students includes access to all
                            technical sessions, complimentary lunch and
                            refreshments, networking opportunities with industry
                            experts, digital certificate of participation, and
                            exclusive AWS learning resources. Connect with
                            fellow cloud enthusiasts and stay updated on future
                            events. Seats are limited, so click the Meetup logo
                            to join our community and secure your spot today!
                        </p>
                    </div>

                    {/* QR Code Placeholder - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.1,
                        }}
                        className='flex flex-col items-center'
                    >
                        <div className='rounded-lg border border-gray-100 bg-white p-12 text-center shadow-sm'>
                            {/* Meetup Logo - Clickable */}
                            <a
                                href='https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block transition-transform duration-300 hover:scale-105'
                            >
                                <div className='mb-6 flex h-64 w-64 items-center justify-center rounded-lg bg-white'>
                                    <Image
                                        src='/logos/Meetup-Logo-1300x730.png'
                                        alt='Join us on Meetup'
                                        width={300}
                                        height={200}
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                                <div className='text-center text-gray-700'>
                                    <div className='text-lg font-semibold text-[var(--aws-orange)] hover:text-orange-600 transition-colors'>
                                        Register on Meetup
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Registration;
