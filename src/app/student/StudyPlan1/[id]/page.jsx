// import styles from './studyplan.module.css';

// const StudyPlan = () => {
//   const subjects = [
//     {
//       id: 1,
//       name: "Mathematics",
//       team: "Scolarite Team",
//       lessons: 5,
//       tests: 2,
//       isExpanded: true,
//       lessonsList: Array(8).fill("Introduction to Web Development"), // 8 lessons
//     },
//     {
//       id: 2,
//       name: "English",
//       team: "Scolarite Team",
//       lessons: 5,
//       tests: 2,
//       isExpanded: false,
//     },
//     {
//       id: 3,
//       name: "Physics",
//       team: "Scolarite Team",
//       lessons: 5,
//       tests: 2,
//       isExpanded: false,
//     },
//     {
//       id: 4,
//       name: "Further Mathematics",
//       team: "Scolarite Team",
//       lessons: 5,
//       tests: 2,
//       isExpanded: false,
//     },
//   ];

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1 className={styles.title}>Recommended Study Plan</h1>
//         <button className={styles.catalogButton}>COURSE CATALOG</button>
//       </header>
//       {subjects.map((subject) => (
//         <div
//           key={subject.id}
//           className={`${styles.subject} ${subject.isExpanded ? styles.expanded : ''}`}
//         >
//           <div className={styles.subjectHeader}>
//             <div className={styles.subjectIcon}>{/* Icon Placeholder */}</div>
//             <div className={styles.subjectInfo}>
//               <h2 className={styles.subjectName}>{subject.name}</h2>
//               <p className={styles.subjectDetails}>
//                 {subject.lessons} lessons • {subject.tests} Mock Test
//               </p>
//             </div>
//             <div className={styles.subjectToggle}>
//               {subject.isExpanded ? '▼' : '▶'}
//             </div>
//           </div>
//           {subject.isExpanded && subject.lessonsList && (
//             <div className={styles.lessons}>
//               {subject.lessonsList.map((lesson, index) => (
//                 <div key={index} className={styles.lesson}>
//                   <div className={styles.lessonIcon}>{/* Icon Placeholder */}</div>
//                   <p className={styles.lessonTitle}>{lesson}</p>
//                   <span className={styles.lessonStatus}>NOT COMPLETED</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StudyPlan;








"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './studyplan.module.css';

const StudyPlan = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      team: "Scolarite Team",
      lessons: 5,
      tests: 2,
      lessonsList: Array(8).fill("Introduction to Web Development"), // 8 lessons
      icon: "/images/math-icon.png",
    },
    {
      id: 2,
      name: "English",
      team: "Scolarite Team",
      lessons: 5,
      tests: 2,
      icon: "/images/math-icon.png",
    },
    {
      id: 3,
      name: "Physics",
      team: "Scolarite Team",
      lessons: 5,
      tests: 2,
      icon: "/images/math-icon.png",
    },
    {
      id: 4,
      name: "Further Mathematics",
      team: "Scolarite Team",
      lessons: 5,
      tests: 2,
      icon: "/images/math-icon.png",
    },
  ];

  const handleToggle = (id) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Recommended Study Plan</h1>
        <button className={styles.catalogButton}>
          <Image
            src="/images/course-catalog-icon.png"
            alt="Course Catalog Icon"
            width={20}
            height={20}
          />
          COURSE CATALOG
        </button>
      </header>
      {subjects.map((subject) => (
        <div
          key={subject.id}
          className={`${styles.subject} ${expandedSubject === subject.id ? styles.expanded : ''}`}
        >
          <div
            className={styles.subjectHeader}
            onClick={() => handleToggle(subject.id)}
          >
            <div className={styles.subjectIcon}>
              <Image src={subject.icon} alt={`${subject.name} Icon`} width={40} height={40} />
            </div>
            <div className={styles.subjectInfo}>
              <h2 className={styles.subjectName}>{subject.name}</h2>
              <p className={styles.subjectDetails}>
                {subject.lessons} lessons • {subject.tests} Mock Test
              </p>
            </div>
            <div className={styles.subjectToggle}>
              <Image
                src={
                  expandedSubject === subject.id
                    ? "/images/arrow-down-icon.png"
                    : "/images/arrow-right-icon.png"
                }
                alt="Toggle Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          {expandedSubject === subject.id && subject.lessonsList && (
            <div className={styles.lessons}>
              {subject.lessonsList.map((lesson, index) => (
                <div key={index} className={styles.lesson}>
                  <div className={styles.lessonIcon}>
                    <Image
                      src="/images/lesson-icon.png"
                      alt="Lesson Icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className={styles.lessonTitle}>{lesson}</p>
                  <span className={styles.lessonStatus}>NOT COMPLETED</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudyPlan;

