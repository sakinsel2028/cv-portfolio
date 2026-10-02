import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Zap, Users, Award } from 'lucide-react';
import './App.css';


export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'NuaLang',
      subtitle: 'AI-assisted Irish language learning web app',
      tags: ['React', 'Frontend', 'Team of 8', 'GitLab'],
      description: 'AI-assisted Irish language learning web app built in a team of 8. I\'m working on the React frontend, I built the Greetings page, Topic Learning page, hamburger menu navigation, 404/Coming Soon pages, and a Match Game mode. Collaborated via GitLab branches and merge requests.',
      dates: 'Jan 2026 – Present',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 2,
      title: 'Programming Project',
      subtitle: 'Interactive graphical programs + team visualisation',
      tags: ['Interactive Graphics', 'Mouse/Keyboard Input', 'Version Control', 'Team Project'],
      description: 'Built interactive graphical programs responding to mouse + keyboard input as part of weekly labs. Contributed to a larger team-based interactive visualisation project using version control workflows. Focused on debugging and clean program structure.',
      dates: '2025 (coursework)',
      color: 'from-orange-400 to-pink-500'
    }
  ];

  const skills = [
    { icon: <Code2 size={24} />, title: 'Languages', items: ['Java (Basics)', 'JavaScript', 'ARM Assembly', 'Python (learning)', 'HTML/CSS (learning)'] },
    { icon: <Zap size={24} />, title: 'Tools & Frameworks', items: ['React', 'GitHub', 'GitLab', 'Npm'] },
    { icon: <Users size={24} />, title: 'Core Skills', items: ['OOP', 'Basic Data Structures & Algorithms', 'Debugging', 'Team collaboration', 'Leadership'] }
  ];

  const achievements = [
    { label: 'Academic Scholarships', value: '2x', color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Team Size', value: '8', color: 'bg-blue-100 text-blue-700' },
    { label: 'Sponsorship Raised', value: '€35k+', color: 'bg-emerald-100 text-emerald-700' },
    { label: 'Leadership Roles', value: '2', color: 'bg-purple-100 text-purple-700' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Playful background pattern */}
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-3xl blur-2xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-200 rounded-2xl blur-2xl"></div>
        <div className="absolute bottom-40 right-1/4 w-44 h-44 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-rose-500 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            SARAH O'SULLIVAN
          </div>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-2">
                Hey, I'm <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-blue-600 bg-clip-text text-transparent">Sarah O'Sullivan!</span>
              </h1>
              <p className="text-2xl text-gray-700 font-semibold">Computer Science + Economics Student (TCD)</p>
              <p className="text-xl text-gray-600 font-semibold mt-1">Seeking Software Engineering Internship</p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Trinity College Dublin | Dublin, Ireland
              <br />
              Passionate about building real features in collaborative teams. Looking to grow my software engineering skills through hands-on internship experience.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/sarahosull2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition"
              >
                <Github size={20} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sarahosullivan2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="mailto:sakinsel@tcd.ie"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                <Mail size={20} /> Email
              </a>
            </div>

            <div className="pt-4 text-sm text-gray-600 space-y-1">
              <p>📧 sakinsel@tcd.ie</p>
              <p>📱 +353 83 006 8920</p>
            </div>
          </div>

          {/* Playful illustration area */}
          <div className="relative h-96 hidden md:block">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-3xl rotate-12"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-300 to-orange-400 rounded-2xl -rotate-6"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-emerald-200">
          <h2 className="text-4xl font-black mb-6 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a second-year Computer Science and Economics student at Trinity College Dublin. I'm currently seeking a Software Engineering Internship to gain hands-on experience building real products.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This year particularly excited about frontend development and React, and I've been deepening my skills through team projects like Nualang. I'm eager to learn from experienced engineers and contribute to meaningful work. I hope to develop both my frontend and backend skills in the future
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-emerald-200">
                <h3 className="font-bold text-emerald-700 mb-2">Currently Learning</h3>
                <p className="text-gray-700">Deepening my React skills and building real features in a collaborative team project with version control.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-pink-200">
                <h3 className="font-bold text-pink-700 mb-2">I Value</h3>
                <p className="text-gray-700">Solving problems through code, working effectively with teams, and writing clear, maintainable programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 text-gray-900">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              <div className="bg-white rounded-3xl p-8 h-full border-2 border-gray-200 group-hover:border-transparent transition-all duration-300 group-hover:shadow-2xl">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 font-semibold">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 pt-4">{project.dates}</p>

                  <div className="pt-6 flex items-center gap-2 text-gray-900 font-bold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div key={i} className={`${item.color} rounded-2xl p-6 text-center font-bold`}>
              <div className="text-3xl mb-2">{item.value}</div>
              <div className="text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 text-gray-900">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="mb-6 text-emerald-600">
                {skillGroup.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.title}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 text-gray-900">Leadership & Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 border-2 border-emerald-300">
            <Award className="text-emerald-700 mb-4" size={32} />
            <h3 className="text-2xl font-black text-gray-900 mb-2">HackIreland</h3>
            <p className="text-gray-700 mb-4 font-semibold">Organiser</p>
            <p className="text-gray-700 leading-relaxed">Helped secure €35k+ sponsorship from companies including Intercom, Stripe, OpenAI, and DogPatch Labs. Supported event operations and worked with the organiser team to deliver a successful hackathon.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 border-2 border-blue-300">
            <Users className="text-blue-700 mb-4" size={32} />
            <h3 className="text-2xl font-black text-gray-900 mb-2">JCR Leadership</h3>
            <p className="text-gray-700 mb-4 font-semibold">Vice President & Treasurer</p>
            <p className="text-gray-700 leading-relaxed">Campaigned and received 400+ votes for this position in 2025. I track expenditure and support budgeting (€60,000) for student initiatives. Engage with college governance and student representation.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-emerald-500 via-pink-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-black mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90">
            Open to discussing Software Engineering Internship opportunities and collaborations
          </p>
          <a 
            href="mailto:sakinsel@tcd.ie"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:shadow-lg transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-black text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-700">
                <p>sakinsel@tcd.ie</p>
                <p>+353 83 006 8920</p>
              </div>
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-4">Links</h3>
              <div className="space-y-2">
                <a href="https://github.com/sarahosull2026" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-emerald-600 transition">GitHub</a>
                <a href="https://www.linkedin.com/in/sarahosullivan2026/" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 transition">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="font-black text-gray-900 mb-4">Location</h3>
              <p className="text-gray-700">Dublin, Ireland</p>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
            <p>© 2026 Sarah O'Sullivan • Built with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
}