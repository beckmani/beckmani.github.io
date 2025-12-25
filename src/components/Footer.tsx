import { Github, Linkedin, Mail, Globe } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Isaac Beckman</h3>
            <p className="text-muted text-sm">Senior Engineering Manager, Devops, Cloud & AI</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 px-[80px]">Quick Links</h4>
            <div className="space-y-2 text-sm px-[80px]">
              <button onClick={() => scrollToSection("about")} className="block text-muted hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="block text-muted hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="block text-muted hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="block text-muted hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/beckmani" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/isaac-beckman-isr/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:beckmani@gmail.com?subject=Portfolio%20contact" className="text-muted hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://beckmani.github.io" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted">
          <p>© {currentYear} Isaac Beckman. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};