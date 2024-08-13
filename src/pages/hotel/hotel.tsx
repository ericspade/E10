import React from 'react'
import "../../common.css"
import styles from "./hotel.module.css"
import Header from '../../components/header/Header';








export default function Hotel() {
	return (
		<>
			<Header full={true} transparent={true} ></Header>
			<section className={styles.body}>
				<img className={styles.background} src="./images/rent/hotel.jpg" alt="" />
				<div className={styles.main}>
					<h1 className={`${styles.title} title`}>The Dolder Grand - City & Spa Resort Zurich 5*</h1>

					<div className={styles.description}>
						<p className={styles.text}>The Dolder Grand is simply perfect for anyone seeking pleasure, exclusivity and relaxation: 175 luxurious rooms & suites, exquisite cuisine, a 43,000 ft2 spa accompanied by spacious event as well as seminar facilities.
							The Hotel’s elevated location between pulsating city and invigorating nature provides guests with magnificent views over Zurich, the lake and the Alps.
						</p>

						<a href="" className={styles.button}>See More</a>
					</div>
					<div className={styles.tags}>
						<div className={styles.tag}>
							<div className={styles["tag__icon"]}>
								<img src="./images/icons/Airplane.svg" alt="" />
							</div>
							<p className={styles["tag__text"]}>Some description of tag</p>
						</div>
						<div className={styles.tag}>
							<div className={styles["tag__icon"]}>
								<img src="./images/icons/Airplane.svg" alt="" />
							</div>
							<p className={styles["tag__text"]}>Some description of tag</p>
						</div>
						<div className={styles.tag}>
							<div className={styles["tag__icon"]}>
								<img src="./images/icons/Airplane.svg" alt="" />
							</div>
							<p className={styles["tag__text"]}>Some description of tag</p>
						</div>
						<div className={styles.tag}>
							<div className={styles["tag__icon"]}>
								<img src="./images/icons/Airplane.svg" alt="" />
							</div>
							<p className={styles["tag__text"]}>Some description of tag</p>
						</div>
						<div className={styles.tag}>
							<div className={styles["tag__icon"]}>
								<img src="./images/icons/Airplane.svg" alt="" />
							</div>
							<p className={styles["tag__text"]}>Some description of tag</p>
						</div>
					</div>
				</div>
				<footer className={styles.footer}>
					<img src="./images/icons/location.svg" alt="" />
					<a href="https://www.google.com/maps?q=Kurhausstrasse 65, 8032 Zürich, Switherland">Kurhausstrasse 65, 8032 Zürich, Switherland</a>
				</footer>
			</section>


		</>

	)
}
