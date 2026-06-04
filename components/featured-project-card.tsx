import Image from "next/image"
import { ExternalLink, Lock } from "lucide-react"
import type { Project } from "@/content/projects"

interface FeaturedProjectCardProps {
  project: Project
  reversed?: boolean
}

export default function FeaturedProjectCard({ project, reversed = false }: FeaturedProjectCardProps) {
  const hasLink = project.links.repo && project.links.repo.length > 0
  
  const Wrapper = hasLink ? "a" : "div"
  const wrapperProps = hasLink 
    ? { href: project.links.repo, target: "_blank", rel: "noopener noreferrer" } 
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`
        group relative flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} 
        gap-6 lg:gap-8 p-6 rounded-2xl 
        bg-zinc-900/50 border border-zinc-800/50
        hover:border-zinc-700/80 hover:bg-zinc-900/80
        transition-all duration-300
        ${hasLink ? "cursor-pointer" : "cursor-default"}
      `}
    >
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          {hasLink ? (
            <ExternalLink 
              size={18} 
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          ) : (
            <span 
              className="relative group/lock cursor-help"
            >
              <Lock size={16} className="text-zinc-500" />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 rounded whitespace-nowrap opacity-0 group-hover/lock:opacity-100 transition-opacity pointer-events-none">
                Internal use, no public link available.
              </span>
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-5 text-pretty">
          {project.description}
        </p>

        {/* Tech Stack - Static text labels */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-zinc-800/80 border border-zinc-700/50 rounded-full text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative aspect-video rounded-xl overflow-hidden bg-zinc-800/30">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-zinc-700">{project.name.charAt(0)}</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Wrapper>
  )
}
