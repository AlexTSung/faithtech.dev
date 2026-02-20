import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Zap } from "lucide-react";

const insightCards = [
  {
    clientType: "AI & personalization",
    title: "AI and the Future of Bible Engagement",
    description: "Where personalization meets spiritual formation—without compromising trust.",
    metrics: [
      { label: "Personalization lift", value: "+35%", icon: TrendingUp },
      { label: "Trust score", value: "94%", icon: Users },
      { label: "Daily engagement", value: "2.4x", icon: Zap },
    ],
    impactPercent: 88,
  },
  {
    clientType: "Product & data",
    title: "Rapid iteration and Insights",
    description: "Discovery, iteration, and KPIs that measure what really matters.",
    metrics: [
      { label: "Cycle time", value: "-40%", icon: Zap },
      { label: "KPI alignment", value: "100%", icon: TrendingUp },
      { label: "Data-driven decisions", value: "3x", icon: Users },
    ],
    impactPercent: 82,
  },
  {
    clientType: "Local ministry",
    title: "Build Tech for Your Local Community",
    description: "Operational excellence and ethics as first-class features.",
    metrics: [
      { label: "Local reach", value: "+55%", icon: Users },
      { label: "Launch velocity", value: "2x", icon: Zap },
      { label: "Ethics compliance", value: "100%", icon: TrendingUp },
    ],
    impactPercent: 85,
  },
];

const Insights = () => (
  <section id="insights" className="pb-16 md:pb-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">Actionable Insights</h3>
      <p className="text-muted-foreground mb-10">
        The most effective digital ministries don't just collect data—they act on it. I help church and faith tech leaders turn analytics into actionable next steps so your mission moves forward with clarity and purpose.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insightCards.map((card, index) => {
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
export default Insights;
