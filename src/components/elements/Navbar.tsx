import React from 'react';

const Navbar = () => {
    return (
        <header className='fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='font-semibold text-[var(--aws-orange)]'>
                            AWS{' '}
                            <span className='font-normal text-gray-700'>
                                Student Community Day
                            </span>
                        </div>
                    </div>

                    <nav className='hidden md:flex space-x-8'>
                        <a
                            href='#home'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Home
                        </a>
                        <a
                            href='#about'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            About
                        </a>
                        <a
                            href='#speakers'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Speakers
                        </a>
                        <a
                            href='#schedule'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Schedule
                        </a>
                        <a
                            href='#partners'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Partners
                        </a>
                        <a
                            href='#team'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Team
                        </a>
                        <a
                            href='#register'
                            className='text-gray-600 hover:text-[var(--aws-orange)] font-medium text-sm transition-colors duration-200'
                        >
                            Register
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
