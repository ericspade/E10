import React from 'react';
import styles from './tourstyles/CardHotel_1.module.css';
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

export default function CardHotel_1() {
  return (
    <div className={styles.type_1}>
          <div className={styles.rectangle_196}></div>
          <div className={styles.rectangle_176}></div>
          <a href="/hotel" className={styles.button}>
            <img className={styles.arrow} src="/src/components/country/images/Arrowleft.png" />
          </a>
          <div className={styles.hotel_1}>hotel </div>
        </div>
  );
}
