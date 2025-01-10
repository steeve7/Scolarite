
import styles from './course.module.css';

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerContent}>
                <h1 className={styles.title}>Course Catalog</h1>
                <div className={styles.filterContainer}>
                    <button className={styles.filterButton}>
                        <img src="/images/sort-icon.png" alt="Sort" /> Sort By
                    </button>
                    <button className={styles.filterButton}>
                        <img src="/images/filter-icon.png" alt="Filter" /> Filter
                    </button>
                </div>
            </div>

            <div className={styles.courseCategory}>
                <h2 className={styles.categoryTitle}>Mathematics</h2>
                <p className={styles.categoryDescription}>
                    Master core mathematical concepts and problem-solving techniques essential for JAMB success.
                </p>
                <div className={styles.courseGrid}>
                    {Array(8).fill().map((_, index) => (
                        <div key={index} className={styles.courseCard}>
                            <img src="/images/course-placeholder.svg" alt="Course" className={styles.courseImage} />
                            <div className={styles.courseDetails}>
                                <h3 className={styles.courseTitle}>Mathematics</h3>
                                <p className={styles.courseMeta}>• Scolarité Team • 5 lessons 2 Mock Test</p>
                                <button className={styles.startButton}>Start Lesson</button>
                            </div>
                            <div className={styles.progressBarContainer}>
                                <div className={styles.progressBar} style={{ width: '2%' }}></div>
                                <span className={styles.progressText}>2% Completed</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.courseCategory}>
                <h2 className={styles.categoryTitle}>English Language</h2>
                <p className={styles.categoryDescription}>
                    Enhance your grammar, vocabulary, and comprehension skills to excel in the English section.
                </p>
                <div className={styles.courseGrid}>
                    {Array(8).fill().map((_, index) => (
                        <div key={index} className={styles.courseCard}>
                            <img src="/images/course-placeholder.svg" alt="Course" className={styles.courseImage} />
                            <div className={styles.courseDetails}>
                                <h3 className={styles.courseTitle}>English Language</h3>
                                <p className={styles.courseMeta}>• Scolarité Team • 5 lessons 2 Mock Test</p>
                                <button className={styles.resumeButton}>Resume Lesson</button>
                            </div>
                            <div className={styles.progressBarContainer}>
                                <div className={styles.progressBar} style={{ width: '23%' }}></div>
                                <span className={styles.progressText}>23% Completed</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
