import React from "react";
import profilePic from "./assets/Siddhi.JPG"; 

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-bold">
          Siddhi<span className="text-orange-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* <a href="#contact" className="bg-blue-600 px-4 py-2 rounded-full">
          Let’s Talk →
        </a> */}
      </header>

      <main className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-12 items-center py-20">

          {/* LEFT */}
          <div>
            <p className="text-sm text-gray-400 mb-2">OPEN TO WORK </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Siddhi <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                Pankhade
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-lg">
              Pre-final year Computer Engineering student building full-stack apps 
              with React & Node, and exploring Cybersecurity & AI.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-full hover:scale-105 transition">
                Projects →
              </a>
              <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-full hover:bg-white/10 transition">
                Contact Me
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-sm mx-auto">

            {/* IMAGE */}
            <img
              src={profilePic}
              alt="Siddhi"
              className="rounded-3xl w-full shadow-2xl"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t 
                            from-black via-black/50 to-transparent">
            </div>

            {/* TEXT OVERLAY */}
            <div className="absolute bottom-0 left-0 p-6">         
              <h3 className="text-xl font-semibold leading-tight">
                B.E. Computer Engineering
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                PCCOE&R · 2023 – 2027
              </p>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-6 text-gray-400 max-w-3xl">
            I’m a Computer Engineering student passionate about building real-world applications 
            and solving problems using technology. I enjoy working on full-stack systems, 
            exploring cybersecurity concepts, and continuously improving my development skills.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-semibold">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {[
              ["Languages", "Python, C++, JavaScript"],
              ["Frontend", "React, HTML, Tailwind CSS"],
              ["Backend", "Node.js, REST APIs, JWT"],
              ["Database", "MongoDB, MySQL"],
              ["Tools", "Git, GitHub, Postman"],
              ["Cybersecurity", "IAM, Threat Detection, VAPT"]
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-[1.02] transition">
                <h3 className="font-semibold text-lg">{item[0]}</h3>
                <p className="text-gray-400 mt-2">{item[1]}</p>
              </div>
            ))}

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-8">

            {/* Project 1 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold">Grooviti</h3>
              <p className="text-gray-400 mt-2">
                Event listing & booking platform with real users and payments.
              </p>

              <p className=" text-blue-400 text-sm mt-2">
                React.js • Node.js • MongoDB
              </p>

              <ul className="text-gray-400 mt-3 text-sm list-disc list-inside">
                <li>400+ registrations</li>
                <li>30+ Events Listed</li>
                <li>95% Payment Success</li>
                <li>40,000+ Revenue Generated</li>
              </ul>

              <div className="mt-4 flex gap-4">
                <a href="https://grooviti.in/" className="hover:underline">Live Project</a>
                <a href="https://github.com/Aditya25-github/grooviti" className="hover:underline">GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold">SmartHire</h3>
              <p className="text-gray-400 mt-2">
                AI-powered interview preparation platform.
              </p>

              <p className="text-blue-400 text-sm mt-2">
                Next.js • AI • MongoDB
              </p>

              <ul className="text-gray-400 mt-3 text-sm list-disc list-inside">
                <li>Speech-to-text analysis</li>
                <li>Confidence evaluation</li>
                <li>AI-generated questions</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-16">
          <h2 className="text-3xl font-semibold">Education</h2>

          <div className="mt-6 bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold">B.E Computer Engineering</h3>
            <p className="text-gray-400">PCCOE&R • 2023 – 2027</p>
            <p>CGPA : 9.15</p>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold">Certifications</h2>

          <ul className="mt-6 text-gray-400 list-disc list-inside">
            <li>Programming, DSA in Python - NPTEL</li>
            <li>Programming in C++ - Spoken Tutorial</li>
            <li>Advanced C++ - Spoken Tutorial</li>
            <li>Programming in Java - Spoken Tutorial</li>
            <li>Database Programming with SQL - Oracle</li>
            <li>Introduction to MongoDB - MongoDB</li>
            <li>Responsive Web Design - freeCodeCamp</li>
          </ul>
        </section>

        {/* RESUME */}
        <section id="resume" className="py-16 text-center">

          <a
            href="/Siddhi_Pankhade_Resume.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-full hover:scale-105 transition"
          >
            Download Resume
          </a>
        </section>

    
        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT INFO CARD */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">

              <h3 className="text-xl font-semibold mb-4">Let’s connect</h3>

              <p className="text-gray-400 mb-6">
                Open to internships, collaborations, and tech discussions. 
                Feel free to reach out 🚀
              </p>

              <div className="space-y-4 text-gray-300">

                <p>
                  <span className="text-gray-500">Email</span><br />
                  <a href="mailto:pankhade.siddhi@gmail.com" className="hover:text-blue-400">
                    pankhade.siddhi@gmail.com
                  </a>
                </p>

                <p>
                  <span className="text-gray-500">Phone</span><br />
                  +91 9146147064
                </p>

                <div className="flex gap-6 pt-4">
                  <a href="http://www.linkedin.com/in/siddhi-pankhade-2811bb24a" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                  <a href="https://github.com/siddhipankhade" className="hover:text-blue-400">
                    GitHub
                  </a>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl flex flex-col gap-4"
              action="https://formspree.io/f/xvglayzl"
              method="POST"
            >

              <h3 className="text-xl font-semibold mb-2">Send a message</h3>

              <input
                name="name"
                placeholder="Your name"
                required
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
              />

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
              />

              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                required
                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
              />

              <button
                type="submit"
                className="mt-2  bg-blue-600 hover:scale-105 transition px-6 py-3 rounded-lg font-medium"
              >
                Send Message →
              </button>

              <p className="text-xs text-gray-500 mt-2">
                Your message will be sent directly to my inbox.
              </p>

            </form>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-10 text-gray-500">
          © {new Date().getFullYear()} Siddhi Pankhade
        </footer>

      </main>
    </div>
  );
}