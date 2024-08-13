import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardHotel_1 from './cardhotels1'
import Section_5ArrowLeft from './Section_5ArrowLeft';
import Section_5ArrowRight from './Section_5ArrowRight';

function MultipleItems2() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "219px",
    nextArrow: <Section_5ArrowLeft />,
    prevArrow: <Section_5ArrowRight />
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div>
            <CardHotel_1 />
        </div>
        <div>
            <CardHotel_1 />
        </div>
        <div>
            <CardHotel_1 />
        </div>
        <div>
            <CardHotel_1 />
        </div>
        <div>
            <CardHotel_1 />
        </div>
        <div>
            <CardHotel_1 />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems2;