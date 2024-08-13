import React from 'react'
import "../../common.css"
import Header from '../../components/header/Header';
import Circle from '../../components/circle/Circle';
import Hotels from '../../components/hotels/Hotels';
import Runline from '../../components/runline/Runline';
import Footer from '../../components/footer/Footer';


export default function TupesOfRest() {
	return (
		<>
			<Header full={false} transparent={false} ></Header>
			<Hotels title="choose /Our HOTELS/" slides={[
				{
					title: 'Waldor Astoria',
					image: './images/countries/israel/hotels/1.jpg',
					link: '/types:extreme'
				},
				{
					title: 'Hotel',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/types:extreme'
				},
				{
					title: 'Hot',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/types:extreme'
				},
				{
					title: 'Hotel D',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/types:extreme'
				},
			]}></Hotels>
			<Runline text={"Discover other incredible worlds with /first clas/"}></Runline>
			<Circle title="" full={false} places={
				{
					1: ["Byblos", "Lebanon", "./images/circle/points/byblos.svg", "./images/countries/israel/ByblosLebanon7.6.jpg"],
					2: ["Mecca", "Saudi Arabia", "./images/circle/points/mecca.svg", "./images/countries/israel/Mecca7.1.jpg"],
					3: ["Fez", "Morocco", "./images/circle/points/fez.svg", "./images/countries/israel/FEZmorocco7.2.jpg"],
					4: ["Petra", "Jordan", "./images/circle/points/petra.svg", "./images/countries/israel/PetraJordan7.3.jpg"],
					5: ["Essaouira", "Morocco", "./images/circle/points/essaouira.svg", "./images/countries/israel/Essaouira7.4.jpg"],
					6: ["Jerusalem", "Israel", "./images/circle/points/jerusalem.svg", "./images/countries/israel/JerusalemIsr7.5.jpg"],
				}
			}></Circle>
			<Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
			<Footer color="#9e6639" image="./images/countries/israel/footer8.1.jpg" />
		</>

	)
}
