const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-border/60 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-muted-foreground text-sm">
          <div>© {currentYear} FaithTech.dev • All rights reserved</div>
          
        </div>
      </div>
    </footer>;
};
export default Footer;