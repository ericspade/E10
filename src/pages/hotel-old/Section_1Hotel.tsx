import React from 'react';
import styles from './styles/Section_1Hotel.module.css';
import PhotoVideo from './assets/PhotoVideo';
import TextSection from './assets/TextSection';
import AddressSection from './assets/AddressSection';
import TagsSection from './assets/TagsSection';

export default function Section_1Hotel() {
  return (
    <div className={styles.Section_1Hotel_188_2885} data-figma-node="188:2885">
      <div className={styles.PhotoVideo_188_2886}>
        <PhotoVideo data-figma-node="188:2886" />
      </div>
      <div className={styles.TextSection_188_2959}>
        <TextSection data-figma-node="188:2959" />
      </div>
      <div className={styles.AddressSection_188_2958}>
        <AddressSection data-figma-node="188:2958" />
      </div>
      <div className={styles.TagsSection_240_22}>
        <TagsSection data-figma-node="240:22" />
      </div>
    </div>
  );
}

export {}