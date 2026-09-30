'use client';

import { useEffect, useState } from 'react';
import { EVENT } from '@/constants/Event';

const target = new Date(EVENT.startsAt).getTime();

const remaining = () => {
    const s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    return [
        { label: 'Days', value: Math.floor(s / 86400) },
        { label: 'Hrs', value: Math.floor(s / 3600) % 24 },
        { label: 'Min', value: Math.floor(s / 60) % 60 },
        { label: 'Sec', value: s % 60 },
    ];
};

/** Compact mono ticker; renders dashes until mounted to avoid hydration mismatch. */
const Countdown = () => {
    const [parts, setParts] = useState<ReturnType<typeof remaining> | null>(null);

    useEffect(() => {
        setParts(remaining());
        const id = window.setInterval(() => setParts(remaining()), 1000);
        return () => window.clearInterval(id);
    }, []);

    const shown = parts ?? remaining().map((p) => ({ ...p, value: -1 }));

    return (
        <div
            role='timer'
            aria-label='Time until the event'
            className='inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 px-5 py-3.5 backdrop-blur-md'
        >
            <span className='eyebrow hidden text-white/45 sm:block'>
                Doors open in
            </span>
            <span className='hidden h-8 w-px bg-white/10 sm:block' />
            <div className='flex items-baseline gap-3.5 sm:gap-5'>
                {shown.map((p) => (
                    <div key={p.label} className='flex items-baseline gap-1'>
                        <span className='font-mono text-2xl font-medium tabular-nums text-white'>
                            {p.value < 0
                                ? '--'
                                : String(p.value).padStart(2, '0')}
                        </span>
                        <span className='font-mono text-[10px] uppercase text-white/40'>
                            {p.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;
