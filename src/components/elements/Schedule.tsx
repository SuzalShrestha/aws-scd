"use client"

import { scheduleEvents } from "@/constants/Schedules"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const Schedule = () => {
  return (
    <section className="bg-white py-20 px-4" id="schedule">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-2 text-3xl font-semibold text-gray-900">Event Schedule</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-0 left-8 hidden w-0.5 bg-gray-200 md:block"></div>

          <div className="space-y-6">
            {scheduleEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              >
                <Card className="cursor-pointer overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center">
                      <div className="relative hidden h-16 w-16 items-center justify-center md:flex">
                        <span className="h-4 w-4 rounded-full border-4 border-white bg-gray-400 shadow-sm transition-colors duration-300 group-hover:bg-[var(--aws-orange)]"></span>
                      </div>

                      <div className="ml-6 mr-6 flex-shrink-0 md:ml-4">
                        <div className="rounded-lg bg-[var(--aws-orange)] px-4 py-2 text-sm font-medium text-white shadow-sm">
                          {event.time}
                        </div>
                      </div>

                      <div className="flex-1 py-6 pr-6">
                        <h3 className="mb-2 text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-orange-600">
                          {event.title}
                        </h3>
                        <p className="leading-relaxed text-slate-600">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
