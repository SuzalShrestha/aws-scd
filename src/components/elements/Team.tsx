import React from 'react'
import { EventTeam } from '@/constants/EventTeam'
import Image from 'next/image'

const Team = () => {
  return (
    <section className="bg-white py-20 px-4" id="team">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Team</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {EventTeam.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="mb-4">
                {member.imgUrl ? (
                  <Image
                    width={100}
                    height={100}
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-medium">
                    {member.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
