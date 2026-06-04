"use client"

const STARS = [
  { left: "6%", top: "10%", size: 1, opacity: 0.7 },
  { left: "12%", top: "32%", size: 2, opacity: 0.55 },
  { left: "18%", top: "70%", size: 1, opacity: 0.75 },
  { left: "24%", top: "18%", size: 1, opacity: 0.6 },
  { left: "28%", top: "48%", size: 2, opacity: 0.5 },
  { left: "33%", top: "82%", size: 1, opacity: 0.8 },
  { left: "38%", top: "12%", size: 1, opacity: 0.6 },
  { left: "42%", top: "36%", size: 2, opacity: 0.55 },
  { left: "47%", top: "68%", size: 1, opacity: 0.7 },
  { left: "52%", top: "22%", size: 1, opacity: 0.65 },
  { left: "56%", top: "50%", size: 2, opacity: 0.55 },
  { left: "61%", top: "78%", size: 1, opacity: 0.75 },
  { left: "66%", top: "16%", size: 1, opacity: 0.6 },
  { left: "70%", top: "42%", size: 2, opacity: 0.5 },
  { left: "74%", top: "88%", size: 1, opacity: 0.75 },
  { left: "78%", top: "26%", size: 1, opacity: 0.65 },
  { left: "82%", top: "56%", size: 2, opacity: 0.55 },
  { left: "86%", top: "8%", size: 1, opacity: 0.75 },
  { left: "90%", top: "36%", size: 1, opacity: 0.6 },
  { left: "94%", top: "72%", size: 2, opacity: 0.5 },
  { left: "9%", top: "86%", size: 1, opacity: 0.75 },
  { left: "21%", top: "6%", size: 1, opacity: 0.65 },
  { left: "31%", top: "58%", size: 1, opacity: 0.55 },
  { left: "41%", top: "90%", size: 2, opacity: 0.5 },
  { left: "59%", top: "6%", size: 1, opacity: 0.7 },
  { left: "73%", top: "62%", size: 1, opacity: 0.65 },
  { left: "88%", top: "90%", size: 1, opacity: 0.7 },
]

const DELAYS = [
  "0s",
  "1.1s",
  "2.2s",
  "0.6s",
  "1.7s",
  "2.9s",
  "0.3s",
  "2.1s",
  "1.4s",
  "0.9s",
  "2.6s",
  "3.2s",
  "1.2s",
  "2.4s",
  "0.5s",
  "1.9s",
  "2.8s",
  "0.7s",
  "1.6s",
  "2.5s",
  "0.4s",
  "1.3s",
  "2.3s",
  "0.8s",
  "1.5s",
  "2.7s",
  "3.1s",
]

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  return (
    <div className={`overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_50%)]" />
      {STARS.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/90 animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: DELAYS[i],
          }}
        />
      ))}
    </div>
  )
}
