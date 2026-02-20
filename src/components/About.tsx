import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar } from "lucide-react";

const highlights = [
  "Scaled products serving hundreds of millions of users",
  "100+ partnerships with Bible societies and ministries",
  "Team building, processes, and org design for ministry teams",
];

const About = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
  };

  return (
    <section id="about" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">From YouVersion to your mission</h3>
        <p className="text-muted-foreground max-w-2xl mb-4">
          I’ve spent 10+ years in tech and product leadership and 8+ in ministry. I’ve worked alongside 30K+ Bible partners, churches, and faith tech teams. When you work with me, you get a single point of contact—no account managers, no handoffs. We clarify strategy, ship products, and scale with excellence without losing the heart of the mission.
        </p>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Rooted in both Silicon Valley product rigor and pastoral experience, I help church leaders and Christian entrepreneurs bridge the gap between vision and execution—so your digital ministry reaches people with clarity and purpose.
        </p>
        <Card className="p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-success flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </Card>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Let’s align on your next steps.</p>
          <Button onClick={openCalendly} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-glow">
            <Calendar className="mr-2 h-4 w-4" />
            Book a free strategy call
          </Button>
        </div>
      </div>
    </section>
  );
};
export default About;
