import React from 'react';
import styles from './policy2.module.css';
import cursivingText from '../../functions/cursivingText';
import Header from '../../components/header/Header';


export default function Policy2({ title }) {

	const cursiveTitle = cursivingText(title);

	return (
		<section className={`${styles.policydescription}`}>
		<Header full={false} transparent={false} ></Header>
			<h2 className={styles.policytitle} dangerouslySetInnerHTML={{ __html: cursiveTitle }}></h2>
			<p className={`${styles.policyparagraph}`}>I hereby give my consent to the Joint Stock Company "First-Class Solutions" (hereinafter referred to as "First-Class Solutions") for the processing of my personal data, both with and without the use of automation tools, for the purposes of providing services, including the transfer (including cross-border) of personal information for these purposes to the service or product providers offered by First-Class Solutions, as well as receiving such information from these parties for the same purposes, and for purposes prescribed by law, including for the realization of the rights and legitimate interests of First-Class Solutions.<br/><br/>

First-Class Solutions transfers only those personal data necessary for the specified purpose. The processing of the Customer's personal data by the Executor is carried out in accordance with the Policy on the Processing of Personal Data available on the Internet at https://ilovefirstclass.com/company/privacy-policy/.<br/><br/>

Purpose of Processing – to implement rights and fulfill obligations under the Agreement.<br/><br/>

List of Personal Data:<br/>
<li>Full name</li>
<li>Date of birth</li>
<li>Citizenship</li>
<li>Gender</li>
<li>Mobile phone number</li>
<li>Email address</li>
<li>Passport series and number, foreign passport number and validity period</li>
<li>RZD / airline bonus card details</li><br/><br/>

List of Actions with Personal Data for which Consent is Given:<br/><br/>
<li>Processing of personal data, including collection, recording, systematization, accumulation, storage, including the storage of scans (photos) of passport pages and other provided documents, as well as photos of the owner, clarification (updating, modification), extraction, use, transfer (provision, access), anonymization, blocking, deletion, destruction of personal data;</li>
<li>Receiving personal data from third parties and transferring personal data to third parties, including cross-border transfer, for the specified purposes, as well as for analytical purposes, working with non-personalized statistical data, and offering new services.</li><br/><br/>

Consent to the processing of personal data may be withdrawn by sending a written request to First-Class Solutions.<br/><br/>

This consent to the processing of personal data is valid for the period necessary to achieve the processing purposes, and for a period of 5 (five) years after their achievement.
</p>
		</section>
	);
}