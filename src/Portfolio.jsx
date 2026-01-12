import React, { useState } from "react";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased text-base md:text-lg">
      <header className="container-max flex items-center justify-between py-6 relative">
        {/* left */}
        <div className="flex items-center gap-4">
          <div
            className="avatar-badge"
            style={{ background: "linear-gradient(135deg,#6366f1,#ec4899)", width: 64, height: 64 }}
          >
            <span className="text-lg md:text-xl">SP</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Siddhi Pankhade</h1>
            <p className="meta-sm md:meta-sm">Computer Engineering</p>
          </div>
        </div>

        {/* right: desktop nav only */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#projects" className="meta-sm md:text-base link-underline">Projects</a>
          <a href="#skills" className="meta-sm md:text-base link-underline">Skills</a>
          <a href="#about" className="meta-sm md:text-base link-underline">About</a>
          <a href="#contact" className="meta-sm md:text-base link-underline">Contact</a>
          {/* <a href="#resume" className="ml-2 btn-outline md:text-sm">Resume</a> */}
        </nav>

        {/* mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border bg-white shadow-sm"
          >
            {!open ? (
              // hamburger
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            ) : (
              // X
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
              </svg>
            )}
          </button>
        </div>

        {/* mobile dropdown */}
        <div
          className={`md:hidden absolute top-full right-0 left-0 z-40 transform origin-top transition-all ${
            open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-white shadow-md rounded-b-lg p-4">
            <nav className="flex flex-col gap-3">
              <a onClick={() => setOpen(false)} href="#projects" className="py-2 text-base link-underline">Projects</a>
              <a onClick={() => setOpen(false)} href="#skills" className="py-2 text-base link-underline">Skills</a>
              <a onClick={() => setOpen(false)} href="#about" className="py-2 text-base link-underline">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-base link-underline">Contact</a>
              <a onClick={() => setOpen(false)} href="#resume" className="mt-2 btn-outline text-center">Resume</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <div className="glass-card p-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Hi, I’m Siddhi — a engineer in the making.</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              I build responsive web apps with React and Node. I’m passionate about clean UI, reliable backend systems, and learning secure development practices.
              Currently seeking internships for hands-on product work.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View projects</a>
              <a href="mailto:pankhade.siddhi@gmail.com" className="btn-outline">Contact me</a>
            </div>

            <div className="mt-6 text-sm md:text-base text-gray-600">
              <strong>Location:</strong> Pune, India
              <span className="mx-2">•</span>
              <strong>Education:</strong> B.E. Computer Engineering (PCCOE&R)
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-base md:text-base">
              <li><a href="https://github.com/siddhipankhade" className="hover:underline">GitHub</a></li>
              <li><a href="http://www.linkedin.com/in/siddhi-pankhade-2811bb24a" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://grooviti.com/" className="hover:underline">Grooviti (Live)</a></li>
              {/* <li id="resume"><a href="#" className="hover:underline">Download Resume </a></li> */}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-8">
          <h3 className="text-2xl md:text-3xl font-semibold">Projects</h3>
          <div className="mt-6 project-list">
            {/* Grooviti */}
            <article className="p-6 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg md:text-xl font-bold">Grooviti — Event Listing & Booking Platform</h4>
              <p className="mt-2 text-base md:text-lg text-gray-700">
                A full-stack web application to discover and book local events and sports venues.
              </p>
              <ul className="mt-3 text-base md:text-lg text-gray-700 list-disc list-inside">
                <li>Tech: React.js, MongoDB, Node.js</li>
                <li>Built responsive UI components</li>
                <li>Integrated payment flow and listings API</li>
                <li>Achieved Over 200+ registrations, 10+ events listed, 95% successful
payments</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://grooviti.com/" className="text-base hover:underline">Live demo</a>
                <a href="https://github.com/Aditya25-github/grooviti" className="text-base hover:underline">Source</a>
              </div>
            </article>

            {/* Portfolio */}
            <article className="p-6 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg md:text-xl font-bold">Portfolio Website</h4>
              <p className="mt-2 text-base md:text-lg text-gray-700">
                A responsive personal portfolio built with React and Tailwind CSS.
              </p>
              <ul className="mt-3 text-base md:text-lg text-gray-700 list-disc list-inside">
                <li>Tech: React, Tailwind CSS</li>
                <li>Beautiful responsive UI</li>
                <li>Deployed on Vercel</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/siddhipankhade/portfolio" className="text-base hover:underline">Source</a>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-8">
          <h3 className="text-2xl md:text-3xl font-semibold">Skills</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Programming Languages</h5>
              <p className="text-base mt-2">Python, C++, JavaScript</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Frontend</h5>
              <p className="text-base mt-2">React.js, HTML, Tailwind CSS</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Backend</h5>
              <p className="text-base mt-2">Node.js, Rest APIs</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Databases</h5>
              <p className="text-base mt-2">MongoDB, MySQL</p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Version Control </h5>
              <p className="text-base mt-2">Git, GitHub</p>
               {/* <p className="text-base mt-2">Nmap, Wireshark,Burp Suite, Kali Linux, Git, GitHub, Postman, VS Code</p> */}

            </div>
            {/* <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Cybersecurity Concepts</h5>
              <p className="text-base mt-2">IAM, Threat detection, Risk Assessment, Log analysis, Information Security, Vulnerability Assessment, Penetration Testing, Ethical Hacking Concepts, Network Security Fundamentals, CIA Triad</p>
            </div> */}
            {/* <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Soft Skills</h5>
              <p className="text-base mt-2">Analytical thinking, Time management, Self-learner, Communication Skills</p>
            </div> */}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-8">
          <h3 className="text-2xl md:text-3xl font-semibold">About Me</h3>
          <div className="mt-4 p-6 bg-white rounded-xl shadow-sm text-base text-gray-700">
           Third Year Engineering student with a strong interest in Cybersecurity and Software Development. Passionate about building secure, scalable applications and learning modern security practices through hands-on projects and continuous learning.

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-base"><span className="font-bold">Email:</span> <a href="mailto:pankhade.siddhi@gmail.com" className="hover:underline">pankhade.siddhi@gmail.com</a></p>
              <p className="text-base mt-2"><span className="font-bold">Phone:</span> +91 9146147064</p>
              <div className="mt-4 flex gap-3">
                <a href="http://www.linkedin.com/in/siddhi-pankhade-2811bb24a" className="text-base hover:underline">LinkedIn</a>
                <a href="https://github.com/siddhipankhade" className="text-base hover:underline">GitHub</a>
              </div>
            </div>

            <form
              className="p-6 bg-white rounded-xl shadow-sm flex flex-col gap-3"
              action="https://formspree.io/f/xvglayzl"
              method="POST"
            >
              <label className="text-base">Name</label>
              <input name="name" className="p-2 border rounded-md" placeholder="Your name" required />

              <label className="text-base">Email</label>
              <input name="email" type="email" className="p-2 border rounded-md" placeholder="you@example.com" required />

              <label className="text-base">Message</label>
              <textarea name="message" className="p-2 border rounded-md" placeholder="Short message" required></textarea>

              <button type="submit" className="mt-2 px-4 py-2 rounded-md btn-primary">Send</button>

              <p className="text-sm text-gray-500 mt-2">Your message will be sent directly to my inbox.</p>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500 pb-12">
          Built by Siddhi Pankhade — © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
