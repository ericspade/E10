import React from 'react';
import styles from './CardContinent_1.module.css';
import Button from '../assets/Buttonevents';
import Tags from '../assets/Tagsslider';
import $ from 'jquery';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import buttonanim from "./archcarobutton.json"
import pic from './pic13.jpg'

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});

export default function CardCont_12() {
  return (
    <div className={styles.CardContinent_12_10_1175}>
      <div className={styles.CardBackground_120_1176}><img src={pic} alt="pic" width="570" height="700" style={{
    height: 700,
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
