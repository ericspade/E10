import React from 'react'
import styles from './sliderRunline.module.css'

export default function SliderRunline({ slides }) {

	const DescriptionCard = ({ title, points }) => {
		return (
			<div className={`${styles.description} ${styles.card}`}>
				<h4 className={styles.title}>{title}</h4>
				<div className={styles.points}>
					{points.map((point, index) => {
						return (
							<div className={styles.point} key={index}>
								<img src={point.icon} alt="" />
								<p>{point.text}</p>
							</div>
						)
					})}
				</div>
			</div>
		);
	};

	const InstructionCard = ({ title, text }) => {
		return (
			<a href="#" className={`${styles.instruction} ${styles.card}`}>
				<div className={styles["title-container"]}>
					<h4 className={styles.title}>{title}</h4>
					<svg>
						<use href="./images/icons/arrows.svg#arrow-right"></use>
					</svg>
				</div>
				<p>{text}</p>
			</a>
		);
	};

	return (
		<section className={`${styles.slider} noselect`}>
			<div className={styles.container}>
				<div className={`${styles.part} ${styles["move-to-left"]}`}>
					{slides.map((slide, index) => {
						return (
							<div
								key={index}
								className={`${styles.item} ${styles[`${slide.display}`]}`}
							>
								<img src={slide.image} alt="" />
								{slide.isDescriptionExist && <DescriptionCard title={slide.description.title} points={slide.description.points} />}
								{slide.isInstructionExist && <InstructionCard title={slide.instruction.title} text={slide.instruction.text} />}

							</div>
						)
					})}
				</div>
				<div className={`${styles.part} ${styles["move-to-left"]}`}>
					{slides.map((slide, index) => {
						return (
							<div
								key={index}
								className={`${styles.item} ${styles[`${slide.display}`]}`}
							>
								<img src={slide.image} alt="" />
								{slide.isDescriptionExist && <DescriptionCard title={slide.description.title} points={slide.description.points} />}
								{slide.isInstructionExist && <InstructionCard title={slide.instruction.title} text={slide.instruction.text} />}

							</div>
						)
					})}
				</div>

			</div>
		</section>
	)
}
