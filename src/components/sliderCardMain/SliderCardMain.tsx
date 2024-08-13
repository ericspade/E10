import React from 'react'
import styles from '../sliderMain/sliderMain.module.css';

export default function SliderCardMain({ tags, tagIcon, title, description, isLinkExist, linkText, link, background }) {
	/* 	const cardStyles={
			isLinkExist: 
		} */

	return (
		<div className={`${styles.card} ${!isLinkExist && styles["without-button"]}`}>
			<div className={styles.background}>
				<img src={background} alt="" />
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
