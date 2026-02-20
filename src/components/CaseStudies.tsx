import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    demoUrl: "https://www.youversion.com/bible-app",
    metrics: [
      { label: "Installs", value: "109M+", icon: Zap },
      { label: "MAU (L28)", value: "53.5M+", icon: Users },
      { label: "DAU", value: "5.7M+", icon: TrendingUp },
    ],
  },
  {
    image: casePlatform,
    title: "YouVersion Platform",
    clientType: "Bible / platform",
    description: "Giving developers around the world access to our technology to build Bible apps. Build applications and integrate with the world's most popular Bible platform.",
    platformUrl: "https://platform.youversion.com/bibles",
    demoUrl: "https://platform.youversion.com/",
    metrics: [
      { label: "Bibles", value: "1,480+", icon: Zap },
      { label: "Publishers", value: "34+", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
  },
  {
    image: caseTransformation,
    title: "Connecting Bible App users to Churches",
    clientType: "Denomination / church network",
    description: "Bridging digital Bible engagement with local church community and growth.",
    demoUrl: "https://www.youversion.com/churches",
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];

const CaseStudies = () => {
  const [demoState, setDemoState] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="work" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">See the work</h3>
        <p className="text-muted-foreground max-w-2xl mb-10">
          How I’ve helped church leaders, faith tech teams, and Christian entrepreneurs ship products that scale—without losing the mission. From YouVersion-scale platforms to national ministry roadmaps: strategy, product, and execution in your corner.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => {
            const { metrics } = caseStudy;
            const hasDemo = "demoUrl" in caseStudy && caseStudy.demoUrl;
            return (
              <Card
                key={index}
                className={`overflow-hidden hover-rise flex flex-col ${hasDemo ? "cursor-pointer" : ""}`}
                role={hasDemo ? "button" : undefined}
                tabIndex={hasDemo ? 0 : undefined}
                onClick={hasDemo ? () => setDemoState({ url: caseStudy.demoUrl!, title: caseStudy.title }) : undefined}
                onKeyDown={hasDemo ? (e) => e.key === "Enter" && setDemoState({ url: caseStudy.demoUrl!, title: caseStudy.title }) : undefined}
              >
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      platform.youversion.com/bibles →
                    </a>
                  )}
                  {hasDemo && (
                    <span className="text-sm text-primary font-medium mb-4 inline-block">
                      View case study →
                    </span>
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

      <Dialog open={!!demoState} onOpenChange={(open) => !open && setDemoState(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[85vh] flex flex-col gap-0 p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
            <DialogTitle>{demoState?.title ?? "Case study"}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0 flex flex-col px-6 pb-6">
            <iframe
              title={demoState?.title ?? "Case study demo"}
              src={demoState?.url ?? ""}
              className="w-full flex-1 min-h-[400px] rounded-md border bg-muted"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Browsing within the site. If the demo doesn’t load, the linked site may block embedding.{" "}
              {demoState?.url && (
                <a
                  href={demoState.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in new tab →
                </a>
              )}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;
