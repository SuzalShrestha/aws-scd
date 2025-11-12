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
            className='bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 xl:px-16'
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
                    <Accordion className='rounded-2xl border border-slate-200 bg-white shadow-sm'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className='first:rounded-t-2xl last:rounded-b-2xl'
                            >
                                <AccordionTrigger className='text-left text-base font-medium text-slate-900'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-slate-600'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
