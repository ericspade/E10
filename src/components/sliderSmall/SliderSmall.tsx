import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/* import "slick-carousel/slick/slick-theme.css" */;
import styles from './sliderSmall.module.css';
import SliderCardSmall from "../sliderCardSmall/SliderCardSmall";

export default function SliderSmall({ slides }) {

	const settings = {
		className: `${styles.slider}`,
		variableWidth: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<button
				className={`${styles["slick-arrow"]} ${styles["slick-next"]}`}
				onClick={onClick}	>
				<svg>
					<use href="./images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</button>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<button
				className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`}
				onClick={onClick}>
				<svg>
					<use href="./images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</button>
		);
	}

	return (
		<section className={styles["slider-container"]}>
			<Slider {...settings}>
				{slides.map((item, index) => {
					return (
						<SliderCardSmall
							key={index}
							image={item.image}
							title={item.title}
							link={item.link}
						/>)
				})}
			</Slider>
		</section>
	)
}
