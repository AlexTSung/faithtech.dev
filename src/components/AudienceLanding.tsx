import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerLogosMarquee from "@/components/PartnerLogosMarquee";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { audienceList, type AudiencePage } from "@/data/audiences";
import heroVisual from "@/assets/hero-illustration.jpg";
import { useEffect } from "react";

type Props = {
  audience: AudiencePage;
};

const AudienceLanding = ({ audience }: Props) => {
  const others = audienceList.filter((a) => a.id !== audience.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [audience.id]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title={audience.metaTitle}
        description={audience.metaDescription}
        path={audience.path}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
              <div className="lg:col-span-6 xl:col-span-5">
                <p className="font-display text-sm font-medium tracking-wide text-accent mb-5">
                  {audience.eyebrow}
                </p>
                <h1 className="text-[2.15rem] sm:text-4xl lg:text-[2.85rem] font-semibold mb-6 max-w-[20ch] leading-[1.12]">
                  {audience.h1}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                  {audience.lead}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button
                    onClick={scrollToContact}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-6 text-[0.95rem] rounded-md"
                  >
                    Book a Free Strategy Call
                  </Button>
                  <Link
                    to="/"
                    className="text-sm font-medium text-foreground/80 hover:text-accent inline-flex items-center gap-1.5 group"
                  >
                    Back to FaithTech.dev
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 xl:col-span-7 relative h-[240px] sm:h-[320px] lg:h-[400px]">
                <img
                  src={heroVisual}
                  alt={audience.heroAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <PartnerLogosMarquee className="pb-10 md:pb-14" />

        {/* Problems */}
        <section className="pb-16 md:pb-24 border-t border-border/80 pt-16 md:pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mb-10 md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
                The reality
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">{audience.problemsTitle}</h2>
            </div>
            <ol className="space-y-0 divide-y divide-border">
              {audience.problems.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_1fr] gap-x-4 gap-y-2 py-6 md:py-7 first:pt-0"
                >
                  <span className="font-display text-sm text-muted-foreground/80 pt-1 tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-[0.95rem] leading-relaxed max-w-2xl">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-band-ink text-secondary-foreground py-14 md:py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold font-display mb-8 max-w-2xl text-secondary-foreground">
              {audience.outcomesTitle}
            </h2>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
              {audience.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 items-start">
                  <Check
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  <span className="text-secondary-foreground/85 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How I consult */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
                The engagement
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{audience.howTitle}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{audience.howLead}</p>
            </div>
            <div className="space-y-0 divide-y divide-border border-t border-border">
              {audience.howItems.map((item, index) => (
                <article
                  key={item.title}
                  className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
                >
                  <div className="md:col-span-1">
                    <span className="font-display text-sm text-muted-foreground tabular-nums">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-semibold font-display">{item.title}</h3>
                  </div>
                  <p className="md:col-span-7 text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-band-ember py-16 md:py-20">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:gap-12 max-w-5xl">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-primary-foreground mb-3">
                {audience.ctaTitle}
              </h2>
              <p className="text-primary-foreground/85 text-lg">{audience.ctaBody}</p>
            </div>
            <Button
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-7 py-6 text-base rounded-md shrink-0"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

        {/* Contact / Calendly */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Book your strategy call
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Pick a time that works. You will leave with clearer next steps for your{" "}
              {audience.id === "churches"
                ? "church"
                : audience.id === "nonprofits"
                  ? "organization"
                  : "product"}
              .
            </p>
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

        {/* Cross-links */}
        <section className="pb-20 md:pb-28 border-t border-border pt-16 md:pt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Also serving</h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Alex works with churches, non-profits, and FaithTech product teams. Explore the other
              audiences, or return home.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
              {others.map((a) => (
                <Link
                  key={a.id}
                  to={a.path}
                  className="group block border-t border-border pt-5 hover:border-accent transition-colors"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-2">
                    {a.eyebrow}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {a.navLabel}
                  </h3>
                  <span className="text-sm font-medium text-foreground/75 inline-flex items-center gap-1.5">
                    View page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
              <Link
                to="/"
                className="group block border-t border-border pt-5 hover:border-accent transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-2">
                  FaithTech.dev
                </p>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  Homepage
                </h3>
                <span className="text-sm font-medium text-foreground/75 inline-flex items-center gap-1.5">
                  All services & work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AudienceLanding;
