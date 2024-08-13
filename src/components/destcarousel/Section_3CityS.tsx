import React from 'react';
import styles from './Section_3CityS.module.css';
import Section_3Countrys from './assets/Section_3Countrys';
import DestCaro from './destinationscaro';

export default function Section_3CityS() {
  return (
    <div className={styles.Section_3CityS_330_3251} >
      <div className={styles.ManPhoto_330_3252} ></div>
      <div className={styles.Section_3Countrys_330_3253}>
        <DestCaro />
      </div>
    </div>
  );
}

export {}