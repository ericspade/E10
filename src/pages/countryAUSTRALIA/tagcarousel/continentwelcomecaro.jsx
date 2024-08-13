import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCont_1 from './cardcont1'
import CardCont_2 from './cardcont2'
import CardCont_3 from './cardcont3'
import CardCont_4 from './cardcont4'
import CardCont_5 from './cardcont5'
import CardCont_6 from './cardcont6'
import CardCont_7 from './cardcont7'
import CardCont_8 from './cardcont8'
import CardCont_9 from './cardcont9'
import CardCont_10 from './cardcont10'
import CardCont_11 from './cardcont11'
import CardCont_12 from './cardcont12'
import CardCont_13 from './cardcont13'
import CardCont_14 from './cardcont14'
import CardCont_15 from './cardcont15'
import CardCont_16 from './cardcont16'
import Section_4ArrowLeft from '../Section_4ArrowLeft';
import Section_4ArrowRight from '../Section_4ArrowRight';

function ContCaro() {
  const settings = {
    className: "center slider variable-width",
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    initialSlide: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 463, height: 372}}>
            <CardCont_1 />
        </div>
        <div style={{ width: 560, height: 360}}>
            <CardCont_2 />
        </div>
        <div style={{ width: 616, height: 757}}>
            <CardCont_3 />
        </div>
        <div style={{ width: 605, height: 389}}>
            <CardCont_4 />
        </div>
        <div style={{ width: 458, height: 585}}>
            <CardCont_5 />
        </div>
        <div style={{ width: 605, height: 389}}>
            <CardCont_6 />
        </div>
        <div style={{ width: 616, height: 757}}>
            <CardCont_7 />
        </div>
        <div style={{ width: 605, height: 389}}>
            <CardCont_8 />
        </div>
        <div style={{ width: 458, height: 585}}>
            <CardCont_9 />
        </div>
        <div style={{ width: 463, height: 280}}>
            <CardCont_10 />
        </div>
        <div style={{ width: 605, height: 389}}>
            <CardCont_11 />
        </div>
        <div style={{ width: 570, height: 700}}>
            <CardCont_12 />
        </div>
        <div style={{ width: 570, height: 700}}>
            <CardCont_13 />
        </div>
        <div style={{ width: 560, height: 360}}>
            <CardCont_14 />
        </div>
        <div style={{ width: 424, height: 541}}>
            <CardCont_15 />
        </div>
      </Slider>
    </div>
  );
}

export default ContCaro;