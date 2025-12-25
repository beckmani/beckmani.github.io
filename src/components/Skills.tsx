import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import skillsData from "@/data/skills.json";

interface SkillsProps {
  className?: string;
}

export const Skills = ({ className }: SkillsProps) => {
  return (
    <section id="skills" className={cn("min-h-screen py-20 px-4 bg-surface scroll-mt-16 flex items-center", className)}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
