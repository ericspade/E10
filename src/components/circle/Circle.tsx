import React, { useEffect, useRef, useState } from 'react'
import '../circle/circle.css';
import cursivingText from '../../functions/cursivingText';
cursivingText


export default function Circle({ title, places, full }) {
	let display
	if (full) {
		display = "full"
	}
	let position = 0;
	/* const [background, setBackground] = useState(null) */
	const circleRef: React.RefObject<HTMLDivElement> = useRef(null);
	const locationRef: any = useRef([]);
	const circleSlidesRef = useRef([]);

	useEffect(() => {
		// Поиск всех элементов с классом slide__location и сохранение их в locationRef.current
		locationRef.current = Array.from(document.querySelectorAll('.slide__location'));
		circleSlidesRef.current = Array.from(document.querySelectorAll('.circle__slide'));

	}, []);

	useEffect(() => {
		const handleClick = (e) => {
			const button = e.target && (e.target as Node).parentNode as HTMLElement;
			let pressedButton;
			if (button.classList.contains('circle__slide_active')) return;
			if (button.classList.contains('circle__slide_next')) pressedButton = "next";
			else { pressedButton = "prev"; }
			rotateCircle(button);

			changeBackground(pressedButton);
			changeClass(button);
		};

		circleSlidesRef.current.forEach((item: HTMLElement) => {
			if (!item) return;
			item.addEventListener("click", handleClick);
		});

		return () => {
			circleSlidesRef.current.forEach((item: HTMLElement) => {
				if (!item) return;
				item.removeEventListener("click", handleClick);
			});
		};
	}, []);



	function rotateRight() {

		if (!circleRef || !circleRef.current) return
		const newPosition = position + 60;
		position = newPosition
		circleRef.current.style.transform = `rotate(${newPosition}deg)`;
		locationRef.current.forEach(item => {
			item.style.transform = `rotate(${-newPosition}deg)`;
		});
		return newPosition;
	}

	function rotateLeft() {
		if (!circleRef || !circleRef.current) return
		const newPosition = position - 60;
		position = newPosition
		circleRef.current.style.transform = `rotate(${newPosition}deg)`;
		locationRef.current.forEach(item => {
			item.style.transform = `rotate(${-newPosition}deg)`;
		});
		return newPosition;
	}

	function changeClass(button) {
		let slideNumber = +button.classList.value.slice(button.classList.value.indexOf("-") + 1)[0];

		const sledesNumbers: any = {
			1: [6, 2, 3],
			2: [1, 3, 4],
			3: [2, 4, 5],
			4: [3, 5, 6],
			5: [4, 6, 1],
			6: [5, 1, 2],
		}

		const sledesNumbersReverse: any = {
			1: [2, 6, 5],
			2: [3, 1, 6],
			3: [4, 2, 1],
			4: [5, 3, 2],
			5: [6, 4, 3],
			6: [1, 5, 4],
		}

		if (button.classList.contains("circle__slide_next")) {

			button.classList.remove("circle__slide_next")
			button.classList.add("circle__slide_active")

			document.querySelector(`.circle__slide-${sledesNumbers[slideNumber][0]}`)?.classList.add("circle__slide_next")

			document.querySelector(`.circle__slide-${sledesNumbers[slideNumber][1]}`)?.classList.remove("circle__slide_active")
			document.querySelector(`.circle__slide-${sledesNumbers[slideNumber][1]}`)?.classList.add("circle__slide_prev")

			document.querySelector(`.circle__slide-${sledesNumbers[slideNumber][2]}`)?.classList.remove("circle__slide_prev")
		}

		if (button.classList.contains("circle__slide_prev")) {

			button.classList.remove("circle__slide_prev")
			button.classList.add("circle__slide_active")

			document.querySelector(`.circle__slide-${sledesNumbersReverse[slideNumber][0]}`)?.classList.add("circle__slide_prev")

			document.querySelector(`.circle__slide-${sledesNumbersReverse[slideNumber][1]}`)?.classList.remove("circle__slide_active")
			document.querySelector(`.circle__slide-${sledesNumbersReverse[slideNumber][1]}`)?.classList.add("circle__slide_next")

			document.querySelector(`.circle__slide-${sledesNumbersReverse[slideNumber][2]}`)?.classList.remove("circle__slide_next")
		}

	}

	function changeBackground(pressedButton) {
		const currentSlide = document.querySelector(".circle__slide_active")

		if (!currentSlide) return;
		let slideNumber = +currentSlide.classList.value.slice(currentSlide.classList.value.indexOf("-") + 1)[0];
		if (pressedButton === "next") {
			slideNumber -= 1
		}
		if (pressedButton === "prev") {
			slideNumber += 1
		}

		if (slideNumber === 0) slideNumber = 6
		if (slideNumber === 7) slideNumber = 1
		const background = document.querySelector(".directions__background")
		const backgroundImage = document.querySelector(".directions-background__image")
		const backgroundImageNext: any = document.querySelector(".directions-background__image_next")

		if (!background || !backgroundImage || !backgroundImageNext) return;

		if (pressedButton === "next") {
			backgroundImageNext.classList.remove("prev-slide")
			backgroundImageNext.classList.add("next-slide")
		}
		else if (pressedButton === "prev") {
			backgroundImageNext.classList.remove("next-slide")
			backgroundImageNext.classList.add("prev-slide")
		}

		setTimeout(() => {

			backgroundImageNext.classList.add("directions-background__image")

			backgroundImageNext.setAttribute("src", `${places[slideNumber][3]}`)
			if (pressedButton === "next") {
				backgroundImageNext.classList.add("directions-background__image_animate-from-next")
			} else if (pressedButton === "prev") {
				backgroundImageNext.classList.add("directions-background__image_animate-from-prev")
			}


			setTimeout(() => {
				backgroundImage.setAttribute("src", `${places[slideNumber][3]}`)
				backgroundImageNext.classList.add("directions-background__image_current")
				backgroundImageNext.classList.remove("prev-slide")
				backgroundImageNext.classList.remove("next-slide")
				backgroundImageNext.classList.remove("directions-background__image_animate-from-next")
				backgroundImageNext.classList.remove("directions-background__image_animate-from-prev")

			}, 500)
			setTimeout(() => {
				backgroundImageNext.classList.remove("directions-background__image_current")
			}, 500)
		}, 10)

	}

	function rotateCircle(button) {
		if (button.classList.contains("circle__slide_next")) {
			rotateRight()
		}

		if (button.classList.contains("circle__slide_prev")) {
			rotateLeft()
		}
	}

	return (
		<section className={`directions noselect ${display}`}>
			{title && <h2 className='directions__title title' dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>}
			<div className="directions__background">
				<img className='directions-background__image directions-background__image_current' src={places[2][3]} />
				<img className='directions-background__image directions-background__image_next' />
			</div>
			<div className="direction">
				<div className="direction__arrows">
					<img src="./images/circle/circle-arrow.svg" alt="" />
					<img src="./images/circle/circle-arrow.svg" alt="" />
					<img src="./images/circle/circle-arrow.svg" alt="" />
					<img src="./images/circle/circle-arrow.svg" alt="" />
				</div>

				<div className="direction__circle" ref={circleRef}>
					<div className="circle__slide circle__slide-1 circle__slide_next">
						<div className="slide__location">
							<img src={places[1][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[1][0]}</span>
								<span className='place__country'>{places[1][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>

					<div className="circle__slide circle__slide-2 circle__slide_active">
						<div className="slide__location">
							<img src={places[2][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[2][0]}</span>
								<span className='place__country'>{places[2][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>

					<div className="circle__slide circle__slide-3 circle__slide_prev" >
						<div className="slide__location">
							<img src={places[3][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[3][0]}</span>
								<span className='place__country'>{places[3][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>

					<div className="circle__slide circle__slide-4" >
						<div className="slide__location">
							<img src={places[4][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[4][0]}</span>
								<span className='place__country'>{places[4][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>

					<div className="circle__slide circle__slide-5" >
						<div className="slide__location">
							<img src={places[5][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[5][0]}</span>
								<span className='place__country'>{places[5][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>

					<div className="circle__slide circle__slide-6" >
						<div className="slide__location">
							<img src={places[6][2]} alt="" />
							<div className='location__place'>
								<span className="place__city">{places[6][0]}</span>
								<span className='place__country'>{places[6][1]}</span>
							</div>
						</div>
						<a href={'/' + 'city'}><button className="slide__point"></button></a>
					</div>
				</div>
			</div>
		</section>
	)
}
