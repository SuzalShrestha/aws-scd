'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

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
        <section className='section surface-muted' id='faq'>
            <div className='page-container max-w-5xl'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>FAQs</h2>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                    }}
                >
                    <Accordion className='rounded-2xl bg-card border border-border overflow-hidden'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`faq-${index}`}
                                className='border-border'
                            >
                                <AccordionTrigger className='text-left text-base font-medium px-6 py-5 hover:text-[var(--aws-orange)]'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-muted-foreground px-6 pb-5'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-12 grid sm:grid-cols-2 gap-5'
                >
                    {/* Contact CTA */}
                    <div className='bg-card border border-border rounded-2xl p-6'>
                        <h3 className='text-lg font-semibold mb-3'>
                            Still Have Questions?
                        </h3>
                        <p className='text-muted-foreground text-sm mb-5'>
                            We&apos;re here to help. Reach out to us directly.
                        </p>
                        <div className='flex flex-wrap gap-3'>
                            <button
                                onClick={() =>
                                    window.open(
                                        'mailto:awscc@ioepas.edu.np',
                                        '_blank'
                                    )
                                }
                                className='inline-flex items-center gap-2 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200'
                            >
                                <Mail className='w-4 h-4' />
                                Email Us
                            </button>
                            <button
                                onClick={() =>
                                    window.open(
                                        'https://www.linkedin.com/company/aws-cloud-club-ioe-pashchimanchal-campus',
                                        '_blank'
                                    )
                                }
                                className='inline-flex items-center gap-2 bg-background hover:bg-muted text-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 border border-border'
                            >
                                <MessageCircle className='w-4 h-4' />
                                LinkedIn
                            </button>
                        </div>
                    </div>

                    {/* Venue Card */}
                    <div className='bg-card border border-border rounded-2xl p-6'>
                        <h3 className='text-lg font-semibold mb-3'>
                            Event Venue
                        </h3>
                        <p className='text-muted-foreground text-sm mb-5'>
                            Ranjit Event Center, Pokhara, Nepal
                        </p>
                        <button
                            onClick={() =>
                                window.open(
                                    'https://maps.app.goo.gl/fC1ibr8kUCiyjWpZA',
                                    '_blank'
                                )
                            }
                            className='inline-flex items-center gap-2 bg-background hover:bg-muted text-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 border border-border'
                        >
                            <MapPin className='w-4 h-4' />
                            Get Directions
                        </button>
                    </div>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.3,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-6 rounded-2xl overflow-hidden border border-border bg-card'
                >
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.649137562213!2d83.99287337548567!3d28.217970675893802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944a78d39543%3A0x3b989ec37763a940!2sRanjit%20Event%20Center!5e0!3m2!1sen!2snp!4v1763623515886!5m2!1sen!2snp'
                        width='100%'
                        height='280'
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className='w-full grayscale opacity-90 hover:opacity-100 transition-opacity duration-300'
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
