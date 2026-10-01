'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { useRef } from 'react';
import { area, FAR, Paraglider, PEAK, rand, treeline } from '@/components/art/Himalaya';
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

// Phewa Tal scene, in the panel's 400×480 viewBox. The lake shore sits at y=360.
const SHORE = 360;
const west = (x: number) => SHORE - 78 * Math.exp(-(((x - 50) / 95) ** 2)) + 2 * Math.sin(x / 7);
const east = (x: number) => SHORE - 40 * Math.exp(-(((x - 390) / 70) ** 2)) + 1.5 * Math.sin(x / 6);
const WEST = area(west, -20, 230, SHORE + 2);
const EAST = area(east, 250, 420, SHORE + 2);
const TREES = [
    treeline(west, 3, -20, 26, 0.7),
    treeline(west, 3, 74, 225, 0.7),
    treeline(east, 7, 255, 420, 0.6),
].join(' ');
// Tal Barahi's island, with a few pines round the temple.
const ISLAND_TREES = treeline(() => 3, 9, -26, -8, 0.45) + treeline(() => 3, 13, 8, 26, 0.45);

const PANEL_STARS = Array.from({ length: 36 }, (_, i) => ({
    x: rand(i, 31) * 400,
    y: rand(i, 32) * 250,
    r: 0.4 + rand(i, 33) * 0.9,
}));
const RIPPLES = Array.from({ length: 22 }, (_, i) => ({
    x: rand(i, 41) * 400,
    y: SHORE + 8 + rand(i, 42) ** 1.4 * 110,
    w: 8 + rand(i, 43) * 26,
}));
// Sun glitter widens toward the viewer.
const GLITTER = Array.from({ length: 11 }, (_, i) => {
    const w = 5 + i * 3.2;
    return { x: (rand(i, 51) - 0.5) * 6 - w / 2, y: SHORE + 6 + i * 10, w };
});
const HOURS = [9, 12, 15].map((h) => {
    const t = Math.PI * (0.08 + (0.84 * (h - 8)) / 9);
    const [dx, dy] = [Math.cos(t), -Math.sin(t)];
    return { h, x: 200 + 150 * dx, y: 300 + 190 * dy, lx: 200 + 168 * dx, ly: 300 + 208 * dy };
});

const Cloud = ({ s = 1 }: { s?: number }) => (
    <g transform={`scale(${s})`}>
        <ellipse cx='0' cy='0' rx='34' ry='7' />
        <circle cx='-10' cy='-6' r='9' />
        <circle cx='6' cy='-10' r='12' />
        <circle cx='20' cy='-4' r='7' />
    </g>
);

/** Sky over Machhapuchhre and Phewa Tal that runs from dawn to dusk as the agenda scrolls. */
const SunPanel = ({ progress }: { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) => {
    const angle = useTransform(progress, [0, 1], [0.08, 0.92]);
    const cx = useTransform(angle, (t) => 200 + 150 * Math.cos(Math.PI * t));
    const cy = useTransform(angle, (t) => 300 - 190 * Math.sin(Math.PI * t));
    // Low sun: alpenglow on the peak, stars out, long glitter on the water.
    const low = useTransform(angle, (t) => 1 - Math.sin(Math.PI * t));
    const glow = useTransform(low, [0, 1], [0.12, 0.75]);
    const glitter = useTransform(low, [0, 1], [0.35, 0.9]);
    const stars = useTransform(progress, [0, 0.18, 0.8, 1], [0.9, 0, 0, 0.6]);
    const clouds = useTransform(progress, [0, 0.3, 0.7, 1], [0.18, 0.6, 0.6, 0.25]);
    const cloudX = useTransform(progress, [0, 1], [-30, 50]);
    const boatX = useTransform(progress, [0, 1], [0, 120]);
    const gliderLeft = useTransform(progress, [0.25, 0.75], ['70%', '12%']);
    const gliderTop = useTransform(progress, [0.25, 0.5, 0.75], ['26%', '20%', '30%']);
    const glider = useTransform(progress, [0.25, 0.32, 0.68, 0.75], [0, 1, 1, 0]);
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
                <defs>
                    <radialGradient id='sp-sun'>
                        <stop offset='0' stopColor='#fff6e0' stopOpacity='0.9' />
                        <stop offset='0.3' stopColor='#ffd08a' stopOpacity='0.4' />
                        <stop offset='1' stopColor='#ffb066' stopOpacity='0' />
                    </radialGradient>
                    <linearGradient id='sp-far' x1='0' y1='300' x2='0' y2='620' gradientUnits='userSpaceOnUse'>
                        <stop offset='0' stopColor='#e4ddee' />
                        <stop offset='0.3' stopColor='#7c7aa8' />
                        <stop offset='1' stopColor='#1f2550' />
                    </linearGradient>
                    <linearGradient id='sp-peak' x1='0' y1='190' x2='0' y2='620' gradientUnits='userSpaceOnUse'>
                        <stop offset='0' stopColor='#f1ecf6' />
                        <stop offset='0.25' stopColor='#7b78a8' />
                        <stop offset='0.6' stopColor='#252b55' />
                        <stop offset='1' stopColor='#111735' />
                    </linearGradient>
                    <linearGradient id='sp-glow' x1='0' y1='190' x2='0' y2='620' gradientUnits='userSpaceOnUse'>
                        <stop offset='0' stopColor='#fff1de' />
                        <stop offset='0.3' stopColor='#ffb27a' />
                        <stop offset='1' stopColor='#f08a5d' stopOpacity='0' />
                    </linearGradient>
                    <clipPath id='sp-lake'>
                        <rect x='-200' y={SHORE} width='800' height='200' />
                    </clipPath>
                </defs>

                <motion.g style={{ opacity: stars }} fill='#fff'>
                    {PANEL_STARS.map((s, i) => (
                        <circle key={i} cx={s.x.toFixed(1)} cy={s.y.toFixed(1)} r={s.r.toFixed(2)} />
                    ))}
                </motion.g>

                <path d='M50 300 A150 190 0 0 1 350 300' stroke='#fff' strokeOpacity='0.25' strokeDasharray='2 6' fill='none' />
                {HOURS.map((h) => (
                    <g key={h.h}>
                        <circle cx={h.x.toFixed(1)} cy={h.y.toFixed(1)} r='2' fill='#fff' fillOpacity='0.5' />
                        <text x={h.lx.toFixed(1)} y={h.ly.toFixed(1)} textAnchor='middle' dominantBaseline='middle' className='fill-white/45 font-mono text-[9px]'>
                            {String(h.h).padStart(2, '0')}:00
                        </text>
                    </g>
                ))}
                <motion.circle cx={cx} cy={cy} r='70' fill='url(#sp-sun)' />
                <motion.circle cx={cx} cy={cy} r='15' fill='#fffaf0' />

                <motion.g style={{ x: cloudX, opacity: clouds }} fill='#fff'>
                    <g transform='translate(90 120)'><Cloud /></g>
                    <g transform='translate(300 80)'><Cloud s={0.7} /></g>
                    <g transform='translate(250 190)'><Cloud s={0.5} /></g>
                </motion.g>

                {/* Everything above the shore; drawn once, then mirrored into the lake. */}
                <g id='sp-scene'>
                    <svg x='0' y='150' width='400' height='210' viewBox='760 170 760 460' preserveAspectRatio='xMidYMax meet'>
                        <path d={FAR} fill='url(#sp-far)' opacity='0.65' />
                        <path d={PEAK.body} fill='url(#sp-peak)' />
                        <motion.path d={PEAK.lit} fill='url(#sp-glow)' style={{ opacity: glow }} />
                        <path d={PEAK.rock} fill='#1a1f45' opacity='0.35' />
                        <path d={PEAK.couloirs} stroke='#fff' strokeOpacity='0.25' strokeWidth='2' fill='none' strokeLinecap='round' />
                        <path d={PEAK.rim} stroke='#fff' strokeOpacity='0.6' strokeWidth='2.5' fill='none' strokeLinejoin='round' />
                    </svg>
                    <path d={WEST} fill='#0d1330' />
                    <path d={EAST} fill='#111838' />
                    <path d={TREES} fill='#0d1330' />
                    {/* World Peace Pagoda on the ridge above the south shore. */}
                    <g transform={`translate(50 ${(west(50) + 1).toFixed(1)})`}>
                        <rect x='-14' y='-4' width='28' height='4' fill='#d9d4e4' />
                        <rect x='-10' y='-8' width='20' height='4' fill='#ece8f2' />
                        <path d='M-8 -8 A8 7 0 0 1 8 -8 Z' fill='#faf8fc' />
                        <rect x='-2' y='-17' width='4' height='3' fill='#ece8f2' />
                        <path d='M-1.2 -17 L0 -27 L1.2 -17 Z' fill='#f5b042' />
                        <circle cx='0' cy='-10.5' r='1.3' fill='#f5b042' />
                    </g>
                </g>

                <rect x='-200' y={SHORE} width='800' height='200' fill='#0b1530' opacity='0.55' />
                <g clipPath='url(#sp-lake)'>
                    <use href='#sp-scene' transform={`matrix(1 0 0 -1 0 ${SHORE * 2})`} opacity='0.4' />
                </g>
                <rect x='-200' y={SHORE} width='800' height='1' fill='#fff' opacity='0.25' />
                <motion.g style={{ x: cx, opacity: glitter }} fill='#ffe2b0'>
                    {GLITTER.map((g, i) => (
                        <rect key={i} x={g.x.toFixed(1)} y={g.y} width={g.w.toFixed(1)} height='1.6' rx='0.8' />
                    ))}
                </motion.g>
                <g fill='#fff' opacity='0.14'>
                    {RIPPLES.map((r, i) => (
                        <rect key={i} x={r.x.toFixed(1)} y={r.y.toFixed(1)} width={r.w.toFixed(1)} height='1' rx='0.5' />
                    ))}
                </g>

                {/* Tal Barahi, the two-roofed temple on its island. */}
                <g transform={`translate(318 ${SHORE + 24})`}>
                    <ellipse cx='0' cy='3' rx='30' ry='4.5' fill='#0b1128' />
                    <path d={ISLAND_TREES} fill='#0b1128' />
                    <rect x='-5' y='-8' width='10' height='9' fill='#eadfcb' />
                    <path d='M-10 -8 L10 -8 L5.5 -12.5 L-5.5 -12.5 Z' fill='#9b2f2f' />
                    <rect x='-3.5' y='-16' width='7' height='3.5' fill='#eadfcb' />
                    <path d='M-7 -16 L7 -16 L3 -20 L-3 -20 Z' fill='#9b2f2f' />
                    <path d='M-0.8 -20 L0 -25 L0.8 -20 Z' fill='#f5b042' />
                </g>

                {/* A painted doonga drifting across the lake. */}
                <motion.g style={{ x: boatX }}>
                    <g transform={`translate(60 ${SHORE + 26})`}>
                        <path d='M-13 5 Q0 8 13 5' stroke='#fff' strokeOpacity='0.2' fill='none' />
                        <path d='M-17 0 Q0 5 17 0 L13.5 4 Q0 6.5 -13.5 4 Z' fill='#e0592a' />
                        <path d='M-15 1.4 Q0 5.6 15 1.4' stroke='#2f6fe0' strokeWidth='1' fill='none' />
                        <circle cx='3' cy='-7.5' r='1.7' fill='#141a33' />
                        <path d='M1.4 -5.5 L4.8 -5.5 L4.4 1 L1.8 1 Z' fill='#141a33' />
                        <path d='M8 -9 L-3 6' stroke='#141a33' strokeWidth='0.8' strokeLinecap='round' />
                    </g>
                </motion.g>
            </svg>

            <motion.div
                style={{ left: gliderLeft, top: gliderTop, opacity: glider }}
                className='pointer-events-none absolute w-8'
            >
                <Paraglider />
            </motion.div>

            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060913]/80 to-transparent' />
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
