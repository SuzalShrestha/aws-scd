'use client';

// import { EventSpeakers } from '@/constants/EventSpeakers';
// import { LinkedinIcon } from 'lucide-react';
import { motion } from 'framer-motion';
// import Image from 'next/image';

const Speakers = () => {
    return (
        <section className='bg-gray-50 py-12 px-4' id='speakers'>
            <div className='max-w-5xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center mb-8'
                >
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Our Speakers
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </motion.div>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {/* {EventSpeakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.05,
                                ease: 'easeOut',
                            }}
                            className='group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg'
                        >
                            <div className='aspect-[1/1] flex items-center justify-center overflow-hidden bg-gray-50'>
                                <Image
                                    src={speaker.image}
                                    alt={`${speaker.name} profile photo`}
                                    width={150}
                                    height={150}
                                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                            </div>

                            <div className='p-4 text-center'>
                                <h3 className='mb-1 text-base font-semibold text-gray-900'>
                                    {speaker.name}
                                </h3>

                                <div className='mb-3 space-y-1'>
                                    <p className='text-xs font-medium text-gray-700'>
                                        {speaker.role}
                                    </p>
                                    <p className='text-xs text-gray-600'>
                                        {speaker.company}
                                    </p>
                                </div>
                                <a
                                    href={speaker.linkedin}
                                    className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-[var(--aws-orange)] hover:text-white'
                                    aria-label={`${speaker.name}'s LinkedIn profile`}
                                >
                                    <LinkedinIcon size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
