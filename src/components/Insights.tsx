import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Zap } from "lucide-react";
import insightAiBible from "@/assets/insight-ai-bible.png";
import insightIteration from "@/assets/insight-iteration.png";
import insightLocal from "@/assets/insight-local-ministry.png";

const insightCards = [
  {
    image: insightAiBible,
    clientType: "AI & personalization",
    title: "AI and the Future of Bible Engagement",
    description: "Where personalization meets spiritual formation—without compromising trust.",
    metrics: [
      { label: "Personalization lift", value: "+35%", icon: TrendingUp },
      { label: "Trust score", value: "99.999%", icon: Users },
      { label: "Daily engagement", value: "2.4x", icon: Zap },
    ],
  },
  {
    image: insightIteration,
    clientType: "Product & data",
    title: "Rapid iteration and Insights",
    description: "Discovery, iteration, and KPIs that measure what really matters.",
    metrics: [
      { label: "UXR Projects", value: "100+", icon: Users },
      { label: "A/B & App Testing", value: "1000+ Hours", icon: Zap },
      { label: "MVP Products Launched", value: "55+", icon: TrendingUp },
    ],
  },
  {
    image: insightLocal,
    clientType: "Local ministry",
    title: "Build Tech for Your Local Community",
    description: "Operational excellence and ethics as first-class features.",
    metrics: [
      { label: "Local reach", value: "+55%", icon: Users },
      { label: "Launch velocity", value: "2x", icon: Zap },
      { label: "Ethics compliance", value: "100%", icon: TrendingUp },
    ],
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
          const { metrics } = card;
          return (
            <Card key={index} className="overflow-hidden hover-rise flex flex-col">
              <img
                src={card.image}
                alt=""
                className="w-full h-44 object-cover bg-muted"
              />
              <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {card.clientType}
              </span>
              <h4 className="text-xl font-bold mt-2 mb-3">{card.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {card.description}
              </p>
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
export default Insights;
