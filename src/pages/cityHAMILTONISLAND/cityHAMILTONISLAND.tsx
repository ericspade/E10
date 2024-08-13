import { memo } from 'react';
import type { FC } from 'react';

import "../../common.css"

import styles from '../../components/_styles.module.css';
import { LogoIcon } from './LogoIcon';
import { AirplaneIcon } from './AirplaneIcon';
import { PhoneIcon } from './PhoneIcon';
import classes from './cityHAMILTONISLAND.module.css';
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


export const _cityHAMILTONISLAND: FC<Props> = memo(function city(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />

      <Section_1Welcome full={false} country="Hamilton Island" image="./images/hamiltonisland/hiwelcome.jpg" isButtonExist={true} />
      <Runline text={"Tropical /Paradise/ with /Luxury/ Resorts"} />
      <Section_2Tags />
      <SliderBigTour slides={[
        {
          "title": "Great Reef Barrier",
          "description": "Easily accessible from Hamilton Island, it's perfect for snorkeling and diving to explore vibrant marine life",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/hamiltonisland/natpic1.jpg"
        },
        {
          "title": "Whitehaven Beach",
          "description": "Known for its pure silica sands and crystal-clear waters, it’s one of the world's most beautiful beaches",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/hamiltonisland/natpic2.jpg"
        },
        {
          "title": "Hill Inlet",
          "description": "A stunning inlet where the tide shifts the sand and water to create a swirling fusion of colors",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/hamiltonisland/natpic3.jpg"
        },
        {
          "title": "Whitsunday Islands National Park",
          "description": "Offers hiking trails with breathtaking views and diverse wildlife",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/hamiltonisland/natpic4.jpg"
        },
        {
          "title": "Coral Sea",
          "description": "Surrounds the island, offering opportunities for sailing and spotting sea turtles, dolphins, and whales",
          "isLinkExist": true,
          "linkText": "Experience",
          "link": "/",
          "background": "./images/hamiltonisland/natpic5.jpg"
        }]
      } title="Natural Wonders of Hamilton Island"
      ></SliderBigTour>
      {/* <HotelCaro /> */}
      <SliderBigTour slides={[
        {
          "title": "Hamilton Island Race Week",
          "description": "Australia’s largest offshore sailing regatta, attracting sailors and spectators from around the world",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/hamiltonisland/eventpic1.jpg"
        },
        {
          "title": "Great Barrier Feast",
          "description": "A gourmet food and wine event featuring top chefs and exquisite dining experiences",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/hamiltonisland/eventpic2.jpg"
        },
        {
          "title": "Hilly Half Marathon",
          "description": "A challenging race through the island’s beautiful terrain, offering stunning views",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/hamiltonisland/eventpic3.jpg"
        },
        {
          "title": "Endurance Series",
          "description": "Includes events like ocean swims, trail runs, and triathlons, set against the island’s scenic backdrop",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/hamiltonisland/eventpic4.jpg"
        },
        {
          "title": "Whitehaven Long Lunch",
          "description": "A luxurious dining experience on the famous Whitehaven Beach",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/hamiltonisland/eventpic5.jpg"
        }]
      } title="Natural Wonders of Hamilton Island"
      ></SliderBigTour>
      <Runline text={"Discover other incredible worlds with /first class/ "} />
      <Circle full={false} title="" places={
        {
          1: ["Dubai", "UAE", "./images/circle/points/kyoto.svg", "./images/circle/backgrounds/dubai.jpg"],
          2: ["Athens", "Greece", "./images/circle/points/las-vegas.svg", "./images/circle/backgrounds/athens.jpg"],
          3: ["Hong Kong", "China", "./images/circle/points/maldives.svg", "./images/circle/backgrounds/hongkong.jpg"],
          4: ["Tel Aviv", "Israel", "./images/circle/points/kyoto.svg", "./images/circle/backgrounds/telaviv.jpg"],
          5: ["Sochi", "Russia", "./images/circle/points/las-vegas.svg", "./images/circle/backgrounds/sochi.jpg"],
          6: ["Thulusdhoo", "Maldives", "./images/circle/points/maldives.svg", "./images/circle/backgrounds/thulusdhoo.jpg"],
        }
      } />
      <Runline text={"/Dear Ladies &/ Gentlemen we will turn your journey into a true work of art"} />
      <Footer color="#9e8839" image="./images/hamiltonisland/footerpic.jpg" />
    </div >
  );
});
