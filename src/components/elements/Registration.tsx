'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const perks = [
    'Access to all technical sessions',
    'Complimentary lunch',
    'Networking with industry experts',
    'Exclusive AWS learning resources',
];

const Registration = () => {
    return (
        <section
            className='relative py-24 sm:py-32 bg-white overflow-hidden'
            id='register'
        >
            {/* Background */}
            <div className='absolute inset-0 grid-pattern opacity-30' />

            <div className='relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center max-w-2xl mx-auto mb-16'
                >
                    <h2 className='section-title text-neutral-900 mb-6'>
                        Reserve Your Spot
                    </h2>
                    <p className='section-subtitle mx-auto text-neutral-500'>
                        Join us on Meetup to register
                    </p>
                </motion.div>

                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* Left - Event Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='space-y-8'
                    >
                        {/* Free badge */}
                        <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100'>
                            <span className='flex h-2 w-2'>
                                <span className='animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                            </span>
                            <span className='text-sm font-semibold text-green-700'>
                                Registration Open • Free Entry
                            </span>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-2xl sm:text-3xl font-bold text-neutral-900'>
                                What&apos;s Included?
                            </h3>

                            <ul className='space-y-3'>
                                {perks.map((perk, index) => (
                                    <motion.li
                                        key={perk}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className='flex items-center gap-3 text-neutral-600'
                                    >
                                        <CheckCircle2 className='w-5 h-5 text-green-500 flex-shrink-0' />
                                        <span>{perk}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Important note */}
                        {/* <div className='p-4 rounded-xl bg-amber-50 border border-amber-100'>
                            <p className='text-sm text-amber-800'>
                                <strong className='font-semibold'>
                                    Important:
                                </strong>{' '}
                                Please RSVP on both Meetup groups to secure your
                                seat and book your spot for the event.
                            </p>
                        </div> */}
                    </motion.div>

                    {/* Right - Meetup Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='space-y-5'
                    >
                        {/* IOE Card */}
                        <a
                            href='https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/311973692/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group block'
                        >
                            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F64060] to-[#E02E56] p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#F64060]/20 hover:-translate-y-1'>
                                <div className='noise-overlay opacity-10' />

                                <div className='relative flex items-center justify-between'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                                            <Image
                                                src='/logos/Meetup-Logo-1300x730.png'
                                                alt='Meetup'
                                                width={40}
                                                height={40}
                                                className='object-contain'
                                            />
                                        </div>
                                        <div>
                                            <p className='text-white/60 text-sm mb-1'>
                                                Register on
                                            </p>
                                            <h4 className='text-white font-semibold text-lg'>
                                                IOE Pashchimanchal
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors'>
                                        <ArrowUpRight className='w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                    </div>
                                </div>
                            </div>
                        </a>

                        {/* PNC Card */}
                        <a
                            href='https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/events/311973847/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group block'
                        >
                            <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F64060] to-[#E02E56] p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#F64060]/20 hover:-translate-y-1'>
                                <div className='noise-overlay opacity-10' />

                                <div className='relative flex items-center justify-between'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                                            <Image
                                                src='/logos/Meetup-Logo-1300x730.png'
                                                alt='Meetup'
                                                width={40}
                                                height={40}
                                                className='object-contain'
                                            />
                                        </div>
                                        <div>
                                            <p className='text-white/60 text-sm mb-1'>
                                                Register on
                                            </p>
                                            <h4 className='text-white font-semibold text-lg'>
                                                Prithvi Narayan Campus
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors'>
                                        <ArrowUpRight className='w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Registration;
