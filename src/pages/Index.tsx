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
  Check,
  Minus,
  X,
  ArrowRight,
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
  num: string;
  icon: LucideIcon;
  title: string;
  forWhom: string;
  tagline: string;
  description: string;
  includes: string[];
  cta: string;
  href: string;
  featured: boolean;
}[] = [
  {
    num: "01",
    icon: Search,
    title: "Strategy & Discovery",
    forWhom: "Before you hire builders",
    tagline: "Validate before you build.",
    description:
      "Deep UXR research, customer journey mapping, MLP scoping, and a validated product roadmap, before a dollar goes to development.",
    includes: [
      "Discovery Sprint (14 days)",
      "UXR interviews + synthesis",
      "Prioritized roadmap + PLG strategy",
    ],
    cta: "Learn about the Discovery Sprint",
    href: "/discovery-sprint",
    featured: false,
  },
  {
    num: "02",
    icon: Wrench,
    title: "Build & Launch",
    forWhom: "Ready to ship 0→1",
    tagline: "From validated concept to live product.",
    description:
      "I lead the full build: architecture decisions, design, agile development, and launch. One point of contact from roadmap to release.",
    includes: [
      "Full 0→1 product leadership",
      "MLP design + prototype",
      "Launch strategy + go-to-market",
    ],
    cta: "See the work",
    href: "/portfolio",
    featured: true,
  },
  {
    num: "03",
    icon: LineChart,
    title: "Grow & Optimize",
    forWhom: "Already live, not growing",
    tagline: "Scale what's already working.",
    description:
      "Product-led growth strategy, AI personalization, platform partnerships, and ongoing product advisory for teams that have launched.",
    includes: [
      "PLG loop design + activation",
      "AI and personalization strategy",
      "Embedded advisory retainer",
    ],
    cta: "Book a call",
    href: "#contact",
    featured: false,
  },
];

type Mark = "yes" | "partial" | "no";

const comparisonRows: {
  label: string;
  alex: { mark: Mark; text: string };
  freelancer: { mark: Mark; text: string };
  agency: { mark: Mark; text: string };
  ai: { mark: Mark; text: string };
}[] = [
  {
    label: "Ministry experience",
    alex: { mark: "yes", text: "15+ years in church & non-profit ministry" },
    freelancer: { mark: "partial", text: "Rarely" },
    agency: { mark: "partial", text: "Unlikely" },
    ai: { mark: "no", text: "None" },
  },
  {
    label: "Product leadership depth",
    alex: { mark: "yes", text: "10+ years, 300M+ users" },
    freelancer: { mark: "partial", text: "One discipline only" },
    agency: { mark: "partial", text: "Team, not practitioner" },
    ai: { mark: "no", text: "None" },
  },
  {
    label: "Single point of contact",
    alex: { mark: "yes", text: "Always" },
    freelancer: { mark: "yes", text: "Yes" },
    agency: { mark: "no", text: "Account manager layer" },
    ai: { mark: "no", text: "No relationship" },
  },
  {
    label: "Validated before build",
    alex: { mark: "yes", text: "UXR-first always" },
    freelancer: { mark: "no", text: "Usually skipped" },
    agency: { mark: "partial", text: "Expensive add-on" },
    ai: { mark: "no", text: "No" },
  },
  {
    label: "Mission alignment",
    alex: { mark: "yes", text: "Central to every decision" },
    freelancer: { mark: "partial", text: "Depends on the person" },
    agency: { mark: "partial", text: "Often secondary" },
    ai: { mark: "no", text: "No" },
  },
];

const MarkIcon = ({ mark }: { mark: Mark }) => {
  if (mark === "yes") return <Check className="h-4 w-4 text-success shrink-0" strokeWidth={2.25} aria-hidden />;
  if (mark === "partial") return <Minus className="h-4 w-4 text-muted-foreground shrink-0" strokeWidth={2.25} aria-hidden />;
  return <X className="h-4 w-4 text-muted-foreground/70 shrink-0" strokeWidth={2.25} aria-hidden />;
};

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
      "[PLACEHOLDER: Add a quote from a church leader or ministry partner about working with Alex. Two or three sentences about outcome.]",
    name: "[Name]",
    role: "[Title, Organization]",
    initials: "??",
  },
  {
    quote:
      "[PLACEHOLDER: Add a quote from a faith tech team or founder. Focus on the product strategy or launch outcome.]",
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
        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
              <div className="lg:col-span-6 xl:col-span-5">
                <p className="font-display text-sm font-medium tracking-wide text-accent mb-5">
                  FaithTech.dev
                </p>
                <h1 className="text-[2.35rem] sm:text-5xl lg:text-[3.35rem] font-semibold mb-6 max-w-[18ch]">
                  The product consultant churches and ministries trust to{" "}
                  <span className="text-ember">build what others can&apos;t.</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                  10+ years shipping products that reach 300M+ people. Silicon Valley product rigor
                  and 15+ years of pastoral experience, so your technology actually gets built,
                  launched, and loved.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-6 text-[0.95rem] rounded-md"
                  >
                    Book a Free Strategy Call
                  </Button>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-sm font-medium text-foreground/80 hover:text-accent inline-flex items-center gap-1.5 group"
                  >
                    See how we work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 xl:col-span-7 relative h-[260px] sm:h-[340px] lg:h-[420px] xl:h-[460px]">
                <img
                  src={heroVisual}
                  alt="Open Bible with light: faith technology consulting for churches and ministries"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip below fold */}
        <section className="bg-band-ink text-secondary-foreground py-9 md:py-11">
          <div className="container mx-auto px-6">
            <p className="text-[11px] uppercase tracking-[0.14em] text-secondary-foreground/50 mb-7 max-w-3xl">
              Trusted by YouVersion, Biblica, Life.Church, The Chosen, Bible Project, and 20K+
              churches worldwide.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {heroStats.map((stat, i) => (
                <div key={stat.value} className={i === 0 ? "lg:pr-4" : i === 3 ? "lg:pl-2" : ""}>
                  <div className="text-2xl md:text-[1.75rem] font-display font-semibold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-foreground/65 max-w-[16ch]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl md:ml-[8%] lg:ml-[12%]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
                The Problem
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.15rem] font-semibold leading-tight mb-6">
                Most churches invest in technology before they know what to build.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                They hire developers before validating ideas. They choose platforms before
                understanding their own workflows. They launch products their people never adopt,
                and wonder why the mission didn&apos;t scale.
              </p>
              <p className="text-foreground font-semibold text-lg font-display">
                That&apos;s the gap I close, before it costs you.
              </p>
            </div>
          </div>
        </section>

        {/* Process: editorial numbered list, not equal cards */}
        <section id="process" className="pb-16 md:pb-24 border-t border-border/80 pt-16 md:pt-20">
          <div className="container mx-auto px-6">
            <div className="md:flex md:items-end md:justify-between md:gap-12 mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">A process that works.</h2>
                <p className="text-muted-foreground">
                  Every engagement follows the same disciplined arc: from unclear vision to shipped
                  product.
                </p>
              </div>
            </div>
            <ol className="space-y-0 divide-y divide-border">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.name}
                    className="grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_10rem_1fr] gap-x-4 gap-y-2 py-6 md:py-7 first:pt-0"
                  >
                    <span className="font-display text-sm text-muted-foreground/80 pt-1 tabular-nums">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-2.5 sm:contents">
                      <span className="sm:hidden">
                        <Icon className="h-5 w-5 text-foreground" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="font-display text-lg font-semibold flex items-center gap-2.5">
                        <Icon className="hidden sm:inline h-5 w-5 text-foreground" strokeWidth={1.75} aria-hidden />
                        {step.name}
                      </h3>
                    </div>
                    <p className="col-start-2 sm:col-start-3 text-muted-foreground text-[0.95rem] leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Services: editorial stack with one featured lane */}
        <section id="services" className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Three ways to work together.</h2>
              <p className="text-muted-foreground">
                Pick the engagement that fits where you are. Most partners start with a free
                strategy call to decide.
              </p>
            </div>

            <div className="space-y-0">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className={`grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-t border-border ${
                      service.featured ? "bg-muted/60 -mx-6 px-6 md:mx-0 md:px-8 md:rounded-lg border-t-0 md:my-2" : ""
                    }`}
                  >
                    <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-2 items-baseline md:items-start">
                      <span className="font-display text-sm text-muted-foreground tabular-nums">
                        {service.num}
                      </span>
                      <Icon className="h-5 w-5 text-foreground md:mt-2" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent mb-2">
                        {service.forWhom}
                      </p>
                      <h3 className="text-2xl font-semibold font-display mb-2">{service.title}</h3>
                      <p className="text-foreground/80 font-medium">{service.tagline}</p>
                    </div>
                    <div className="md:col-span-6 flex flex-col gap-5">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={2.25} aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.href.startsWith("#") ? (
                        <button
                          type="button"
                          onClick={() => scrollToSection(service.href.slice(1))}
                          className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 hover:text-accent self-start group"
                        >
                          {service.cta}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      ) : (
                        <Link
                          to={service.href}
                          className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 hover:text-accent self-start group"
                        >
                          {service.cta}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
              <div className="border-t border-border" />
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md px-5 py-6"
              >
                Book a Free Strategy Call
              </Button>
              <p className="text-sm text-muted-foreground max-w-sm">
                Not sure which engagement fits? Start with the call. You&apos;ll leave with a clear
                next step either way.
              </p>
            </div>
          </div>
        </section>

        {/* Why Alex */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3 max-w-2xl">
              Why not just hire a freelancer? Or an agency?
            </h2>
            <p className="text-muted-foreground max-w-xl mb-10">
              Here&apos;s how the options compare.
            </p>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-foreground/15">
                    <th className="text-left py-4 pr-4 font-medium text-muted-foreground w-[22%]">
                      &nbsp;
                    </th>
                    <th className="text-left py-4 px-4 font-display font-semibold bg-secondary text-secondary-foreground">
                      With Alex
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground/80">A Freelancer</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground/80">An Agency</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground/80">AI Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-4 pr-4 font-medium text-foreground">{row.label}</td>
                      <td className="py-4 px-4 bg-primary/10">
                        <span className="inline-flex items-start gap-2">
                          <MarkIcon mark={row.alex.mark} />
                          <span>{row.alex.text}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        <span className="inline-flex items-start gap-2">
                          <MarkIcon mark={row.freelancer.mark} />
                          <span>{row.freelancer.text}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        <span className="inline-flex items-start gap-2">
                          <MarkIcon mark={row.agency.mark} />
                          <span>{row.agency.text}</span>
                        </span>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        <span className="inline-flex items-start gap-2">
                          <MarkIcon mark={row.ai.mark} />
                          <span>{row.ai.text}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-8">
              {comparisonRows.map((row) => (
                <div key={row.label} className="border-t border-border pt-5 space-y-3">
                  <h3 className="font-semibold text-foreground font-display">{row.label}</h3>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex gap-2 items-start bg-primary/10 p-3 rounded-md">
                      <MarkIcon mark={row.alex.mark} />
                      <div>
                        <span className="font-semibold block mb-0.5">With Alex</span>
                        {row.alex.text}
                      </div>
                    </div>
                    {(
                      [
                        ["A Freelancer", row.freelancer],
                        ["An Agency", row.agency],
                        ["AI Tools", row.ai],
                      ] as const
                    ).map(([label, cell]) => (
                      <div key={label} className="flex gap-2 items-start text-muted-foreground px-1">
                        <MarkIcon mark={cell.mark} />
                        <div>
                          <span className="font-medium text-foreground">{label}: </span>
                          {cell.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="md:flex md:items-end md:justify-between gap-8 mb-10 md:mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-3">See the work</h2>
                <p className="text-muted-foreground">
                  If you lead a church, ministry, or faith tech team, these case studies show
                  what&apos;s possible. Real products. Real users. Real outcomes.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {cases.map((caseStudy, i) => (
                <article
                  key={caseStudy.title}
                  className={`flex flex-col ${i === 1 ? "md:mt-8" : i === 2 ? "lg:mt-4" : ""}`}
                >
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.title}: church technology and faith tech case study`}
                    className="w-full h-44 object-cover bg-muted mb-5"
                  />
                  <span className="text-xs font-medium text-accent uppercase tracking-[0.12em]">
                    {caseStudy.clientType}
                  </span>
                  <h3 className="text-xl font-semibold font-display mt-2 mb-3">{caseStudy.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{caseStudy.description}</p>
                  <Link
                    to="/portfolio"
                    className="text-sm font-semibold text-foreground inline-flex items-center gap-1.5 mb-5 hover:text-accent group self-start"
                  >
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
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

        {/* Testimonials */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-14">What partners say.</h2>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className={`flex flex-col gap-5 ${i === 1 ? "md:mt-10" : ""}`}
                >
                  <p className="text-foreground leading-relaxed text-lg font-display font-medium">
                    {t.quote}
                  </p>
                  <footer className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-accent font-semibold text-xs">
                      {t.initials}
                    </div>
                    <div>
                      <cite className="not-italic text-sm font-semibold text-foreground block">
                        {t.name}
                      </cite>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* One strong CTA moment */}
        <section className="bg-band-ember py-16 md:py-20">
          <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:gap-12 max-w-5xl">
            <div className="mb-8 md:mb-0 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-primary-foreground mb-3">
                Ready to build what lasts?
              </h2>
              <p className="text-primary-foreground/85 text-lg">
                Most clients start with a free 30-minute strategy call. Clarity on what to build,
                whether we work together or not.
              </p>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-7 py-6 text-base rounded-md shrink-0"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let&apos;s build something that lasts.
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Most clients start with a 30-minute strategy call. You&apos;ll leave with clarity on
              what to build, in what order, and why, whether we work together or not.
            </p>

            <div className="w-full border border-border overflow-hidden mb-8 bg-card">
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
              Prefer to write first? Fill out the form below and I&apos;ll reply within 1-2
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
                          <SelectItem value="1-3 months">1-3 months</SelectItem>
                          <SelectItem value="3-6 months">3-6 months</SelectItem>
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
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md"
                  >
                    {isSubmitting ? "Sending…" : "Send"}
                  </Button>
                  <small className="text-xs text-muted-foreground">
                    I typically respond within 1-2 business days.
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
