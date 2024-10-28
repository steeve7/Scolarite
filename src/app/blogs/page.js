// Importing necessary components and styles

import BlogCard from '../blogs/components/BlogCard';  // Blog card component for individual blog posts
import Pagination from '../blogs/components/Pagination';  // Pagination component for navigating between pages
import styles from '../blogs/blog.module.css';  // Styles for this page
import Link from 'next/link';

export const BlogPosts = [
  {
    id: 1,
    title: "Engineering Innovations: How to Prepare for a Future in Engineering",
    date: "Sunday, 1 Jan 2023",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    imgSrc: "/images/post1-image.jpg",
  },
  {
    id: 2,
    title: "Medical Aspirants: Essential Skills Beyond the Books",
    date: "Sunday, 1 Jan 2023",
    description: "Mental models are simple expressions of complex processes or relationships.",
    imgSrc: "/images/post2-image.jpg",
  },
  {
    id: 3,
    title: "Navigating the Path to a Career in the Arts: What Every Student Should Know",
    date: "Sunday, 1 Jan 2023",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    imgSrc: "/images/post3-image.jpg",
  },
  {
    id: 4,
    title: "The Future of Commerce: Skills That Will Set You Apart",
    date: "Sunday, 1 Jan 2023",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    imgSrc: "/images/post4-image.jpg",
  },
  {
    id: 5,
    title: "Study Strategies for Success: How Top Students Prepare for Exams",
    date: "Sunday, 1 Jan 2023",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    imgSrc: "/images/post5-image.jpg",
  },
  {
    id: 6,
    title: "Balancing Act: Managing Studies and Personal Life as a Student",
    date: "Sunday, 1 Jan 2023",
    description: "Starting a community doesn’t need to be complicated, but how do you get started?",
    imgSrc: "/images/post6-image.jpg",
  },
];

// Main BlogPage component
const BlogPage = () => {
  // Sample blog posts data with ids for dynamic routing
 const blogPosts = [...BlogPosts]

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* Category button */}
          <button className={styles.blogCategoryButton}>BLOG</button>
          
          {/* Hero title */}
          <h1 className={styles.heroTitle}>
            Academic Success Central:<br/> Navigating JAMB and Beyond for All Aspirants
          </h1>
          
          {/* Hero image */}
          <img src="/images/blog-hero.jpg" alt="Hero" className={styles.heroImage} />
        </div>

        {/* Hero post details */}
        <div className={styles.heroPostDetails}>
          <p className={styles.postDate}>Sunday, 26 May 2024</p>
          
          {/* Post title with arrow icon */}
          <h2 className={styles.postTitle}>
            5 Must-Know Tips for Acing the JAMB Examination
            <img src="/images/arrow-icon.jpg" alt="Arrow Icon" className={styles.arrowIcon} />
          </h2>

          {/* Post excerpt */}
          <p className={styles.postExcerpt}>
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.blogPosts}>
        <h3>All blog posts</h3>
        
        {/* Grid of blog cards */}
        <div className={styles.grid}>
          {blogPosts.map((post) => {
            // <Link href={`/blogs/${post.id}`} key={post.id} passHref>
              {/* Each BlogCard is clickable and navigates to a dynamic blog page based on post.id */}
              return <BlogCard 
                title={post.title}
                date={post.date}
                description={post.description}
                imgSrc={post.imgSrc}
                postId={post.id}
              />
            //  </Link>
          })}
        </div>
      </section>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default BlogPage;


















                              //OLD CODE//
// import BlogCard from '../blogs/components/BlogCard';  // Corrected import
// import Pagination from '../blogs/components/Pagination';  // Corrected import
// import styles from '../blogs/blog.module.css';  // Corrected import

// const BlogPage = () => {
//   return (
//     <div className={styles.blogPage}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <div className={styles.heroContent}>
//           {/*<p className={styles.blogCategory}>BLOG</p>*/}
//           <button className={styles.blogCategoryButton}>BLOG</button>
//           <h1 className={styles.heroTitle}>Academic Success Central:<br/> Navigating JAMB and Beyond for All Aspirants</h1>
//           <img src="/images/blog-hero.jpg" alt="Hero" className={styles.heroImage} />
//         </div>
//         <div className={styles.heroPostDetails}>
//           <p className={styles.postDate}>Sunday, 26 May 2024</p>
//           <h2 className={styles.postTitle}>
//             5 Must-Know Tips for Acing the JAMB Examination
//             {/* Arrow icon next to post title */}
//       <img src="/images/arrow-icon.jpg" alt="Arrow Icon" className={styles.arrowIcon} />
//             </h2>
//           <p className={styles.postExcerpt}>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className={styles.blogPosts}>
//       <h3>All blog posts</h3>
//       <div className={styles.grid}>
//         <BlogCard 
//           title="Engineering Innovations: How to Prepare for a Future in Engineering"
//           date="Sunday, 1 Jan 2023"
//           description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
//           imgSrc="/images/post1-image.jpg"
//         />

//         <BlogCard 
//           title="Medical Aspirants: Essential Skills Beyond the Books"
//           date="Sunday, 1 Jan 2023"
//           description="Mental models are simple expressions of complex processes or relationships."
//           imgSrc="/images/post2-image.jpg"
//         />

//         <BlogCard 
//           title="Navigating the Path to a Career in the Arts: What Every Student Should Know"
//           date="Sunday, 1 Jan 2023"
//           description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
//           imgSrc="/images/post3-image.jpg"
//         />

//         <BlogCard 
//           title="The Future of Commerce: Skills That Will Set You Apart"
//           date="Sunday, 1 Jan 2023"
//           description="Collaboration can make our teams stronger, and our individual designs better."
//           imgSrc="/images/post4-image.jpg"
//         />

//         <BlogCard 
//           title="Study Strategies for Success: How Top Students Prepare for Exams"
//           date="Sunday, 1 Jan 2023"
//           description="JavaScript frameworks make development easy with extensive features and functionalities."
//           imgSrc="/images/post5-image.jpg"
//         />

//         <BlogCard 
//           title="Balancing Act: Managing Studies and Personal Life as a Student"
//           date="Sunday, 1 Jan 2023"
//           description="Starting a community doesn’t need to be complicated, but how do you get started?"
//           imgSrc="/images/post6-image.jpg"
//         />
//       </div>
//     </section>


//       {/* Pagination */}
//       <Pagination />
//     </div>
//   );
// };

// export default BlogPage;
