'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useRef } from 'react';
import { PEAK } from '@/components/art/Himalaya';
import { Reveal, SectionHead } from '@/components/motion';
import { scheduleTables, type ScheduleItem } from '@/constants/Schedules';
import { cn } from '@/lib/utils';

// "1:35 – 2:00" -> minutes since midnight; anything before 8 is afternoon.
const start = (t = '0:00') => {
    const [h, m] = t.split(/[:\s–-]/).map(Number);
    return (h < 8 ? h + 12 : h) * 60 + m;
};
const byTime = (a: ScheduleItem, b: ScheduleItem) => start(a.time) - start(b.time);

const common = scheduleTables.common.flatMap((t) => t.items).sort(byTime);
const TRACKS_START = 13 * 60 + 30;
const morning = common.filter((i) => start(i.time) < TRACKS_START);
const evening = common.filter((i) => start(i.time) >= TRACKS_START);
const halls = [scheduleTables.halls.main, scheduleTables.halls.side].map((h) => ({
    ...h,
    items: [...h.items].sort(byTime),
}));

const typeStyle: Record<string, string> = {
    Keynote: 'bg-glow text-ink',
    Workshop: 'bg-lake/20 text-lake',
    'Panel Discussion': 'bg-rose/20 text-rose',
    'Virtual Session': 'bg-violet-400/20 text-violet-300',
};

const Row = ({ item, compact }: { item: ScheduleItem; compact?: boolean }) =>
    item.isBreak ? (
        <li className='flex items-center gap-4 border-t border-dashed border-white/10 py-4 text-white/45'>
            <span className={cn('font-mono text-xs tabular-nums', compact ? 'w-24' : 'w-28')}>
                {item.time}
            </span>
            <Coffee className='size-4' />
            <span className='accent text-lg'>{item.topic}</span>
        </li>
    ) : (
        <li className={cn('grid border-t border-white/10', compact ? 'gap-1.5 py-4' : 'gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-4')}>
            <span className='pt-1 font-mono text-xs tabular-nums text-white/45'>{item.time}</span>
            <div>
                <p className={cn('font-medium tracking-tight text-white', compact ? 'text-base' : 'text-lg')}>
                    {item.topic}
                </p>
                {(item.type || item.speaker) && (
                    <div className='mt-2 flex flex-wrap items-center gap-2 text-sm text-white/55'>
                        {item.type && (
                            <span
                                className={cn(
                                    'rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider',
                                    typeStyle[item.type] ?? 'bg-white/10 text-white/70'
                                )}
                            >
                                {item.type}
                            </span>
                        )}
                        {item.speaker}
                    </div>
                )}
            </div>
        </li>
    );

const Phase = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <Reveal className='mt-14 first:mt-0'>
        <p className='eyebrow mb-4 text-glow'>{label}</p>
        {children}
    </Reveal>
);

/** Sky over Machhapuchhre that runs from dawn to dusk as the agenda scrolls. */
const SunPanel = ({ progress }: { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) => {
    const angle = useTransform(progress, [0, 1], [0.08, 0.92]);
    const cx = useTransform(angle, (t) => 200 + 150 * Math.cos(Math.PI * t));
    const cy = useTransform(angle, (t) => 300 - 190 * Math.sin(Math.PI * t));
    const background = useTransform(
        progress,
        [0, 0.45, 1],
        [
            'linear-gradient(180deg, #151c3d 0%, #6b3f63 55%, #f59a52 100%)',
            'linear-gradient(180deg, #2c6fa8 0%, #7fb6d8 55%, #d9ecf2 100%)',
            'linear-gradient(180deg, #1a1433 0%, #7a3558 55%, #ff7a3d 100%)',
        ]
    );
    const clock = useTransform(progress, (p) => {
        const mins = Math.round((8 * 60 + p * 9 * 60) / 5) * 5;
        return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
    });

    return (
        <motion.div
            style={{ background }}
            className='grain relative h-[480px] overflow-hidden rounded-[28px] border border-white/10'
        >
            <svg viewBox='0 0 400 480' preserveAspectRatio='xMidYMax slice' className='absolute inset-0 h-full w-full' aria-hidden>
                <path d='M50 300 A150 190 0 0 1 350 300' stroke='#fff' strokeOpacity='0.25' strokeDasharray='2 6' fill='none' />
                <motion.circle cx={cx} cy={cy} r='46' fill='#ffcf8a' opacity='0.25' />
                <motion.circle cx={cx} cy={cy} r='18' fill='#fff4dd' />
                <svg x='0' y='200' width='400' height='210' viewBox='760 170 760 460' preserveAspectRatio='xMidYMax meet'>
                    <path d={PEAK.body} fill='#0c1226' opacity='0.85' />
                    <path d={PEAK.lit} fill='#fff' opacity='0.12' />
                </svg>
                <rect x='-200' y='400' width='800' height='80' fill='#0a0f1c' opacity='0.85' />
                <rect x='-200' y='400' width='800' height='1' fill='#fff' opacity='0.2' />
            </svg>
            <div className='absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white'>
                <div>
                    <p className='eyebrow text-white/50'>Pokhara · local time</p>
                    <motion.p className='mt-1 font-mono text-4xl tabular-nums'>{clock}</motion.p>
                </div>
                <p className='accent text-2xl text-white/80'>Phewa Tal</p>
            </div>
        </motion.div>
    );
};

const Agenda = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.7'] });

    return (
        <section id='agenda' className='section grain relative bg-ink text-white'>
            <div className='shell'>
                <SectionHead
                    dark
                    index='04'
                    label='The day'
                    title={
                        <>
                            Sunrise <span className='accent text-glow'>to hi-tea.</span>
                        </>
                    }
                >
                    Here&apos;s how the 2025 edition ran: one main stage in
                    the morning, two halls in parallel after lunch. The 2026
                    agenda lands once speakers are confirmed.
                </SectionHead>

                <div className='mt-16 grid gap-10 lg:grid-cols-12'>
                    <div className='hidden lg:col-span-5 lg:block'>
                        <div className='sticky top-28'>
                            <SunPanel progress={scrollYProgress} />
                        </div>
                    </div>

                    <div ref={ref} className='relative lg:col-span-7'>
                        <Phase label='Morning · Main stage'>
                            <ul>{morning.map((i) => <Row key={i.id} item={i} />)}</ul>
                        </Phase>

                        <Phase label='Afternoon · Two halls in parallel'>
                            <div className='grid gap-4 md:grid-cols-2'>
                                {halls.map((h) => (
                                    <div key={h.title} className='rounded-3xl border border-white/10 bg-white/[0.03] px-5 pb-2 pt-5'>
                                        <p className='mb-3 font-medium'>{h.title.replace(' Sessions', '')}</p>
                                        <ul>{h.items.map((i) => <Row key={i.id} item={i} compact />)}</ul>
                                    </div>
                                ))}
                            </div>
                        </Phase>

                        <Phase label='Evening · Wrap-up'>
                            <ul>{evening.map((i) => <Row key={i.id} item={i} />)}</ul>
                        </Phase>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agenda;
