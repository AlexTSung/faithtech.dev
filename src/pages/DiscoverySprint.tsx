import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CallExpectations from "@/components/CallExpectations";
import { Button } from "@/components/ui/button";

const deliverables = [
  "UXR interview plan and synthesis across real users",
  "Problem framing and success metrics leadership can defend",
  "Minimum Lovable Product scope (what ships first, what waits)",
  "Prioritized product roadmap with PLG considerations",
  "Clear recommendation: build now, pause, or grow what exists",
];

const fitFor = [
  "Churches choosing platforms before naming the pastoral need",
  "Non-profits about to hire builders without a validated journey",
  "FaithTech teams stuck in 0→1 fog or feature thrash",
];

const DiscoverySprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Discovery Sprint | FaithTech Product Consulting"
        description="A 14-day Discovery Sprint to validate before you build: UXR, MLP scoping, and a prioritized roadmap for churches, non-profits, and FaithTech teams."
        path="/discovery-sprint"
        keywords="discovery sprint, church technology consulting, ministry product strategy, validate before you build, FaithTech product consulting"
      />
      <Header />
      <main>
        <section className="pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="font-display text-sm font-medium tracking-wide text-accent mb-5">
              Strategy &amp; Discovery
            </p>
            <div className="flex items-start gap-3 mb-6">
              <Search className="h-7 w-7 text-foreground shrink-0 mt-1" strokeWidth={1.75} aria-hidden />
              <h1 className="text-[2.15rem] sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.12] max-w-[22ch]">
                Discovery Sprint: validate before a dollar goes to development.
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Fourteen focused days. Real user interviews. A Minimum Lovable Product scope and a
              roadmap your team can act on. Most partners start here when the vision is clear but
              the bet is not.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-6 text-[0.95rem] rounded-md"
              >
                Book a Discovery Sprint call
              </Button>
              <Link
                to="/#services"
                className="text-sm font-medium text-foreground/80 hover:text-accent inline-flex items-center gap-1.5 group"
              >
                All three engagements
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20 border-t border-border/80 pt-14 md:pt-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">What you walk away with</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Concrete artifacts, not a slide theater. Designed so board, staff, or product leadership
              can decide with confidence.
            </p>
            <ul className="space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-2.5 items-start text-foreground/90">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-1" strokeWidth={2.25} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-band-ink text-secondary-foreground py-14 md:py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold font-display mb-6 text-secondary-foreground">
              Who this fits
            </h2>
            <ul className="space-y-4">
              {fitFor.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={2.25} aria-hidden />
                  <span className="text-secondary-foreground/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-secondary-foreground/60">
              Prefer audience-specific context? See{" "}
              <Link to="/for-churches" className="text-primary hover:underline">
                churches
              </Link>
              ,{" "}
              <Link to="/for-nonprofits" className="text-primary hover:underline">
                non-profits
              </Link>
              , or{" "}
              <Link to="/for-faithtech" className="text-primary hover:underline">
                FaithTech leaders
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-band-ember py-14 md:py-16">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:gap-12 max-w-5xl">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-primary-foreground mb-3">
                Ready to validate the bet?
              </h2>
              <p className="text-primary-foreground/85 text-lg">
                Book a free strategy call. We will decide together whether a Discovery Sprint is the
                right next step.
              </p>
            </div>
            <Button
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-7 py-6 text-base rounded-md shrink-0"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Book your strategy call</h2>
            <CallExpectations intro="We will use the call to see if a 14-day Discovery Sprint is the right engagement, or if you need Build & Launch or Grow instead." />
            <div className="w-full border border-border overflow-hidden mb-4 bg-card">
              <iframe
                src="https://calendly.com/alex-sung-youversion/30min?embed_type=Inline&hide_landing_page_details=1"
                width="100%"
                height="650"
                frameBorder="0"
                loading="lazy"
                title="Book a strategy call with Alex Sung"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiscoverySprint;
