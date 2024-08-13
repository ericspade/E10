import React from 'react'
import styles from './sliderCardBig.module.css';

export default function SliderCardBigTour({ tags, tagIcon, title, description, isLinkExist, linkText, link, background }) {
	return (
		<div className={`${styles.card}`}>
			<div className={styles.background}>
				<img src={background} alt="" />
			</div>
			<div className={styles.header}>
			</div>
			<div className={styles.footer}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
				{isLinkExist && <button className={`${styles.button} button`} href={link}>{linkText}</button>}
			</div>
		</div>
	)
}
