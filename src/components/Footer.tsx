import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Studio Lume</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting spaces that transcend the ordinary. Architecture rooted in purpose, refined by craft.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 font-medium">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 font-medium">Connect</h4>
            <div className="flex flex-col gap-3 text-muted-foreground text-sm">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Pinterest</a>
              <a href="mailto:hello@archivestudio.com" className="hover:text-foreground transition-colors">hello@studioLume.com</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} Studio Lume. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
