import React from 'react';
import styles from './countrystyles/ArrowRight.module.css';


export default function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.ArrowLeft_330_3275} data-figma-node="330:3275" onClick={onClick}>
      <div className={styles.UpRightArrow_2_330_3276} data-figma-node="330:3276"></div>
    </div>
  );
}