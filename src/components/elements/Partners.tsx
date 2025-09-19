"use client"
import React from 'react'
import { Partners } from '@/constants/Partners'
import Image from 'next/image'

const PartnersSection = () => {
    // Duplicate the array for continuous scroll
    const duplicatedPartners = [...Partners, ...Partners]

    return (
        <section className="bg-gray-50 py-20" id="partners">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">Partners</h2>
                </div>
                
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-flex animate-marquee">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex items-center justify-center px-8 mx-4"
                            >
                                <div className="h-16 w-32 flex items-center justify-center">
                                    <Image
                                        width={120}
                                        height={60}
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 w-auto object-contain opacity-70 grayscale"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
