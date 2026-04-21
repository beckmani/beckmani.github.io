import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import experienceData from "@/data/experience.json";
import plainidLogo from "@/assets/plainid-logo.png";
import amdocsLogo from "@/assets/amdocs-logo.png";
import spacemeshLogoLight from "@/assets/spacemesh-logo-light.png";
import spacemeshLogoDark from "@/assets/spacemesh-logo-dark.png";
import ibmLogoLight from "@/assets/ibm-logo-light.svg";
import ibmLogoDark from "@/assets/ibm-logo-dark.svg";
import dellLogo from "@/assets/dell-logo.svg";
import appliedMaterialsLogo from "@/assets/applied-materials-logo.png";
import nessLogo from "@/assets/ness-logo.png";
import bmcLogoDark from "@/assets/bmc-logo-dark.png";
import bmcLogoLight from "@/assets/bmc-logo-light.png";

type CompanyLogo = string | { light: string; dark: string };

const companyLogos: Record<string, CompanyLogo> = {
  BMC: { light: bmcLogoLight, dark: bmcLogoDark },
  PlainID: plainidLogo,
  Amdocs: amdocsLogo,
  Spacemesh: { light: spacemeshLogoLight, dark: spacemeshLogoDark },
  "IBM (XIV)": { light: ibmLogoLight, dark: ibmLogoDark },
  "DELL (EMC)": dellLogo,
  "Applied Materials": appliedMaterialsLogo,
  Ness: nessLogo,
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((job, index) => {
            const logo = companyLogos[job.company];

            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow relative overflow-hidden"
              >
                <div className="flex gap-10">
                  <div className="flex-shrink-0 w-24 md:w-32 flex items-start justify-center pt-1">
                    {logo ? (
                      <div className={`w-full flex items-center justify-center rounded-lg p-2 ${job.company === "PlainID" ? "bg-slate-800" : ""}`}>
                        {typeof logo === "string" ? (
                          <img
                            src={logo}
                            alt={`${job.company} logo`}
                            className="w-full h-auto object-contain"
                          />
                        ) : (
                          <>
                            <img
                              src={logo.light}
                              alt={`${job.company} logo`}
                              className="w-full h-auto object-contain dark:hidden"
                            />
                            <img
                              src={logo.dark}
                              alt={`${job.company} logo`}
                              className="hidden w-full h-auto object-contain dark:block"
                            />
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                        {job.company.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{job.role}</h3>
                        <p className="text-xl text-primary mb-2">{job.company}</p>
                      </div>
                      <div className="flex flex-col gap-2 text-muted text-sm md:w-56 md:flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted leading-relaxed"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
