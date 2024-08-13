import React from 'react';
import styles from './ArrowUp.module.css';


export default function ArrowUp(props) {
    const { className, style, onClick } = props;
  return (
    <div className={styles.ArrowUp_330_3275} onClick={onClick}>
      <div className={styles.UpArrow_2_330_3276}></div>
    </div>
  );
}