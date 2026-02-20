import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type StrategyCallBannerProps = {
  variant?: "default" | "compact";
  className?: string;
};

const openCalendly = (e: React.MouseEvent) => {
  e.preventDefault();
  (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
};

export const StrategyCallBanner = ({ variant = "default", className = "" }: StrategyCallBannerProps) => {
  if (variant === "compact") {
    return (
      <div className={`rounded-2xl border border-primary/30 bg-card/80 p-6 text-center ${className}`}>
        <p className="text-muted-foreground mb-4">
          Get a clear roadmap for your digital ministry—no commitment required.
        </p>
        <Button
          onClick={openCalendly}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 text-base shadow-glow"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book a free 30‑min strategy call
        </Button>
      </div>
    );
  }

  return (
    <section className={`py-12 md:py-16 ${className}`} aria-labelledby="cta-heading">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-card/80 p-8 md:p-12 text-center shadow-glow">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-3">
            Ready to turn your vision into a roadmap?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Church leaders, faith tech teams, and Christian entrepreneurs: let’s align on your goals, bottlenecks, and next steps. You’ll leave with clarity—not a sales pitch.
          </p>
          <Button
            onClick={openCalendly}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6 text-lg shadow-glow"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a free 30‑min strategy call
          </Button>
        </div>
      </div>
    </section>
  );
};
