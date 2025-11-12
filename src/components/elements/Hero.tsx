'use client';

import { Calendar, MapPin, Play, UserPlus } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button';

const heroVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};

const Hero = () => {
    return (
        <section className='relative min-h-[90vh] overflow-hidden' id='home'>
            {/* Hero Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: "url('/scd-hero.jpg')" }}
                aria-hidden='true'
            />
            {/* Dark overlay for better text readability */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/* Content Container */}
            <div className='relative z-10 min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 xl:px-16'>
                <div className='mx-auto max-w-7xl w-full'>
                    <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                        {/* Left Column - Content */}
                        <div className='space-y-8 text-center lg:text-left order-2 lg:order-1'>
                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0}
                                className='space-y-4'
                            >
                                <div className='inline-block lg:block'>
                                    <motion.div
                                        className='text-[var(--aws-orange)] text-sm font-semibold uppercase tracking-[0.35em] mb-4'
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        1<sup className='text-xs'>st</sup>{' '}
                                        Industry Academia Tech Conference
                                    </motion.div>
                                </div>

                                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight'>
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

                                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-light text-white/90'>
                                    Pokhara{' '}
                                    <span className='text-[var(--aws-orange)]'>
                                        2025
                                    </span>
                                </h2>
                            </motion.div>

                            <motion.p
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.2}
                                className='text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed'
                            >
                                Join the largest gathering of AWS enthusiasts,
                                developers, and cloud professionals. Learn,
                                network, and build the future together.
                            </motion.p>

                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.3}
                                className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-white/70'
                            >
                                <div className='flex items-center gap-3'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-[var(--aws-orange)]/20'>
                                        <Calendar className='w-5 h-5 text-[var(--aws-orange)]' />
                                    </div>
                                    <span className='font-medium'>
                                        Dec 20, 2025
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-[var(--aws-orange)]/20'>
                                        <MapPin className='w-5 h-5 text-[var(--aws-orange)]' />
                                    </div>
                                    <span className='font-medium'>
                                        Ranjit Event Center, Pokhara
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={heroVariants}
                                initial='hidden'
                                animate='visible'
                                custom={0.4}
                                className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'
                            >
                                <a href='#register'>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            size='lg'
                                            className='bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-8 py-7 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
                                        >
                                            <UserPlus className='mr-2 h-5 w-5' />
                                            Register Now
                                        </Button>
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column - Static AWS Logo */}
                        <motion.div
                            variants={heroVariants}
                            initial='hidden'
                            animate='visible'
                            custom={0.1}
                            className='flex items-center justify-center relative order-1 lg:order-2'
                        >
                            {/* Static Logo */}
                            <div className='relative'>
                                <Image
                                    src='/logo.png'
                                    alt='AWS logo'
                                    width={500}
                                    height={300}
                                    className='w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl'
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
