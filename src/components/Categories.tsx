const categories = [
  { name: "Lifestyle", count: 24 },
  { name: "Travel", count: 18 },
  { name: "Wellness", count: 15 },
  { name: "Food & Recipes", count: 22 },
  { name: "Home & Decor", count: 12 },
  { name: "Mindfulness", count: 9 },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-meta text-primary mb-2 block">Explore</span>
          <h2 className="heading-section text-foreground">Browse by Category</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group p-6 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                {category.name}
              </h3>
              <span className="text-sm text-muted-foreground">
                {category.count} articles
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
