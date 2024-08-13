import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/* import "slick-carousel/slick/slick-theme.css" */;
import styles from './sliderBig.module.css';
import SliderCardBig from "../sliderCardBig/SliderCardBig";
import cursivingText from "../../functions/cursivingText";



export default function SliderBig({ slides, title }) {

	const settings = {
		className: "slider",
		variableWidth: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${styles["slick-arrow"]} ${styles["slick-next"]}`}
				onClick={onClick}	>
				<svg>
					<use href="./images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</div>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`}
				onClick={onClick}
			>
				<svg>
					<use href="./images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</div>
		);
	}

	return (
		<section className={styles["slider-container"]}>
			<h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>
			<Slider {...settings}>
				{slides.map((item, index) => {
					return (
						<SliderCardBig
							key={index}
							tags={item.tags}
							tagIcon={item.tagIcon}
							background={item.background}
							title={item.title}
							description={item.description}
							isLinkExist={item.isLinkExist}
							linkText={item.linkText}
							link={item.link}
						/>)
				})}
			</Slider>
		</section>
	)
}
