import { memo } from 'react';
import type { FC } from 'react';

import styles from '../../components/_styles.module.css';
import { LogoIcon } from './LogoIcon';
import { AirplaneIcon } from './AirplaneIcon';
import { PhoneIcon } from './PhoneIcon';
import classes from './country.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import $ from 'jquery';
import MultipleItems from './continentscaro';
import Section_1Welcome from '../../components/welcome/Section_1Welcome';
import Section_2Tags from './tagcarousel/Section_2Tags';
import Section_3CityS from '../destcarousel/Section_3CityS';
import Section_4Pic from './middlepic/Section_4Pic';
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
import HotelCaro from '../hotelcarousel/hotelcarousel'

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
import Circle from '../../components/circle/Circle'




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


export const _continent: FC<Props> = memo(function continent(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header transparent={false} />
      <Section_1Welcome location="Continent" image="./images/ph.jpg" isButtonExist={true} />
      <Runline text={"Intro /line/"} />
      <Section_2Tags />
      <SliderBig slides={[
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/penguintag.png",
          "title": "Kings of the Frozen Shores",
          "description": "Gentoo, Adélie, Chinstrap: these amazing birds, symbolizing Antarctica, share their beaches with crabeater seals, leopard seals, and Weddell seals",
          "isLinkExist": true,
          "linkText": "Penguin Trip",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/whaletag.png",
          "title": "The Whale Wonderland",
          "description": "The majesty of these gentle giants as they breach and dive in their natural habitat, offering a glimpse into the awe-inspiring world of marine wildlife",
          "isLinkExist": true,
          "linkText": "Whale Spotting",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/icebergtag.png",
          "title": "Drifting Icebergs",
          "description": "Serene behemoths adrift in the icy expanse, their shapes and sizes painting a breathtaking tableau against the polar horizon",
          "isLinkExist": true,
          "linkText": "Iceberg Journey",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/birdtag.png",
          "title": "Nature's Avian Wonders",
          "description": "Accompanied by naturalist guides, you can enjoy birdwatching. You'll be amazed at how fascinating and engaging it is to observe albatrosses, Cape petrels, and other seabirds",
          "isLinkExist": true,
          "linkText": "Birdwatching",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/sealtag.png",
          "title": "Seal Safari",
          "description": "Observe the majestic leopard seals and other seals in their natural habitat ",
          "isLinkExist": true,
          "linkText": "Seal Safari",
          "link": "/tour",
          "background": "./images/ph.jpg"
        }]
      } title="Exceptional Locations & Natural Wonders"
      ></SliderBig>
      <Section_4Pic text="The Ultimate /Expedition/ with /First Class/" image="./images/ph.jpg" isButtonExist={true} />
      <SliderBig slides={[
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/boattag.png",
          "title": "Massive Glaciers",
          "description": "Explore the awe-inspiring glaciers on our guided tour. Learn about their formation history, study unique ice formations, and marvel at the breathtaking views from their peaks",
          "isLinkExist": true,
          "linkText": "Glacier Tour",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/skitag.png",
          "title": "Antarctic Hiking Adventure",
          "description": "This journey promises unforgettable experiences amidst one of the most remote and breathtaking environments on Earth",
          "isLinkExist": true,
          "linkText": "Let's go hiking",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/kayaktag.png",
          "title": "Kayaking in Antarctic Waters",
          "description": "Explore the pristine waters of Antarctica through kayaking, immersing yourself in the serene beauty of icy landscapes and the opportunity to observe unique marine wildlife up close ",
          "isLinkExist": true,
          "linkText": "Let's go kayaking",
          "link": "/tour",
          "background": "./images/ph.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/boattag.png",
          "title": "Lectures by Scientists",
          "description": "Learn about the latest scientific advancements, nature exploration, environmental conservation efforts, and engage with experts to deepen your understanding through insightful discussions.",
          "isLinkExist": true,
          "linkText": "Learn more",
          "link": "/tour",
          "background": "./images/ph.jpg"
        }]
      } title="Exclusive continent with first class"
      ></SliderBig>
      <Runline text={"Suggestions /line/"} />
      <Circle places={
{
1: ["City 1", "Country 1", "./images/circle/points/kyoto.svg", "./images/ph.jpg"],
2: ["City 2", "Country 2", "./images/circle/points/las-vegas.svg", "./images/ph.jpg"],
3: ["City 3", "Country 3", "./images/circle/points/maldives.svg", "./images/ph.jpg"],
4: ["City 4", "Country 4", "./images/circle/points/kyoto.svg", "./images/ph.jpg"],
5: ["City 5", "Country 5", "./images/circle/points/las-vegas.svg", "./images/ph.jpg"],
6: ["City 6", "Country 6", "./images/circle/points/maldives.svg", "./images/ph.jpg"],
}
}/>
      <Runline text={"Footer /line/"} />
      <Footer color="#4b4b4b" image="./images/ph.jpg" />
    </div >
  );
});
