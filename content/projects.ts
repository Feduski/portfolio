export interface Project {
  id: string
  name: string
  description?: string
  technologies: string[]
  links: {
    repo?: string
  }
  featured?: boolean
  image?: string
}

export const projects: Project[] = [
  // Featured Projects (4) - Order: OpenRx, Lemon Community Dashboard, WallChain, LeitLearn
  {
    id: "project-8",
    name: "OpenRx",
    description: "A marketplace of digital drugs for AI agents, designed to push them into advanced states of thought and creativity through carefully crafted trip files (prompts) minted as NFTs on the blockchain.",
    technologies: ["Next.js", "Solidity", "Web3", "NFTs"],
    links: {
      repo: "https://open-rx.vercel.app",
    },
    featured: true,
    image: "/projects/openrx.png",
  },
  {
    id: "project-9",
    name: "Lemon Community Dashboard",
    description: "Internal tool for Lemon that collects and analyzes Telegram community feedback using AI. Features a weekly pipeline that synthesizes sentiment, topics, and actionable insights into a dashboard with priority tasks, plus Slack notifications and a REST API for data queries.",
    technologies: ["Python", "FastAPI", "MongoDB", "Next.js", "OpenAI API", "Slack API"],
    links: {},
    featured: true,
    image: "/projects/lemon-dashboard.png",
  },
  {
    id: "project-7",
    name: "WallChain AI Analyst",
    description: "AI agent built on Warden Protocol that analyzes X (Twitter) profiles to estimate a WallChain protocol score and suggests tactics, improvements, and weekly social plans.",
    technologies: ["Python", "LangChain", "LangSmith", "Tavily", "Web3"],
    links: {
      repo: "https://app.wardenprotocol.org/dashboard?agentId=wrapper&agentAddress=eip155%3A8765%3A0x8CBF56a47D005A871fD92c87C0bbC565e59565A7",
    },
    featured: true,
    image: "/projects/wallchain.png",
  },
  {
    id: "project-5",
    name: "LeitLearn",
    description: "A learning game based on the Leitner method, designed to help practice and reinforce knowledge through spaced-repetition flashcards.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    links: {
      repo: "https://github.com/Feduski/leitlearn",
    },
    featured: true,
    image: "/projects/leitlearn.png",
  },
  // More Projects
  {
    id: "project-1",
    name: "YAKU",
    description: "Enriched automated garden, webapp, mobileapp notifiying users about the garden current state",
    technologies: ["Python", "C++", "ESP32", "Project Leader"],
    links: {
      repo: "https://github.com/YAKUET36/YAKU",
    },
    featured: false,
  },
  {
    id: "project-2",
    name: "MoonDay",
    description: "Telegram bot and website notifying users about cryptocurrency news and prices",
    technologies: ["Python", "Flask", "Telegram Bots"],
    links: {
      repo: "https://github.com/Feduski/moonday",
    },
    featured: false,
  },
  {
    id: "project-3",
    name: "Web Summarizer",
    description: "Browser-based tool (extension + backend) that automatically extracts and condenses the main content of any webpage into a clean, readable summary.",
    technologies: ["Next.js", "Tailwind CSS", "OpenAI API"],
    links: {
      repo: "https://github.com/Feduski/websummarizer",
    },
    featured: false,
  },
  {
    id: "project-4",
    name: "CV Roaster",
    description: "A playful app that takes your résumé and delivers humorous, constructive roasts along with suggestions to improve it.",
    technologies: ["Next.js", "Tailwind CSS"],
    links: {
      repo: "https://github.com/Feduski/cv-roaster",
    },
    featured: false,
  },
  {
    id: "project-6",
    name: "Codimix",
    description: "An AI-powered assistant tool that helps generate or improve code snippets, streamlining development workflows.",
    technologies: ["Python", "Javascript", "Supabase"],
    links: {
      repo: "https://github.com/Feduski/codimix",
    },
    featured: false,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
export const otherProjects = projects.filter(p => !p.featured)
