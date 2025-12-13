'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Events', href: '#past-events' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                'fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4'
            )}
        >
            <div className='page-container'>
                <nav
                    className={cn(
                        'flex items-center justify-between rounded-2xl transition-all duration-300',
                        isScrolled
                            ? 'glass px-5 py-3 border border-border'
                            : 'px-2 py-2'
                    )}
                >
                    {/* Logo */}
                    <a href='#home' className='flex items-center gap-2 group'>
                        <div className='flex items-center gap-2'>
                            <span className='text-lg font-bold tracking-tight'>
                                <span className='text-[var(--aws-orange)]'>
                                    AWS
                                </span>
                                <span
                                    className={cn(
                                        'ml-1.5 transition-colors duration-300',
                                        isScrolled
                                            ? 'text-neutral-800'
                                            : 'text-white'
                                    )}
                                >
                                    SCD
                                </span>
                            </span>
                            <span
                                className={cn(
                                    'hidden sm:inline-block text-xs px-2 py-0.5 rounded-full font-medium transition-colors duration-300',
                                    isScrolled
                                        ? 'bg-[var(--aws-orange)]/10 text-[var(--aws-orange)]'
                                        : 'bg-white/10 text-white/80'
                                )}
                            >
                                Pokhara 2025
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center gap-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl',
                                    isScrolled
                                        ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className='hidden lg:block'>
                        <a
                            href='#register'
                            className='inline-flex items-center gap-2 bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200'
                        >
                            Register
                            <ArrowRight className='w-4 h-4' />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            'lg:hidden p-2.5 rounded-xl transition-colors duration-200',
                            isScrolled
                                ? 'text-foreground hover:bg-muted'
                                : 'text-white hover:bg-white/10'
                        )}
                        aria-label='Toggle menu'
                    >
                        {isMobileMenuOpen ? (
                            <X className='h-5 w-5' />
                        ) : (
                            <Menu className='h-5 w-5' />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden'
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className='absolute top-full left-4 right-4 mt-2 lg:hidden'
                        >
                            <div className='bg-white rounded-2xl shadow-xl border border-black/[0.04] overflow-hidden'>
                                <div className='p-4 space-y-1'>
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                            className='block px-4 py-3 text-base font-medium text-neutral-700 hover:text-[var(--aws-orange)] hover:bg-neutral-50 rounded-xl transition-colors'
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                </div>
                                <div className='p-4 pt-2 border-t border-neutral-100'>
                                    <a
                                        href='#register'
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className='flex items-center justify-center gap-2 w-full bg-[var(--aws-orange)] hover:bg-[var(--aws-orange-dark)] text-white px-5 py-3 rounded-xl text-base font-semibold transition-colors duration-200'
                                    >
                                        Register Now
                                        <ArrowRight className='w-4 h-4' />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
