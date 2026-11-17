import { Link, useLocation, useNavigate } from "react-router-dom";
import { audienceList } from "@/data/audiences";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/");
    window.setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <footer className="bg-band-ink text-secondary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-2">
          <Link to="/" className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8" aria-hidden="true">
              <use href="#ft-mark" />
            </svg>
            <p className="font-bold text-secondary-foreground text-lg font-display">
              FaithTech.dev
            </p>
          </Link>
          <p className="text-sm text-secondary-foreground/70">
            Church, Non-Profit & FaithTech Consulting
          </p>
          <p className="text-sm text-secondary-foreground/55">© 2026 FaithTech.dev</p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-secondary-foreground text-sm uppercase tracking-wider">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>
              <button
                type="button"
                onClick={() => goToSection("who-i-serve")}
                className="hover:text-primary transition-colors"
              >
                Who I serve
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goToSection("process")}
                className="hover:text-primary transition-colors"
              >
                Process
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goToSection("services")}
                className="hover:text-primary transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goToSection("work")}
                className="hover:text-primary transition-colors"
              >
                Work
              </button>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-secondary-foreground text-sm uppercase tracking-wider">
            Who I serve
          </p>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            {audienceList.map((a) => (
              <li key={a.id}>
                <Link to={a.path} className="hover:text-primary transition-colors">
                  {a.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
              <button
                type="button"
                onClick={() => goToSection("contact")}
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Book a Free Strategy Call
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
