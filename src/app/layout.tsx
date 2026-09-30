import type { Metadata, Viewport } from 'next';
import {
    Geist,
    Geist_Mono,
    Instrument_Serif,
    Noto_Serif_Devanagari,
} from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { MotionRoot } from '@/components/motion';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });
const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});
const instrument = Instrument_Serif({
    variable: '--font-instrument',
    subsets: ['latin'],
    weight: '400',
    style: ['normal', 'italic'],
});
const devanagari = Noto_Serif_Devanagari({
    variable: '--font-devanagari',
    subsets: ['devanagari'],
    weight: ['400', '600'],
});

const title = 'AWS Student Community Day Pokhara 2026';
const description =
    "Nepal's student cloud conference returns to Pokhara on 26 December 2026 — a free day of talks, workshops and people building on AWS, beneath Machhapuchhre.";

export const metadata: Metadata = {
    title,
    description,
    keywords: [
        'AWS Student Community Day',
        'AWS SCD Pokhara 2026',
        'aws scd nepal',
        'student community day',
        'AWS Cloud Club',
        'AWS Cloud Club Pokhara',
        'AWS Cloud Club IOE Pashchimanchal',
        'AWS Cloud Club Prithvi Narayan',
        'cloud conference Nepal',
        'Pokhara tech event',
    ],
    openGraph: {
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        siteName: title,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
        type: 'website',
    },
};

export const viewport: Viewport = { themeColor: '#0a0f1c' };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name='google-site-verification'
                    content='DjIVg5KFE25naFV4YMtBOUydp9Px-jySOvb0Grv1ZmM'
                />
            </head>
            <body
                className={`${geist.variable} ${geistMono.variable} ${instrument.variable} ${devanagari.variable} antialiased`}
            >
                <MotionRoot>{children}</MotionRoot>
                <Analytics />
            </body>
        </html>
    );
}
