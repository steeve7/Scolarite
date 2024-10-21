import Link from 'next/link';

const BlogCard = ({ title, date }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <Link href={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
