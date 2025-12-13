'use client';

import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const heroVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    }),
};

const Hero = () => {
    return (
        <section
            className='relative min-h-[100svh] overflow-hidden bg-[var(--aws-navy)]'
            id='home'
        >
            {/* Hero Background Image with premium overlay */}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
                style={{ backgroundImage: "url('/scd-hero.jpg')" }}
                aria-hidden='true'
            />

            {/* Readability overlay */}
            <div className='hero-gradient-overlay' />

            {/* Content Container */}
            <div className='relative z-10 min-h-screen flex items-center'>
                <div className='w-full page-container pt-28 pb-20 sm:pt-32 sm:pb-24'>
                    <div className='grid lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
                        {/* Left Column - Content */}
                        <div className='lg:col-span-7 space-y-10 text-center lg:text-left order-2 lg:order-1'>
                            {/* Badge */}
                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0}
                            >
                                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[var(--aws-orange)] text-xs font-semibold uppercase tracking-[0.2em]'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-[var(--aws-orange)] animate-pulse-subtle' />
                                    1st Industry Academia Tech Conference
                                </span>
                            </motion.div>

                            {/* Main Title */}
                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.1}
                                className='space-y-4'
                            >
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.98]'>
                                    <span className='text-white'>AWS</span>{' '}
                                    <span className='text-[var(--aws-orange)]'>
                                        Student
                                    </span>
                                    <br />
                                    <span className='text-white'>
                                        Community
                                    </span>{' '}
                                    <span className='text-[var(--aws-orange)]'>
                                        Day
                                    </span>
                                </h1>

                                <p className='text-2xl sm:text-3xl lg:text-4xl font-light text-white/60 tracking-tight'>
                                    Pokhara{' '}
                                    <span className='text-[var(--aws-orange)] font-normal'>
                                        2025
                                    </span>
                                </p>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.2}
                                className='text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed'
                            >
                                Join the largest gathering of AWS enthusiasts,
                                developers, and cloud professionals in Pokhara.
                            </motion.p>

                            {/* Event Details */}
                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.3}
                                className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6'
                            >
                                <div className='flex items-center gap-3 text-white/70'>
                                    <div className='flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'>
                                        <Calendar className='w-5 h-5 text-[var(--aws-orange)]' />
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-xs text-white/40 uppercase tracking-wider'>
                                            Date
                                        </p>
                                        <p className='font-medium text-white/90'>
                                            Dec 20, 2025
                                        </p>
                                    </div>
                                </div>

                                <div className='hidden sm:block w-px h-10 bg-white/10' />

                                <div className='flex items-center gap-3 text-white/70'>
                                    <div className='flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'>
                                        <MapPin className='w-5 h-5 text-[var(--aws-orange)]' />
                                    </div>
                                    <div className='text-left'>
                                        <p className='text-xs text-white/40 uppercase tracking-wider'>
                                            Venue
                                        </p>
                                        <p className='font-medium text-white/90'>
                                            Ranjit Event Center
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.4}
                            >
                                <a
                                    href='#register'
                                    className='inline-flex items-center gap-3 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white px-7 py-3.5 text-base font-semibold rounded-xl transition-colors duration-200'
                                >
                                    Register Now
                                    <ArrowRight className='w-5 h-5' />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column - Logo with ambient effect */}
                        <motion.div
                            variants={heroVariants}
                            initial='hidden'
                            animate='visible'
                            custom={0.2}
                            className='lg:col-span-5 flex items-center justify-center relative order-1 lg:order-2'
                        >
                            <div className='relative'>
                                {/* Logo */}
                                <Image
                                    src='/logo.png'
                                    alt='AWS Student Community Day logo'
                                    width={500}
                                    height={300}
                                    className='relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain'
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
