import Hero from '@/components/elements/Hero';
import Navbar from '@/components/elements/Navbar';
import Schedule from '@/components/elements/Schedule';
import Speakers from '@/components/elements/Speakers';
import About from '@/components/elements/About';
import Registration from '@/components/elements/Registration';
import Partners from '@/components/elements/Partners';
import Team from '@/components/elements/Team';
import Footer from '@/components/elements/Footer';
import BackToTop from '@/components/elements/BackToTop';
import Countdown from '@/components/elements/Countdown';
import FAQ from '@/components/elements/FAQ';
import PastEvents from '@/components/elements/PastEvents';
import Sponsorship from '@/components/elements/Sponsorship';
import CallForSpeakers from '@/components/elements/CallForSpeakers';

export default function HomePage() {
    return (
        <>
            <main className='relative'>
                <Navbar />
                <Hero />
            </main>
            <About />
            <Countdown />
            <CallForSpeakers />
            <Schedule />
            {/* <Speakers /> */}
            <Registration />
            <PastEvents />
            {/* <Sponsorship /> */}
            {/* <Partners /> */}
            <Team />
            <FAQ />
            <Footer />
            <BackToTop />
        </>
    );
}
