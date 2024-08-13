import React from 'react'
import styles from './sliderCardSmall.module.css';
import { Link } from 'react-router-dom';


export default function SliderCardSmall({ title, link, image }) {

	return (
		<div className={`${styles.card}`}>
			<div className={styles.container}>
				<div className={styles.background}>
					<img src={image} alt="" />
				</div>

				<div className={styles.footer} >
					<h3 className={styles.title} >{title}</h3>
					<Link className={`${styles.button} button`} to={link} >
						<svg>
							<use href="./images/icons/arrows.svg#arrow-right"></use>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	)
}
