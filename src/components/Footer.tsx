import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="font-serif text-3xl font-semibold text-background mb-4 block">
              Lumière
            </a>
            <p className="text-background/70 max-w-sm mb-6">
              A curated collection of stories celebrating the art of intentional living, 
              beautiful moments, and mindful choices.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Lifestyle", "Travel", "Wellness", "Food", "Home"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">About</h4>
            <ul className="space-y-3">
              {["Our Story", "Contact", "Write for Us", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Lumière. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
