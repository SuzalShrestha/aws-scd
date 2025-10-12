'use client';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='bg-slate-800 py-12 px-4 text-white'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='mx-auto max-w-6xl text-center'
            >
                <div className='mb-6'>
                    <h3 className='mb-2 text-2xl font-bold text-orange-400'>
                        AWS Student Community Day
                    </h3>
                    <p className='text-slate-300'>Pokhara 2025</p>
                </div>

                <div className='mb-8'>
                    <p className='text-sm text-slate-400'>
                        Organized by AWS Cloud Club IOE Paschimanchal Campus
                    </p>
                    <p className='text-sm text-slate-400'>
                       AWS Cloud Club Prithivi Narayan
                        Campus
                    </p>
                </div>

                <div className='border-t border-slate-700 pt-6'>
                    <p className='text-sm text-slate-500'>
                        © 2025 AWS Student Community Day Pokhara. All rights
                        reserved.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
