// [id].js

import { useRouter } from 'next/router';
import styles from './blog.module.css';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  // You would typically fetch post details from an API or data file based on the `id`
  // For this example, we'll use a placeholder post
  const post = {
    title: "Sample Blog Post Title",
    date: "Sunday, 1 Jan 2023",
    content: "This is a sample blog post content. Replace this with actual blog content.",
    imgSrc: "/images/post1-image.jpg",
  };

  return (
    <div className={styles.blogPost}>
      <img src={post.imgSrc} alt={post.title} className={styles.postImage} />
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDate}>{post.date}</p>
      <div className={styles.postContent}>{post.content}</div>
    </div>
  );
};

export default BlogPost;
