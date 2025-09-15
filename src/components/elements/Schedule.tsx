import {
  commonAgendaEvents,
  finalEvents,
  parallelTracks
} from '@/db/Schedules'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Clock, Users } from 'lucide-react'

//have to improve the design later
const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">Event Schedule</h1>
          <p className="text-gray-600 text-sm">A day of planning, managing, and organizing successful events</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">Common Agenda (8:00 - 11:00 AM)</h2>
          </div>

          <div className="space-y-3">
            {commonAgendaEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium min-w-fit">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">Parallel Tracks (11:00 AM onwards)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {parallelTracks.map((track, trackIndex) => (
              <Card key={trackIndex} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-t">
                  <h3 className="font-semibold">{track.title}</h3>
                </div>
                <CardContent className="p-0">
                  {track.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className={`p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 ${session.title === "Lunch Break"
                        ? "bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 hover:from-orange-200 hover:via-yellow-100 hover:to-orange-200"
                        : ""
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{session.time}</span>
                        <span
                          className={`text-sm font-medium ${session.title === "Lunch Break" ? "text-orange-700 font-bold" : "text-gray-800"
                            }`}
                        >
                          {session.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-3">
            {finalEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium min-w-fit">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
