import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import CallExpectations from "@/components/CallExpectations";
import { Button } from "@/components/ui/button";
import { workCases } from "@/data/workCases";

const Portfolio = () => {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SeoHead
        title="Portfolio & Case Studies | FaithTech.dev"
        description="Selected product work across scripture engagement, Bible platforms, and church networks. Outcomes from FaithTech product consulting and digital strategy."
        path="/portfolio"
        keywords="faith tech case studies, church technology outcomes, YouVersion product work, ministry digital strategy portfolio"
      />
      <Header />
      <main>
        <section className="pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-medium tracking-wide text-accent mb-5">
                Work
              </p>
              <h1 className="text-[2.15rem] sm:text-4xl lg:text-[2.75rem] font-semibold mb-6 leading-[1.12] max-w-[20ch]">
                Selected work from products that reach people at scale.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Real products. Real users. Real outcomes. If you lead a church, ministry, or FaithTech
                team, these case studies show what disciplined product strategy can unlock.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button
                  onClick={scrollToContact}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-6 text-[0.95rem] rounded-md"
                >
                  Book a Free Strategy Call
                </Button>
                <Link
                  to="/discovery-sprint"
                  className="text-sm font-medium text-foreground/80 hover:text-accent inline-flex items-center gap-1.5 group"
                >
                  Explore the Discovery Sprint
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28 border-t border-border/80 pt-14 md:pt-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {workCases.map((caseStudy, i) => (
                <article
                  key={caseStudy.slug}
                  id={caseStudy.slug}
                  className={`flex flex-col scroll-mt-24 ${i === 1 ? "md:mt-8" : i === 2 ? "lg:mt-4" : ""}`}
                >
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.title}: church technology and faith tech case study`}
                    className="w-full h-44 object-cover bg-muted mb-5"
                  />
                  <span className="text-xs font-medium text-accent uppercase tracking-[0.12em]">
                    {caseStudy.clientType}
                  </span>
                  <h2 className="text-xl font-semibold font-display mt-2 mb-3">{caseStudy.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{caseStudy.description}</p>
                  {caseStudy.audiencePath && (
                    <Link
                      to={caseStudy.audiencePath}
                      className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 mb-5 hover:text-accent group self-start"
                    >
                      Related audience page
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  )}
                  <div className="space-y-2.5 border-t border-border pt-4">
                    {caseStudy.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} className="flex items-center gap-2 text-sm">
                          <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{m.label}</span>
                          <span className="font-semibold text-foreground ml-auto">{m.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-band-ember py-14 md:py-16">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:gap-12 max-w-5xl">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-primary-foreground mb-3">
                Want outcomes like these for your team?
              </h2>
              <p className="text-primary-foreground/85 text-lg">
                Start with a free strategy call. We will map whether Discovery, Build, or Grow fits
                where you are.
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
            <CallExpectations />
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

export default Portfolio;
