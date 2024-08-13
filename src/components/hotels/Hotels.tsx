import React from 'react'
import styles from './hotels.module.css'

import SliderSmall from '../sliderSmall/SliderSmall'
import Searchbar from '../searchbar/Searchbar'
import cursivingText from '../../functions/cursivingText'



export default function Hotels({ title, slides }) {

	function onSearchHandler() {
		console.log(1)
	}


	return (
		<section className={styles.hotels}>
			{title && <h2 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>}
			<Searchbar title="" isInputExist={true} tags={["Family", "Business"]} /* onSearch={onSearchHandler} */></Searchbar>
			<SliderSmall slides={slides}></SliderSmall>
			<SliderSmall slides={slides}></SliderSmall>
		</section>
	)
}
