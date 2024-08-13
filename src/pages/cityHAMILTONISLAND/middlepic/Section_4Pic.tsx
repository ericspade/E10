import React from 'react';
import styles from './Section_4Pic.module.css';
import cursivingText from '../../../functions/cursivingText';


export default function Section_4Pic({ image, text, isButtonExist }) {

    const ready = cursivingText(text)

  return (
    <section className={styles.Section_4Pic_330_3149}>
      <img className={styles.ManPhoto_330_3150} src={image} alt=''></img>
      <div className={styles.section4__container}>
				<p className={styles.section4__item} dangerouslySetInnerHTML={{ __html: ready }} />
	  </div>
    </section>
  );
}
