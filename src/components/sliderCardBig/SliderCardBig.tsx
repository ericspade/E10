import React, { useEffect, useRef } from 'react'
import styles from './sliderCardBig.module.css';

export default function SliderCardBig({ tags, tagIcon, title, description, isLinkExist, linkText, link, background }) {

	const card: any = useRef(null);
	const cardBackground: any = useRef(null);


	let cardOnHover: boolean = false;

	useEffect(() => {
		if (!cardBackground || !card) return

		let startX
		let startY

		const handleMouseEnter = (e: MouseEvent) => {
			setTimeout(() => {
				if (!cardOnHover) {
					startX = e.clientX;
					startY = e.clientY;
				}
				cardOnHover = true
			}, 300)

			setTimeout(() => {
				card.current.addEventListener('mousemove', handleMouseMove);
			}, 0)
		}

		const handleMouseMove = (e: MouseEvent) => {

			if (!startX || !startY) return
			let newX = (e.clientX - startX) / -20
			let newY = (e.clientY - startY) / -50
			cardBackground.current.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
		};

		const handleMouseLeave = () => {
			cardBackground.current.style.transform = 'translate(0px, 0px)';
			setTimeout(() => {

				cardOnHover = false
			}, 300)
		};

		card.current.addEventListener('mouseenter', handleMouseEnter);
		card.current.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			if (card && card.current) {
				card.current.removeEventListener('mouseenter', handleMouseEnter);
				card.current.removeEventListener('mousemove', handleMouseMove);
				card.current.removeEventListener('mouseleave', handleMouseLeave);
			}

		};
	}, []);


	return (
		<div className={`${styles.card} ${!isLinkExist && styles["without-button"]}`} ref={card}>
			<div className={styles.background}>
				<img className={styles["background-image"]} src={background} ref={cardBackground} alt="" />
			</div>
			<div className={styles.header}>
				<div className={styles.tags}>
					{tags.map((tag, index) => (
						<div key={index} className={`${styles.tag} button`}>
							{tag}
						</div>
					))}
					{tagIcon && <div className={`${styles.icon} button`}>
						<img src={tagIcon} alt="" />
					</div>}
				</div>
			</div>
			<div className={styles.footer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				{isLinkExist && <a className={`${styles.button} button`} href={link}>{linkText}</a>}
			</div>
		</div>
	)
}
