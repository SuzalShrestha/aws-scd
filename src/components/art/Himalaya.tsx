// Hand-drawn Annapurna skyline as seen from Pokhara at sunrise.
// Every layer shares viewBox 0 0 1600 900 so they stack and parallax independently.
import type { SVGProps } from 'react';

const VB = '0 0 1600 900';
const n = (v: number) => v.toFixed(1);

// Deterministic noise so server and client render the same markup.
export const rand = (i: number, k: number) =>
    ((Math.sin(i * 12.9898 + k * 78.233) * 43758.5453) % 1 + 1) % 1;

export const PEAK = {
    // Machhapuchhre (Fishtail) — the twin summit is the little notch at 1100–1116.
    body: 'M820 620 L880 580 L930 545 L965 520 L990 470 L1005 478 L1030 420 L1058 340 L1080 268 L1100 190 L1108 202 L1116 196 L1134 262 L1160 330 L1178 365 L1196 372 L1222 410 L1262 455 L1300 470 L1330 500 L1380 548 L1440 620 Z',
    // East face catching first light.
    lit: 'M1100 190 L1108 202 L1116 196 L1134 262 L1160 330 L1178 365 L1196 372 L1222 410 L1262 455 L1300 470 L1330 500 L1380 548 L1440 620 L1200 630 L1160 540 L1128 430 L1110 310 Z',
    couloirs:
        'M1098 205 L1078 275 L1052 350 L1024 430 M1086 250 L1064 300 M1070 310 L1040 360 M1112 232 L1116 330 L1136 440 M1170 360 L1190 430',
    // Sunlit edge of the east ridge, and the fainter west ridge.
    rim: 'M1100 190 L1108 202 L1116 196 L1134 262 L1160 330 L1178 365 L1196 372 L1222 410 L1262 455 L1300 470',
    westRim: 'M1100 190 L1080 268 L1058 340 L1030 420 L1005 478',
    // Bare rock too steep to hold snow.
    rock: 'M1128 300 L1140 352 L1126 372 Z M1150 400 L1172 452 L1148 470 L1140 430 Z M1196 420 L1230 470 L1200 480 Z M1062 372 L1074 428 L1050 452 Z M1022 470 L1042 502 L1010 522 Z M1250 500 L1290 540 L1252 552 Z',
    spurs: 'M1134 262 L1122 300 M1160 330 L1146 372 L1150 396 M1196 372 L1186 410 M1222 410 L1214 440 M1262 455 L1240 480',
    // Wind-blown spindrift trailing off the summit.
    plume: 'M1112 198 C1140 190 1176 184 1226 170 C1196 192 1152 204 1114 206 Z',
};

type Pt = [number, number];
const line = (pts: Pt[]) => `M${pts.map((p) => p.join(' ')).join(' L')}`;
const fill = (pts: Pt[]) => `${line(pts)} L1600 900 L0 900 Z`;

// Annapurna South & Hiunchuli to the west, Annapurna IV/II to the east.
const RIDGE: Pt[] = [
    [0, 610], [70, 585], [140, 596], [210, 560], [280, 572], [350, 540], [420, 552],
    [480, 520], [540, 530], [590, 490], [630, 500], [680, 440], [720, 410], [745, 360],
    [765, 335], [785, 350], [810, 330], [850, 380], [890, 372], [930, 420], [1000, 440],
    [1250, 440], [1300, 400], [1340, 410], [1390, 350], [1425, 318], [1445, 300],
    [1470, 322], [1500, 310], [1540, 352], [1575, 344], [1600, 360],
];
// The higher, hazier massif behind.
const BACK: Pt[] = [
    [0, 520], [80, 488], [150, 500], [230, 456], [300, 470], [370, 428], [430, 442],
    [500, 400], [560, 414], [640, 380], [700, 392], [760, 352], [830, 366], [900, 344],
    [960, 372], [1040, 392], [1120, 404], [1200, 402], [1270, 430], [1330, 378],
    [1370, 352], [1410, 300], [1450, 268], [1490, 288], [1530, 262], [1570, 284], [1600, 276],
];
export const FAR = fill(RIDGE);

// Sun from the east: slopes falling to the right are lit, slopes rising to the right sit in shade.
const segs = RIDGE.slice(1).map((b, i) => [RIDGE[i], b] as const).filter(([a]) => a[1] < 520);
const FACETS = segs
    .filter(([a, b]) => b[1] > a[1])
    .map(([a, b]) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]} L${n(a[0] + (b[0] - a[0]) * 0.3)} ${b[1] + 90} Z`)
    .join(' ');
const SHADOWS = segs
    .filter(([a, b]) => b[1] < a[1])
    .map(([a, b]) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]} L${n(a[0] + (b[0] - a[0]) * 0.75)} ${a[1] + 100} Z`)
    .join(' ');

// Rolling foothills as a sum of sines, so trees and villages can sit exactly on the ridge.
type Wave = [amp: number, period: number, phase: number];
export const hill = (base: number, waves: Wave[]) => (x: number) =>
    waves.reduce((y, [a, p, ph]) => y + a * Math.sin(x / p + ph), base);

export const crest = (f: (x: number) => number, x0 = 0, x1 = 1600) => {
    let d = `M${x0} ${n(f(x0))}`;
    for (let x = x0 + 8; x < x1; x += 8) d += ` L${x} ${n(f(x))}`;
    return `${d} L${x1} ${n(f(x1))}`;
};
export const area = (f: (x: number) => number, x0 = 0, x1 = 1600, bottom = 900) =>
    `${crest(f, x0, x1)} L${x1} ${bottom} L${x0} ${bottom} Z`;

const pine = (x: number, y: number, w: number, h: number) =>
    `M${n(x - w)} ${n(y)}L${n(x - w * 0.45)} ${n(y - h * 0.42)}L${n(x - w * 0.72)} ${n(y - h * 0.42)}L${n(x)} ${n(y - h)}L${n(x + w * 0.72)} ${n(y - h * 0.42)}L${n(x + w * 0.45)} ${n(y - h * 0.42)}L${n(x + w)} ${n(y)}Z`;

/** A ragged line of pines along `f`, with the odd clearing. */
export const treeline = (f: (x: number) => number, seed: number, x0 = 0, x1 = 1600, size = 1) => {
    let d = '';
    for (let x = x0, i = 0; x < x1; i++) {
        x += (5 + rand(i, seed) * 9) * size;
        if (rand(i, seed + 2) < 0.15) {
            x += 22 * size;
            continue;
        }
        const h = (11 + rand(i, seed + 1) * 15) * size;
        d += pine(x, f(x) + 3 * size, h * 0.32, h);
    }
    return d;
};

const midY = hill(630, [[18, 150, 0.5], [10, 53, 2], [5, 21, 0]]);
const nearY = hill(738, [[20, 190, 2], [9, 61, 0], [4, 19, 1]]);
const MID = area(midY);
const MID_TREES = treeline(midY, 11);
const NEAR = area(nearY);
const NEAR_TREES = treeline(nearY, 23, 0, 1600, 1.4);

type LayerProps = SVGProps<SVGSVGElement>;
const layer = (props: LayerProps) => ({
    viewBox: VB,
    preserveAspectRatio: 'xMaxYMax slice',
    // Lets glows and rays spill past the cropped top edge instead of clipping in a hard line.
    overflow: 'visible',
    'aria-hidden': true,
    ...props,
});

// Where the sun is about to clear the ridge, just east of the Fishtail.
const SUN: Pt = [1290, 418];
const RAYS = [-62, -40, -22, -6, 12, 30, 52]
    .map((deg, i) => {
        const a = ((deg - 90) * Math.PI) / 180;
        const len = 260 + rand(i, 5) * 140;
        const spread = 0.02 + rand(i, 6) * 0.025;
        const p = (da: number) => `${n(SUN[0] + Math.cos(a + da) * len)} ${n(SUN[1] + Math.sin(a + da) * len)}`;
        return `M${SUN[0]} ${SUN[1]} L${p(-spread)} L${p(spread)} Z`;
    })
    .join(' ');

export function FarRange(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <defs>
                <linearGradient id='back' x1='0' y1='260' x2='0' y2='520' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#ffe4d6' />
                    <stop offset='0.35' stopColor='#c9a9c9' />
                    <stop offset='1' stopColor='#6b5f95' stopOpacity='0' />
                </linearGradient>
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
                <radialGradient id='ray' cx={SUN[0]} cy={SUN[1]} r='400' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#ffd9a8' stopOpacity='0.24' />
                    <stop offset='1' stopColor='#ffd9a8' stopOpacity='0' />
                </radialGradient>
                <radialGradient id='sun' cx={SUN[0]} cy={SUN[1]} r='90' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#fffaf0' />
                    <stop offset='0.2' stopColor='#ffe2b0' />
                    <stop offset='0.5' stopColor='#ffb46b' stopOpacity='0.45' />
                    <stop offset='1' stopColor='#ff9a52' stopOpacity='0' />
                </radialGradient>
                <filter id='soft' x='-20%' y='-20%' width='140%' height='140%'>
                    <feGaussianBlur stdDeviation='3' />
                </filter>
                {/* Haze pooling in the valleys between the ranges. */}
                <linearGradient id='haze' x1='0' y1='420' x2='0' y2='640' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#c88aa0' stopOpacity='0' />
                    <stop offset='1' stopColor='#c88aa0' stopOpacity='0.35' />
                </linearGradient>
            </defs>
            <path d={RAYS} fill='url(#ray)' filter='url(#soft)' />
            <circle cx={SUN[0]} cy={SUN[1]} r='90' fill='url(#sun)' />
            <path d={fill(BACK)} fill='url(#back)' opacity='0.55' />
            <path d={line(BACK)} stroke='#ffe9d8' strokeOpacity='0.35' strokeWidth='1.2' fill='none' strokeLinejoin='round' />
            <path d={FAR} fill='url(#far)' opacity='0.94' />
            <path d={SHADOWS} fill='#1f2150' opacity='0.28' />
            <path d={FACETS} fill='url(#facet)' />
            <path d={line(RIDGE)} stroke='#fff0e2' strokeOpacity='0.55' strokeWidth='1.4' fill='none' strokeLinejoin='round' />
            <rect y='420' width='1600' height='220' fill='url(#haze)' />
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
                <filter id='spindrift' x='-20%' y='-100%' width='140%' height='300%'>
                    <feGaussianBlur stdDeviation='6' />
                </filter>
            </defs>
            <circle cx='1110' cy='230' r='260' fill='url(#halo)' />
            <path d={PEAK.plume} fill='#ffe6d0' opacity='0.3' filter='url(#spindrift)' />
            <path d={PEAK.body} fill='url(#shade)' />
            <path d={PEAK.lit} fill='url(#lit)' />
            <path d={PEAK.rock} fill='#3b2a55' opacity='0.4' />
            <path d={PEAK.couloirs} stroke='#fff' strokeOpacity='0.28' strokeWidth='1.5' fill='none' strokeLinecap='round' />
            <path d={PEAK.spurs} stroke='#fff6e8' strokeOpacity='0.5' strokeWidth='1.2' fill='none' strokeLinecap='round' />
            <path d={PEAK.westRim} stroke='#e8dcf2' strokeOpacity='0.35' strokeWidth='1.2' fill='none' strokeLinejoin='round' />
            <path d={PEAK.rim} stroke='#fff6ea' strokeOpacity='0.9' strokeWidth='2' fill='none' strokeLinejoin='round' strokeLinecap='round' />
        </svg>
    );
}

export function MidHills(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <defs>
                <linearGradient id='mid' x1='0' y1='580' x2='0' y2='760' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#2e2d5e' />
                    <stop offset='1' stopColor='#141a3a' />
                </linearGradient>
            </defs>
            <path d={MID} fill='url(#mid)' />
            <path d={MID_TREES} fill='url(#mid)' />
            <path d={crest(midY)} stroke='#ffb38a' strokeOpacity='0.16' strokeWidth='1.5' fill='none' />
        </svg>
    );
}

export function NearHills(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <path d={NEAR} fill='#0c1226' />
            <path d={NEAR_TREES} fill='#0c1226' />
        </svg>
    );
}

const STARS = Array.from({ length: 70 }, (_, i) => ({
    x: rand(i, 1) * 1600,
    y: rand(i, 2) * 380,
    s: 0.6 + rand(i, 3) * 1.4,
    d: rand(i, 4) * 4,
}));

export function Stars(props: LayerProps) {
    return (
        <svg {...layer(props)}>
            <defs>
                <linearGradient id='trail' x1='0' x2='1'>
                    <stop offset='0' stopColor='#fff' />
                    <stop offset='1' stopColor='#fff' stopOpacity='0' />
                </linearGradient>
            </defs>
            {STARS.map((s, i) => (
                <g key={i} className='animate-twinkle' style={{ animationDelay: `${s.d.toFixed(2)}s` }}>
                    <circle cx={n(s.x)} cy={n(s.y)} r={s.s.toFixed(2)} fill='#fff' />
                    {/* The brightest get a diffraction sparkle. */}
                    {s.s > 1.85 && (
                        <path
                            d={`M${n(s.x - 7)} ${n(s.y)}H${n(s.x + 7)}M${n(s.x)} ${n(s.y - 7)}V${n(s.y + 7)}`}
                            stroke='#fff'
                            strokeOpacity='0.5'
                            strokeWidth='0.6'
                        />
                    )}
                </g>
            ))}
            <g transform='rotate(-22 640 60)'>
                <rect x='640' y='60' width='150' height='1.6' rx='0.8' fill='url(#trail)' className='animate-shoot' />
            </g>
        </svg>
    );
}

// Points along the canopy's leading (top) and trailing (bottom) edges.
const quad = (t: number, [x0, y0]: Pt, [x1, y1]: Pt, [x2, y2]: Pt) => {
    const u = 1 - t;
    return `${n(u * u * x0 + 2 * u * t * x1 + t * t * x2)} ${n(u * u * y0 + 2 * u * t * y1 + t * t * y2)}`;
};
const CELLS = Array.from({ length: 9 }, (_, i) => {
    const t = (i + 1) / 10;
    return `M${quad(t, [3, 14], [32, -4], [61, 14])} L${quad(t, [7, 19], [32, 5], [57, 19])}`;
}).join(' ');

/** Pokhara is the paragliding capital of Nepal — a ribbed canopy, lines and a seated pilot. */
export function Paraglider({ className }: { className?: string }) {
    return (
        <svg viewBox='0 0 64 56' className={className} aria-hidden='true'>
            <defs>
                <linearGradient id='canopy' x1='0' x2='1'>
                    <stop offset='0' stopColor='#ff5a1f' />
                    <stop offset='0.42' stopColor='#ff8a2b' />
                    <stop offset='0.44' stopColor='#fff4e0' />
                    <stop offset='0.56' stopColor='#fff4e0' />
                    <stop offset='0.58' stopColor='#ffb347' />
                    <stop offset='1' stopColor='#ffd36b' />
                </linearGradient>
            </defs>
            <path d='M7 19 L31 45 M14 13 L31 45 M24 9 L31.5 45 M40 9 L32.5 45 M50 13 L33 45 M57 19 L33 45' stroke='#fff' strokeOpacity='0.5' strokeWidth='0.4' />
            <path d='M3 14 Q32 -4 61 14 L57 19 Q32 5 7 19 Z' fill='url(#canopy)' />
            <path d='M7 19 Q32 5 57 19 L57.6 18 Q32 3.8 6.4 18 Z' fill='#7a2a10' opacity='0.35' />
            <path d={CELLS} stroke='#7a2a10' strokeOpacity='0.35' strokeWidth='0.5' />
            {/* Pilot in a seated harness, legs out front. */}
            <circle cx='32' cy='45.5' r='1.6' fill='#ffe3c4' />
            <path d='M30 47 L34.5 47 L35 51 L30.5 51.5 Z' fill='#1d2550' />
            <path d='M34.5 50.5 L38.5 51.5' stroke='#1d2550' strokeWidth='1.4' strokeLinecap='round' />
        </svg>
    );
}

/** A loose skein of birds heading down-valley. */
export function Birds({ className }: { className?: string }) {
    const flock: [number, number, number][] = [[0, 10, 1], [16, 4, 0.8], [30, 14, 0.9], [44, 7, 0.7], [54, 18, 0.6]];
    return (
        <svg viewBox='-4 -4 72 32' className={className} aria-hidden='true'>
            {flock.map(([x, y, s], i) => (
                <path
                    key={i}
                    d={`M${x} ${y} q${3 * s} ${-3.5 * s} ${6 * s} 0 q${3 * s} ${-3.5 * s} ${6 * s} 0`}
                    stroke='currentColor'
                    strokeWidth='2.2'
                    strokeLinecap='round'
                    fill='none'
                    className='origin-center animate-flap [transform-box:fill-box]'
                    style={{ animationDelay: `${(i * -0.23).toFixed(2)}s` }}
                />
            ))}
        </svg>
    );
}
