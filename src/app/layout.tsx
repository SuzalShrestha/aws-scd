import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';

const neueSans = IBM_Plex_Sans({
    variable: '--font-neue-sans',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'AWS Student Community Day Pokhara 2025',
    description:
        'Join the largest gathering of AWS enthusiasts, developers, and cloud professionals. Learn, network, and build the future together.',
    keywords: [
        'AWS Cloud Club',
        'AWS Cloud Club Pokhara',
        'aws scd pokhara',
        'aws scd nepal',
        'aws student community day',
        'student community day',
        'What is student community day?',
        'aws cloud',
        'aws scd',
        'AWS Cloud Club IOE Pashchimanchal',
        'AWS Cloud Club Prithivi Narayan',
        //can add more later
    ],
    openGraph: {
        title: 'AWS Student Community Day Pokhara 2025',
        description:
            'Join the largest gathering of AWS enthusiasts, developers, and cloud professionals. Learn, network, and build the future together.',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        siteName: 'AWS Student Community Day Pokhara 2025',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: 'AWS Student Community Day Pokhara 2025',
            },
        ],
        type: 'website',
    },
};

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
            <body className={`${neueSans.variable} antialiased font-sans`}>
                {children}
                <Analytics />
                <Toaster />
            </body>
        </html>
    );
}
