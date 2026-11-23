import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TrendingUp, Users, Zap } from "lucide-react";
import caseBibleApp from "@/assets/case-bible-app.jpg";
import caseStateOfTheBible from "@/assets/case-state-of-the-bible.jpg";
import caseOutreach from "@/assets/case-outreach.jpg";

const cases = [
  {
    image: caseBibleApp,
    title: "The Bible App",
    clientType: "Bible / digital ministry",
    description:
      "Habit formation, community, and content personalization drove double-digit growth for the world's most-used Bible App. If your ministry needs people to open Scripture more often and stay for the long haul, this is the playbook: clear retention loops, thoughtful content, and product decisions measured against real engagement. The same principles scale from a single church app to a global platform.",
    imageAlt:
      "The Bible App Discover screen showing Spoken Gospel Just Released video devotionals for Romans, Nahum, and Titus",
    demoUrl: "https://www.youversion.com/bible-app",
    embedBlocked: true,
    metrics: [
      { label: "Installs", value: "109M+", icon: Zap },
      { label: "MAU (L28)", value: "53.5M+", icon: Users },
      { label: "DAU", value: "5.7M+", icon: TrendingUp },
    ],
  },
  {
    image: caseStateOfTheBible,
    title: "State of the Bible",
    clientType: "Bible / translations",
    description:
      "Giving away the digital Bible for free around the world with Bible societies, translators, and partners. We built the platform so global Bible partners can upload content and Bible versions with less friction, while staying current on trends and insights from the Bible App. For publishers and ministry leaders, that means faster distribution, clearer partner workflows, and decisions grounded in how people actually engage Scripture today.",
    imageAlt:
      "State of the Bible stage panel with Focus on the Family Bible App Impact for 2025 showing 404,381 lives impacted",
    demoUrl: "https://www.youversion.com/bible-app",
    embedBlocked: true,
    metrics: [
      { label: "Bibles", value: "1,480+", icon: Zap },
      { label: "Publishers", value: "34+", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
  },
  {
    image: caseOutreach,
    title: "Digital Outreach Strategy for Churches",
    clientType: "Denomination / church network",
    description:
      "Bridging digital Bible engagement with local church community and growth. When people meet God in an app, the next step should be a real church family, not a dead end online. This work helps denominations and church networks turn digital interest into visits, belonging, and measurable church growth without losing the mission in the metrics.",
    imageAlt:
      "Digital Outreach Strategy for Churches conference ballroom with audience facing a magenta-lit stage and LED screens",
    demoUrl: "https://www.youversion.com/churches",
    embedBlocked: true,
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];

const CaseStudies = () => {
  const [demoState, setDemoState] = useState<{ url: string; title: string; embedBlocked?: boolean } | null>(null);

  return (
    <section id="work" className="pb-16 md:pb-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">See the work</h3>
        <p className="text-muted-foreground max-w-2xl mb-10">
          If you lead a church, ministry, or faith tech team, these case studies show what&apos;s possible. Real products. Real users. Real outcomes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cases.map((caseStudy, index) => {
            const { metrics } = caseStudy;
            const hasDemo = "demoUrl" in caseStudy && caseStudy.demoUrl;
            return (
              <Card
                key={index}
                className={`overflow-hidden hover-rise flex h-full flex-col ${hasDemo ? "cursor-pointer" : ""}`}
                role={hasDemo ? "button" : undefined}
                tabIndex={hasDemo ? 0 : undefined}
                onClick={hasDemo ? () => setDemoState({ url: caseStudy.demoUrl!, title: caseStudy.title, embedBlocked: !!(caseStudy as { embedBlocked?: boolean }).embedBlocked }) : undefined}
                onKeyDown={hasDemo ? (e) => e.key === "Enter" && setDemoState({ url: caseStudy.demoUrl!, title: caseStudy.title, embedBlocked: !!(caseStudy as { embedBlocked?: boolean }).embedBlocked }) : undefined}
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {caseStudy.clientType}
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-3 min-h-[3.5rem]">{caseStudy.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {caseStudy.description}
                  </p>
                  {hasDemo && (
                    <span className="text-sm text-primary font-medium mb-4 inline-block">
                      View case study →
                    </span>
                  )}
                  <div className="mt-auto space-y-3">
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
        <DialogContent className={demoState?.embedBlocked ? "max-w-md" : "max-w-6xl w-[95vw] h-[85vh] flex flex-col gap-0 p-0 overflow-hidden"}>
          <DialogHeader className="px-6 pt-6 pb-2 shrink-0">
            <DialogTitle>{demoState?.title ?? "Case study"}</DialogTitle>
          </DialogHeader>
          {demoState?.embedBlocked ? (
            <div className="px-6 pb-6 space-y-4">
              <p className="text-muted-foreground text-sm">
                {demoState?.title === "The Bible App"
                  ? "Please click the button below to see the impact of The Bible App and global Scripture engagement."
                  : demoState?.title === "Digital Outreach Strategy for Churches"
                    ? "Please click the button below to see how digital outreach connects Bible users to local churches."
                    : demoState?.title === "State of the Bible"
                      ? "Please click the button below to explore State of the Bible work across translations, partners, and the Bible App."
                      : `Please click the button below and open a new tab to see the impact on ${demoState?.title ?? "this work"}.`}
              </p>
              {demoState?.url && (
                <a
                  href={demoState.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Open in new tab →
                </a>
              )}
            </div>
          ) : (
            <div className="flex-1 min-h-0 flex flex-col px-6 pb-6">
              <iframe
                title={demoState?.title ?? "Case study demo"}
                src={demoState?.url ?? ""}
                className="w-full flex-1 min-h-[400px] rounded-md border bg-muted"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Browsing within the site.{" "}
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
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;
