"use client"

import { Calendar, MapPin, Play, UserPlus } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"

const heroVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
}

const Hero = () => {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden" id="home">
            {/* Background image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/scd-hero.jpg')" }}
                aria-hidden="true"
            />

            <div className="relative w-full px-4 pb-16 pt-28 sm:px-8 md:pt-40">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <motion.div
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="inline-flex items-center justify-center"
                    >
                        <Image
                            src="/logo.png"
                            alt="AWS logo"
                            width={2509}
                            height={1500}
                            className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-4xl font-bold tracking-tight text-[var(--aws-orange)] sm:text-5xl md:text-6xl"
                    >
                        AWS Student Community Day
                    </motion.h1>

                    <motion.h2
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="text-2xl font-light text-white sm:text-3xl md:text-4xl"
                    >
                        Pokhara 2025
                    </motion.h2>

                    <motion.div
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="text-[var(--aws-orange)] text-sm font-semibold uppercase tracking-[0.35em]"
                    >
                        1<sup className="text-xs">st</sup> Industry Academia Tech Conference
                    </motion.div>

                    <motion.p
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl"
                    >
                        Join the largest gathering of AWS enthusiasts, developers, and cloud professionals. Learn, network, and build the future together.
                    </motion.p>

                    <motion.div
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        className="space-y-3 text-white/80"
                    >
                        <div className="flex items-center justify-center text-sm sm:text-base">
                            <Calendar className="mr-2 h-4 w-4 text-[var(--aws-orange)]" />
                            Coming Soon, 2025
                        </div>
                        <div className="flex items-center justify-center text-sm sm:text-base">
                            <MapPin className="mr-2 h-4 w-4 text-[var(--aws-orange)]" />
                            IOE Paschimanchal Campus, Pokhara
                        </div>
                    </motion.div>

                    <motion.div
                        variants={heroVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.6}
                        className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
                    >
                        <a href="#register">
                            <Button
                                size="lg"
                                className="bg-[var(--aws-orange)] hover:bg-[var(--aws-orange)]/90 text-white px-8 py-3 text-base font-medium shadow-lg shadow-[var(--aws-orange)]/20"
                            >
                                <UserPlus className="mr-2 h-4 w-4" />
                                Register Now
                            </Button>
                        </a>
                        <Button
                            size="lg"
                            variant="ghost"
                            className="border border-white/15 text-white hover:bg-white/10 px-8 py-3 text-base font-medium"
                        >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Trailer
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
