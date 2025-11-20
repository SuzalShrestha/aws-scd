'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Registration = () => {
    return (
        <section
            className='bg-gradient-to-br from-orange-50 to-slate-50 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='register'
        >
            <div className='mx-auto max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid items-center gap-16 lg:grid-cols-2'
                >
                    {/* Ticket Details - Left Side */}
                    <div className='space-y-6'>
                        <div className='space-y-2'>
                            <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                                Join Us on Meetup
                            </h3>
                            <div className='h-1 w-16 bg-[var(--aws-orange)] rounded-full'></div>
                        </div>
                        <p className='leading-relaxed text-gray-600'>
                            Join our AWS Cloud Club Meetup groups to register
                            for the AWS Student Community Day 2025! This
                            completely free event for students includes access
                            to all technical sessions, complimentary lunch and
                            refreshments, networking opportunities with industry
                            experts, digital certificate of participation, and
                            exclusive AWS learning resources. Connect with
                            fellow cloud enthusiasts and stay updated on future
                            events.
                        </p>
                        <div className='mt-4 p-4 bg-orange-50 border-l-4 border-[var(--aws-orange)] rounded-lg'>
                            <p className='text-sm font-medium text-gray-800'>
                                <strong>Important:</strong> Please RSVP on both
                                Meetup groups to secure your seat and book your
                                spot for the event.
                            </p>
                        </div>
                    </div>

                    {/* Meetup Buttons - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.1,
                        }}
                        className='flex flex-col items-center space-y-6'
                    >
                        {/* IOE Pashchimanchal Meetup */}
                        <div className='rounded-lg border border-gray-100 bg-white py-8 text-center shadow-sm w-full max-w-sm'>
                            <a
                                href='https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/311973692/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block transition-transform duration-300 hover:scale-105'
                            >
                                <div className='mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-white'>
                                    <Image
                                        src='/logos/Meetup-Logo-1300x730.png'
                                        alt='IOE Pashchimanchal Meetup'
                                        width={200}
                                        height={120}
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                                <div className='text-center text-gray-700'>
                                    <div className='text-base font-semibold text-[var(--aws-orange)] hover:text-orange-600 transition-colors mb-1'>
                                        Register on IOE Meetup
                                    </div>
                                    <p className='text-xs text-gray-500'>
                                        AWS Cloud Club IOE Pashchimanchal
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* PNC Meetup */}
                        <div className='rounded-lg border border-gray-100 bg-white p-8 text-center shadow-sm w-full max-w-sm'>
                            <a
                                href='https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/events/311973847/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block transition-transform duration-300 hover:scale-105'
                            >
                                <div className='mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-white'>
                                    <Image
                                        src='/logos/Meetup-Logo-1300x730.png'
                                        alt='PNC Meetup'
                                        width={200}
                                        height={120}
                                        className='max-w-full max-h-full object-contain'
                                    />
                                </div>
                                <div className='text-center text-gray-700'>
                                    <div className='text-base font-semibold text-[var(--aws-orange)] hover:text-orange-600 transition-colors mb-1'>
                                        Register on PNC Meetup
                                    </div>
                                    <p className='text-xs text-gray-500'>
                                        AWS Cloud Club Prithvi Narayan Campus
                                    </p>
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
