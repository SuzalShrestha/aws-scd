'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='bg-white py-20 px-4 sm:px-6 lg:px-8 xl:px-16' id='about'>
            <div className='mx-auto max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid items-center gap-16 lg:grid-cols-2'
                >
                    {/* Who Are We - Left Side */}
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                                Who Are We?
                            </h2>
                            <div className='h-1 w-16 bg-[var(--aws-orange)] rounded-full'></div>
                        </div>
                        <h3 className='text-xl font-medium text-[var(--aws-orange)]'>
                            AWS Cloud Club IOE Pashchimanchal & <br></br>
                            AWS Cloud Club Prithivi Narayan
                        </h3>

                        <p className='text-gray-600 leading-relaxed'>
                            We are a vibrant community of students from IOE
                            Paschimanchal Campus and AWS Cloud Club PNC,
                            passionate about cloud computing and emerging
                            technologies. Our club bridges academic learning
                            with industry practices, fostering innovation and
                            technical excellence among students in Nepal&apos;s
                            growing tech landscape.
                        </p>
                    </div>

                    {/* What to Expect - Right Side */}
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                                What to Expect?
                            </h2>
                            <div className='h-1 w-16 bg-[var(--aws-orange)] rounded-full'></div>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Join 500+ students for a full day of intensive
                            learning with 8+ technical sessions led by 5+
                            industry experts. Experience hands-on AWS workshops,
                            real-world case studies, networking opportunities
                            with professionals, and insights into cloud career
                            paths that will shape your future in technology.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
