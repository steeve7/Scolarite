// Pagination.js
import styles from '../blog.module.css';

const Pagination = () => {
  return (
    <div className={styles.paginationContainer}>
      <button className={styles.paginationButton}>← Previous</button>
      <div className={styles.pageNumbers}>
        <span className={`${styles.pageNumber} ${styles.activePage}`}>1</span>
        <span className={styles.pageNumber}>2</span>
        <span className={styles.pageNumber}>3</span>
        <span className={styles.pageNumber}>...</span>
        <span className={styles.pageNumber}>8</span>
        <span className={styles.pageNumber}>9</span>
        <span className={styles.pageNumber}>10</span>
      </div>
      <button className={styles.paginationButton}>Next →</button>
    </div>
  );
};

export default Pagination;

