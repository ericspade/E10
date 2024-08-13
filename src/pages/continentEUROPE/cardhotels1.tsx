import React from 'react';
import styles from './countrystyles/CardHotel_1.module.css';
import Tag from './assets/Hotelcarotag';
import Raiting from './assets/Hotelcarorating';
import Button from './assets/Hotelcarobutton';
import buttonanim from './hotelcarobutton.json'
import $ from 'jquery';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import buttonanim2 from "./hotelcarobutton.json"

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});

export default function CardHotel_1() {
  return (
    <div className={styles.CardHotel_1_330_3306}>
      <div className={styles.Background_330_3307}></div>
      <div className={styles.PhotoOfHotel_330_3308}></div>
      <div className={styles.Tag_330_3309}>
        <Tag />
      </div><span className={styles.HotelName_330_3312}>hotel
        name</span>
      <div className={styles.Raiting_330_3313}>
        <Raiting />
      </div><span className={styles.Description_330_3319}>Description</span>
      <a href="/hotel" className={styles.Button_330_3320}><Player
  hover
  src={buttonanim2}
  style={{ height: '60px', width: '160px', transform: 'translate(-376px, -3px)', overflow: 'visible' }}></Player>
</a>
    </div>
  );
}