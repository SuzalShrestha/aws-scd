import About from '@/components/elements/About';
import Agenda from '@/components/elements/Agenda';
import FAQ from '@/components/elements/FAQ';
import Footer from '@/components/elements/Footer';
import GetInvolved from '@/components/elements/GetInvolved';
import Hero from '@/components/elements/Hero';
import Navbar from '@/components/elements/Navbar';
import Partners from '@/components/elements/Partners';
import PastEvents from '@/components/elements/PastEvents';
import Pokhara from '@/components/elements/Pokhara';
import Speakers from '@/components/elements/Speakers';
import Team from '@/components/elements/Team';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Pokhara />
                <Speakers />
                <Agenda />
                <GetInvolved />
                <Partners />
                <PastEvents />
                <Team />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
