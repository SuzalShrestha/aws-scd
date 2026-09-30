// Hand-drawn Annapurna skyline as seen from Pokhara at sunrise.
// Every layer shares viewBox 0 0 1600 900 so they stack and parallax independently.
import type { SVGProps } from 'react';

const VB = '0 0 1600 900';

export const PEAK = {
    // Machhapuchhre (Fishtail) — the twin summit is the little notch at 1100–1116.
    body: 'M820 620 L880 580 L930 545 L965 520 L990 470 L1005 478 L1030 420 L1058 340 L1080 268 L1100 190 L1108 202 L1116 196 L1134 262 L1160 330 L1178 365 L1196 372 L1222 410 L1262 455 L1300 470 L1330 500 L1380 548 L1440 620 Z',
    // East face catching first light.
    lit: 'M1100 190 L1108 202 L1116 196 L1134 262 L1160 330 L1178 365 L1196 372 L1222 410 L1262 455 L1300 470 L1330 500 L1380 548 L1440 620 L1200 630 L1160 540 L1128 430 L1110 310 Z',
    couloirs:
        'M1098 205 L1078 275 L1052 350 L1024 430 M1086 250 L1064 300 M1070 310 L1040 360 M1112 232 L1116 330 L1136 440 M1170 360 L1190 430',
};

// Annapurna South & Hiunchuli to the west, Annapurna IV/II to the east.
const RIDGE: [number, number][] = [
    [0, 610], [70, 585], [140, 596], [210, 560], [280, 572], [350, 540], [420, 552],
    [480, 520], [540, 530], [590, 490], [630, 500], [680, 440], [720, 410], [745, 360],
    [765, 335], [785, 350], [810, 330], [850, 380], [890, 372], [930, 420], [1000, 440],
    [1250, 440], [1300, 400], [1340, 410], [1390, 350], [1425, 318], [1445, 300],
    [1470, 322], [1500, 310], [1540, 352], [1575, 344], [1600, 360],
];
const FAR = `M${RIDGE.map((p) => p.join(' ')).join(' L')} L1600 900 L0 900 Z`;
// Sun from the east: every ridge segment that falls to the right gets a lit facet.
const FACETS = RIDGE.slice(1)
    .map((b, i) => [RIDGE[i], b] as const)
    .filter(([a, b]) => b[1] > a[1] && a[1] < 520)
    .map(([a, b]) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]} L${a[0] + (b[0] - a[0]) * 0.3} ${b[1] + 90} Z`)
    .join(' ');

const MID =
    'M0 660 C150 610 260 600 380 630 C500 660 560 620 680 610 C800 600 880 640 1000 650 C1120 660 1200 620 1320 615 C1440 610 1520 640 1600 630 L1600 900 L0 900 Z';
const NEAR =
    'M0 760 C120 720 240 700 360 715 C480 730 540 760 660 750 C800 738 880 700 1000 705 C1120 710 1200 750 1320 745 C1440 740 1520 720 1600 730 L1600 900 L0 900 Z';

type LayerProps = SVGProps<SVGSVGElement>;
const layer = (props: LayerProps) => ({
    viewBox: VB,
    preserveAspectRatio: 'xMaxYMax slice',
    'aria-hidden': true,
    ...props,
});

export function FarRange(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <defs>
                <linearGradient id='far' x1='0' y1='290' x2='0' y2='640' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#f7dcd4' />
                    <stop offset='0.22' stopColor='#cdb2cc' />
                    <stop offset='0.55' stopColor='#5d5990' />
                    <stop offset='1' stopColor='#252a52' />
                </linearGradient>
                <linearGradient id='facet' x1='0' y1='290' x2='0' y2='560' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#ffd9b0' stopOpacity='0.85' />
                    <stop offset='1' stopColor='#f08a5d' stopOpacity='0' />
                </linearGradient>
            </defs>
            <path d={FAR} fill='url(#far)' opacity='0.92' />
            <path d={FACETS} fill='url(#facet)' />
        </svg>
    );
}

export function Machhapuchhre(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <defs>
                <linearGradient id='shade' x1='0' y1='190' x2='0' y2='620' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#d9c6dc' />
                    <stop offset='0.3' stopColor='#6f6aa0' />
                    <stop offset='0.7' stopColor='#2c3160' />
                    <stop offset='1' stopColor='#1a2046' />
                </linearGradient>
                <linearGradient id='lit' x1='0' y1='190' x2='0' y2='620' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#fff1de' />
                    <stop offset='0.18' stopColor='#ffc38a' />
                    <stop offset='0.45' stopColor='#f08a5d' />
                    <stop offset='1' stopColor='#5b3a6c' stopOpacity='0.6' />
                </linearGradient>
                <radialGradient id='halo' cx='1110' cy='230' r='260' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#ffb46b' stopOpacity='0.35' />
                    <stop offset='1' stopColor='#ffb46b' stopOpacity='0' />
                </radialGradient>
            </defs>
            <circle cx='1110' cy='230' r='260' fill='url(#halo)' />
            <path d={PEAK.body} fill='url(#shade)' />
            <path d={PEAK.lit} fill='url(#lit)' />
            <path d={PEAK.couloirs} stroke='#fff' strokeOpacity='0.28' strokeWidth='1.5' fill='none' strokeLinecap='round' />
        </svg>
    );
}

export function MidHills(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <path d={MID} fill='#1a2146' />
        </svg>
    );
}

export function NearHills(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <path d={NEAR} fill='#0c1226' />
        </svg>
    );
}

// Deterministic star field so server and client render the same markup.
const STARS = Array.from({ length: 70 }, (_, i) => {
    const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
    return { x: r(1) * 1600, y: r(2) * 380, s: 0.6 + r(3) * 1.4, d: r(4) * 4 };
});

export function Stars(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            {STARS.map((s, i) => (
                <circle
                    key={i}
                    cx={s.x.toFixed(1)}
                    cy={s.y.toFixed(1)}
                    r={s.s.toFixed(2)}
                    fill='#fff'
                    className='animate-twinkle'
                    style={{ animationDelay: `${s.d.toFixed(2)}s` }}
                />
            ))}
        </svg>
    );
}

/** Pokhara is the paragliding capital of Nepal — a canopy, lines and a pilot. */
export function Paraglider({ className }: { className?: string }) {
    return (
        <svg viewBox='0 0 64 52' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id='canopy' x1='0' x2='1'>
                    <stop offset='0' stopColor='#ff6a2b' />
                    <stop offset='1' stopColor='#ffb347' />
                </linearGradient>
            </defs>
            <path d='M2 12 Q32 -6 62 12 L58 16 Q32 2 6 16 Z' fill='url(#canopy)' />
            <path d='M6 15 L31 42 M20 10 L31 42 M44 10 L32 42 M58 15 L32 42' stroke='#fff' strokeOpacity='0.55' strokeWidth='0.6' />
            <circle cx='31.5' cy='44' r='2.6' fill='#fff' />
        </svg>
    );
}
