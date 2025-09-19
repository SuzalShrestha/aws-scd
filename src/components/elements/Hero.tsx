import { Calendar, MapPin, Play, UserPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-slate-800" id="home">
            {/* Background layers */}
            <div className="hero-spotlights" aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-vignette" aria-hidden="true" />

            {/* Subtle corner orbs */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--aws-orange)]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--aws-light-blue)]/10 blur-3xl" aria-hidden="true" />

            <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center">
                    <Image
                        src={"/logo.png"}
                        alt="AWS logo"
                        width={2509}
                        height={1500}
                        className="w-32 h-32 object-contain"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[var(--aws-orange)] mb-6 leading-tight">
                    AWS Student Community Day
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
                    Pokhara 2025
                </h2>

                <div className="mb-12">
                    <span className="text-[var(--aws-orange)] text-lg font-medium uppercase tracking-wide">
                        1<sup className="text-sm">st</sup> Industry Academia Tech Conference
                    </span>
                </div>

                <p className="text-white/90 text-lg md:text-xl mb-16 leading-relaxed max-w-2xl mx-auto">
                    Join the largest gathering of AWS enthusiasts, developers, and cloud professionals. Learn, network, and build the future together.
                </p>

                <div className="mb-12 space-y-3">
                    <div className="flex items-center justify-center text-white/80 text-base">
                        <Calendar className="w-4 h-4 text-[var(--aws-orange)] mr-2" />
                       Coming Soon, 2025
                    </div>
                    <div className="flex items-center justify-center text-white/80 text-base">
                        <MapPin className="w-4 h-4 text-[var(--aws-orange)] mr-2" />
                        IOE Paschimanchal Campus, Pokhara
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#register">
                        <Button
                            size="lg"
                            className="bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-8 py-3 text-base font-medium"
                        >
                            <UserPlus className="w-4 h-4 mr-2" />
                            Register Now
                        </Button>
                    </a>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-base font-medium"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Trailer
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
