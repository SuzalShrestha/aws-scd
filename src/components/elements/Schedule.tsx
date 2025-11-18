'use client';

import { scheduleEvents } from '@/constants/Schedules';
import { motion } from 'framer-motion';

const Schedule = () => {
    return (
        <section
            className='bg-white py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='schedule'
        >
            <div className='mx-auto max-w-4xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mb-12 text-center'
                >
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Event Schedule
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm'
                >
                    <div className='divide-y divide-gray-100'>
                        {scheduleEvents.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.03,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className='grid grid-cols-4 hover:bg-orange-50/30 transition-colors duration-200'
                            >
                                {/* Time Column */}
                                <div className='col-span-1 p-6 flex items-center justify-center border-r border-gray-100'>
                                    <div className='text-center'>
                                        <span className='inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-[var(--aws-orange)]/10 text-[var(--aws-orange)]'>
                                            {event.time}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className='col-span-3 p-6'>
                                    <div className='space-y-2'>
                                        {/* Description on top */}
                                        <h3 className='text-lg font-semibold text-gray-900 leading-tight'>
                                            {event.title}
                                        </h3>

                                        {/* Session description */}
                                        <p className='text-sm text-gray-600 leading-relaxed'>
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Schedule;
