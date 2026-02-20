import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
      { label: "Engagement lift", value: "+24%", icon: TrendingUp },
      { label: "Monthly active users", value: "50M+", icon: Users },
      { label: "Retention (D30)", value: "2.1x", icon: Zap },
    ],
    impactPercent: 85,
  },
  {
    image: casePlatform,
    title: "API Modernization for Bible Publisher",
    clientType: "Bible society / publisher",
    description: "Reduced latency and unlocked new licensing models with a secure, scalable API layer.",
    metrics: [
      { label: "Latency", value: "-60%", icon: Zap },
      { label: "New partners onboarded", value: "3x", icon: Users },
      { label: "Uptime", value: "99.9%", icon: TrendingUp },
    ],
    impactPercent: 90,
  },
  {
    image: caseTransformation,
    title: "Digital Strategy for National Ministry",
    clientType: "Denomination / church network",
    description: "Roadmap, org design, and vendor selection to reach Gen Z across channels.",
    metrics: [
      { label: "Reach (Gen Z)", value: "+40%", icon: Users },
      { label: "Time to launch", value: "-50%", icon: Zap },
      { label: "Stakeholder alignment", value: "100%", icon: TrendingUp },
    ],
    impactPercent: 78,
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
            const { metrics, impactPercent } = caseStudy;
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
                  <div className="space-y-3 mb-4">
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
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Impact</span>
                      <span className="font-semibold text-foreground">{impactPercent}%</span>
                    </div>
                    <Progress value={impactPercent} className="h-2 bg-muted" />
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
