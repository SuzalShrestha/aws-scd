import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Who Are We - Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Who Are We?</h2>
            <h3 className="text-2xl font-bold text-orange-600 mb-6">AWS Cloud Club IOE Paschimanchal</h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              We are a vibrant community of students from IOE Paschimanchal Campus, passionate about cloud computing 
              and emerging technologies. Our club bridges academic learning with industry practices, fostering innovation 
              and technical excellence among students in Nepal&apos;s growing tech landscape.
            </p>
          </div>

          {/* What to Expect - Right Side */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">What to Expect?</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Join 200+ students for a full day of intensive learning with 8+ technical sessions led by 5+ industry experts. 
              Experience hands-on AWS workshops, real-world case studies, networking opportunities with professionals, 
              and insights into cloud career paths that will shape your future in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About