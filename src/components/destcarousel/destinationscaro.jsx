import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowUp from './arrowup';
import ArrowDown from './arrowdown';
import { CardDest1 } from './carddest1'
import { CardDestczrep } from './carddestczrep'
import { CardDestfrance } from './carddestfrance'
import { CardDestgermany } from './carddestgermany'
import { CardDestgreece } from './carddestgreece'
import { CardDestgb } from './carddestgb'
import { CardDestitaly } from './carddestitaly'
import { CardDestireland } from './carddestireland'
import { CardDestnetherlands } from './carddestnetherlands'
import { CardDestrussia } from './carddestrussia'
import { CardDestscotland } from './carddestscotland'
import { CardDestspain } from './carddestspain'
import { CardDestswitzerland } from './carddestswitzerland'

function DestCaro() {
  const settings = {
    className: "center slider variable-width",
    variableWidth: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: false,
    initialSlide: 0,
    autoplay: false,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <ArrowUp />,
    prevArrow: <ArrowDown />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 463, height: 372}}>
            <CardDest1 />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestczrep />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestfrance />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestgermany />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestgreece />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestgb />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestitaly />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestireland />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestnetherlands />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestrussia />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestscotland />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestspain />
        </div>
        <div style={{ width: 463, height: 372}}>
            <CardDestswitzerland />
        </div>
      </Slider>
    </div>
  );
}

export default DestCaro;