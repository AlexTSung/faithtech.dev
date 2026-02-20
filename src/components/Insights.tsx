import { Card } from "@/components/ui/card";
import { Brain, Users, Compass } from "lucide-react";
const insights = [{
  icon: Brain,
  title: "AI and the Future of Bible Engagement",
  description: "Where personalization meets spiritual formation—without compromising trust."
}, {
  icon: Users,
  title: "Rapid iteration and Insights",
  description: "Discovery, iteration, and KPIs that measure what really matters."
}, {
  icon: Compass,
  title: "Build Tech for Your Local Community",
  description: "Operational excellence and ethics as first-class features."
}];
const Insights = () => {
  return <section id="insights" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Actionable Insights</h3>
        <p className="text-muted-foreground mb-8">
          The most effective digital ministries don’t just collect data—they act on it. I help church and faith tech leaders turn analytics into actionable next steps so your mission moves forward with clarity and purpose.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => {
          const Icon = insight.icon;
          return <Card key={index} className="p-6 hover-rise">
                <div className="mb-4 text-secondary">
                  <Icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{insight.title}</h4>
                <p className="text-muted-foreground">{insight.description}</p>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Insights;