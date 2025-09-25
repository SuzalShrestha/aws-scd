"use client"

import { EventTeam } from "@/constants/EventTeam"
import { motion } from "framer-motion"
import Image from "next/image"

const Team = () => {
  return (
    <section className="bg-white py-20 px-4" id="team">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Team</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {EventTeam.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              className="group text-center"
            >
              <div className="mb-4">
                {member.imgUrl ? (
                  <Image
                    width={100}
                    height={100}
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md shadow-black/5"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-medium">
                    {member.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-900">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
