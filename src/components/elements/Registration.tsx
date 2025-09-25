"use client"

import { motion } from "framer-motion"

const Registration = () => {
  return (
    <section className="bg-gray-50 py-20 px-4" id="register">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Ticket Details - Left Side */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Register Now</h3>
            <p className="leading-relaxed text-gray-600">
              Registration for AWS Student Community Day 2025 is completely free for all students. This full-day event includes access to all
              technical sessions, complimentary lunch and refreshments, networking opportunities with industry experts, digital certificate of
              participation, and exclusive AWS learning resources. Seats are limited, so secure your spot today by scanning the QR code and
              registering online.
            </p>
          </div>

          {/* QR Code Placeholder - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="rounded-lg border border-gray-100 bg-white p-12 text-center shadow-sm">
              {/* QR Code Placeholder */}
              <div className="mb-6 flex h-64 w-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50">
                <div className="text-center text-gray-600">
                  <div className="text-lg font-semibold">QR Code</div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Registration
