import React from 'react';
import styles from './tourstyles/CardHotel_1.module.css';
import Tag from './assets/Hotelcarotag';
import Raiting from './assets/Hotelcarorating';
import Button from './assets/Hotelcarobutton';

export default function CardHotel_1() {
  return (
    <div className={styles.CardHotel_1_330_3306} data-figma-node="330:3306">
      <div className={styles.Background_330_3307} data-figma-node="330:3307"></div>
      <div className={styles.PhotoOfHotel_330_3308} data-figma-node="330:3308"></div>
      <div className={styles.Tag_330_3309}>
        <Tag data-figma-node="330:3309" />
      </div><span className={styles.HotelName_330_3312} data-figma-node="330:3312">hotel
        name</span>
      <div className={styles.Raiting_330_3313}>
        <Raiting data-figma-node="330:3313" />
      </div><span className={styles.Description_330_3319} data-figma-node="330:3319">Description</span>
      <div className={styles.Button_330_3320}><Button data-figma-node="330:3320" /></div>
    </div>
  );
}