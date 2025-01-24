"use client"
// import styles from './calendar.module.css';

// export default function CalendarPage() {
//   const events = [
//     { date: '2023-09-01', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-02', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-05', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-09', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-14', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-19', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-23', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-28', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//     { date: '2023-09-30', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
//   ];

//   const currentMonth = 'September 2023'; // Static for now, can be dynamic
//   const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

//   return (
//     <div className={styles.calendarPage}>
//       <header className={styles.header}>
//         <div className={styles.titleContainer}>
//           <h1 className={styles.title}>My Calendar</h1>
//           <div className={styles.viewToggle}>
//             <button className={`${styles.toggleButton} ${styles.active}`}>Monthly</button>
//             <button className={styles.toggleButton}>Weekly</button>
//           </div>
//         </div>
//         <button className={styles.catalogButton}>
//           <img src="/images/icon.png" alt="Catalog Icon" className={styles.icon} />
//           <span className={styles.catalogText}>Course Catalog</span>
//         </button>
//       </header>


{/* <div className={styles.calendarNav}>
        <button className={styles.navButton}>&lt;</button>
        <span className={styles.currentMonth}>{currentMonth}</span>
        <button className={styles.navButton}>&gt;</button>
      </div> */}

//       <div className={styles.calendarNav}>
//         <button className={styles.navButton}>
//           <img src="/images/arrow-left.png" alt="Left Arrow" className={styles.navIcon} />
//         </button>
//         <div className={styles.monthYear}>
//           <span className={styles.currentMonth}>{currentMonth}</span>
//           <span className={styles.currentYear}>{currentYear}</span>
//           <img src="/images/arrow-down.png" alt="Dropdown Arrow" className={styles.dropdownIcon} />
//         </div>
//         <button className={styles.navButton}>
//           <img src="/images/arrow-right.png" alt="Right Arrow" className={styles.navIcon} />
//         </button>
//         <button className={styles.todayButton}>Today</button>
//       </div>







//       <div className={styles.calendarGrid}>
//         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//           <div key={day} className={styles.dayHeader}>
//             {day}
//           </div>
//         ))}
//         {daysInMonth.map((day) => (
//           <div key={day} className={styles.dayCell}>
//             <span className={styles.dayNumber}>{day}</span>
//             {events
//               .filter((event) => new Date(event.date).getDate() === day)
//               .map((event, index) => (
//                 <div key={index} className={styles.event}>
//                   <span>{event.time}</span>
//                   <span>{event.subject}</span>
//                   <span>{event.topic}</span>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








import { useState } from 'react';
import styles from './calendar.module.css';

export default function CalendarPage() {
  const events = [
    { date: '2023-09-01', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-02', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-05', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-09', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-14', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-19', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-23', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-28', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
    { date: '2023-09-30', time: '7:00-8:00 AM', subject: 'Mathematics', topic: 'Quadratic equations' },
  ];

  const [currentMonth, setCurrentMonth] = useState('September'); // Replace with dynamic calculation if needed
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Dynamically gets the current year

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Example for September

  return (
    <div className={styles.calendarPage}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>My Calendar</h1>
          <div className={styles.viewToggle}>
            <button className={`${styles.toggleButton} ${styles.active}`}>Monthly</button>
            <button className={styles.toggleButton}>Weekly</button>
          </div>
        </div>
        <button className={styles.catalogButton}>
          <img src="/images/course-catalog-icon.png" alt="Catalog Icon" className={styles.icon} />
          <span className={styles.catalogText}>Course Catalog</span>
        </button>
      </header>

      {/* <div className={styles.calendarNav}>
        <button className={styles.navButton}>
          <img src="/images/arrow-left.png" alt="Left Arrow" className={styles.navIcon} />
        </button>
        <div className={styles.monthYear}>
          <span className={styles.currentMonth}>{currentMonth}</span>
          <span className={styles.currentYear}>{currentYear}</span>
          <img src="/images/arrow-down-icon.png" alt="Dropdown Arrow" className={styles.dropdownIcon} />
        </div>
        <button className={styles.navButton}>
          <img src="/images/arrow-right-icon.png" alt="Right Arrow" className={styles.navIcon} />
        </button>
        <button className={styles.todayButton}>Today</button>
      </div> */}
      <div className={styles.calendarNav}>
        <button className={styles.navButton}>
          <img src="/images/arrow-left.png" alt="Left Arrow" className={styles.navIcon} />
        </button>
        <div className={styles.centerNav}>
          <div className={styles.monthYear}>
            <span className={styles.currentMonth}>{currentMonth}</span>
            <span className={styles.currentYear}>{currentYear}</span>
            <img src="/images/arrow-down-icon.png" alt="Dropdown Arrow" className={styles.dropdownIcon} />
          </div>
          <button className={styles.todayButton}>Today</button>
        </div>
        <button className={styles.navButton}>
          <img src="/images/arrow-right-icon.png" alt="Right Arrow" className={styles.navIcon} />
        </button>
      </div>




      <div className={styles.calendarGrid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className={styles.dayHeader}>
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div key={day} className={styles.dayCell}>
            <span className={styles.dayNumber}>{day}</span>
            {events
              .filter((event) => new Date(event.date).getDate() === day)
              .map((event, index) => (
                <div key={index} className={styles.event}>
                  <span>{event.time}</span>
                  <span>{event.subject}</span>
                  <span>{event.topic}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

