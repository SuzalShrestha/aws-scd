import Hero from "@/components/elements/Hero"
import Navbar from "@/components/elements/Navbar"
import Schedule from "@/components/elements/Schedule"
import Speakers from "@/components/elements/Speakers"
import About from "@/components/elements/About"
import Registration from "@/components/elements/Registration"
import Partners from "@/components/elements/Partners"
import Team from "@/components/elements/Team"
import Footer from "@/components/elements/Footer"
import BackToTop from "@/components/elements/BackToTop"

export default function HomePage() {
    return (
        <>
            <main>
                <div className="min-h-screen bg-gradient-to-br from-[var(--aws-dark-blue)] to-[var(--aws-slate)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--aws-orange)]/5 to-transparent"></div>
                    <Navbar />
                    <Hero />
                </div>
            </main>
            <About />
            <Speakers />
            <Schedule />
            <Partners />
            <Registration />
            <Team />
            <Footer />
            <BackToTop />
        </>
    )
}
