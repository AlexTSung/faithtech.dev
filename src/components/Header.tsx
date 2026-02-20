import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-9 h-9" aria-hidden="true">
              <use href="#ft-mark"/>
            </svg>
            <h1 className="text-lg font-bold tracking-wide">FaithTech.dev</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <button onClick={() => scrollToSection('services')} className="text-foreground/90 hover:text-primary transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('work')} className="text-foreground/90 hover:text-primary transition-colors">
                Work
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-foreground/90 hover:text-primary transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('insights')} className="text-foreground/90 hover:text-primary transition-colors">
                Insights
              </button>
            </li>
            <li>
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
                }} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-glow"
              >
                Free strategy call
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <ul className="flex flex-col gap-4">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-foreground/90 hover:text-primary transition-colors w-full text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="text-foreground/90 hover:text-primary transition-colors w-full text-left">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-foreground/90 hover:text-primary transition-colors w-full text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('insights')} className="text-foreground/90 hover:text-primary transition-colors w-full text-left">
                  Insights
                </button>
              </li>
              <li>
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
                  }} 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full shadow-glow"
                >
                  Free strategy call
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
