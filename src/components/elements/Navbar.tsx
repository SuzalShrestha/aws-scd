import React from 'react'

const Navbar = () => {
    return (
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
    )
}

export default Navbar
