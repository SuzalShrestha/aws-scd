'use client';

import { motion } from 'framer-motion';
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

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

const socialLinks = [
    {
        name: 'Meetup',
        href: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/events/311973692',
        Icon: MeetupIcon,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/posts/aws-cloud-club-ioe-pashchimanchal-campus_awscloudclubs-awsccioepas-awsccpnc-activity-7375541946628476928-hQDJ',
        Icon: Linkedin,
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/p/1BRAvghNGh/',
        Icon: Facebook,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/p/DO3kFNkCODh',
        Icon: Instagram,
    },
];

const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Register', href: '#register' },
    { name: 'FAQ', href: '#faq' },
];

const Footer = () => {
    return (
        <footer className='relative bg-neutral-900 overflow-hidden'>
            {/* Top gradient line */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--aws-orange)]/50 to-transparent' />

            <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
                {/* Main Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'
                >
                    {/* Brand */}
                    <div className='lg:col-span-1'>
                        <div className='mb-6'>
                            <span className='text-xl font-bold'>
                                <span className='text-[var(--aws-orange)]'>
                                    AWS
                                </span>
                                <span className='text-white'> SCD</span>
                            </span>
                            <p className='text-neutral-500 text-sm mt-1'>
                                Pokhara 2025
                            </p>
                        </div>
                        <p className='text-neutral-400 text-sm leading-relaxed mb-6'>
                            Organized by AWS Cloud Club IOE Pashchimanchal & AWS
                            Cloud Club Prithvi Narayan Campus.
                        </p>

                        {/* Social Links */}
                        <div className='flex items-center gap-2'>
                            {socialLinks.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={name}
                                    className='w-10 h-10 rounded-xl bg-white/5 hover:bg-[var(--aws-orange)]/20 flex items-center justify-center text-neutral-400 hover:text-[var(--aws-orange)] transition-all duration-300 border border-white/5 hover:border-[var(--aws-orange)]/20'
                                >
                                    <Icon className='w-5 h-5' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-5'>
                            Quick Links
                        </h4>
                        <ul className='space-y-3'>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className='text-neutral-400 hover:text-white text-sm transition-colors'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-5'>
                            Contact
                        </h4>
                        <ul className='space-y-4'>
                            <li>
                                <a
                                    href='mailto:awscc@ioepas.edu.np'
                                    className='flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors group'
                                >
                                    <Mail className='w-4 h-4 text-neutral-500 group-hover:text-[var(--aws-orange)]' />
                                    awscc@ioepas.edu.np
                                </a>
                            </li>
                            <li className='flex items-start gap-3 text-neutral-400 text-sm'>
                                <MapPin className='w-4 h-4 text-neutral-500 mt-0.5' />
                                <span>Ranjit Event Center, Pokhara, Nepal</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coordinators */}
                    <div>
                        <h4 className='text-sm font-semibold text-white uppercase tracking-wider mb-5'>
                            Coordinators
                        </h4>
                        <ul className='space-y-3'>
                            {[
                                {
                                    name: 'Yojana Ghimire',
                                    phone: '+977 9866212789',
                                },
                                {
                                    name: 'Aayusha Adhikari',
                                    phone: '+977 9703322118',
                                },
                                {
                                    name: 'Savyata Bhurtel',
                                    phone: '+977 9846917029',
                                },
                            ].map((person) => (
                                <li key={person.name}>
                                    <p className='text-neutral-300 text-sm font-medium'>
                                        {person.name}
                                    </p>
                                    <a
                                        href={`tel:${person.phone.replace(
                                            /\s/g,
                                            ''
                                        )}`}
                                        className='flex items-center gap-2 text-neutral-500 hover:text-[var(--aws-orange)] text-xs transition-colors mt-0.5'
                                    >
                                        <Phone className='w-3 h-3' />
                                        {person.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className='py-6 border-t border-white/5'>
                    <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                        <p className='text-neutral-500 text-sm'>
                            © 2025 AWS Student Community Day Pokhara. All rights
                            reserved.
                        </p>
                        <p className='text-neutral-600 text-sm'>
                            Designed with ♥ by{' '}
                            <a
                                href='#'
                                className='text-neutral-400 hover:text-[var(--aws-orange)] transition-colors'
                            >
                                Sujal Shrestha
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
