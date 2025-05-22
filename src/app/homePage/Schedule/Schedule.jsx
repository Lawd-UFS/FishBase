'use client';

import { format } from 'date-fns';
import styles from '@/app/homePage/Schedule/Schedule.module.css';
import homeStyles from '@/app/homePage/HomePage.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Schedule({ schedule = [] }) {
  const { texts } = useLanguage();

  return (
    <section className={styles.background}>
      <div className={`${styles.subtitleEventInfo} ${homeStyles.grid}`}>
        <div className={styles.symposiumDate}>September 1-2, 2025</div>
        <div className={styles.symposiumLocation}>
          São Cristóvão – Sergipe – Brazil
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.stickyWrapper}>
          <h2 className={styles.titleSection}>{texts.navbar.programming}</h2>
        </div>
        <div className={styles.scheduleContainer}>
          {schedule.map((event) => (
            <div className={styles.scheduleItems} key={event.id}>
              <div className={styles.dateItem}>
                <p className={styles.date}>
                  {format(event.dateTime, 'dd/LLL')}
                </p>
                <p className={styles.time}>{format(event.dateTime, 'kk:mm')}</p>
              </div>
              <p className={styles.infoItem}>
                {event.title}
                <span className={styles.speakers}>
                  {event.speaker ? ` - ${event.speaker}` : ''}
                </span>
              </p>
              <p className={styles.theme}>{event.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
