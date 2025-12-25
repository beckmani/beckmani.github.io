import { ArrowRight, Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/isaac-profile.jpg";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6 shadow-glow border-4 border-primary/20">
            <AvatarImage src={profileImage} alt="Isaac Beckman" className="object-cover" />
            <AvatarFallback className="text-4xl font-bold bg-gradient-primary text-white">IB</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Isaac Beckman</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8">Senior Engineering Manager</p>
          <p className="text-xl md:text-2xl text-muted mb-8">DevOps, Cloud & AI</p>
          <p className="text-xl md:text-2xl text-muted mb-8">Building High-Scale Cloud-Native Systems</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")} className="group border-primary/30 text-foreground hover:bg-primary/10">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/30 text-foreground hover:bg-primary/10"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/beckmani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/isaac-beckman-isr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:beckmani@gmail.com?subject=Portfolio%20contact"
            className="text-muted hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://beckmani.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            <Globe className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
