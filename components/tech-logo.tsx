import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip"

interface TechLogoProps {
  tech: string
  className?: string
  isProjectHovered?: boolean
  style?: React.CSSProperties
}

const techLogos: Record<string, string> = {
  Python: "🐍",
  JavaScript: "JS",
  TypeScript: "TS",
  "Next.js": "▲",
  React: "⚛",
  Flask: "🌶",
  Django: "🎸",
  FastAPI: "⚡",
  "C++": "C++",
  ESP32: "📡",
  "Tailwind CSS": "🎨",
  Supabase: "🗄",
  Prisma: "🔺",
  "Telegram Bots": "📱",
  "Project Leader": "👑",
}

export default function TechLogo({ tech, className = "", isProjectHovered = false, style }: TechLogoProps) {
  const logo = techLogos[tech] || "<>"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`
              w-8 h-8 rounded-md bg-secondary/50 border border-border/50
              flex items-center justify-center text-xs font-mono
              transition-all duration-300 cursor-default overflow-hidden
              ${isProjectHovered ? "bg-secondary border-border scale-110 w-auto min-w-16 px-2" : ""}
              ${className}
            `}
            style={style}
          >
            <span className={`transition-opacity duration-200 ${isProjectHovered ? "hidden" : "block"}`}>{logo}</span>
            <span
              className={`text-[10px] font-semibold whitespace-nowrap transition-opacity duration-200 ${
                isProjectHovered ? "block" : "hidden"
              }`}
            >
              {tech}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs font-medium">{tech}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
