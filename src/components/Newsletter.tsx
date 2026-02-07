import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-meta text-primary mb-4 block">Stay Connected</span>
          <h2 className="heading-section text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-body text-lg mb-8">
            Subscribe for weekly inspiration, thoughtful stories, and exclusive content 
            delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="animate-fade-in p-6 bg-background rounded-sm">
              <p className="text-foreground font-medium">
                Thank you for subscribing! ✨
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                We're excited to share our stories with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
