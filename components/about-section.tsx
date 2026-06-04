const skills = [
  "Python",
  "JavaScript",
  "C++",
  "Solidity",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind",
  "Next.js",
  "HonoJS",
  "REST APIs",
  "FastAPI",
  "Django",
  "Flask",
  "OpenAI & Gemini APIs",
  "MongoDB",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "ESP32",
  "MicroPython",
  "Raspberry Pi",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-center">About Me</h2>

        <div className="space-y-8">
          {/* Bio */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              I'm a passionate Python developer with a strong interest in AI and large-scale projects that aim to
              revolutionize the industry. Currently studying Computer Science at Universidad de Buenos Aires, I combine
              academic knowledge with hands-on experience in real world projects.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              As a crypto/web3 enthusiast and entrepreneur, I believe in meritocracy and constancy. When I'm not coding,
              you'll find me working on innovative projects like automated garden systems, accessibility tools, and
              AI-powered applications.
            </p>
          </div>

          {/* Skills */}
          <div className="pt-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools</h3>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
