import Link from 'next/link';
import styles from '../blog.module.css';

const BlogCard = ({ title, date, description, imgSrc, postId }) => {
  return (
    <Link href={`/blogs/${postId}`} passHref>
      {/* Remove the nested <a> tag */}
      <div className={styles.blogCard}>
        <img src={imgSrc} alt={title} className={styles.cardImage} />
        
        {/* Card content */}
        <div className={styles.cardContent}>
          <p className={styles.cardDate}>{date}</p>
          
          {/* Title with icon */}
          <div className={styles.titleWithIcon}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <img src="/images/arrow-icon.jpg" alt="Arrow Icon" className={styles.arrowIcon1} />
          </div>
          
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

