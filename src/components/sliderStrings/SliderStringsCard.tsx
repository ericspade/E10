import React from 'react'
import styles from './sliderStrings.module.css';

export default function SliderStringsCard({ slide }) {
	return (
		<div className={`${styles.slide} ${slide.cursive}`}><a href="#">{slide.title}</a></div>
	)
}
