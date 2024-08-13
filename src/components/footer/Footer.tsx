import React from 'react'
import styles from './footer.module.css';

export default function Footer({ color, image }) {
	return (
		<footer className={styles.footer} style={{ backgroundColor: color }}>
			<div className={styles.top}>
				<p className={styles.description}>First Class Solutions offers premium bookings for hotels, villas, private jets, and yachts through trusted top partners.</p>
				<a className={styles["top-link"]} href=" tel:+79033844842">+7 903 384-48-42</a>
			</div>
			<div className={styles.middle}>
				<div>
					<p>Individual Taxpayer Number: 9707025574</p>
					<p>Tax Registration Reason Code: 770701001</p>
				</div>
				<div className={styles.image}>
					<img src={image} alt="" />
				</div>
				<div className={styles.networks}>
					<a href="">Telegram</a>
					<a href="">instagram</a>
					<a href="">WhatsApp</a>
				</div>
			</div>
			<div className={styles.bottom}>
				<p> 2024 © first class solutions</p>
				<a href="/policy">Privacy</a>
				<a href="/policy2" style={{position: 'relative', left: '-175px'}}>& Cookie Policy</a>
				<a href="/publicoffer">Public Offer</a>
				<p>Developed by Digital Trinity</p>
			</div>
		</footer>
	)
}
