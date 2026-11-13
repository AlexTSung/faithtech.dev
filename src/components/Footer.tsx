import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-2">
          <p className="font-bold text-foreground text-lg">FaithTech.dev</p>
          <p className="text-sm text-muted-foreground">
            Church & Non-Profit Tech Consulting
          </p>
          <p className="text-sm text-muted-foreground">© 2026 FaithTech.dev</p>
        </div>

        {/* Navigate */}
        <div className="space-y-3">
          <p className="font-semibold text-foreground text-sm uppercase tracking-wider">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
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
          <p className="font-semibold text-foreground text-sm uppercase tracking-wider">
            Connect
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
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
                Book a Strategy Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
