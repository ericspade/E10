import React, { useState, useRef, useEffect } from 'react';
import styles from './cities.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderStringsCard from '../sliderStrings/SliderStringsCard';

import "../sliderStrings/sliderString.css"

export default function Cities({ slides }) {

	const settingsSlides = {
		className: `${styles.slider} cities-slider`,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
	};

	const settingsBackground = {
		className: `${styles['slider-background']}`,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		focusOnSelect: false,
		fade: true,
		arrows: false,
	};


	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	let sliderRef1: any = useRef(null);
	let sliderRef2: any = useRef(null);

	useEffect(() => {
		setNav1(sliderRef1);
		setNav2(sliderRef2);
	}, []);



	return (
		<section className={styles.countries} >
			<Slider
				slides={slides}
				asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
				{...settingsSlides}>
				{slides.map((slide, index) => {
					return <SliderStringsCard key={index} slide={slide} />
				})}
			</Slider>

			<Slider
				slides={slides}
				asNavFor={nav1}
				ref={slider => (sliderRef2 = slider)}
				{...settingsBackground} >
				{slides.map((slide, index) => {
					return <div key={index} className={styles.background}><img key={index} src={slide.image} /></div>
				})}
			</Slider>


		</section>
	);
}