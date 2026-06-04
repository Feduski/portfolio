import { Mail, MapPin, Calendar } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Always curious about new challenges. From MVPs to scaling products, I'm ready to bring ideas into
            production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:fedengp@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      fedengp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">CABA, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="text-foreground">Open to new projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">Prefer a quick chat? Text me on X</p>
              <a
                href="https://x.com/0xFeduski"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Mail size={16} />
                Send Message
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-lg font-semibold mb-3">Quick Message</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The fastest way to connect is a short call. Pick a time that works and I will confirm right away.
            </p>
            <a
              href="https://cal.com/feduski"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full h-11 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Schedule a quick call
            </a>
            <p className="text-xs text-muted-foreground mt-3 text-center">No forms. Straight to scheduling.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
