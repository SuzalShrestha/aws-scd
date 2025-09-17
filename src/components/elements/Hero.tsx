import { Calendar, MapPin, Play, UserPlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20" id="home">
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

                <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-8 leading-tight">
                    AWS Student Community Day
                    <br />
                    Pokhara 2025
                </h1>

                <div className="mb-12">
                    <span className="text-orange-400 text-xl font-medium">
                        2<sup className="text-sm">nd</sup> INDUSTRY ACADEMIA TECH CONFERENCE
                    </span>
                </div>

                <p className="text-white text-lg md:text-xl mb-16 leading-relaxed max-w-3xl mx-auto">
                    Join the largest gathering of AWS enthusiasts, developers,
                    <br />
                    and cloud professionals. Learn, network, and build the
                    <br />
                    future together.
                </p>

                <div className="mb-12 space-y-4">
                    <div className="flex items-center justify-center text-white text-lg">
                        <Calendar className="w-5 h-5 text-orange-400 mr-3" />
                        September 20, 2025
                    </div>
                    <div className="flex items-center justify-center text-white text-lg">
                        <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                        IOE Paschimanchal Campus, Pokhara
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium rounded-lg"
                    >
                        <UserPlus className="w-5 h-5 mr-2" />
                        Register Now
                    </Button>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 text-lg font-medium rounded-lg"
                    >
                        <Play className="w-5 h-5 mr-2" />
                        Watch Trailer
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
