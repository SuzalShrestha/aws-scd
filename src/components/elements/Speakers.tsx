import { EventSpeakers } from '@/db/EventSpeakers'
import { LinkedinIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Speakers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Featured Speakers</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Amazing AWS experts, industry leaders, and student mentors are joining us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EventSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="group relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out rounded-3xl border border-orange-200 hover:border-orange-300 hover:scale-105 cursor-pointer"
          >
            <div className="absolute top-6 left-6 z-10 transform group-hover:scale-110 transition-transform duration-300">
              {
                speaker.isKeynoteSpeaker && (
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-orange-700">
                    Keynote Speaker
                  </span>
                )
              }
            </div>

            <div className="aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={2509}
                height={1500}
                className="object-conver transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-orange-500 font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {speaker.company}
                </p>
                <p className="text-gray-600 text-base mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {speaker.role}
                </p>

                <div className="flex justify-center">
                  <a
                    href={speaker.linkedin}
                    className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group-hover:shadow-lg"
                    aria-label={`${speaker.name}'s LinkedIn profile`}
                  >
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speakers
