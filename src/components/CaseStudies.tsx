import { Card } from "@/components/ui/card";
import caseEngagement from "@/assets/case-engagement.jpg";
import casePlatform from "@/assets/case-platform.jpg";
import caseTransformation from "@/assets/case-transformation.jpg";
const cases = [{
  image: caseEngagement,
  title: "Global Scripture Engagement",
  description: "Drove double-digit growth with habit formation, community, and content personalization."
}, {
  image: casePlatform,
  title: "API Modernization for Bible Publisher",
  description: "Reduced latency and unlocked new licensing models with a secure, scalable API layer."
}, {
  image: caseTransformation,
  title: "Digital Strategy for National Ministry",
  description: "Roadmap, org design, and vendor selection to reach Gen Z across channels."
}];
const CaseStudies = () => {
  return <section id="work" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Previous Work    </h3>
        <p className="text-muted-foreground mb-8">FaithTech.dev brings world-class product and technology leadership to ministries, churches, and Bible organizations seeking to amplify their digital impact. Built on years of experience leading global platforms like YouVersion, serving over 1 billion downloads and 30,000+ partners worldwide, our team combines the rigor of Silicon Valley product management with the heart of ministry leadership. With a background spanning high-growth startups, AI-driven platforms, and large-scale enterprise systems, we understand how to turn data into actionable insights, design digital experiences that engage, and build technology that scales without losing sight of mission.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => <Card key={index} className="overflow-hidden hover-rise">
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{caseStudy.title}</h4>
                <p className="text-muted-foreground">{caseStudy.description}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default CaseStudies;