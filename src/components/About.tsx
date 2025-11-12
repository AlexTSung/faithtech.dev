import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
const highlights = ["Scaled products serving hundreds of millions", "100+ partnerships with Bible societies & ministries", "Team building, processes, and org design"];
const About = () => {
  return <section id="about" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">From YouVersion to Your Mission</h3>
        <p className="text-muted-foreground mb-8">
          With 10+ years of tech & product leadership experience and 8+ years serving in ministry, our team has worked alongside 30K+ bible partners, ministry partners, and churches. I partner with teams to clarify strategy, build delightful products, and scale with excellence — without losing the heart of the mission.  Rooted in both tech innovation and pastoral experience, FaithTech.dev helps faith-based organizations bridge the gap between spiritual vision and digital execution—empowering teams to reach people everywhere with excellence, clarity, and purpose. 
        </p>
        <Card className="p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-success flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground">{highlight}</p>
              </div>)}
          </div>
        </Card>
      </div>
    </section>;
};
export default About;