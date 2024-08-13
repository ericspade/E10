import React from 'react';
import styles from './CardContinent_1.module.css';
import Button from '../assets/Buttonevents';
import Tags from '../assets/Tagsslider';
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

export default function CardCont_16() {
  return (
    <div className={styles.CardContinent_16_10_1175}>
      <div className={styles.CardBackground_160_1176}></div>
    </div>
  );
}
