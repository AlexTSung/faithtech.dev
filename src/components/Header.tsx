import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { audienceList } from "@/data/audiences";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass =
    "text-foreground/75 hover:text-foreground transition-colors font-sans-ui text-sm font-medium";
  const mobileLinkClass =
    "text-foreground/80 hover:text-foreground transition-colors w-full text-left text-sm font-medium";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="container mx-auto px-6 py-3.5">
        <nav className="flex items-center justify-between" aria-label="Primary">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
            <svg className="w-8 h-8" aria-hidden="true">
              <use href="#ft-mark" />
            </svg>
            <span className="text-base font-semibold tracking-tight font-display text-foreground">
              FaithTech.dev
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-6">
            {audienceList.map((a) => (
              <li key={a.id}>
                <Link
                  to={a.path}
                  className={linkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {a.shortLabel}
                </Link>
              </li>
            ))}
            <li>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  (
                    window as unknown as {
                      openCalendly?: (ev: React.MouseEvent) => void;
                    }
                  ).openCalendly?.(e);
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md text-sm"
              >
                Book a Free Strategy Call
              </Button>
            </li>
          </ul>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-5 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {audienceList.map((a) => (
                <li key={a.id}>
                  <Link
                    to={a.path}
                    className={`${mobileLinkClass} block`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {a.shortLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    (
                      window as unknown as {
                        openCalendly?: (ev: React.MouseEvent) => void;
                      }
                    ).openCalendly?.(e);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full rounded-md"
                >
                  Book a Free Strategy Call
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
