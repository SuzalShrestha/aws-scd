'use client';

import { EventTeam } from '@/constants/EventTeam';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const Team = () => {
    return (
        <section className='bg-white py-20 px-4' id='team'>
            <div className='mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mb-16 text-center'
                >
                    <h2 className='text-4xl font-semibold text-[var(--aws-orange)] mb-2'>
                        Our Team
                    </h2>
                </motion.div>

                <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                    {EventTeam.map((member, index) => {
                        const hasLinkedin =
                            !!member.linkedin && member.linkedin !== '#';
                        return (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.04,
                                    ease: 'easeOut',
                                }}
                                className='group'
                            >
                                <div className='rounded-xl border border-black/5 bg-white p-3 sm:p-4 shadow-sm transition-shadow hover:shadow-md'>
                                    <div className='relative aspect-square overflow-hidden rounded-lg bg-gray-100'>
                                        {member.imgUrl ? (
                                            <Image
                                                src={member.imgUrl}
                                                alt={member.name}
                                                fill
                                                sizes='(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px'
                                                className='object-cover transition-transform duration-300 group-hover:scale-[1.03]'
                                                priority={index < 6}
                                            />
                                        ) : (
                                            <div className='flex h-full w-full items-center justify-center bg-gray-100 text-2xl font-semibold text-gray-400'>
                                                {member.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>
                                        )}

                                        {hasLinkedin && (
                                            <a
                                                href={member.linkedin}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={`Open ${member.name}'s LinkedIn profile`}
                                                className='absolute bottom-3 right-3 inline-flex size-8 items-center justify-center rounded-md bg-white/90 text-[#0A66C2] ring-1 ring-black/5 shadow-sm transition-colors hover:bg-white'
                                                title='LinkedIn'
                                            >
                                                <Linkedin className='size-4' />
                                            </a>
                                        )}
                                    </div>

                                    <div className='mt-3 sm:mt-4 text-center'>
                                        <h3 className='text-sm sm:text-base font-medium text-gray-900 tracking-tight'>
                                            {member.name}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
