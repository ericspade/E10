import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardEvents_1 from "./cardevents1";
import Section_4ArrowLeft from "./Section_4ArrowLeft";
import Section_4ArrowRight from "./Section_4ArrowRight";

function MultipleItems3() {
  const settings = {
    className: "center slider variable-width",
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    nextArrow: <Section_4ArrowLeft />,
    prevArrow: <Section_4ArrowRight />,
    variableWidth: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
        <div style={{ width: 1250 }}>
          <CardEvents_1 />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems3;
