import { EventSpeakers } from '@/constants/EventSpeakers'
import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Speakers = () => {
  return (
    <section className="bg-gray-50 py-12 px-4" id="speakers">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Speakers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EventSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group"
            >

              {/* Speaker Photo */}
              <div className="aspect-[1/1] bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={`${speaker.name} profile photo`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Speaker Info */}
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                
                <div className="mb-3">
                  <p className="text-gray-700 font-medium text-xs mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {speaker.company}
                  </p>
                </div>

                {/* LinkedIn Link */}
                <a
                  href={speaker.linkedin}
                  className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-[var(--aws-orange)] text-gray-600 hover:text-white rounded-full transition-all duration-200"
                  aria-label={`${speaker.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
