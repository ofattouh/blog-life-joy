import heroImage from "@/assets/hero-lifestyle.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 animate-fade-up">
            <span className="text-meta text-primary mb-4 block">Featured Story</span>
            <h1 className="heading-display text-foreground mb-6">
              The Art of Living with Intention
            </h1>
            <p className="text-body text-lg mb-8 max-w-lg">
              Discover how small, mindful choices can transform your everyday moments 
              into a life filled with purpose, beauty, and authentic joy.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                Read Article
              </a>
              <span className="text-sm text-muted-foreground">5 min read</span>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
              <img
                src={heroImage}
                alt="Woman in peaceful morning setting"
                className="w-full h-full object-cover image-zoom"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-espresso/60 to-transparent">
                <span className="text-sm font-medium text-cream/90">
                  Photography by Sarah Mitchell
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
