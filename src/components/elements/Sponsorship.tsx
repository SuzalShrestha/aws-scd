'use client';

import { motion } from 'framer-motion';
import {
    Crown,
    Diamond,
    Star,
    Award,
    Trophy,
    Medal,
    CheckCircle,
} from 'lucide-react';

const sponsorshipTiers = [
    {
        id: 1,
        name: 'Title Sponsor',
        amount: 'Rs. 1,50,000',
        icon: Crown,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        keyBenefits:
            'Keynote opportunity, highest visibility, premium booth, all event materials branding',
    },
    {
        id: 2,
        name: 'Diamond Sponsor',
        amount: 'Rs. 1,00,000',
        icon: Diamond,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        keyBenefits:
            'VIP booth, workshop hosting, prominent logo placement, special mentions',
    },
    {
        id: 3,
        name: 'Platinum Sponsor',
        amount: 'Rs. 75,000',
        icon: Star,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        keyBenefits:
            'Dedicated booth, 10-minute presentation, high visibility branding',
    },
    {
        id: 4,
        name: 'Gold Sponsor',
        amount: 'Rs. 50,000',
        icon: Award,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        keyBenefits:
            'Booth space, social media campaigns, direct attendee interaction',
    },
    {
        id: 5,
        name: 'Silver Sponsor',
        amount: 'Rs. 30,000',
        icon: Trophy,
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
        keyBenefits: 'Logo placement, booth space, networking opportunities',
    },
    {
        id: 6,
        name: 'Bronze Sponsor',
        amount: 'Rs. 15,000',
        icon: Medal,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        keyBenefits:
            'Logo placement, social media mentions, promotional materials distribution',
    },
];

const Sponsorship = () => {
    return (
        <section
            className='bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='sponsorship'
        >
            <div className='mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mb-12 text-center'
                >
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Why Sponsor Us?
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                        Connect with 500+ engaged students and young
                        professionals. Gain brand visibility through banners,
                        digital campaigns, social media, and direct venue
                        engagement.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-12'
                >
                    <div className='divide-y divide-gray-100'>
                        {sponsorshipTiers.map((tier, index) => {
                            const IconComponent = tier.icon;
                            return (
                                <motion.div
                                    key={tier.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.03,
                                        ease: 'easeOut',
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3,
                                    }}
                                    className='grid grid-cols-4 hover:bg-orange-50/30 transition-colors duration-200'
                                >
                                    {/* Icon & Investment Column */}
                                    <div className='col-span-1 p-6 flex flex-col items-center justify-center border-r border-gray-100 space-y-3'>
                                        <div
                                            className={`p-3 rounded-full ${tier.bgColor}`}
                                        >
                                            <IconComponent
                                                className={`h-6 w-6 ${tier.color}`}
                                            />
                                        </div>
                                        <span
                                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold ${tier.bgColor} ${tier.color}`}
                                        >
                                            {tier.amount}
                                        </span>
                                    </div>

                                    {/* Content Column */}
                                    <div className='col-span-3 p-6'>
                                        <div className='space-y-2'>
                                            {/* Tier name on top */}
                                            <h3 className='text-lg font-semibold text-gray-900 leading-tight'>
                                                {tier.name}
                                            </h3>

                                            {/* Benefits description */}
                                            <p className='text-sm text-gray-600 leading-relaxed'>
                                                {tier.keyBenefits}
                                            </p>

                                            {/* Tier level indicator */}
                                            <div className='pt-1'>
                                                <span className='text-xs font-medium text-[var(--aws-orange)] uppercase tracking-wider'>
                                                    Tier {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='text-center'
                >
                    <div className='bg-gradient-to-r from-[var(--aws-orange)]/10 to-orange-100/50 rounded-2xl p-8'>
                        <div className='flex items-center justify-center gap-2 mb-4'>
                            <CheckCircle className='h-6 w-6 text-[var(--aws-orange)]' />
                            <h3 className='text-2xl font-bold text-gray-900'>
                                Ready to Partner With Us?
                            </h3>
                        </div>
                        <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
                            Join us in empowering the next generation of cloud
                            professionals. Custom packages available.
                        </p>
                        <button className='bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg'>
                            Contact for Partnership
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsorship;
