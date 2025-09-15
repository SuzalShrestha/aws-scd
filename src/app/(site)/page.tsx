import { Button } from "@/components/ui/button"
import {
    Calendar,
    MapPin,
    Play,
    UserPlus
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative overflow-hidden">
            <div className="absolute top-20 left-10 w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-40 left-32 w-1 h-1 bg-orange-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-20 right-40 w-1 h-1 bg-orange-400 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>

            <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="text-center">
                                <div className="text-xs font-medium text-gray-900 uppercase tracking-wide">AWS</div>
                                <div className="text-xs text-gray-600 uppercase tracking-wide">STUDENT COMMUNITY</div>
                                <div className="text-xs text-gray-600 uppercase tracking-wide">DAY</div>
                                <div className="text-xs text-gray-600 uppercase tracking-wide">Pokhara - 2025</div>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                HOME
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                ABOUT
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                COUNTDOWN
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                REGISTRATION
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                SPEAKERS
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                SCHEDULE
                            </a>
                            <a href="#" className="text-gray-900 hover:text-orange-500 font-medium text-sm uppercase tracking-wide">
                                ORGANIZERS
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
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
                            St.Joseph's Group of Institutions
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
            </main>
        </div>
    )
}
