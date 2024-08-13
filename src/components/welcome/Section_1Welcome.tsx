import React, { useState } from 'react';
import "../../common.css"
import styles from './Section_1Welcome.module.css';
import cursivingText from '../../functions/cursivingText';
cursivingText


export default function Section_1Welcome({ image, location, isButtonExist, full, link }) {

  let display
  if (full) {
    display = styles.full
  }
  return (
    <section className={`${styles.Section_1Welcome_330_3149} ${display} `} >
      <img className={styles.ManPhoto_330_3150} src={image} alt=''></img>
      <h1 className={`${styles.Country_330_3151} title`} dangerouslySetInnerHTML={{ __html: cursivingText(location) }}></h1>
      {isButtonExist && <a href={link}><button className={styles.button}>Explore</button></a>}
    </section>
  );
}
