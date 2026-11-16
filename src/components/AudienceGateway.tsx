import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { audienceList } from "@/data/audiences";

const gatewayBlurb: Record<string, string> = {
  churches:
    "Pastors and church ministry leaders who need church technology strategy their congregation will actually use.",
  nonprofits:
    "Directors and non-profit leaders who need mission-aligned product decisions under real stewardship constraints.",
  faithtech:
    "CEOs, product, and tech leaders shipping FaithTech who need senior product counsel at scale.",
};

const gatewayCta: Record<string, string> = {
  churches: "For churches",
  nonprofits: "For non-profits",
  faithtech: "For FaithTech",
};

const AudienceGateway = () => {
  return (
    <section id="who-i-serve" className="py-16 md:py-24 border-t border-border/80">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-end md:justify-between md:gap-12 mb-10 md:mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
              Who I serve
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Three audiences. One product partner.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Alex works with churches and pastors, non-profit directors, and FaithTech leaders.
              Each path has its own problems, outcomes, and how we work together.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {audienceList.map((audience) => (
            <div
              key={audience.id}
              className="flex flex-col py-8 md:py-10 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                {audience.eyebrow}
              </p>
              <h3 className="font-display text-xl font-semibold mb-3">
                <Link to={audience.path} className="hover:text-accent transition-colors">
                  {audience.navLabel}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[30ch] flex-1">
                {gatewayBlurb[audience.id]}
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md self-start"
              >
                <Link to={audience.path} className="inline-flex items-center gap-1.5">
                  {gatewayCta[audience.id]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceGateway;
