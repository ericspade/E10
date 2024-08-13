import styles from "./styles/hotelcaro.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHotel from './cardhotel'


function HotelCaro() {
  const settings = {
    className: "center slider variable-width",
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    rows: 2,
    slidesPerRow: 3,
    centerMode: true,
    centerPadding: "1px 10px"
  };return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
        <div style={{ width: 700 }}>
            <CardHotel />
        </div>
      </Slider>
    </div>
  );
}

export default HotelCaro;