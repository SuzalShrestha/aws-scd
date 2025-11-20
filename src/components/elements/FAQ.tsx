'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'Who can attend AWS Student Community Day Pokhara?',
        answer: 'The event is open to students, developers, and cloud enthusiasts from all backgrounds. Beginners are welcome—no prior AWS experience required!',
    },
    {
        question: 'Is there any registration fee?',
        answer: 'No, the event is free to attend. You only need to register in advance to secure your spot as seats are limited.',
    },
    {
        question: 'What should I bring to the event?',
        answer: 'Bring a valid student or government-issued ID, your laptop if you want to participate in hands-on sessions, and lots of curiosity!',
    },
    {
        question: 'Will there be networking opportunities?',
        answer: 'Absolutely. You will meet AWS experts, community leaders, and fellow students throughout the day, especially during breaks and the networking mixer.',
    },
];

const FAQ = () => {
    return (
        <section
            className='bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
            id='faq'
        >
            <div className='max-w-5xl mx-auto'>
                <div className='mb-10 text-center'>
                    <div className='inline-block space-y-3'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Frequently Asked Questions
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <Accordion className='rounded-2xl border border-slate-700 bg-slate-800 shadow-sm mb-12'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className='first:rounded-t-2xl last:rounded-b-2xl border-slate-700'
                            >
                                <AccordionTrigger className='text-left text-base font-medium text-slate-100 hover:text-[var(--aws-orange)]'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-slate-300'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Still Have Questions Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.2,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='text-center bg-slate-800 rounded-2xl border border-slate-700 shadow-sm p-8'
                    >
                        <h3 className='text-2xl font-bold text-slate-100 mb-4'>
                            Still Have Questions?
                        </h3>
                        <p className='text-slate-300 mb-6 max-w-md mx-auto'>
                            Don&apos;t hesitate to reach out! We&apos;re here to
                            help and answer any questions you may have.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <button
                                onClick={() =>
                                    window.open(
                                        'mailto:awscc@ioepas.edu.np',
                                        '_blank'
                                    )
                                }
                                className='inline-flex items-center justify-center gap-2 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg'
                            >
                                Email Us
                            </button>
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://www.linkedin.com/company/aws-cloud-club-ioe-pashchimanchal-campus',
                                        '_blank'
                                    )
                                }
                                className='inline-flex items-center justify-center gap-2 border border-[var(--aws-orange)] text-[var(--aws-orange)] hover:bg-[var(--aws-orange)] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300'
                            >
                                Message on LinkedIn
                            </button>
                        </div>
                    </motion.div>

                    {/* Venue Location Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='mt-8 bg-slate-800 rounded-2xl border border-slate-700 shadow-sm overflow-hidden'
                    >
                        <div className='px-8 py-8'>
                            <div className='rounded-xl overflow-hidden border border-slate-600'>
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.649137562213!2d83.99287337548567!3d28.217970675893802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944a78d39543%3A0x3b989ec37763a940!2sRanjit%20Event%20Center!5e0!3m2!1sen!2snp!4v1763623515886!5m2!1sen!2snp'
                                    width='100%'
                                    height='300'
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    className='w-full'
                                />
                            </div>
                            <div className='mt-4 text-center'>
                                <button
                                    onClick={() =>
                                        window.open(
                                            'https://maps.app.goo.gl/fC1ibr8kUCiyjWpZA',
                                            '_blank'
                                        )
                                    }
                                    className='inline-flex items-center justify-center gap-2 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
