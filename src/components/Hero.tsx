import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroIllustration from "@/assets/hero-illustration.jpg";
import logoResonate from "@/assets/logo-resonate.png";
import logoCovenant from "@/assets/logo-covenant.png";
import logoVelora from "@/assets/logo-velora.png";
import logoSermonshots from "@/assets/logo-sermonshots.png";
import logoRestvo from "@/assets/logo-restvo.png";
import logoLifechurch from "@/assets/logo-lifechurch.png";
import logoBible from "@/assets/logo-bible.png";
import logoSermonshotsNew from "@/assets/logo-sermonshots-new.png";
import logoCovenantNew from "@/assets/logo-covenant-new.png";
import logoResonateNew from "@/assets/logo-resonate-new.png";
import logoLifechurchNew from "@/assets/logo-lifechurch-new.png";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="text-secondary font-bold tracking-[0.12em] uppercase text-2xl mb-3">
              Product & Tech Leadership for Ministry
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Building the Future of{" "}
              <span className="text-gradient">Faith & Technology</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              I help churches, non-profits, Bible societies, and content partners craft world-class digital products. Strategy, UX, and engineering leadership—from a former Head of Product at YouVersion.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-6 text-base">
                Book a Strategy Call
              </Button>
              <Button onClick={() => scrollToSection('work')} variant="outline" className="border-border hover:bg-muted font-bold px-6 py-6 text-base">
                See Work
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-5 hover-rise">
                <div className="text-3xl font-extrabold mb-1">300M+</div>
                <div className="text-xs text-muted-foreground">
                  users served across products led
                </div>
              </Card>
              <Card className="p-5 hover-rise">
                <div className="text-3xl font-extrabold mb-1">100+</div>
                <div className="text-xs text-muted-foreground">
                  partnerships with Bible societies & ministries
                </div>
              </Card>
              <Card className="p-5 hover-rise">
                <div className="text-3xl font-extrabold mb-1">10x</div>
                <div className="text-xs text-muted-foreground">
                  impact through strategy & product excellence
                </div>
              </Card>
            </div>
          </div>
          <div>
            <Card className="h-full min-h-[320px] lg:min-h-[400px] p-0 flex items-center justify-center overflow-hidden">
              <svg width="100%" height="340" viewBox="0 0 720 340" role="img" aria-label="Abstract faith & technology network">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="rgba(58,160,255,.55)" />
                    <stop offset="60%" stopColor="rgba(58,160,255,.15)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <linearGradient id="stroke" x1="0" x2="1">
                    <stop offset="0%" stopColor="rgba(58,160,255,.85)" />
                    <stop offset="100%" stopColor="rgba(255,209,102,.85)" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#glow)" />
                <g fill="none" stroke="url(#stroke)" strokeWidth="1.4" opacity=".9">
                  <path d="M20,300 C150,240 260,330 380,230 C470,160 560,160 700,110" />
                  <path d="M20,250 C160,220 300,260 420,170 C540,100 590,120 700,80" opacity=".7" />
                  <path d="M20,200 C160,180 320,210 450,140 C560,90 620,90 700,60" opacity=".5" />
                </g>
                <g>
                  <circle cx="160" cy="240" r="6" fill="hsl(var(--primary))" />
                  <circle cx="340" cy="220" r="6" fill="hsl(var(--secondary))" />
                  <circle cx="560" cy="120" r="6" fill="hsl(var(--primary))" />
                  <circle cx="470" cy="160" r="4" fill="hsl(var(--foreground))" opacity=".6" />
                </g>
              </svg>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Social proof logo strip */}
      <div className="mt-16 overflow-hidden" aria-label="Trusted by partners">
        <div className="relative">
          <div className="flex gap-12 items-center animate-[scroll-left_40s_linear_infinite]">
            {/* First set */}
            <img src={logoSermonshotsNew} alt="Sermon Shots" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoCovenantNew} alt="Evangelical Covenant Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoResonateNew} alt="Resonate" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoVelora} alt="Velora" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoRestvo} alt="Restvo" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoLifechurchNew} alt="Life.Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoBible} alt="Bible App" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            {/* Duplicate set for seamless loop */}
            <img src={logoSermonshotsNew} alt="Sermon Shots" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoCovenantNew} alt="Evangelical Covenant Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoResonateNew} alt="Resonate" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoVelora} alt="Velora" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoRestvo} alt="Restvo" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoLifechurchNew} alt="Life.Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoBible} alt="Bible App" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            {/* Third set for extra smooth scrolling */}
            <img src={logoSermonshotsNew} alt="Sermon Shots" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoCovenantNew} alt="Evangelical Covenant Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoResonateNew} alt="Resonate" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoVelora} alt="Velora" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoRestvo} alt="Restvo" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoLifechurchNew} alt="Life.Church" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
            <img src={logoBible} alt="Bible App" className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-110" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;