import { Download } from "lucide-react"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./social-icons"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold mb-1">Feduski</p>
            <p className="text-sm text-muted-foreground">Full-stack developer building the future of web</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Download CV"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="https://github.com/0xFeduski"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/fedengp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://twitter.com/0xFeduski"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <TwitterIcon size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Feduski. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  )
}
