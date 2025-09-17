import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">AWS Student Community Day</h3>
            <p className="text-slate-300">Pokhara 2025</p>
          </div>
          
          <div className="mb-8">
            <p className="text-slate-400 text-sm">
              Organized by AWS Cloud Club IOE Paschimanchal Campus
            </p>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-500 text-sm">
              © 2025 AWS Student Community Day Pokhara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
