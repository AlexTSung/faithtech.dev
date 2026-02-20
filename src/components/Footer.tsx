import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as unknown as { openCalendly?: (ev: React.MouseEvent) => void }).openCalendly?.(e);
  };

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-muted-foreground text-sm">
          <span>© {currentYear} FaithTech.dev</span>
          <span className="hidden sm:inline">•</span>
          <Button variant="ghost" size="sm" onClick={openCalendly} className="text-muted-foreground hover:text-primary font-medium">
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            Book a strategy call
          </Button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;