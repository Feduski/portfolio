import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import TypewriterText from "@/components/typewriter-text"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl lg:text-6xl font-mono font-semibold text-white">
          <TypewriterText text="Coming Soon..." speed={150} />
        </h1>
      </div>
    </div>
  )
}
