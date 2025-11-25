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
            className='relative min-h-screen overflow-hidden bg-[var(--aws-navy)]'
            id='home'
        >
            {/* Hero Background Image with premium overlay */}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-105'
                style={{ backgroundImage: "url('/scd-hero.jpg')" }}
                aria-hidden='true'
            />

            {/* Premium gradient overlay */}
            <div className='hero-gradient-overlay' />

            {/* Ambient glow effects */}
            <div className='hero-glow' />
            <div className='hero-glow-blue' />

            {/* Noise texture for premium feel */}
            <div className='noise-overlay' />

            {/* Content Container */}
            <div className='relative z-10 min-h-screen flex items-center'>
                <div className='w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24'>
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
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.03em] leading-[0.95]'>
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
                                className='text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light'
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
                                    className='inline-block group'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className='relative flex items-center gap-3 bg-[var(--aws-orange)] text-white px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,153,0,0.3)]'
                                    >
                                        <span className='relative z-10'>
                                            Register Now
                                        </span>
                                        <ArrowRight className='relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1' />
                                        <div className='absolute inset-0 bg-gradient-to-r from-[var(--aws-orange)] to-[var(--aws-orange-light)] opacity-0 group-hover:opacity-100 transition-opacity' />
                                    </motion.button>
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
                                {/* Glow behind logo */}
                                <div className='absolute inset-0 scale-150 blur-3xl opacity-20'>
                                    <div className='w-full h-full rounded-full bg-gradient-to-br from-[var(--aws-orange)] to-[var(--aws-light-blue)]' />
                                </div>

                                {/* Logo */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Image
                                        src='/logo.png'
                                        alt='AWS Student Community Day logo'
                                        width={500}
                                        height={300}
                                        className='relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl'
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
