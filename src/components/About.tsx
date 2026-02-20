import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Zap } from "lucide-react";

const aboutCards = [
  {
    clientType: "Bible / digital ministry",
    title: "Global Scripture Engagement",
    description: "Scaled products serving hundreds of millions of users through habit formation, community, and content personalization.",
    metrics: [
      { label: "Engagement lift", value: "+24%", icon: TrendingUp },
      { label: "Monthly active users", value: "50M+", icon: Users },
      { label: "Retention (D30)", value: "2.1x", icon: Zap },
    ],
    impactPercent: 85,
  },
  {
    clientType: "Bible society / publisher",
    title: "Partnerships & Platform",
    description: "100+ partnerships with Bible societies and ministries—APIs, licensing, and collaboration models that scale.",
    metrics: [
      { label: "Partners onboarded", value: "100+", icon: Users },
      { label: "API uptime", value: "99.9%", icon: Zap },
      { label: "New licensing models", value: "3x", icon: TrendingUp },
    ],
    impactPercent: 90,
  },
  {
    clientType: "Denomination / church network",
    title: "Team Building & Org Design",
    description: "Team building, processes, and org design for ministry teams—roadmaps and vendor selection that reach the next generation.",
    metrics: [
      { label: "Reach (Gen Z)", value: "+40%", icon: Users },
      { label: "Time to launch", value: "-50%", icon: Zap },
      { label: "Stakeholder alignment", value: "100%", icon: TrendingUp },
    ],
    impactPercent: 78,
  },
];

const About = () => (
  <section id="about" className="pb-16 md:pb-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">From YouVersion to your mission</h3>
      <p className="text-muted-foreground max-w-2xl mb-4">
        I've spent 10+ years in tech and product leadership and 8+ in ministry. I've worked alongside 30K+ Bible partners, churches, and faith tech teams. When you work with me, you get a single point of contact—no account managers, no handoffs. We clarify strategy, ship products, and scale with excellence without losing the heart of the mission.
      </p>
      <p className="text-muted-foreground max-w-2xl mb-10">
        Rooted in both Silicon Valley product rigor and pastoral experience, I help church leaders and Christian entrepreneurs bridge the gap between vision and execution—so your digital ministry reaches people with clarity and purpose.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aboutCards.map((card, index) => {
          const { metrics, impactPercent } = card;
          return (
            <Card key={index} className="p-6 hover-rise flex flex-col">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {card.clientType}
              </span>
              <h4 className="text-xl font-bold mt-2 mb-3">{card.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {card.description}
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
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
export default About;
