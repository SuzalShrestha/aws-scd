'use client';

import { EventTeam } from '@/constants/EventTeam';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const Team = () => {
    return (
        <section className='section surface' id='team'>
            <div className='page-container'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Meet Our Team</h2>
                </motion.div>

                {/* Team Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>
                    {EventTeam.map((member, index) => {
                        const hasLinkedin =
                            !!member.linkedin && member.linkedin !== '#';
                        return (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    delay: Math.min(index * 0.03, 0.4),
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className='group'
                            >
                                <div className='relative bg-card rounded-2xl p-3 border border-border transition-colors duration-200 hover:border-[var(--aws-orange)]/20'>
                                    {/* Image */}
                                    <div className='relative aspect-square overflow-hidden rounded-xl bg-neutral-100'>
                                        {member.imgUrl ? (
                                            <Image
                                                src={member.imgUrl}
                                                alt={member.name}
                                                fill
                                                sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px'
                                                className='object-cover transition-transform duration-500 group-hover:scale-[1.02]'
                                                priority={index < 6}
                                            />
                                        ) : (
                                            <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-3xl font-bold text-neutral-400'>
                                                {member.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>
                                        )}

                                        {/* LinkedIn overlay */}
                                        {hasLinkedin && (
                                            <a
                                                href={member.linkedin}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={`${member.name}'s LinkedIn`}
                                                className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors duration-200'
                                            >
                                                <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200'>
                                                    <Linkedin className='w-5 h-5 text-[#0A66C2]' />
                                                </div>
                                            </a>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <div className='mt-3 text-center'>
                                        <h3 className='text-sm font-medium text-neutral-900 truncate px-1'>
                                            {member.name}
                                        </h3>
                                        {(member.faculty || member.club) ? (
                                            <p className='mt-1 text-xs text-muted-foreground truncate px-1'>
                                                {member.faculty && member.club 
                                                    ? `${member.faculty} | ${member.club}`
                                                    : member.faculty || member.club}
                                            </p>
                                        ) : null}
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
