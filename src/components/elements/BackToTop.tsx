"use client"
import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        
        // Check initial scroll position
        toggleVisibility()

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-4 bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-600 hover:scale-110 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Back to top"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    )
}

export default BackToTop
