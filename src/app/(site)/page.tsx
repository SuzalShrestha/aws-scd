import Hero from "@/components/elements/Hero"
import Navbar from "@/components/elements/Navbar"
import Schedule from "@/components/elements/Schedule"
import Speakers from "@/components/elements/Speakers"
import About from "@/components/elements/About"
import Registration from "@/components/elements/Registration"
import Team from "@/components/elements/Team"
import Footer from "@/components/elements/Footer"

export default function HomePage() {
    return (
        <>
            <main>
                <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
                    <div className="absolute top-32 right-20 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
                    <div className="absolute bottom-40 left-32 w-1 h-1 bg-orange-400 rounded-full opacity-50"></div>
                    <div className="absolute bottom-20 right-40 w-1 h-1 bg-orange-400 rounded-full opacity-30"></div>
                    <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
                    <Navbar />
                    <Hero />
                </div>
            </main>
            <About />
            <Speakers />
            <Schedule />
            <Registration />
            <Team />
            <Footer />
        </>
    )
}
