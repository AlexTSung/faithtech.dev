import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import caseEngagement from "@/assets/case-engagement.png";
import casePlatform from "@/assets/case-platform.png";
import caseTransformation from "@/assets/case-transformation.png";

const cases = [
  {
    image: caseEngagement,
    title: "Global Scripture Engagement",
    clientType: "Bible / digital ministry",
    description: "Drove double-digit growth with habit formation, community, and content personalization.",
    metrics: [
      { label: "Installs", value: "109M+", icon: Zap },
      { label: "MAU (L28)", value: "53.5M", icon: Users },
      { label: "DAU", value: "5.7M", icon: TrendingUp },
    ],
  },
  {
    image: casePlatform,
    title: "YouVersion Platform",
    clientType: "Bible / platform",
    description: "Giving developers around the world access to our technology to build Bible apps. Build applications and integrate with the world's most popular Bible platform.",
    metrics: [
      { label: "Bibles", value: "1,480", icon: Zap },
      { label: "Publishers", value: "34", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
    platformUrl: "https://platform.youversion.com/bibles",
  },
  {
    image: caseTransformation,
    title: "Connecting Bible App users to Churches",
    clientType: "Denomination / church network",
    description: "Bridging digital Bible engagement with local church community and growth.",
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">See the work</h3>
        <p className="text-muted-foreground max-w-2xl mb-2">
          How I’ve helped church leaders, faith tech teams, and Christian entrepreneurs ship products that scale—without losing the mission.
        </p>
        <p className="text-muted-foreground max-w-2xl mb-10">
          From YouVersion-scale platforms to national ministry roadmaps: strategy, product, and execution in your corner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => {
            const { metrics } = caseStudy;
            return (
              <Card key={index} className="overflow-hidden hover-rise flex flex-col">
                <img
                  src={caseStudy.image}
                  alt=""
                  className="w-full h-44 object-cover bg-muted"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {caseStudy.clientType}
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-3">{caseStudy.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {caseStudy.description}
                  </p>
                  {"platformUrl" in caseStudy && caseStudy.platformUrl && (
                    <a
                      href={caseStudy.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mb-4 inline-block"
                    >
                      platform.youversion.com/bibles →
                    </a>
                  )}
                  <div className="space-y-3">
                    {metrics.map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{m.label}</span>
                          <span className="font-bold text-foreground ml-auto">{m.value}</span>
                        </div>
                      );
                    })}
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

export default CaseStudies;
