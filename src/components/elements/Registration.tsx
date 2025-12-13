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
        <section className='section surface' id='register'>
            <div className='page-container'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Reserve Your Spot</h2>
                    <p className='section-subtitle mx-auto'>
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
                            <h3 className='text-2xl sm:text-3xl font-semibold'>
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
                                        className='flex items-center gap-3 text-muted-foreground'
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
                            <div className='rounded-2xl border border-border bg-card p-6 sm:p-7 transition-colors duration-200 hover:border-[var(--aws-orange)]/25'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='flex items-center gap-4 min-w-0'>
                                        <div className='w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0'>
                                            <Image
                                                src='/logos/Meetup-Logo-1300x730.png'
                                                alt='Meetup'
                                                width={34}
                                                height={34}
                                                className='object-contain'
                                            />
                                        </div>
                                        <div className='min-w-0'>
                                            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1'>
                                                Register on Meetup
                                            </p>
                                            <h4 className='font-semibold text-base sm:text-lg truncate'>
                                                IOE Pashchimanchal
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0'>
                                        <ArrowUpRight className='w-5 h-5 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
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
                            <div className='rounded-2xl border border-border bg-card p-6 sm:p-7 transition-colors duration-200 hover:border-[var(--aws-orange)]/25'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='flex items-center gap-4 min-w-0'>
                                        <div className='w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0'>
                                            <Image
                                                src='/logos/Meetup-Logo-1300x730.png'
                                                alt='Meetup'
                                                width={34}
                                                height={34}
                                                className='object-contain'
                                            />
                                        </div>
                                        <div className='min-w-0'>
                                            <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1'>
                                                Register on Meetup
                                            </p>
                                            <h4 className='font-semibold text-base sm:text-lg truncate'>
                                                Prithvi Narayan Campus
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0'>
                                        <ArrowUpRight className='w-5 h-5 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
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
