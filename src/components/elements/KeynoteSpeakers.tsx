'use client';

import { KeynoteSpeakers } from '@/constants/KeynoteSpeakers';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const KeynoteSpeakersSection = () => {
    return (
        <section className='section surface' id='keynotes'>
            <div className='page-container'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Keynote Speakers</h2>
                    <p className='section-subtitle mx-auto'>
                        Global community leaders and AWS experts
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto'>
                    {KeynoteSpeakers.map((speaker, index) => (
                        <motion.a
                            key={speaker.id}
                            href={speaker.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                                delay: Math.min(index * 0.04, 0.25),
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className='rounded-2xl border border-border bg-card p-3 hover:shadow-sm transition-shadow'
                            aria-label={`${speaker.name} on LinkedIn`}
                        >
                            <div className='relative aspect-square overflow-hidden rounded-xl bg-muted'>
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px'
                                    className='object-cover'
                                    priority={index < 3}
                                />

                                {/* Slightly special keynote mark */}
                                <div className='absolute top-3 left-3 inline-flex items-center rounded-full border border-white/30 bg-black/25 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur'>
                                    Keynote
                                </div>

                                <div className='absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-xl bg-background/90 backdrop-blur border border-border'>
                                    <Linkedin className='w-4 h-4 text-[#0A66C2]' />
                                </div>
                            </div>

                            <div className='mt-3'>
                                <h3 className='text-sm font-semibold truncate text-center'>
                                    {speaker.name}
                                </h3>
                                <p className='mt-1 text-xs text-muted-foreground leading-snug text-center'>
                                    {speaker.designation}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeynoteSpeakersSection;
