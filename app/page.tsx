import Navbar from "@/components/navbar"
import AnimatedBackground from "@/components/animated-background"
import TerminalCard from "@/components/terminal-card"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">

        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              I build clean, back-end experiences with Python and modern tooling.
            </h1>

            <p className="text-xl text-muted-foreground text-pretty">
              Delivering scalable solutions that drive results.
            </p>

            <div className="pt-4">
              <a
                href="/#projects"
                className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TerminalCard />
          </div>
        </div>
      </section>

      <AboutSection />
      <ProjectsSection />

      <ContactSection />

      <Footer />
      </div>
    </div>
  )
}
