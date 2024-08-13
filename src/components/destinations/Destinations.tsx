import React from 'react'
import styles from "./destinations.module.css"
import Searchbar from '../searchbar/Searchbar'
import { Link } from 'react-router-dom'


export default function Destinations({ title, isInputExist, tags, destinations }) {

	const Destination = ({ title, tours, cities, hotels, image, link }) => {
		return (
			<div className={styles.destination}>
				<div className={styles.name}>
					<div className={styles.image}>
						<img src={image} alt="" />
					</div>
					<h3 className={styles.title}>{title}</h3>
				</div>
				<div className={styles.info}>
					<div className={styles.tours}>
						<span className={styles.subtitle}>tours</span>
						<span className={styles.quantity}>{tours} tours</span>
					</div>
					<div className={styles.cities}>
						<span className={styles.subtitle}>popular cities</span>
						<span className={styles.quantity}>{cities} cities</span>
					</div>
					<div className={styles.hotels}>
						<span className={styles.subtitle}>luxury hotels</span>
						<span className={styles.quantity}>{hotels} hotels</span>
					</div>
				</div>
				<Link to={link} className={styles.link}>
					<svg>
						<use href="./images/icons/arrows.svg#arrow-right"></use>
					</svg>
				</Link>
			</div>
		)
	}
	return (
		<section className={styles.destinations}>
			<Searchbar title={title} isInputExist={isInputExist} tags={tags}></Searchbar>
			<div className={styles.container}>
				{destinations.map((destination, index) => {
					return <Destination
						key={index}
						title={destination.title}
						tours={destination.tours}
						cities={destination.cities}
						hotels={destination.hotels}
						image={destination.image}
						link={destination.link}></Destination>
				})}
			</div>


		</section>
	)
}
