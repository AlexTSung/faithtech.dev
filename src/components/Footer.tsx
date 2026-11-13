import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-band-ink text-secondary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8" aria-hidden="true">
              <use href="#ft-mark" />
            </svg>
            <p className="font-bold text-secondary-foreground text-lg font-display">
              FaithTech.dev
            </p>
          </div>
          <p className="text-sm text-secondary-foreground/70">
            Church & Non-Profit Tech Consulting
          </p>
          <p className="text-sm text-secondary-foreground/55">© 2026 FaithTech.dev</p>
        </div>

        {/* Navigate */}
        <div className="space-y-3">
          <p className="font-semibold text-secondary-foreground text-sm uppercase tracking-wider">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("process");
                }}
                className="hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/discovery-sprint" className="hover:text-primary transition-colors">
                Discovery Sprint
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="space-y-3">
          <p className="font-semibold text-secondary-foreground text-sm uppercase tracking-wider">
            Connect
          </p>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>
              <a
                href="https://www.linkedin.com/in/alextimsung"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Alex Sung on LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:alex@faithtech.dev"
                className="hover:text-primary transition-colors"
              >
                alex@faithtech.dev
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Book a Free Strategy Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
