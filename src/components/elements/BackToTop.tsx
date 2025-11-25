'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 400);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    onClick={scrollToTop}
                    className='fixed bottom-8 right-8 z-50 group'
                    aria-label='Back to top'
                >
                    <div className='relative'>
                        {/* Glow effect */}
                        <div className='absolute inset-0 bg-[var(--aws-orange)] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300' />

                        {/* Button */}
                        <div className='relative flex items-center justify-center w-12 h-12 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-light)] text-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[var(--aws-orange)]/25'>
                            <ArrowUp className='w-5 h-5 transition-transform group-hover:-translate-y-0.5' />
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
