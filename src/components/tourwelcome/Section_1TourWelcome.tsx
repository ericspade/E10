import React from 'react';
import styles from './Section_1TourWelcome.module.css';
import MapSection from './MapSection';

export default function Section_1TourWelcome() {
  return (
    <div className={styles.Section_1TourWelcome_334_4288}>
      <div className={styles.WelcomeDescriptionSectionMini_334_4289}>
        <img src='./images/ph.jpg' width='1120' height='860'></img>
      </div>
      <div className={styles.MapSection_334_4291}>
        <MapSection />
      </div>
    </div>
  );
}

export {}