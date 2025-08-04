import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { ViewProjectsButton } from "@/components/viewProjectsButton";
import { ContactMeButton } from "@/components/contactMeButton";
import { LeetCodeIcon } from "@/components/leetcode-icon";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">
                  Software Engineer | Back-End Developer
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Ali Magdy
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I enhance companies' workflows and introduce tailored solutions
              based on unique business needs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <ViewProjectsButton />
              <ContactMeButton />
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/alimagdye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/alimagdye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              <Link
                href="https://leetcode.com/u/alimagdy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <LeetCodeIcon />
                  <span className="sr-only">LeetCode</span>
                </Button>
              </Link>
              
              <Link href="mailto:alimagdye1@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/prf.jpg?height=600&width=600"
                  alt="Ali Magdy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I am a Computer Science student at Ain Shams University and a
                  passionate Back-End Developer Node.js, TypeScript, Express.js,
                  MySql, MongoDB, PostgreSql, ORM.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Currently, I work as an AI Trainer at Outlier, leveraging my
                  programming expertise to train AI models. I am also expanding
                  my backend skills through hands-on projects, certifications,
                  and continuous learning.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  One of my key projects is a real-time chat application built
                  with Node.js, Express.js, and Supabase.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My projects showcase my ability to enhance workflows and
                  introduce tailored solutions based on unique business needs.
                  For instance, I developed a comprehensive database for an
                  accessible hotel.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I am always open to new opportunities, collaborations, and
                  internships where I can apply and grow my expertise in backend
                  development.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Ali Magdy</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">alimagdye1@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">New Cairo, Cairo, Egypt</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/ali-magdy-cv.pdf" download>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Node.js" level={100} />
            <SkillBadge name="TypeScript" level={100} />
            <SkillBadge name="Express.js" level={100} />
            <SkillBadge name="PostgreSQL" level={100} />
            <SkillBadge name="MySql" level={100} />
            <SkillBadge name="MongoDB" level={100} />
            <SkillBadge name="Prisma ORM" level={100} />
            <SkillBadge name="Supabase" level={100} />
            <SkillBadge name="Restful" level={100} />
            <SkillBadge name="Socket.io" level={100} />
            <SkillBadge name="JavaScript" level={100} />
            <SkillBadge name="HTML/CSS" level={100} />
            <SkillBadge name="Java" level={100} />
            <SkillBadge name="C++" level={100} />
            <SkillBadge name="DSA" level={100} />
            <SkillBadge name="Git" level={100} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Real-Time Chat Application"
              description="A full-stack real time chat application enables instant messaging with authentication."
              tags={["Node.js", "Socket.io", "Express.js", "Supabase client"]}
              image="/chat-app.jpg?height=400&width=600"
              demoUrl="https://meow-chat.netlify.app/index.html"
              repoUrl="https://github.com/alimagdye/Real-Time-Chat-Application"
            />
            <ProjectCard
              title="Product Management API"
              description="A REST API for managing products and their updates, including authentication, validation."
              tags={["Node.js", "TypeScript", "Express.js", "Prisma", "JWT"]}
              image="/product-management.png?height=400&width=600"
              demoUrl="https://github.com/alimagdye/product-management-api/blob/main/README.md"
              demoLabel="Documentation"
              repoUrl="https://github.com/alimagdye/product-management-api"
            />
            <ProjectCard
              title="Notes CLI App"
              description="A full-featured Notes Management CLI App enables users to create, view, find, and delete notes."
              tags={["Node.js", "Yargs", "File handling", "CLI", "JSON"]}
              image="/note-cli.png?height=400&width=600"
              demoUrl="https://github.com/alimagdye/note-app/blob/main/README.md"
              demoLabel="Usage Guide"
              repoUrl="https://github.com/alimagdye/note-app"
            />
            <ProjectCard
              title="HFD Database"
              description="A database tailored to meet the unique needs of a hotel catering to individuals with disabilities."
              tags={["MySql", "SQL", "Database Design", "EER Design"]}
              image="/hotel-db.jpg?height=400&width=600"
              demoUrl="https://github.com/alimagdye/HFD-database/blob/main/README.md"
              demoLabel="Documentation"
              repoUrl="https://github.com/alimagdye/HFD-database"
            />
            <ProjectCard
              title="Cinema System"
              description="A command-line Java application for managing a cinema's movie screenings, seat reservations."
              tags={["Java", "CLI", "DSA", "Object-Oriented Programming"]}
              image="/cinema-app.png?height=400&width=600"
              demoUrl="https://github.com/alimagdye/Cinema-System/blob/main/README.md"
              demoLabel="Usage Guide"
              repoUrl="https://github.com/alimagdye/Cinema-System"
            />
            <ProjectCard
              title="Bank Website"
              description="A banking system enables logging in, checking balances, and performing deposits, withdrawals."
              tags={["HTML", "CSS", "JavaScript", "Responsive Design"]}
              image="/bank-app.jpg?height=400&width=600"
              demoUrl="https://alimagdye.github.io/trust-bank"
              repoUrl="https://github.com/alimagdye/trust-bank"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">alimagdye1@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      linkedin.com/in/alimagdye
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/alimagdye</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <LeetCodeIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LeetCode</div>
                    <div className="font-medium">leetcode.com/u/alimagdy</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Ali
              </span>
              <span className="text-white"> Magdy</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Ali Magdy. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/alimagdye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alimagdye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://leetcode.com/u/alimagdy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <LeetCodeIcon />
                <span className="sr-only">LeetCode</span>
              </Button>
            </Link>

            <Link href="mailto:alimagdye1@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
