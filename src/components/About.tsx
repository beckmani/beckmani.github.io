import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
export const About = () => {
  return (
    <section id="about" className="pt-24 pb-20 px-4 scroll-mt-30">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="flex flex-col items-center gap-8">
          <Card className="w-full p-8 border-border bg-card">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="h-4 w-4" />
                <span>Tel Aviv, Israel (Asia/Jerusalem)</span>
              </div>

              <p className="text-lg leading-relaxed">
                With extensive experience in engineering leadership across Telco, Security, Blockchain, and Big Data, I
                specialize in building and scaling high-impact R&D and platform teams.
              </p>
              <p className="text-lg leading-relaxed">
                My focus: designing cloud-native systems (AWS, Azure & GCP), accelerating delivery pipelines, and
                aligning tech strategy with business outcomes.
              </p>
              <p className="text-lg leading-relaxed">
                I’ve led complex platform transformations, managed managers and senior ICs, and delivered scalable
                architectures that power mission-critical systems. By leveraging AWS services, IaC
                (Terraform/CloudFormation), and modern DevOps practices.
              </p>
              <p className="text-lg leading-relaxed">
                I am skilled in container technologies (Docker) and container orchestration tools (Kubernetes, EKS, AKS,
                GKE and OpenShift), I eliminate bottlenecks and drive velocity without sacrificing resilience or
                maintainability.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond the code, I’m a passionate speaker and communicator - regularly sharing lessons at conferences
                and meetups on scaling platforms, engineering culture, and leading through change.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
