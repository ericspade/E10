import React from 'react'
import "../../common.css"
import Header from '../../components/header/Header';
import Section_1Welcome from '../../components/welcome/Section_1Welcome';
import Circle from '../../components/circle/Circle';
import Hotels from '../../components/hotels/Hotels';
import SliderBig from '../../components/sliderBig/SliderBig';
import Runline from '../../components/runline/Runline';
import Footer from '../../components/footer/Footer';
import Destinations from '../../components/destinations/Destinations';



export default function TypesCard() {
	return (
		<>
			<Header full={false} transparent={false} ></Header>
			<Section_1Welcome full={false} country="extreme tourism" image="./images/countries/israel/TelAviv/1.1TelAviv.jpg" isButtonExist={true}></Section_1Welcome>
			<Destinations title="Destinations" isInputExist={true} tags={["Mountaineering", "Rock Climbing", "Skydiving"]} destinations={[
				{
					"title": "Russia",
					"tours": "2",
					"cities": "4",
					"hotels": "5",
					"image": "./images/circle/backgrounds/moscow.jpg",
					"link": "#",
				},
				{
					"title": "Russia",
					"tours": "2",
					"cities": "4",
					"hotels": "5",
					"image": "./images/circle/backgrounds/moscow.jpg",
					"link": "#",
				}, {
					"title": "Russia",
					"tours": "2",
					"cities": "4",
					"hotels": "5",
					"image": "./images/circle/backgrounds/moscow.jpg",
					"link": "#",
				}
			]}></Destinations>
			<SliderBig title="client’s choose" slides={[
				{
					"tags": [],
					"tagIcon": "",
					"title": "Jerusalem Day",
					"description": "Held annually in the Old City of Jerusalem, this event features light installations, art exhibits, and performances",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/Jer4.1.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Jerusalem International Film Festival",
					"description": "Showcasing a diverse selection of international and Israeli films, held annually in July",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/Jer4.2.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Safed Klezmer Festival",
					"description": "Celebrates Jewish music and culture with concerts, workshops",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/Safed4.3.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Tel Aviv White Night",
					"description": 'A night-long cultural event with concerts, art exhibitions, and performances throughout the city, inspired by the UNESCO-designated "White City" architecture',
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/TelAviv4.4.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Dead Sea Ultra Marathon",
					"description": " An extreme marathon event held annually near the Dead Sea, known for its challenging terrain and stunning desert landscapes",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/DeadSea4.5.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Eilat Chamber Music Festival",
					"description": "A prestigious event attracting top classical musicians from around the world, held in the resort city of Eilat. It features concerts, masterclasses, and workshops",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/EilatChamber4.6.jpg"
				},
				{
					"tags": [],
					"tagIcon": "",
					"title": "Masada Opera Festival",
					"description": "Set against the dramatic backdrop of the ancient fortress of Masada, this festival presents grand opera productions, offering a unique and spectacular cultural experience",
					"isLinkExist": true,
					"linkText": "Explore",
					"link": "#",
					"background": "./images/countries/israel/Masada4.7.jpg"
				}
			]
			}
			></SliderBig>
			<Hotels title="choose /Our HOTELS/" slides={[
				{
					title: 'Waldor Astoria',
					image: './images/countries/israel/hotels/1.jpg',
					link: '/hotel'
				},
				{
					title: 'Hotel',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
				{
					title: 'Hot',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
				{
					title: 'Hotel D',
					image: './images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
			]}></Hotels>
			<Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
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
			<Runline text={"Discover other incredible worlds with /first class/"}></Runline>
			<Footer color="#9e6639" image="./images/countries/israel/footer8.1.jpg" />
		</>

	)
}
