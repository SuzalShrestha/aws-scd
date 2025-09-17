import { scheduleEvents } from '@/constants/Schedules'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const Schedule = () => {
  return (
    <section className="bg-slate-100 py-20 px-4" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Event Schedule</h2>
        
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400 hidden md:block"></div>
          
          <div className="space-y-6">
            {scheduleEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-xl border border-slate-200 hover:border-slate-300 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="hidden md:flex items-center justify-center w-16 h-16 relative">
                      <div className="w-4 h-4 bg-slate-400 rounded-full border-4 border-white shadow-lg group-hover:bg-orange-500 group-hover:scale-125 transition-all duration-300"></div>
                    </div>
                    
                    <div className="flex-shrink-0 md:ml-4 ml-6 mr-6">
                      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                        {event.time}
                      </div>
                    </div>
                    
                    <div className="flex-1 py-6 pr-6">
                      <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Schedule
