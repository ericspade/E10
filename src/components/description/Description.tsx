import React from 'react';
import styles from './description.module.css';
import cursivingText from '../../functions/cursivingText';


export default function Description({ title, text }) {

	const cursiveTitle = cursivingText(title);

	return (
		<section className={`${styles.description}`} data-figma-node="330:3196">
			<h2 className={styles.title} data-figma-node="330:3237" dangerouslySetInnerHTML={{ __html: cursiveTitle }}></h2>
			<p className={`${styles.paragraph}`} data-figma-node="330:3238">{text}</p>
		</section>
	);
}