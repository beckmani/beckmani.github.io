import { ExternalLink, Github, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";

export const Projects = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 scroll-mt-16 flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          A selection of my work in cloud infrastructure, DevOps automation, and open-source contributions
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.name}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/50 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/beckmani?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
