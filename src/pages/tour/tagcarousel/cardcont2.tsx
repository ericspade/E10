import React from 'react';
import styles from './CardContinent_1.module.css';
import Button from '../assets/Buttonevents';
import Tags from '../assets/Tagsslider';
import $ from 'jquery';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import buttonanim from "./archcarobutton.json"
import pic from './ph.jpg'

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});

export default function CardCont_2() {
  return (
    <div className={styles.CardContinent_2_10_1175}><img src={pic} alt="pic" width="560" height="360" style={{
    height: 387,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    objectFit: 'cover',
    borderRadius: '4%',
    left: '0px'}} />
          </div>
  );
}
