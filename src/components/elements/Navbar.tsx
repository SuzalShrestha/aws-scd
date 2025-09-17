import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="text-center">
                            <div className="text-xs font-medium text-slate-800 uppercase tracking-wide">AWS</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide">STUDENT COMMUNITY</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide">DAY</div>
                            <div className="text-xs text-slate-600 uppercase tracking-wide">Pokhara - 2025</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-slate-700 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-colors duration-200">
                            HOME
                        </a>
                        <a href="#about" className="text-slate-700 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-colors duration-200">
                            ABOUT
                        </a>
                        <a href="#speakers" className="text-slate-700 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-colors duration-200">
                            SPEAKERS
                        </a>
                        <a href="#schedule" className="text-slate-700 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-colors duration-200">
                            SCHEDULE
                        </a>
                        <a href="#register" className="text-slate-700 hover:text-orange-500 font-medium text-sm uppercase tracking-wide transition-colors duration-200">
                            REGISTRATION
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
