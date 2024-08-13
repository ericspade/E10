import React from 'react';
import styles from './continentstyles/CardLocations_1.module.css';
import Button from './assets/Buttonevents';
import Tags from './assets/Tagsslider';
import $ from 'jquery';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import buttonanim from "./archcarobutton.json"

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});

export default function CardEvents_1() {
  return (
    <div className={styles.CardLocations_1_10_1175}>
      <div className={styles.CardBackground_10_1176}></div><span className={styles.Title_10_1177}>Title</span><span className={styles.Description_10_1178}>Description </span>
      <a href="/event" className={styles.Button_10_1179}><Player
  hover
  src={buttonanim}
  style={{ height: '80px', width: '1200px', transform: 'translate(-47px, -3px)', overflow: 'visible' }}></Player>
</a>
      <div className={styles.Tags_10_1182}>
        <Tags />
      </div>
    </div>
  );
}
