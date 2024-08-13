import React from 'react';
import styles from './CardContinent_1.module.css';
import Button from '../assets/Buttonevents';
import Tags from '../assets/Tagsslider';
import $ from 'jquery';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import buttonanim from "./archcarobutton.json"
import pic from './pic16.jpg'

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});

export default function CardCont_15() {
  return (
    <div className={styles.CardContinent_15_10_1175}>
      <div className={styles.CardBackground_150_1176}><img src={pic} alt="pic" width="424" height="541" style={{
    height: 541,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    objectFit: 'cover',
    borderRadius: '4%',
    left: '0px'}} />
          </div>
    </div>
  );
}
