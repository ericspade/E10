import React from 'react';
import styles from './countrystyles/CardLocations_1.module.css';
import Button from './assets/Button';
import Tags from './assets/Tagsslider';

export default function CardLocations_1() {
  return (
    <div className={styles.CardLocations_1_10_1175} data-figma-node="10:1175">
      <div className={styles.CardBackground_10_1176} data-figma-node="10:1176"></div><span className={styles.Title_10_1177} data-figma-node="10:1177">Title</span><span className={styles.Description_10_1178} data-figma-node="10:1178">Description </span>
      <div className={styles.Button_10_1179}><Button data-figma-node="10:1179" /></div>
      <div className={styles.Tags_10_1182}>
        <Tags data-figma-node="10:1182" />
      </div>
    </div>
  );
}
