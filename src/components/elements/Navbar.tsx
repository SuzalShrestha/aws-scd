'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Past Events', href: '#past-events' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm py-2'
                    : 'bg-transparent border-transparent py-4'
            )}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center flex-shrink-0'>
                        <a href='#' className='group flex items-center gap-2'>
                            <div className='font-bold text-xl tracking-tight'>
                                <span className='text-[var(--aws-orange)]'>
                                    AWS
                                </span>
                                <span
                                    className={cn(
                                        'ml-2 transition-colors duration-300',
                                        isScrolled
                                            ? 'text-slate-800'
                                            : 'text-white'
                                    )}
                                >
                                    Student Community Day
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center space-x-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                                    isScrolled
                                        ? 'text-slate-600 hover:text-[var(--aws-orange)] hover:bg-slate-50'
                                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className='pl-4'>
                            <Button
                                className='bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white rounded-full px-6'
                                onClick={() =>
                                    (window.location.href = '#register')
                                }
                            >
                                Register Now
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className={cn(
                                'p-2 rounded-md transition-colors',
                                isScrolled ? 'text-slate-800' : 'text-white'
                            )}
                        >
                            {isMobileMenuOpen ? (
                                <X className='h-6 w-6' />
                            ) : (
                                <Menu className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='md:hidden bg-white border-b border-gray-200 overflow-hidden'
                    >
                        <div className='px-4 pt-2 pb-6 space-y-1'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className='block px-4 py-3 text-base font-medium text-slate-600 hover:text-[var(--aws-orange)] hover:bg-slate-50 rounded-lg transition-colors'
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className='pt-4 px-4'>
                                <Button
                                    className='w-full bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white rounded-full'
                                    onClick={() => {
                                        window.location.href = '#register';
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Register Now
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
