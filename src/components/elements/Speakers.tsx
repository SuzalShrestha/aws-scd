import { EventSpeakers } from '@/constants/EventSpeakers'
import { LinkedinIcon } from 'lucide-react'
import React from 'react'

const Speakers = () => {
  return (
    <section className="bg-slate-50 py-20 px-4" id="speakers">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Speakers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EventSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden group"
            >
              {/* Keynote Badge
              {speaker.isKeynoteSpeaker && (
                <div className="bg-orange-500 text-white text-center py-2">
                  <span className="text-sm font-semibold">Keynote Speaker</span>
                </div>
              )} */}

              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {speaker.name}
                </h3>
                
                <div className="mb-4">
                  <p className="text-slate-700 font-semibold text-sm mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {speaker.company}
                  </p>
                </div>

                {/* LinkedIn Link */}
                <a
                  href={speaker.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-orange-500 text-slate-600 hover:text-white rounded-full transition-all duration-200 hover:scale-110"
                  aria-label={`${speaker.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={18} />
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
