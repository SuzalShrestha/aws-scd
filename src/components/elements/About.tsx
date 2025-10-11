'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='bg-white py-20 px-4' id='about'>
            <div className='mx-auto max-w-6xl'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid items-center gap-16 lg:grid-cols-2'
                >
                    {/* Who Are We - Left Side */}
                    <div className='space-y-4'>
                        <h2 className='text-4xl font-semibold text-[var(--aws-orange)]'>
                            Who Are We?
                        </h2>
                        <h3 className='text-xl font-medium text-[var(--aws-orange)]'>
                            AWS Cloud Club IOE Pashchimanchal & <br></br>
                            AWS Cloud Club PNC
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
                        <h2 className='text-4xl font-semibold text-[var(--aws-orange)]'>
                            What to Expect?
                        </h2>
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
