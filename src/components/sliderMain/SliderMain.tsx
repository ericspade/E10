import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/* import "slick-carousel/slick/slick-theme.css" */;
import "./sliderMain.css"
import styles from './sliderMain.module.css';


import cursivingText from "../../functions/cursivingText";
import SliderCardMain from "../sliderCardMain/SliderCardMain";
import chunkArray from "../../functions/chunkArray";



export default function SliderMain({ slides, title }) {
	let slider
	let currentSlide
	let firstCards

	const settings = {
		className: "slider main-slider",
		variableWidth: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		onInit: () => { change() },
		afterChange: () => { currentSlide = slider.querySelector(".slick-current") },
		beforeChange: () => {
			const activeCard = currentSlide.querySelector('[class*="active-card"]');
			activeCard.classList.remove(styles["active-card"]);
			firstCards.forEach(card => {
				card.classList.add(styles["active-card"])
			})
		}
	};

	/* useEffect(() => {
		slider = document.querySelector(".main-slider")
		if (!slider) return

		current = slider.querySelector(".slick-current")
		const slides = slider.querySelectorAll(".slick-slide")
		const cards = slider.querySelectorAll('[class*="card"]')
		cards.forEach(card => {
			card.classList.add(styles.card)
		})
		let activeCards: any = []
		if (!current || !slides) return

		slides.forEach(slide => {
			activeCards.push(slide.querySelector('[class*="card"]'))
		})

		activeCards.forEach(card => {
			card.classList.add(styles["active-card"])
		})

		cards.forEach(card => {
			card.addEventListener("mouseover", () => {
				const activeCard = current.querySelector('[class*="active-card"]');
				console.log(activeCard);
				if (card.classList.contains(styles["active-card"])) return;
				else {
					if (activeCard.classList) {
						activeCard.classList.remove(styles["active-card"]);
						card.classList.add(styles["active-card"]);
					}

				}
			});

		})
	}, []) */

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

	const array = chunkArray(slides, 3)

	function change() {
		console.log("init")
		slider = document.querySelector(".main-slider")
		currentSlide = slider.querySelector(".slick-current")
		const slides = Array.from(slider.querySelectorAll(".slick-slide"))
		const cards = slider.querySelectorAll('[class*="card"]')
		cards.forEach(card => {
			card.classList.add(styles.card)
		})
		if (!currentSlide || !slides) return
		/* const firstCards: any = slides.map(slide => { slide.querySelector('[class*="card"]') }) */
		firstCards = slides.map((slide: any) => slide.querySelector('[class*="card"]'));

		firstCards.forEach(card => {
			card.classList.add(styles["active-card"])
		})

		/* slides.forEach(slide => {
			activeCards.push(slide.querySelector('[class*="card"]'))
		}) */

		/* 	activeCards.forEach(card => {
				card.classList.add(styles["active-card"])
			})
	*/
		cards.forEach(card => {
			card.addEventListener("mouseover", (e) => {
				console.log("change")
				const activeCard = currentSlide.querySelector('[class*="active-card"]');

				if (card.classList.contains(styles["active-card"])) return;
				else {
					if (activeCard && activeCard.classList) {
						activeCard.classList.remove(styles["active-card"]);
						card.classList.add(styles["active-card"])

					}

				}
			});

		})
	}

	function returnActiveClass() {

	}



	return (
		<section className={styles["slider-container"]}>
			<h2 className={`${styles["main-title"]} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>
			<Slider {...settings}>
				{array.map((subarray, index) => {
					return (
						<div key={index} >
							<div className={styles.slide}>
								{subarray.map((item, index) => {
									return (
										<SliderCardMain
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
							</div>
						</div>
					)
				})}


				{/* {slides.map((item, index) => {
					return (
						<SliderCardMain
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
				})} */}
			</Slider>
		</section>
	)
}
function useEffects(arg0: () => void, arg1: never[]) {
	throw new Error("Function not implemented.");
}

