import BlogCard from "./BlogCard";
import travelImage from "@/assets/blog-travel.jpg";
import wellnessImage from "@/assets/blog-wellness.jpg";
import foodImage from "@/assets/blog-food.jpg";
import homeImage from "@/assets/blog-home.jpg";
import fashionImage from "@/assets/blog-fashion.jpg";
import mindfulImage from "@/assets/blog-mindful.jpg";

const blogPosts = [
  {
    title: "Finding Peace in Morning Rituals",
    excerpt: "How starting your day with intention can transform your entire outlook and productivity.",
    category: "Wellness",
    image: wellnessImage,
    date: "Feb 5, 2026",
    readTime: "4 min read",
  },
  {
    title: "Hidden Gems of the Portuguese Coast",
    excerpt: "Escape the crowds and discover the serene beauty of Portugal's lesser-known coastal villages.",
    category: "Travel",
    image: travelImage,
    date: "Feb 3, 2026",
    readTime: "7 min read",
  },
  {
    title: "The Joy of Seasonal Cooking",
    excerpt: "Embracing what's fresh and local brings new flavors and deeper connections to your table.",
    category: "Food",
    image: foodImage,
    date: "Jan 29, 2026",
    readTime: "5 min read",
  },
  {
    title: "Creating a Mindful Living Space",
    excerpt: "Simple changes to curate a home that nurtures calm and sparks creativity.",
    category: "Home",
    image: homeImage,
    date: "Jan 25, 2026",
    readTime: "6 min read",
  },
  {
    title: "Capsule Wardrobe Essentials",
    excerpt: "Building a timeless collection of pieces that bring effortless elegance to every day.",
    category: "Style",
    image: fashionImage,
    date: "Jan 20, 2026",
    readTime: "4 min read",
  },
  {
    title: "The Practice of Digital Minimalism",
    excerpt: "Reclaiming your attention and finding balance in an always-connected world.",
    category: "Mindfulness",
    image: mindfulImage,
    date: "Jan 15, 2026",
    readTime: "8 min read",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-meta text-primary mb-2 block">Latest Stories</span>
            <h2 className="heading-section text-foreground">Fresh Perspectives</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex text-sm font-medium text-foreground link-underline"
          >
            View All Articles
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={post.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium text-sm rounded-sm hover:bg-secondary transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
