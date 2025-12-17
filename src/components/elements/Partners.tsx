'use client';

import { partnerCategories } from '@/constants/Partners';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersSection = () => {
    const isCenteredSingleLogoCategory = (title: string) => {
        return title.startsWith('Training') || title.startsWith('Media') || title.startsWith('Internet');
    };

    const getGridClass = (title: string) => {
        if (title === 'Sponsors')
            return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5';
        if (title === 'Community Partners')
            return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5';
        return 'grid grid-cols-1';
    };

    const getLogoHeightClass = (title: string) => {
        if (title === 'Sponsors') return 'h-24 sm:h-28';
        if (title === 'Community Partners') return 'h-40 sm:h-48';
        return 'h-24 sm:h-28';
    };

    const shouldShrinkLogo = (id: string, logoPath: string) => {
        return (
            id === 'girls-tech' ||
            id === 'ices' ||
            id === 'robotics-club' ||
            /girlstech/i.test(logoPath) ||
            /i-?ces/i.test(logoPath)
        );
    };

    const getCardPaddingClass = (title: string) => {
        if (title === 'Sponsors') return 'p-6 sm:p-8';
        if (title === 'Community Partners') return 'p-5 sm:p-6';
        return 'p-7 sm:p-10';
    };

    return (
        <section className='section surface-muted' id='partners'>
            <div className='page-container'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Partners</h2>
                    <p className='section-subtitle mx-auto'>
                        Amazing partners are joining us to make AWS Student
                        Community Day Pokhara possible
                    </p>
                </motion.div>

                <div className='space-y-8 sm:space-y-10'>
                    {partnerCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.45,
                                delay: Math.min(categoryIndex * 0.05, 0.2),
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className='rounded-3xl border border-border bg-card p-6 sm:p-8'
                        >
                            <div className='flex items-end justify-between gap-6 mb-6'>
                                <h3 className='text-lg sm:text-xl font-semibold text-[var(--aws-orange)]'>
                                    {category.title}
                                </h3>
                            </div>

                            <div
                                className={
                                    isCenteredSingleLogoCategory(category.title)
                                        ? 'grid grid-cols-1 place-items-center'
                                        : getGridClass(category.title)
                                }
                            >
                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: 0.35,
                                            delay: Math.min(
                                                itemIndex * 0.02,
                                                0.2
                                            ),
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className={`rounded-2xl bg-background ${getCardPaddingClass(
                                            category.title
                                        )} ${
                                            isCenteredSingleLogoCategory(
                                                category.title
                                            )
                                                ? 'w-full max-w-2xl'
                                                : ''
                                        }`}
                                    >
                                        <div
                                            className={`relative ${getLogoHeightClass(
                                                category.title
                                            )} w-full`}
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={item.name}
                                                fill
                                                sizes='(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 420px'
                                                className={`object-contain ${
                                                    shouldShrinkLogo(
                                                        item.id,
                                                        item.logo
                                                    )
                                                        ? 'scale-[0.67] origin-center'
                                                        : ''
                                                }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
