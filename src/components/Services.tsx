import { Card } from "@/components/ui/card";
import { Lightbulb, Code2, Palette, Handshake } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Product Strategy", description: "Vision & roadmap, discovery, user research, and KPI design that ladders to mission impact." },
  { icon: Code2, title: "Technology Consulting", description: "Architecture reviews, platform choices, vendor evaluation, and cost/performance tuning." },
  { icon: Palette, title: "Experience Design", description: "Mobile-first UX, design systems, and growth loops for engagement and retention." },
  { icon: Handshake, title: "Partnerships", description: "APIs, licensing, and collaboration models with Bible societies and content partners." },
];

const Services = () => (
  <section id="services" className="pb-16 md:pb-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">How I help</h3>
      <p className="text-muted-foreground max-w-2xl mb-8">
        From vision to execution—tailored for church leaders, faith tech teams, and Christian entrepreneurs.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="p-6 hover-rise">
              <div className="mb-4 text-primary">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
export default Services;