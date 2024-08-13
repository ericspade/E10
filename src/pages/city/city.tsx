import { memo } from 'react';
import type { FC } from 'react';

import "../../common.css"

import styles from '../../components/_styles.module.css';
import { LogoIcon } from './LogoIcon';
import { AirplaneIcon } from './AirplaneIcon';
import { PhoneIcon } from './PhoneIcon';
import classes from './city.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import $ from 'jquery';
import MultipleItems from './continentscaro';
import Section_1Welcome from '../../components/welcome/Section_1Welcome';
import Section_2Tags from './tagcarousel/Section_2Tags';
import Section_3CityS from './Section_3CityS';
import Section_4Pic from './middlepic/Section_4Pic';
import Section_4Title from './Section_4Title';
import Section_5Title from './Section_5Title';
import SectionMap from './SectionMap';
import Section_6Title from './Section_6Title';
import { _Form } from './Form';
import { Form2 } from './Form2';
import SuggestionTitle from './SuggestionTitle'
import Suggestions from './Section_8Suggestions';
/* import { Footer } from './Footer' */
import emailanim from "./emaildata.json"
import phoneanim from "./phoneanim.json"
import ruseng from "./ruseng.json"
import typeoftrips2 from "./typeoftrips2.json"
import rentals from "./rentalsheader.json"
import destinations from "./destinationsheader.json"
import MultipleItems3 from './eventscaro';
import MultipleItems4 from './tourscaro';
/* import HotelCaro from '../../components/hotelcarousel/hotelcarousel'
 */import Circle from '../../components/circle/Circle'

import Header from '../../components/header/Header';
import Description from '../../components/description/Description';
import Runline from '../../components/runline/Runline';
import SliderBig from '../../components/sliderBig/SliderBig';
import SliderBigTour from '../../components/sliderBig/SliderBigTour';
import SliderSmall from '../../components/sliderSmall/SliderSmall';
import Footer from '../../components/footer/Footer';
import Cities from '../../components/cities/Cities';
import SliderRunline from '../../components/sliderRunline/SliderRunline';
import Rent from '../../components/rent/Rent';
import Hotels from '../../components/hotels/Hotels';




interface Props {
  className?: string;
}

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function (event) {
  //console.log(this);
  "this.setDirection(1)"
  "this.play()"

}).on('mouseleave', function (event) {
  "this.setDirection(-1)"
  "this.play()"
});


export const _city: FC<Props> = memo(function city(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />

      <Section_1Welcome full={false} location="City" image="./images/ph.jpg" isButtonExist={true} />
      <Runline text={"Welcome /line/"} />
      <Section_2Tags />
      <SliderBigTour slides={[
        {
          "title": "Great Reef Barrier",
          "description": "Easily accessible from Hamilton Island, it's perfect for snorkeling and diving to explore vibrant marine life",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Whitehaven Beach",
          "description": "Known for its pure silica sands and crystal-clear waters, it’s one of the world's most beautiful beaches",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Hill Inlet",
          "description": "A stunning inlet where the tide shifts the sand and water to create a swirling fusion of colors",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Whitsunday Islands National Park",
          "description": "Offers hiking trails with breathtaking views and diverse wildlife",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Coral Sea",
          "description": "Surrounds the island, offering opportunities for sailing and spotting sea turtles, dolphins, and whales",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/ph.jpg"
        }]
      } title="Natural Wonders of Hamilton Island"
      ></SliderBigTour>
      {/*  <HotelCaro /> */}
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
      <SliderBigTour slides={[
        {
          "title": "Hamilton Island Race Week",
          "description": "Australia’s largest offshore sailing regatta, attracting sailors and spectators from around the world",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Great Barrier Feast",
          "description": "A gourmet food and wine event featuring top chefs and exquisite dining experiences",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Hilly Half Marathon",
          "description": "A challenging race through the island’s beautiful terrain, offering stunning views",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Endurance Series",
          "description": "Includes events like ocean swims, trail runs, and triathlons, set against the island’s scenic backdrop",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/ph.jpg"
        },
        {
          "title": "Whitehaven Long Lunch",
          "description": "A luxurious dining experience on the famous Whitehaven Beach",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/ph.jpg"
        }]
      } title="Natural Wonders of Hamilton Island"
      ></SliderBigTour>
      <Runline text={"Suggestions /line/"} />
      <Circle title="" full={false} places={
        {
          1: ["City 1", "Country 1", "./images/circle/points/kyoto.svg", "./images/ph.jpg"],
          2: ["City 2", "Country 2", "./images/circle/points/las-vegas.svg", "./images/ph.jpg"],
          3: ["City 3", "Country 3", "./images/circle/points/maldives.svg", "./images/ph.jpg"],
          4: ["City 4", "Country 4", "./images/circle/points/kyoto.svg", "./images/ph.jpg"],
          5: ["City 5", "Country 5", "./images/circle/points/las-vegas.svg", "./images/ph.jpg"],
          6: ["City 6", "Country 6", "./images/circle/points/maldives.svg", "./images/ph.jpg"],
        }
      } />
      <Runline text={"Footer /line/"} />
      <Footer color="#4B4B4B" image="./images/ph.jpg" />
    </div >
  );
});
