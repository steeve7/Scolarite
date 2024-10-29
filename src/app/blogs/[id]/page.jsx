// [id].js
"use client"
// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import styles from './style.module.css';
import { useParams } from 'next/navigation';
import { BlogPosts } from '../BlogPostsData';

function BlogPost() {
  /* const router = useRouter();
  const { id } = router.query; */
  const { id } = useParams();
  // You would typically fetch post details from an API or data file based on the `id`
  // For this example, we'll use a placeholder post
  const post = BlogPosts.find((postObj)=> postObj.id == Number(id))
  console.log(id)
  // const post = {
  //   title: "Sample Blog Post Title",
  //   date: "Sunday, 1 Jan 2023",
  //   content: "This is a sample blog post content. Replace this with actual blog content.",
  //   imgSrc: "/images/post1-image.jpg",
  // };

  return (
    <div className={styles.blogPost}>
      <img src={post.imgSrc} alt={post.title} className={styles.postImage} />
      <div className={styles.postintrowrapper}>
        <div className={styles.piwinner}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <p className={styles.postDate}>
            <div className={styles.pageauthor}>Written By {post.author}</div> 
            {post.date}
            </p>
        </div>
    </div>
      <div className={styles.postContent}>{post.content.map((paragraph,index)=><div className={styles.contentwrapper}>
      <div key={`key-title-${index}`}className={styles.contenttitle}>{paragraph.title}</div>
      <div key={`key-content-${index}`}className={styles.contentcontent}>{paragraph.content}</div>
      </div>)}</div>
    </div>
  );
};

export default BlogPost; 
