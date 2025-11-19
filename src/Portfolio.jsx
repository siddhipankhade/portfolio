import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // read saved preference or system
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (saved === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      // default to system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
        setDark(true);
      }
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
            <p className="meta-sm md:meta-sm">Computer Engineering • Software Engineer Intern</p>
          </div>
        </div>

        {/* right: desktop nav + theme toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#projects" className="meta-sm md:text-base link-underline">Projects</a>
            <a href="#skills" className="meta-sm md:text-base link-underline">Skills</a>
            <a href="#about" className="meta-sm md:text-base link-underline">About</a>
            <a href="#contact" className="meta-sm md:text-base link-underline">Contact</a>
            <a href="#resume" className="ml-2 btn-outline md:text-sm">Resume</a>
          </nav>

          {/* dark toggle button */}
          <button
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDark}
            className="p-2 rounded-md border bg-white shadow-sm"
            title="Toggle theme"
          >
            {dark ? (
              // sun icon (light)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L17.95 7.05M7.05 16.95l-1.414 1.414" />
              </svg>
            ) : (
              // moon icon (dark)
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* mobile hamburger (keeps existing) */}
          <div className="md:hidden">
            {/* ...your existing hamburger button here... */}
          </div>
        </div>
      </header>


      <main className="max-w-5xl mx-auto p-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <div className="glass-card p-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Hi, I’m Siddhi — a software engineer in the making.</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              I build responsive web apps with React and Node. I’m passionate about clean UI, reliable backend systems, and learning secure development practices.
              Currently seeking Software Engineer internships for hands-on product work.
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
              <li id="resume"><a href="#" className="hover:underline">Download Resume (replace link)</a></li>
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
              <p className="mt-2 text-base md:text-lg text-gray-700">A full-stack web application to discover and book local events and sports venues. Includes an admin dashboard for managing listings and analytics.</p>
              <ul className="mt-3 text-base md:text-lg text-gray-700 list-disc list-inside">
                <li>Tech: React.js, MongoDB, Node.js </li>
                <li>Built responsive UI components (Home, Communities, Events)</li>
                <li>Integrated payment flow and listings API </li>
                <li>Achieved 200+ registrations, 10+ active events, and 95% successful payment rate</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://grooviti.com/" className="text-base hover:underline">Live demo</a>
                <a href="https://github.com/Aditya25-github/grooviti" className="text-base hover:underline">Source</a>
              </div>
            </article>

            {/* Example Additional Project */}
            <article className="p-6 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg md:text-xl font-bold">Portfolio Website (this site)</h4>
              <p className="mt-2 text-base md:text-lg text-gray-700">A responsive single-page React application built with Tailwind CSS showcasing projects, skills, and contact links.</p>
              <ul className="mt-3 text-base md:text-lg text-gray-700 list-disc list-inside">
                <li>Tech: React, Tailwind CSS</li>
                <li>Features: Hero, Projects grid, Skills list, Contact form</li>
                <li>Designed for easy deployment on Vercel / Netlify</li>
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
              <h5 className="text-lg font-semibold">Programming</h5>
              <p className="text-base mt-2">Java, Python, JavaScript, C++</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Frontend</h5>
              <p className="text-base mt-2">React.js, HTML, Tailwind CSS</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Backend & DB</h5>
              <p className="text-base mt-2">Node.js, MongoDB, MySQL</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h5 className="text-lg font-semibold">Tools & DevOps</h5>
              <p className="text-base mt-2">Git, GitHub, Postman, VS Code</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-8">
          <h3 className="text-2xl md:text-3xl font-semibold">About Me</h3>
          <div className="mt-4 p-6 bg-white rounded-xl shadow-sm text-base text-gray-700">
            I am a TE Computer Engineering student at PCCOE&R with a strong interest in Software Engineering and Cybersecurity. I enjoy building project solutions and learning by shipping features. Outside coding, I was a club member in ACM and C-Cube.I also did cybersecurity simulations to expand my practical skills.
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
