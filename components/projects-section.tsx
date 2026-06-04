import { featuredProjects, otherProjects } from "@/content/projects"
import ProjectCard from "./project-card"
import FeaturedProjectCard from "./featured-project-card"
import { GithubIcon } from "./social-icons"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Featured Projects */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              My favorite and most impactful work.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={project.id} 
                project={project} 
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">More of my work</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto text-pretty">
              Other projects I have built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/feduski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
          >
            <GithubIcon size={16} />
            View all repositories
          </a>
        </div>
      </div>
    </section>
  )
}
