import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Zap,
  Users,
  Award,
} from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'NuaLang',
      subtitle: 'AI-assisted Irish language learning web app',
      link: '',
      linkLabel: 'View NuaLang',
      tags: ['React', 'Frontend', 'Team of 8', 'GitLab', 'Git'],
      description:
        "AI-assisted Irish language learning web app built in a team of 8, in collaboration with NuaLang developers. I worked on the React frontend. Our project was selected as one of the top 3 projects at Trinity College Dublin's Industry-based Software Engineering Awards. We were awarded the 'Public Prize' during our first showcase.",
      dates: 'Jan 2026 – Apr 2026',
      cardGradient: 'from-rose-50 to-pink-50',
      hoverGradient: 'from-rose-100 to-pink-100',
      border: 'border-rose-200',
      icon: 'text-rose-500',
    },
    {
      id: 2,
      title: 'This Website!',
      subtitle: 'Personal portfolio website',
      link: 'https://github.com/sakinsel2028/cv-portfolio',
      linkLabel: 'View source code',
      tags: ['React', 'Frontend', 'Tailwind CSS'],
      description:
        'Designed the layout, implemented the responsive design, and added interactive elements to showcase my projects, skills, and experience. Hope you enjoy it!',
      dates: '2026',
      cardGradient: 'from-pink-50 to-fuchsia-50',
      hoverGradient: 'from-pink-100 to-fuchsia-100',
      border: 'border-pink-200',
      icon: 'text-pink-500',
    },
    {
      id: 3,
      title: 'Programming Project',
      subtitle: 'Interactive graphical programs and team visualisation',
      tags: [
        'Interactive Graphics',
        'Mouse and Keyboard Input',
        'Version Control',
        'Team Project',
      ],
      description:
        'Built interactive graphical programs responding to mouse and keyboard input as part of weekly labs. Contributed to a larger team-based interactive visualisation project using version control workflows. Focused on debugging and clean program structure.',
      dates: '2025 coursework',
      cardGradient: 'from-peach-50 to-amber-50',
      hoverGradient: 'from-peach-100 to-amber-100',
      border: 'border-orange-200',
      icon: 'text-orange-500',
    },
  ];

  const skills = [
    {
      icon: <Code2 size={24} />,
      title: 'Languages',
      items: [
        'Java',
        'JavaScript',
        'Prolog',
        'ARM Assembly',
        'Python learning',
        'HTML and CSS learning',
      ],
      cardStyle: 'from-lavender-50 to-pink-50',
      iconStyle: 'text-purple-500',
      bulletStyle: 'bg-purple-300',
      borderStyle: 'border-purple-200',
    },
    {
      icon: <Zap size={24} />,
      title: 'Tools and Frameworks',
      items: ['React', 'Git', 'GitHub', 'GitLab', 'npm'],
      cardStyle: 'from-pink-50 to-rose-50',
      iconStyle: 'text-pink-500',
      bulletStyle: 'bg-pink-300',
      borderStyle: 'border-pink-200',
    },
    {
      icon: <Users size={24} />,
      title: 'Core Skills',
      items: [
        'Object-oriented programming',
        'Basic data structures and algorithms',
        'Debugging',
        'Team collaboration',
        'Leadership',
      ],
      cardStyle: 'from-peach-50 to-yellow-50',
      iconStyle: 'text-orange-500',
      bulletStyle: 'bg-orange-300',
      borderStyle: 'border-orange-200',
    },
  ];

  const achievements = [];

  return (
    <div className="min-h-screen overflow-hidden bg-rose-50/40 text-slate-700">
      {/* Pastel background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-peach-200/40 blur-3xl" />
      </div>

{/* Navigation */}
<nav className="sticky top-0 z-40 border-b border-pink-100 bg-rose-50/90 backdrop-blur-md">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-2xl font-black text-transparent">
      SARAH O&apos;SULLIVAN
    </div>

    <div className="flex gap-5 text-sm font-semibold text-slate-600">
      <a
        href="#about"
        className="transition hover:text-pink-500"
      >
        About
      </a>

      <a
        href="#projects"
        className="transition hover:text-fuchsia-500"
      >
        Projects
      </a>

      <a
        href="#skills"
        className="transition hover:text-purple-500"
      >
        Skills
      </a>
    </div>
  </div>
</nav>

      {/* Hero Section */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
  <div className="grid items-center gap-10 md:grid-cols-2">
    <div className="space-y-5">
      <div>
        <h1 className="mb-4 text-5xl font-black leading-tight text-slate-800 md:text-7xl">
          Hey, I&apos;m{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Sarah!
          </span>
        </h1>

        <p className="text-2xl font-semibold text-slate-700">
          Computer Science and Economics Student
        </p>

        <p className="mt-1 text-xl font-semibold text-purple-500">
          Trinity College Dublin
        </p>
      </div>

      <p className="text-lg leading-relaxed text-slate-600">
        Based in Dublin, Ireland.
        <br />
        Passionate about building real features in collaborative teams
        and looking to grow my software engineering skills through
        hands-on internship experience.
      </p>

      <div className="flex flex-wrap gap-4 pt-3">
        <a
          href="https://github.com/sakinsel2028"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          <Github size={20} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sarahosullivan2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>

        <a
          href="mailto:sakinsel@tcd.ie"
          className="inline-flex items-center gap-2 rounded-full bg-pink-400 px-6 py-3 font-semibold text-white transition hover:bg-pink-500"
        >
          <Mail size={20} />
          Email
        </a>
      </div>

      <div className="space-y-1 pt-2 text-sm text-slate-600">
        <p>📧 sakinsel@tcd.ie</p>
        <p>📱 +353 83 006 8920</p>
      </div>
    </div>

    <div className="rounded-[2rem] border-2 border-pink-200 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-black text-slate-800">
        Currently
      </h2>

      <div className="space-y-5">
        <div>
          <p className="mb-1 text-sm font-bold uppercase tracking-wide text-pink-500">
            Studying
          </p>
          <p className="text-lg font-semibold text-slate-700">
            Computer Science and Economics
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold uppercase tracking-wide text-purple-500">
            Building
          </p>
          <p className="text-lg font-semibold text-slate-700">
            Personal portfolio website
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm font-bold uppercase tracking-wide text-blue-500">
            Looking for
          </p>
          <p className="text-lg font-semibold text-slate-700">
            Software Engineering Internship opportunities
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      

      {/* About Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="rounded-[2rem] border border-pink-200 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-8 md:p-10">
          <h2 className="mb-6 text-4xl font-black text-slate-800">
            About Me
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg leading-relaxed text-slate-700">
                I&apos;m a third-year Computer Science and Economics student at
                Trinity College Dublin. I&apos;m currently seeking a Software
                Engineering Internship to gain hands-on experience building
                real products.
              </p>

              <p className="text-lg leading-relaxed text-slate-700">
                I&apos;m particularly excited about frontend development and
                React. I&apos;ve been developing my skills through team
                projects like NuaLang and hope to grow my frontend and backend
                skills in the future.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-purple-200 bg-white/80 p-6">
                <h3 className="mb-2 font-bold text-purple-600">
                  Currently Learning
                </h3>

                <p className="text-slate-600">
                  About to take on another Group project, It&apos;ll start
                  kicking off in a few weeks, stay tuned!
                </p>
              </div>

              <div className="rounded-2xl border border-pink-200 bg-white/80 p-6">
                <h3 className="mb-2 font-bold text-pink-600">I Value</h3>

                <p className="text-slate-600">
                  Solving problems through code, working effectively with
                  teams, and writing clear, maintainable programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {achievements.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {achievements.map((item) => (
              <div
                key={item.label}
                className={`${item.color} rounded-2xl border p-6 text-center font-bold`}
              >
                <div className="mb-2 text-3xl">{item.value}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Leadership Section */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-10 text-4xl font-black text-slate-800">
          Leadership and Impact
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* HackIreland */}
          <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Award className="mb-4 text-rose-500" size={32} />

            <h3 className="mb-2 text-2xl font-black text-slate-800">
              <a
                href="https://www.instagram.com/hack.ireland/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-rose-500"
              >
                HackIreland
              </a>
            </h3>

            <p className="mb-4 font-semibold text-rose-600">
              Organiser
            </p>

            <p className="leading-relaxed text-slate-600">
              Helped secure €35k+ sponsorship from companies including
              Intercom, Stripe, OpenAI, and DogPatch Labs. Supported event
              operations and worked with the organising team to deliver a
              successful hackathon.
            </p>

            <a
              href="https://www.instagram.com/hack.ireland/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-bold text-rose-500 transition hover:underline"
            >
              View HackIreland →
            </a>
          </div>

          {/* Class Representative */}
          <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Users className="mb-4 text-pink-500" size={32} />

            <h3 className="mb-2 text-2xl font-black text-slate-800">
              <a
                href="https://www.tcdsu.org/education/class-reps"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-pink-500"
              >
                Class Representative
              </a>
            </h3>

            <p className="mb-4 font-semibold text-pink-600">
              Trinity College Dublin Students&apos; Union
            </p>

            <p className="leading-relaxed text-slate-600">
              Represented the interests of my peers in academic and
              administrative matters, facilitating communication between
              students and university administration.
            </p>

            <a
              href="https://www.tcdsu.org/education/class-reps"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-bold text-pink-500 transition hover:underline"
            >
              View Class Representative Role →
            </a>
          </div>

          {/* JCR Leadership */}
          <div className="rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Users className="mb-4 text-purple-500" size={32} />

            <h3 className="mb-2 text-2xl font-black text-slate-800">
              <a
                href="https://www.instagram.com/trinityhalljcr/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-purple-500"
              >
                JCR Leadership
              </a>
            </h3>

            <p className="mb-4 font-semibold text-purple-600">
              Vice President and Treasurer
            </p>

            <p className="leading-relaxed text-slate-600">
              Campaigned for and received 400+ votes for this position in
              2025. Tracked expenditure and supported budgeting of €60,000 for
              student initiatives while engaging with college governance and
              student representation.
            </p>

            <a
              href="https://www.instagram.com/trinityhalljcr/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-bold text-purple-500 transition hover:underline"
            >
              View JCR Leadership →
            </a>
          </div>

          {/* Mentor */}
          <div className="rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-peach-50 to-yellow-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Users className="mb-4 text-orange-500" size={32} />

            <h3 className="mb-2 text-2xl font-black text-slate-800">
              <a
                href="https://www.tcd.ie/student2student/get-support/mentoring/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-orange-500"
              >
                Mentor
              </a>
            </h3>

            <p className="mb-4 font-semibold text-orange-600">
              Student-to-Student Mentor, Trinity College Dublin
            </p>

            <p className="leading-relaxed text-slate-600">
              Provided academic and personal support to fellow students,
              helping them navigate their studies and personal challenges.
            </p>

            <a
              href="https://www.tcd.ie/student2student/get-support/mentoring/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-bold text-orange-500 transition hover:underline"
            >
              View Mentoring Role →
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-10 text-4xl font-black text-slate-800">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* NuaLang */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-full rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-2xl font-black text-slate-800">
                    NuaLang
                  </h3>

                  <p className="font-semibold text-slate-600">
                    AI-assisted Irish language learning web app
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  AI-assisted Irish language learning web app built in a team
                  of 8, in collaboration with NuaLang developers. I worked on
                  the React frontend. Our project was selected as one of the
                  top 3 projects at Trinity College Dublin&apos;s
                  Industry-based Software Engineering Awards. We were awarded
                  the &apos;Public Prize&apos; during our first showcase.
                </p>

                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    React
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Frontend
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Team of 8
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    GitLab
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Git
                  </span>
                </div>

                <p className="pt-3 text-xs text-slate-500">
                  Jan 2026 – Apr 2026
                </p>

                <a
                  href="https://www.linkedin.com/company/sweng-group-31-tcd-2026-nualang/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 pt-5 font-bold text-rose-500 transition-all hover:gap-4"
                >
                  <span>View NuaLang</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* This Website */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100 to-fuchsia-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-full rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-2xl font-black text-slate-800">
                    This Website!
                  </h3>

                  <p className="font-semibold text-slate-600">
                    Personal portfolio website
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  Designed the layout, implemented the responsive design, and
                  added interactive elements to showcase my projects, skills,
                  and experience. Hope you enjoy it!
                </p>

                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    React
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Frontend
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Tailwind CSS
                  </span>
                </div>

                <p className="pt-3 text-xs text-slate-500">
                  2026
                </p>
              </div>
            </div>
          </div>

          {/* Programming Project */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-peach-100 to-yellow-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative h-full rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-peach-50 to-yellow-50 p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-2xl font-black text-slate-800">
                    Programming Project
                  </h3>

                  <p className="font-semibold text-slate-600">
                    Interactive graphical programs and team visualisation
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-600">
                  Built interactive graphical programs responding to mouse and
                  keyboard input as part of weekly labs. Contributed to a
                  larger team-based interactive visualisation project using
                  version control workflows. Focused on debugging and clean
                  program structure.
                </p>

                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Interactive Graphics
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Mouse and Keyboard Input
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Version Control
                  </span>

                  <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-bold text-slate-600">
                    Team Project
                  </span>
                </div>

                <p className="pt-3 text-xs text-slate-500">
                  2025 coursework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h2 className="mb-10 text-4xl font-black text-slate-800">
          Skills and Expertise
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.title}
              className={`rounded-3xl border ${skillGroup.borderStyle} bg-gradient-to-br ${skillGroup.cardStyle} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`mb-5 ${skillGroup.iconStyle}`}>
                {skillGroup.icon}
              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-800">
                {skillGroup.title}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${skillGroup.bulletStyle}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

{/* Personal Section */}
<section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
  <div className="rounded-[2rem] border border-pink-100 bg-white/60 p-8 md:p-10">
    <h2 className="mb-8 text-3xl font-black text-slate-800">
      A Little More About Me
    </h2>

    <div className="grid gap-6 md:grid-cols-3">
      {/* Languages */}
      <div className="rounded-2xl bg-rose-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-rose-600">
          Languages
        </h3>

        <p className="leading-relaxed text-slate-600">
          I speak English and Irish, and I have a strong interest in the Irish
          language and Irish Sign Language.
        </p>
      </div>

      {/* Music */}
      <div className="rounded-2xl bg-purple-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-purple-600">
          Music
        </h3>

        <p className="leading-relaxed text-slate-600">
          I play five or more instruments, with the Celtic harp being my
          favourite.
        </p>
      </div>

      {/* Outside */}
<div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-100 via-pink-50 to-lavender-100 p-6 transition hover:shadow-md">
  <h3 className="mb-3 text-xl font-bold text-rose-600">
    Outside
  </h3>

  <p className="leading-relaxed text-slate-600">
    I row with{' '}
    <a
      href="https://www.tcd.ie/sport/student-sport/sport-clubs/rowing-ladies/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-rose-600 underline decoration-rose-300 underline-offset-2 transition hover:text-rose-700"
    >
      Dublin University Ladies Boat Club
    </a>{' '}
    at Trinity College Dublin. I also enjoy running, exploring new places,
    and spending time outdoors.
  </p>
</div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 p-10 text-center text-slate-800 md:p-12">
          <h2 className="mb-5 text-4xl font-black">
            Let&apos;s Connect
          </h2>

          <p className="mb-7 text-lg">
            Open to Software Engineering Internship opportunities and
            collaborations.
          </p>

          <a
            href="mailto:sakinsel@tcd.ie"
            className="inline-block rounded-full bg-white px-8 py-4 font-bold text-slate-700 transition hover:-translate-y-1 hover:shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-pink-50/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-7 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-3 font-black text-slate-800">
                Contact
              </h3>

              <div className="space-y-2 text-slate-600">
                <p>sakinsel@tcd.ie</p>
                <p>+353 83 006 8920</p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-black text-slate-800">
                Links
              </h3>

              <div className="space-y-2">
                <a
                  href="https://github.com/sakinsel2028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 transition hover:text-purple-500"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sarahosullivan2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 transition hover:text-pink-500"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-black text-slate-800">
                Location
              </h3>

              <p className="text-slate-600">
                Dublin, Ireland
              </p>
            </div>
          </div>

          <div className="border-t border-pink-200 pt-7 text-center text-slate-500">
            <p>© 2026 Sarah O&apos;Sullivan · Built with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
}