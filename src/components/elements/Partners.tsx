'use client';

import { motion } from 'framer-motion';

const PartnersSection = () => {
    return (
        <section
            className='bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='partners'
        >
            <div className='mx-auto max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className='mb-12 text-center'
                >
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Our Partners
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </motion.div>

                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.div
                        className='inline-flex animate-marquee'
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* {duplicatedPartners.map((partner, index) => (
                            <motion.div
                                key={`${partner.id}-${index}`}
                                className='mx-4 flex items-center justify-center px-8'
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                <div className='flex h-16 w-32 items-center justify-center'>
                                    <Image
                                        width={120}
                                        height={60}
                                        src={partner.logo}
                                        alt={partner.name}
                                        className='w-auto max-h-12 object-contain'
                                    />
                                </div>
                            </motion.div>
                        ))} */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
