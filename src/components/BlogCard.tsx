interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, category, image, date, readTime }: BlogCardProps) => {
  return (
    <article className="group card-hover">
      <a href="#" className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-5 shadow-soft">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover image-zoom"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-background/95 backdrop-blur-sm text-xs font-medium uppercase tracking-wider text-foreground rounded-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{readTime}</span>
          </div>
          <h3 className="heading-card text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-body line-clamp-2">
            {excerpt}
          </p>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
