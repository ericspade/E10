import React from 'react';
import styles from './tourstyles/Section_1TourWelcome.module.css';
import WelcomeDescription from './assets/WelcomeDescription';
import MapSection from './assets/MapSection';

export default function Section_1TourWelcome() {
  return (
    <div className={styles.Section_1TourWelcome_334_4288} data-figma-node="334:4288">
      <div className={styles.WelcomeDescriptionSectionMini_334_4289}>
        <WelcomeDescription data-figma-node="334:4289" />
      </div>
      <div className={styles.MapSection_334_4291}>
        <MapSection data-figma-node="334:4291" />
      </div>
    </div>
  );
}

export {}