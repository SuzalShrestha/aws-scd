import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

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

    openGraph: {
        title: "AWS Student Community Day Pokhara 2025",
        description: "Join the largest gathering of AWS enthusiasts, developers, and cloud professionals. Learn, network, and build the future together.",
        url: "https://aws-scd.vercel.app",
        siteName: "AWS Student Community Day Pokhara 2025",
        images: [
            {
                url: "https://aws-scd.vercel.app/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "AWS Student Community Day Pokhara 2025",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${neueSans.variable} antialiased font-sans`}>
                {children}
            </body>
        </html>
    );
}
