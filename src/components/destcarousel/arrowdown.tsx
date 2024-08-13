import React from 'react';
import styles from './ArrowDown.module.css';


export default function ArrowDown(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.ArrowDown_330_3275} onClick={onClick}>
      <div className={styles.DownArrow_2_330_3276}></div>
    </div>
  );
}