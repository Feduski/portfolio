"use client"

import { ExternalLink } from "lucide-react"
import { GithubIcon } from "./social-icons"
import type { Project } from "@/content/projects"
import TechLogo from "./tech-logo"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group bg-card/50 border border-border/50 rounded-lg p-6 hover:bg-card hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>

        {/* Project Links */}
        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
              aria-label={`View ${project.name} source code`}
            >
              <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-pretty">{project.description}</p>

      <div className="flex flex-wrap gap-2 animate-in fade-in duration-500">
        {project.technologies.map((tech, index) => (
          <TechLogo
            key={tech}
            tech={tech}
            isProjectHovered={isHovered}
            className="animate-in fade-in slide-in-from-bottom-2"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
