'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionContextValue = {
    openValue: string | null;
    toggle: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(
    null
);

type AccordionProps = {
    defaultValue?: string;
    value?: string | null;
    onValueChange?: (value: string | null) => void;
    collapsible?: boolean;
    className?: string;
    children: React.ReactNode;
};

const Accordion = ({
    defaultValue,
    value,
    onValueChange,
    collapsible = true,
    className,
    children,
}: AccordionProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<string | null>(
        defaultValue ?? null
    );
    const openValue = isControlled ? value ?? null : internalValue;

    const toggle = React.useCallback(
        (next: string) => {
            const isSame = openValue === next;
            const nextValue = isSame ? (collapsible ? null : openValue) : next;

            if (!isControlled) {
                setInternalValue(nextValue);
            }

            onValueChange?.(nextValue);
        },
        [collapsible, isControlled, onValueChange, openValue]
    );

    const contextValue = React.useMemo(
        () => ({ openValue, toggle }),
        [openValue, toggle]
    );

    return (
        <AccordionContext.Provider value={contextValue}>
            <div className={cn('divide-y divide-slate-700', className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

type AccordionItemProps = {
    value: string;
    className?: string;
    children: React.ReactNode;
};

const AccordionItemContext = React.createContext<string | null>(null);

const AccordionItem = ({ value, className, children }: AccordionItemProps) => {
    return (
        <AccordionItemContext.Provider value={value}>
            <div
                className={cn('overflow-hidden', className)}
                data-accordion-item
            >
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
};

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const AccordionTrigger = ({
    children,
    className,
    ...props
}: AccordionTriggerProps) => {
    const itemValue = React.useContext(AccordionItemContext);
    const context = React.useContext(AccordionContext);

    if (!itemValue) {
        throw new Error(
            'AccordionTrigger must be used within an AccordionItem'
        );
    }

    if (!context) {
        throw new Error('AccordionTrigger must be used within an Accordion');
    }

    const isOpen = context.openValue === itemValue;
    const triggerId = `accordion-trigger-${itemValue}`;
    const contentId = `accordion-content-${itemValue}`;

    return (
        <button
            type='button'
            className={cn(
                'flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left text-base sm:text-lg font-medium text-slate-100 transition-colors rounded-md',
                'hover:text-[var(--aws-orange)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aws-orange)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
                className
            )}
            aria-expanded={isOpen}
            aria-controls={contentId}
            id={triggerId}
            data-state={isOpen ? 'open' : 'closed'}
            onClick={() => context.toggle(itemValue)}
            {...props}
        >
            <span>{children}</span>
            <motion.span
                aria-hidden='true'
                className='text-slate-400'
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            >
                <ChevronDown className='h-5 w-5' />
            </motion.span>
        </button>
    );
};

type AccordionContentProps = {
    children: React.ReactNode;
    className?: string;
};

const AccordionContent = ({ children, className }: AccordionContentProps) => {
    const itemValue = React.useContext(AccordionItemContext);
    const context = React.useContext(AccordionContext);

    if (!itemValue) {
        throw new Error(
            'AccordionContent must be used within an AccordionItem'
        );
    }

    if (!context) {
        throw new Error('AccordionContent must be used within an Accordion');
    }

    const isOpen = context.openValue === itemValue;
    const triggerId = `accordion-trigger-${itemValue}`;
    const contentId = `accordion-content-${itemValue}`;

    return (
        <AnimatePresence initial={false}>
            {isOpen ? (
                <motion.div
                    key='content'
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className={cn('overflow-hidden text-sm', className)}
                    id={contentId}
                    role='region'
                    aria-labelledby={triggerId}
                >
                    <motion.div
                        variants={{
                            collapsed: { opacity: 0, y: -8 },
                            open: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.24, ease: 'easeOut' }}
                        className='px-6 pb-6 pt-2 text-slate-300'
                    >
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
