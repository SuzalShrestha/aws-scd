import React from 'react'

const Registration = () => {
  return (
    <section className="bg-gray-50 py-20 px-4" id="register">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ticket Details - Left Side */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Register Now</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Registration for AWS Student Community Day 2025 is completely free for all students. 
              This full-day event includes access to all technical sessions, complimentary lunch and refreshments, 
              networking opportunities with industry experts, digital certificate of participation, and exclusive AWS learning resources. 
              Seats are limited, so secure your spot today by scanning the QR code and registering online.
            </p>
            
           
          </div>

          {/* QR Code Placeholder - Right Side */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100 text-center">

              {/* QR Code Placeholder */}
              <div className="w-64 h-64 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  
                  <div className="text-gray-600 font-medium">QR Code</div>
                
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-4">
                Scan this QR code 
              </p>
            </div>
            
         
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
