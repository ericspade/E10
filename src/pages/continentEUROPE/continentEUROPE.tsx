import { memo } from 'react';
import type { FC } from 'react';

import styles from '../../components/_styles.module.css';
/* import { LogoIcon } from './LogoIcon';
 */import { AirplaneIcon } from './AirplaneIcon';
/* import { PhoneIcon } from './PhoneIcon';
 */import classes from './country.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import $ from 'jquery';
import MultipleItems from './continentscaro';
import Section_1Welcome from '../../components/welcome/Section_1Welcome';
import Section_2Tags from './tagcarousel/Section_2Tags';
import Section_3CityS from '../../components/destcarousel/Section_3CityS';
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
/* import phoneanim from "./phoneanim.json"
 *//* import ruseng from "./ruseng.json"
 */import typeoftrips2 from "./typeoftrips2.json"
/* import rentals from "./rentalsheader.json"
 */import destinations from "./destinationsheader.json"
/* import MultipleItems3 from './eventscaro';
 */import MultipleItems4 from './tourscaro';
/* import HotelCaro from '../../components/hotelcarousel/hotelcarousel'
 */
import "../../common.css"
import Header from '../../components/header/Header';
import Description from '../../components/description/Description';
import Runline from '../../components/runline/Runline';
import SliderBig from '../../components/sliderBig/SliderBig';
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


export const _continentEUROPE: FC<Props> = memo(function continent(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />
      <Section_1Welcome full={false} location="Europe" image="./images/circle/backgrounds/europewelcome.jpg" isButtonExist={true} />
      <Runline text={"Welcome to the /world/ of /old/-charm and /new/-innovation"} />
      <Section_2Tags />
      <Section_3CityS />
      <SliderBig slides={[
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Massive Glaciers",
          "description": "Explore the awe-inspiring glaciers on our guided tour. Learn about their formation history, study unique ice formations, and marvel at the breathtaking views from their peaks",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "/",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        }]
      } title="Exceptional Locations & Natural Wonders"
      ></SliderBig>
      {/* <HotelCaro /> */}
      <SliderBig slides={[
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Massive Glaciers",
          "description": "Explore the awe-inspiring glaciers on our guided tour. Learn about their formation history, study unique ice formations, and marvel at the breathtaking views from their peaks",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "/",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        },
        {
          "tags": ["tag", "tag 2"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Welcome",
          "description": "Welcome to England!",
          "isLinkExist": true,
          "linkText": "Button",
          "link": "#",
          "background": "./images/circle/backgrounds/moscow.jpg"
        }]
      } title="Exclusive continent with first class"
      ></SliderBig>
      <Runline text={"Discover other incredible worlds with /first class/"} />
      <Cities slides={[
        {
          "title": "Stambul",
          "cursive": "",
          "link": "#",
          "image": "./images/circle/backgrounds/stambul.jpg",
        },
        {
          "title": "Milan",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/kyoto.jpg",
        },
        {
          "title": "Amman",
          "cursive": "",
          "link": "#",
          "image": "./images/circle/backgrounds/las-vegas.jpg",
        },
        {
          "title": "Moscow",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/london.jpeg",
        },
        {
          "title": "New York",
          "cursive": "",
          "link": "#",
          "image": "./images/circle/backgrounds/rio.jpg",
        },
        {
          "title": "Сairo",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/moscow.jpg",
        },
      ]} ></Cities>
      <Footer color="#9e5e39" image="./images/circle/backgrounds/moscow.jpg" />
    </div >
  );
});
