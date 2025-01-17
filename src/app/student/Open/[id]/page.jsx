
"use client"
import React, { useState } from "react";
import styles from "./open.module.css";

const CoursePage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>Course Content</h2>
                <div className={styles.resourceTypes}>
                    <h3 className={styles.sectionTitle}>Resource Types</h3>
                    <ul>
                        <li className={styles.borderedItem}>
                            <img
                                src="/images/lecture-icon.png"
                                alt="Lecture Notes Icon"
                                className={styles.iconLeft}
                            />
                            Lecture Notes <br /> 60 - 80 pages
                            <img
                                src="/images/Info.png"
                                alt="Arrow Icon"
                                className={styles.iconRight}
                            />
                        </li>
                        <li className={styles.borderedItem}>
                            <img
                                src="/images/video-icon.png"
                                alt="Demonstration Videos Icon"
                                className={styles.iconLeft}
                            />
                            Demonstration Videos <br /> 60 - 80 min
                            <img
                                src="/images/Info.png"
                                alt="Arrow Icon"
                                className={styles.iconRight}
                            />
                        </li>
                        <li className={styles.borderedItem}>
                            <img
                                src="/images/problem-icon.png"
                                alt="Problem Sets Icon"
                                className={styles.iconLeft}
                            />
                            Problem Sets <br /> 10 - 20 questions
                            <img
                                src="/images/Info.png"
                                alt="Arrow Icon"
                                className={styles.iconRight}
                            />
                        </li>
                    </ul>
                </div>
                <div className={styles.topics}>
                    <h3 className={styles.sectionTitle1}>Topics</h3>
                    <ul className={styles.gridList}>
                        <button className={styles.topicButton}>Energy</button>
                        <button className={styles.topicButton}>Electricity</button>
                        <button className={styles.topicButton}>Science</button>
                        <button className={styles.topicButton}>Engineer</button>
                        <button className={styles.topicButton}>AI</button>
                        <button className={styles.topicButton}>ML</button>
                        <button className={styles.topicButton}>DC</button>
                        <button className={styles.topicButton}>Motors</button>
                        <button className={styles.topicButton}>Lasers</button>
                    </ul>
                </div>
                <div className={styles.courseProgress}>
                    <div className={styles.dropdownHeader} onClick={toggleDropdown}>
                        <h3 className={styles.sectionTitles}>Course Intro</h3>
                        <img
                            src="/images/arrow-down-icon.png"
                            alt="Arrow Icon"
                            className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.arrowUp : ""
                                }`}
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul>
                            <li className={`${styles.courseItem} ${styles.completed}`}>
                                <span className={styles.borderLeft}></span>
                                <div className={styles.textContainer}>
                                    <span className={styles.courseTitle}>01: DC Motors For Beginners</span>
                                    <span className={styles.courseSubtitle}>Completed</span>
                                </div>
                                <span className={styles.completedIcon}>
                                    <img
                                        src="/images/check-icon.png"
                                        alt="Completed Icon"
                                        className={styles.icon}
                                    />
                                </span>
                            </li>
                            <li className={styles.courseItem}>
                                <div className={styles.textContainer}>
                                    <span className={styles.courseTitle}>02: Touch The Grass</span>
                                    <span className={styles.courseSubtitle}>23 Minutes</span>
                                </div>
                                <span className={styles.incompleteIcon}>
                                    <img
                                        src="/images/play-icon.png"
                                        alt="Play Icon"
                                        className={styles.icon}
                                    />
                                </span>
                            </li>
                            <li className={styles.courseItem}>
                                <div className={styles.textContainer}>
                                    <span className={styles.courseTitle}>
                                        03: Practice, Practice,
                                    </span>
                                    <span className={styles.courseSubtitle}>112 Minutes</span>
                                </div>
                                <span className={styles.incompleteIcon}>
                                    <img
                                        src="/images/play-icon.png"
                                        alt="Play Icon"
                                        className={styles.icon}
                                    />
                                </span>
                            </li>
                            <li className={styles.courseItem}>
                                <div className={styles.textContainer}>
                                    <span className={styles.courseTitle}>04: Just Do It</span>
                                    <span className={styles.courseSubtitle}>99 Minutes</span>
                                </div>
                                <span className={styles.incompleteIcon}>
                                    <img
                                        src="/images/play-icon.png"
                                        alt="Play Icon"
                                        className={styles.icon}
                                    />
                                </span>
                            </li>
                        </ul>
                    )}
                </div>
            </aside>


            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>
                        How To Speak To Anyone Without Being Cringe
                    </h1>
                    <div className={styles.courseMeta}>
                        <div className={styles.metaItem}>
                            <div className={styles.metaTop}>
                                <img
                                    src="/images/star-icon.png"
                                    alt="Star Icon"
                                    className={styles.icon}
                                />
                                <span>4.5</span>
                            </div>
                            <span className={styles.metaBottom}>14,115 Ratings</span>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaTop}>
                                <img
                                    src="/images/student-icon.png"
                                    alt="Students Icon"
                                    className={styles.icon}
                                />
                                <span>321,195</span>
                            </div>
                            <span className={styles.metaBottom}>Students Enrolled</span>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaTop}>
                                <img
                                    src="/images/duration-icon.png"
                                    alt="Duration Icon"
                                    className={styles.icon}
                                />
                                <span>6.2h</span>
                            </div>
                            <span className={styles.metaBottom}>Total Duration</span>
                        </div>
                        <div className={styles.metaItem}>
                            <div className={styles.metaTop}>
                                <img
                                    src="/images/updated-icon.png"
                                    alt="Updated Icon"
                                    className={styles.icon}
                                />
                                <span>3d ago</span>
                            </div>
                            <span className={styles.metaBottom}>Last Updated</span>
                        </div>
                    </div>
                </header>
                <section className={styles.chapter}>
                    <h2 className={styles.chapterTitle}>Chapter 1: DC Motors For Beginners</h2>
                    <div className={styles.videoContainer}>
                        <img
                            src="/images/video-thumbnail.svg"
                            alt="Video Thumbnail"
                            className={styles.videoThumbnail}
                        />
                    </div>
                    <div className={styles.courseNote}>
                        <h3 className={styles.sectionTitle}>Course Note</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam...
                        </p>
                    </div>
                </section>
            </main>





        </div>
    );
};

export default CoursePage;
