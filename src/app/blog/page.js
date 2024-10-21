import BlogCard from './components/BlogCard';
import Pagination from './components/Pagination';
import './blog.css';

const BlogHome = () => {
  return (
    <div className="blog-home">
      <header className="blog-header">
        <h1>Academic Success Central: Navigating JAMB and Beyond for All Aspirants</h1>
      </header>

      <section className="blog-posts">
        <BlogCard title="5 Must-Know Tips for Acing the JAMB Examination" date="Sunday, 26 May 2024" />
        <BlogCard title="Engineering Innovations: How to Prepare for a Future in Engineering" date="Sunday, 1 Jan 2023" />
        <BlogCard title="Medical Aspirants: Essential Skills Beyond the Books" date="Sunday, 1 Jan 2023" />
        {/* Add more BlogCard components as needed */}
      </section>

      <Pagination />
    </div>
  );
};

export default BlogHome;
