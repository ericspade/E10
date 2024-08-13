import React from 'react'
import "../../common.css"
import Header from '../../components/header/Header';
import Rent from '../../components/rent/Rent';





export default function RentPage() {
	return (
		<>
			<Header full={false} transparent={false} ></Header>
			<Rent mb="" slides={[
				{
					"title": "Challets",
					"cursive": "",
					"link": "#",
					"description": "Feel true harmony in luxurious chalets with top-class service and exquisite amenities, located in the heart of the mountains. Indulge in serenity and breathtaking mountain views, creating unforgettable moments in our meticulously chalets designed for ultimate relaxation and rejuvenation.",
					"image": "./images/rent/challets.jpg",
				},
				{
					"title": "Hotels",
					"cursive": "cursive",
					"link": "#",
					"description": "Enjoy ultimate relaxation and adventure at our hotels, offering a blend of luxury accommodations and extensive amenities.",
					"image": "./images/rent/hotel.jpg",
				},
				{
					"title": "Villas",
					"cursive": "",
					"link": "#",
					"description": "Discover oases of luxury in our villas. Enjoy unparalleled privacy and magnificent views unfolding right from your cozy corner of paradise.",
					"image": "./images/rent/villa.jpg",
				},
				{
					"title": "Jets",
					"cursive": "",
					"link": "#",
					"description": "Elevate your travel with our executive jet rentals, providing unparalleled comfort and efficiency for your business or leisure trips.",
					"image": "./images/rent/jet.jpg",
				},
				{
					"title": "Yachts",
					"cursive": "",
					"link": "#",
					"description": "Experience an exceptional journey on the water with our luxury yacht rental service. Our fleet features modern and comfortable vessels, fully staffed with professional crews ready to cater to your every need.",
					"image": "./images/rent/yacht.jpg",
				},
				{
					"title": "Cruises",
					"cursive": "cursive",
					"link": "#",
					"description": "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
					"image": "./images/rent/cruise.jpg",
				},
			]}></Rent>
		</>

	)
}