'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EASE } from '@/components/motion';
import { EVENT, navLinks } from '@/constants/Event';
import { cn } from '@/lib/utils';

/** Fishtail mark: Machhapuchhre's twin summit in two tones. */
export const Mark = ({ className }: { className?: string }) => (
    <svg viewBox='0 0 32 32' className={className} aria-hidden='true'>
        <rect width='32' height='32' rx='9' fill='#0a0f1c' />
        <path d='M5 25 L14 12 L16 7 L17.2 9 L18.4 7.6 L27 25 Z' fill='#3b4274' />
        <path d='M16 7 L17.2 9 L18.4 7.6 L27 25 L19 25 L17.4 15 Z' fill='#ff9900' />
    </svg>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);


    return (
        <header className='fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4'>
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className={cn(
                    'mx-auto flex max-w-[1240px] items-center justify-between rounded-full border py-2 pl-3 pr-2 transition-[background,border,box-shadow] duration-500',
                    scrolled && !open
                        ? 'border-white/10 bg-ink/80 shadow-[0_16px_50px_-20px_rgba(10,15,28,0.6)] backdrop-blur-xl'
                        : 'border-white/10 bg-ink/20 backdrop-blur-md'
                )}
            >
                <a href='#home' className='flex items-center gap-2.5' aria-label='AWS SCD Pokhara — home'>
                    <Mark className='size-8' />
                    <span className='text-sm font-semibold tracking-tight text-white'>
                        AWS SCD
                        <span className='ml-1.5 font-normal text-white/55'>
                            Pokhara ’{String(EVENT.year).slice(2)}
                        </span>
                    </span>
                </a>

                <ul className='hidden items-center gap-1 lg:flex'>
                    {navLinks.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className='rounded-full px-3.5 py-2 text-[13px] text-white/70 transition-colors hover:bg-white/10 hover:text-white'
                            >
                                {l.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-2'>
                    <a href='#register' className='btn-glow hidden py-2.5 sm:inline-flex'>
                        Get notified
                        <ArrowUpRight className='size-4' />
                    </a>
                    <button
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        className='grid size-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden'
                    >
                        {open ? <X className='size-5' /> : <Menu className='size-5' />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 -z-10 bg-ink/95 backdrop-blur-xl lg:hidden'
                    >
                        <ul className='shell flex h-full flex-col justify-center gap-1'>
                            {navLinks.map((l, i) => (
                                <motion.li
                                    key={l.href}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: EASE, delay: 0.05 * i }}
                                >
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className='flex items-baseline gap-4 py-2 text-4xl font-medium tracking-tight text-white/90 hover:text-glow'
                                    >
                                        <span className='font-mono text-xs text-white/30'>
                                            0{i + 1}
                                        </span>
                                        {l.name}
                                    </a>
                                </motion.li>
                            ))}
                            <li className='mt-8'>
                                <a href='#register' onClick={() => setOpen(false)} className='btn-glow'>
                                    Get notified <ArrowUpRight className='size-4' />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
