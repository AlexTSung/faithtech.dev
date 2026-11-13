import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  TrendingUp,
  Users,
  Zap,
  Search,
  Target,
  Wrench,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import caseEngagement from "@/assets/case-engagement.png";
import casePlatform from "@/assets/case-platform.png";
import caseTransformation from "@/assets/case-transformation.png";
import heroVisual from "@/assets/hero-illustration.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  org: z.string().trim().max(200, "Organization name must be less than 200 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  project: z.string(),
  timeline: z.string(),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

const processSteps: { icon: LucideIcon; name: string; desc: string }[] = [
  {
    icon: Search,
    name: "Discover",
    desc: "Interview real users. Map the real problem. Define what success actually looks like.",
  },
  {
    icon: Target,
    name: "Define",
    desc: "Scope the Minimum Lovable Product. Build the roadmap. Align the team.",
  },
  {
    icon: Wrench,
    name: "Build",
    desc: "Ship in structured phases. Weekly reviews. Bias toward launch.",
  },
  {
    icon: LineChart,
    name: "Grow",
    desc: "PLG loops, A/B tests, and iteration driven by real user data.",
  },
];

const services: {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  cta: string;
  href: string;
  popular: boolean;
}[] = [
  {
    icon: Search,
    title: "Strategy & Discovery",
    tagline: "Validate before you build.",
    description:
      "Deep UXR research, customer journey mapping, MLP scoping, and a validated product roadmap — before a dollar goes to development.",
    includes: [
      "Discovery Sprint (14 days)",
      "UXR interviews + synthesis",
      "Prioritized roadmap + PLG strategy",
    ],
    cta: "Learn about the Discovery Sprint →",
    href: "/discovery-sprint",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Build & Launch",
    tagline: "0→1 product development.",
    description:
      "From validated concept to shipped product. I lead the full build: architecture decisions, design, agile development, and launch.",
    includes: [
      "Full 0→1 product leadership",
      "MLP design + prototype",
      "Launch strategy + go-to-market",
    ],
    cta: "See the work →",
    href: "/portfolio",
    popular: true,
  },
  {
    icon: LineChart,
    title: "Grow & Optimize",
    tagline: "Scale what's already working.",
    description:
      "Product-led growth strategy, AI personalization, platform partnerships, and ongoing product advisory for teams that have launched.",
    includes: [
      "PLG loop design + activation",
      "AI and personalization strategy",
      "Embedded advisory retainer",
    ],
    cta: "Book a call →",
    href: "#contact",
    popular: false,
  },
];

const comparisonRows = [
  {
    label: "Ministry experience",
    alex: { mark: "✅", text: "15+ years in church & non-profit ministry" },
    freelancer: { mark: "➖", text: "Rarely" },
    agency: { mark: "➖", text: "Unlikely" },
    ai: { mark: "❌", text: "None" },
  },
  {
    label: "Product leadership depth",
    alex: { mark: "✅", text: "10+ years, 300M+ users" },
    freelancer: { mark: "➖", text: "One discipline only" },
    agency: { mark: "➖", text: "Team, not practitioner" },
    ai: { mark: "❌", text: "None" },
  },
  {
    label: "Single point of contact",
    alex: { mark: "✅", text: "Always" },
    freelancer: { mark: "✅", text: "Yes" },
    agency: { mark: "❌", text: "Account manager layer" },
    ai: { mark: "❌", text: "No relationship" },
  },
  {
    label: "Validated before build",
    alex: { mark: "✅", text: "UXR-first always" },
    freelancer: { mark: "❌", text: "Usually skipped" },
    agency: { mark: "➖", text: "Expensive add-on" },
    ai: { mark: "❌", text: "No" },
  },
  {
    label: "Mission alignment",
    alex: { mark: "✅", text: "Central to every decision" },
    freelancer: { mark: "➖", text: "Depends on the person" },
    agency: { mark: "➖", text: "Often secondary" },
    ai: { mark: "❌", text: "No" },
  },
];

const heroStats = [
  { value: "300M+", label: "users served across products led" },
  { value: "100+", label: "partnerships with Bible societies & ministries" },
  { value: "10x", label: "impact through strategy & product excellence" },
  { value: "15+", label: "Years in ministry" },
];

const cases = [
  {
    image: caseEngagement,
    title: "Global Scripture Engagement",
    clientType: "Bible / digital ministry",
    description:
      "Drove double-digit growth with habit formation, community, and content personalization.",
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
    description:
      "Giving developers around the world access to our technology to build Bible apps. Build applications and integrate with the world's most popular Bible platform.",
    metrics: [
      { label: "Bibles", value: "1,480+", icon: Zap },
      { label: "Publishers", value: "34+", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
  },
  {
    image: caseTransformation,
    title: "Connecting Bible Users to Churches",
    clientType: "Denomination / church network",
    description:
      "Bridging digital Bible engagement with local church community and growth.",
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];

const testimonials = [
  {
    quote:
      "[PLACEHOLDER — Add a quote from a church leader or ministry partner about working with Alex. 2–3 sentences about outcome.]",
    name: "[Name]",
    role: "[Title, Organization]",
    initials: "??",
  },
  {
    quote:
      "[PLACEHOLDER — Add a quote from a faith tech team or founder. Focus on the product strategy or launch outcome.]",
    name: "[Name]",
    role: "[Title, Organization]",
    initials: "??",
  },
];

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      org: "",
      email: "",
      project: "Website",
      timeline: "Exploring",
      message: "",
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!FORMSPREE_FORM_ID) {
      toast({
        title: "Form in demo mode",
        description: "Add VITE_FORMSPREE_FORM_ID to receive submissions. See README.",
        variant: "default",
      });
      form.reset();
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          org: data.org,
          email: data.email,
          project: data.project,
          timeline: data.timeline,
          message: data.message,
          _subject: `FaithTech.dev contact from ${data.name}`,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Send failed");
      toast({
        title: "Message sent!",
        description: "I'll get back to you within 1-2 business days.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or book a call instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* SECTION 1 — Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(210_28%_92%)_0%,transparent_55%)] pointer-events-none" />
          <div className="container mx-auto px-6 py-16 md:py-24 lg:py-28 relative">
            <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-14 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-10 h-10" aria-hidden="true">
                    <use href="#ft-mark" />
                  </svg>
                  <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                    FaithTech.dev
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] mb-6">
                  The product consultant churches and ministries trust to{" "}
                  <span className="text-ember">build what others can&apos;t.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                  10+ years shipping products that reach 300M+ people. I bring Silicon Valley
                  product rigor and 15+ years of pastoral experience to every engagement — so your
                  technology actually gets built, launched, and loved.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 text-base rounded-lg"
                  >
                    Book a Free Strategy Call
                  </Button>
                  <Button
                    onClick={() => scrollToSection("process")}
                    variant="outline"
                    className="font-bold px-6 py-6 text-base rounded-lg border-foreground/20 text-foreground hover:bg-muted"
                  >
                    See How I Work →
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[280px] md:min-h-[400px] lg:min-h-[480px] -mx-6 lg:mx-0 lg:mr-[-2rem]">
                <img
                  src={heroVisual}
                  alt="Open Bible with light — faith technology consulting for churches and ministries"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip — below fold (was hero stats card) */}
        <section className="bg-band-ink text-secondary-foreground py-10 md:py-12 border-y border-border/20">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-secondary-foreground/55 mb-6 text-center">
              Trusted by YouVersion, Biblica, Life.Church, The Chosen, Bible Project, and 20K+
              churches worldwide.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {heroStats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-semibold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — Problem Statement */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-6">
              Most churches invest in technology before they know what to build.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              They hire developers before validating ideas. They choose platforms before
              understanding their own workflows. They launch products their people never adopt —
              and wonder why the mission didn&apos;t scale.
            </p>
            <p className="text-foreground font-semibold text-lg">
              That&apos;s the gap I close — before it costs you.
            </p>
          </div>
        </section>

        {/* SECTION 3 — Process */}
        <section id="process" className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">A process that works.</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Every engagement follows the same disciplined arc — from unclear vision to shipped
              product.
            </p>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.name} className="contents">
                    <div className="p-5 flex flex-col gap-3 flex-1 border-t-2 border-primary/40">
                      <Icon className="h-6 w-6 text-foreground" strokeWidth={1.75} aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Step {index + 1}
                      </span>
                      <h3 className="text-base font-semibold font-display">{step.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex items-center text-muted-foreground/50 text-xl px-1">
                        →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 — Services */}
        <section id="services" className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Three ways to work together.</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Pick the engagement that fits where you are.
            </p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`relative flex flex-col gap-4 pt-2 ${
                      service.popular ? "md:pt-6" : ""
                    }`}
                  >
                    {service.popular && (
                      <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 absolute -top-1 left-0 bg-secondary text-secondary-foreground rounded-md">
                        Most Popular
                      </span>
                    )}
                    <Icon className="h-7 w-7 text-foreground mt-4" strokeWidth={1.75} aria-hidden />
                    <div>
                      <h3 className="text-xl font-semibold font-display mb-1">{service.title}</h3>
                      <p className="text-sm font-medium text-accent">{service.tagline}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-primary shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {service.href.startsWith("#") ? (
                      <button
                        type="button"
                        onClick={() => scrollToSection(service.href.slice(1))}
                        className="text-sm font-medium text-accent hover:text-primary hover:underline text-left"
                      >
                        {service.cta}
                      </button>
                    ) : (
                      <Link
                        to={service.href}
                        className="text-sm font-medium text-accent hover:text-primary hover:underline"
                      >
                        {service.cta}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Why Alex comparison */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why not just hire a freelancer? Or an agency?
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Here&apos;s how the options compare.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-muted-foreground w-[22%]">
                      &nbsp;
                    </th>
                    <th className="text-left p-4 font-semibold bg-secondary text-secondary-foreground">
                      With Alex
                    </th>
                    <th className="text-left p-4 font-semibold bg-card">A Freelancer</th>
                    <th className="text-left p-4 font-semibold bg-card">An Agency</th>
                    <th className="text-left p-4 font-semibold bg-card">AI Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="p-4 font-medium text-foreground">{row.label}</td>
                      <td className="p-4 bg-primary/10">
                        <span className="mr-1.5">{row.alex.mark}</span>
                        {row.alex.text}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        <span className="mr-1.5">{row.freelancer.mark}</span>
                        {row.freelancer.text}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        <span className="mr-1.5">{row.agency.mark}</span>
                        {row.agency.text}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        <span className="mr-1.5">{row.ai.mark}</span>
                        {row.ai.text}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.label} className="p-5 space-y-3 border-t border-border">
                  <h3 className="font-semibold text-foreground font-display">{row.label}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="rounded-md p-3 bg-primary/10">
                      <span className="font-semibold text-foreground block mb-1">With Alex</span>
                      <span>
                        {row.alex.mark} {row.alex.text}
                      </span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">A Freelancer: </span>
                      {row.freelancer.mark} {row.freelancer.text}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">An Agency: </span>
                      {row.agency.mark} {row.agency.text}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium text-foreground">AI Tools: </span>
                      {row.ai.mark} {row.ai.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — See the Work */}
        <section id="work" className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">See the work</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              If you lead a church, ministry, or faith tech team — these case studies show exactly
              what&apos;s possible. Real products. Real users. Real outcomes.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseStudy) => (
                <article key={caseStudy.title} className="flex flex-col hover-rise">
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.title} — church technology and faith tech case study`}
                    className="w-full h-44 object-cover bg-muted"
                  />
                  <div className="pt-5 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {caseStudy.clientType}
                    </span>
                    <h3 className="text-xl font-semibold font-display mt-2 mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {caseStudy.description}
                    </p>
                    <Link
                      to="/portfolio"
                      className="text-sm text-accent font-medium mb-4 inline-block hover:text-primary hover:underline"
                    >
                      View case study →
                    </Link>
                    <div className="space-y-3">
                      {caseStudy.metrics.map((m) => {
                        const Icon = m.icon;
                        return (
                          <div key={m.label} className="flex items-center gap-2 text-sm">
                            <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{m.label}</span>
                            <span className="font-bold text-foreground ml-auto">{m.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — Testimonials */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">What partners say.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="border-t-2 border-primary/30 pt-6 flex flex-col gap-4">
                  <div className="text-primary text-2xl font-display">&quot;</div>
                  <p className="text-foreground leading-relaxed italic">{t.quote}</p>
                  <div className="border-t border-border pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-accent font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ember CTA band — full-bleed before contact */}
        <section className="bg-band-ember py-14 md:py-16">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold font-display text-primary-foreground mb-4">
              Ready to build what lasts?
            </h2>
            <p className="text-primary-foreground/85 mb-8 text-lg">
              Most clients start with a free 30-minute strategy call — clarity on what to build,
              whether we work together or not.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6 text-base rounded-lg"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

        {/* SECTION 8 — Contact */}
        <section id="contact" className="py-16 md:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let&apos;s build something that lasts.
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Most clients start with a 30-minute strategy call. You&apos;ll leave with clarity on
              what to build, in what order, and why — whether we work together or not.
            </p>

            <div className="w-full rounded-lg border border-border overflow-hidden mb-8 bg-card">
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

            <p className="text-sm text-muted-foreground text-center mb-6">
              Prefer to write first? Fill out the form below and I&apos;ll reply within 1–2
              business days.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="sr-only">
                  <label htmlFor="bot-field">Don&apos;t fill this out if you&apos;re human:</label>
                  <input type="text" id="bot-field" name="bot-field" tabIndex={-1} />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-card border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="org"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">Organization</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Church, ministry, publisher…"
                          className="bg-card border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.org"
                          className="bg-card border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Website">Website</SelectItem>
                          <SelectItem value="Mobile App">Mobile App</SelectItem>
                          <SelectItem value="Bible App Integration">Bible App Integration</SelectItem>
                          <SelectItem value="API / Platform">API / Platform</SelectItem>
                          <SelectItem value="Strategy Workshop">Strategy Workshop</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">Timeline</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Exploring">Exploring</SelectItem>
                          <SelectItem value="1-3 months">1–3 months</SelectItem>
                          <SelectItem value="3-6 months">3–6 months</SelectItem>
                          <SelectItem value=">6 months">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground">
                        What&apos;s the goal?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about outcomes, audience, and any constraints."
                          className="bg-card border-border min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-4 flex-wrap">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg"
                  >
                    {isSubmitting ? "Sending…" : "Send"}
                  </Button>
                  <small className="text-xs text-muted-foreground">
                    I typically respond within 1–2 business days.
                  </small>
                </div>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
