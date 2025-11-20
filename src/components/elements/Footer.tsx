'use client';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// Minimal Meetup icon (since lucide-react doesn't include it)
const MeetupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        aria-hidden='true'
        focusable='false'
        {...props}
    >
        <path d='M21.5 8.92c.4 1.54.26 3.2-.46 4.64-.72 1.44-1.96 2.57-3.5 3.18-1.53.61-3.26.64-4.81.08-1.55-.56-2.86-1.7-3.65-3.17-.79-1.47-.99-3.18-.54-4.78.45-1.6 1.53-2.98 2.98-3.82C13 4.2 14.7 3.98 16.34 4.4c1.64.43 3.07 1.43 4.03 2.83.47.67.84 1.42 1.13 1.69zm-6.83-.64c-.47 0-.9.24-1.16.64l-1.55 2.36-.88-1.41a1.35 1.35 0 0 0-2.31.08l-1.76 3.42a.75.75 0 1 0 1.33.68l1.67-3.25.93 1.49c.23.36.62.59 1.05.6.43 0 .83-.21 1.07-.57l1.63-2.49.95 3.46c.11.38.43.66.83.72.4.06.79-.12 1-.46l1.09-1.73.53.86c.21.34.61.52 1.01.46.4-.06.72-.34.83-.72a.95.95 0 0 0-.12-.8l-1.22-1.98a1.15 1.15 0 0 0-1.95.04l-.7 1.11-.87-3.14a1.35 1.35 0 0 0-1.3-.99z' />
    </svg>
);

const Footer = () => {
    const socialLinks = [
        {
            name: 'Meetup',
            href: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/311973692',
            Icon: MeetupIcon,
            color: 'text-[#F64060]',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/posts/aws-cloud-club-ioe-pashchimanchal-campus_awscloudclubs-awsccioepas-awsccpnc-activity-7375541946628476928-hQDJ',
            Icon: Linkedin,
            color: 'text-[#0A66C2]',
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/share/p/1BRAvghNGh/',
            Icon: Facebook,
            color: 'text-[#1877F2]',
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/p/DO3kFNkCODh',
            Icon: Instagram,
            color: 'text-[#E4405F]',
        },
    ];

    return (
        <footer className='bg-slate-900 py-14 px-4 sm:px-6 lg:px-8 xl:px-16 text-slate-200'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='mx-auto max-w-7xl'
            >
                <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
                    <div>
                        <h3 className='text-2xl font-semibold tracking-tight text-[var(--aws-orange)]'>
                            AWS Student Community Day
                        </h3>
                        <p className='mt-1 text-sm text-slate-400'>
                            Pokhara 2025
                        </p>
                        <p className='mt-4 text-sm leading-6 text-slate-400'>
                            Organized by AWS Cloud Club IOE Paschimanchal Campus
                            and AWS Cloud Club Prithivi Narayan Campus.
                        </p>

                        <div className='mt-5 flex items-center gap-2'>
                            {socialLinks.map(({ name, href, Icon, color }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={name}
                                    title={name}
                                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/90 ${color} ring-1 ring-white/20 shadow-sm transition-colors hover:bg-white`}
                                >
                                    <Icon className='h-5 w-5' />
                                    <span className='sr-only'>{name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-sm font-semibold uppercase tracking-wider text-slate-300'>
                            Contact Us
                        </h4>
                        <div className='mt-4 space-y-4 text-sm'>
                            <div>
                                <h5 className='font-medium text-slate-300 mb-2'>
                                    Event Coordinators
                                </h5>
                                <div className='space-y-2 text-slate-400'>
                                    <div>
                                        <p className='font-medium'>
                                            Yojana Ghimire
                                        </p>
                                        <a
                                            href='tel:+9779866212789'
                                            className='text-slate-400 hover:text-white transition-colors'
                                        >
                                            +977 9866212789
                                        </a>
                                    </div>
                                    <div>
                                        <p className='font-medium'>
                                            Aayusha Adhikari
                                        </p>
                                        <a
                                            href='tel:+9779703322118'
                                            className='text-slate-400 hover:text-white transition-colors'
                                        >
                                            +977 9703322118
                                        </a>
                                    </div>
                                    <div>
                                        <p className='font-medium'>
                                            Savyata Bhurtel
                                        </p>
                                        <a
                                            href='tel:+9779846917029'
                                            className='text-slate-400 hover:text-white transition-colors'
                                        >
                                            +977 9846917029
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className='text-sm font-semibold uppercase tracking-wider text-slate-300'>
                            Email
                        </h4>
                        <div className='mt-4 space-y-2 text-sm text-slate-400'>
                            <div>
                                <a
                                    href='mailto:awscc@ioepas.edu.np'
                                    className='transition-colors hover:text-white block'
                                >
                                    awscc@ioepas.edu.np
                                </a>
                            </div>

                            <div className='mt-4'>
                                <h4 className='text-sm font-semibold uppercase tracking-wider text-slate-300'>
                                    Venue
                                </h4>
                                <p className='text-slate-400'>
                                    Ranjit Event Center, Pokhara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-10 border-t border-slate-800 pt-6'>
                    <p className='text-center text-sm text-slate-500'>
                        © 2025 AWS Student Community Day Pokhara. All rights
                        reserved.
                    </p>
                    <p className='text-center text-md text-slate-500'>
                        Designed by Sujal Shrestha
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
