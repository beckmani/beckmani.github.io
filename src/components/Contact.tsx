import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss cloud infrastructure? Let's connect!
        </p>

        <Card className="p-8 bg-card text-foreground">
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="mb-6 opacity-90">
            Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities,
            interesting projects, or just having a chat!
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:beckmani@gmail.com?subject=Portfolio%20contact" className="flex items-center gap-3 text-primary hover:bg-primary/10 transition-colors px-4 py-3 rounded-lg border border-primary/20 bg-background/5">
              <Mail className="h-5 w-5" />
              <span>beckmani@gmail.com</span>
            </a>
            <a href="https://github.com/beckmani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:bg-primary/10 transition-colors px-4 py-3 rounded-lg border border-primary/20 bg-background/5">
              <Github className="h-5 w-5" />
              <span>github.com/beckmani</span>
            </a>
            <a href="https://www.linkedin.com/in/isaac-beckman-isr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:bg-primary/10 transition-colors px-4 py-3 rounded-lg border border-primary/20 bg-background/5">
              <Linkedin className="h-5 w-5" />
              <span>linkedin.com/in/isaac-beckman-isr</span>
            </a>
            <a href="https://beckmani.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:bg-primary/10 transition-colors px-4 py-3 rounded-lg border border-primary/20 bg-background/5">
              <Globe className="h-5 w-5" />
              <span>beckmani.github.io</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
