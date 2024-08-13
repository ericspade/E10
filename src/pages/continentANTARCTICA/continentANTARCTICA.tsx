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


export const _continentANTARCTICA: FC<Props> = memo(function continent(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />
      <Section_1Welcome full={false} country="Antarctica" image="./images/circle/backgrounds/antarcticawelcome.jpg" isButtonExist={true} />
      <Runline text={"Discover the /untouched/ vastness"} />
      <Section_2Tags />
      <SliderBig slides={[
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/penguintag.png",
          "title": "Kings of the Frozen Shores",
          "description": "Gentoo, Adélie, Chinstrap: these amazing birds, symbolizing Antarctica, share their beaches with crabeater seals, leopard seals, and Weddell seals",
          "isLinkExist": true,
          "linkText": "Penguin Trip",
          "link": "/antarcticatour1",
          "background": "./images/antarctica/kings.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/whaletag.png",
          "title": "The Whale Wonderland",
          "description": "The majesty of these gentle giants as they breach and dive in their natural habitat, offering a glimpse into the awe-inspiring world of marine wildlife",
          "isLinkExist": true,
          "linkText": "Whale Spotting",
          "link": "#",
          "background": "./images/antarctica/whale.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/icebergtag.png",
          "title": "Drifting Icebergs",
          "description": "Serene behemoths adrift in the icy expanse, their shapes and sizes painting a breathtaking tableau against the polar horizon",
          "isLinkExist": true,
          "linkText": "Iceberg Journey",
          "link": "#",
          "background": "./images/antarctica/icebergs.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/birdtag.png",
          "title": "Nature's Avian Wonders",
          "description": "Accompanied by naturalist guides, you can enjoy birdwatching. You'll be amazed at how fascinating and engaging it is to observe albatrosses, Cape petrels, and other seabirds",
          "isLinkExist": true,
          "linkText": "Birdwatching",
          "link": "#",
          "background": "./images/antarctica/wonders.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/sealtag.png",
          "title": "Seal Safari",
          "description": "Observe the majestic leopard seals and other seals in their natural habitat ",
          "isLinkExist": true,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/seals.jpg"
        }]
      } title="Exceptional Locations & Natural Wonders"
      ></SliderBig>
      <Section_4Pic text="The Ultimate /Expedition/ with /First Class/" image="./images/antarctica/middlepic.jpg" isButtonExist={true} />
      <SliderBig slides={[
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/boattag.png",
          "title": "Massive Glaciers",
          "description": "Explore the awe-inspiring glaciers on our guided tour. Learn about their formation history, study unique ice formations, and marvel at the breathtaking views from their peaks",
          "isLinkExist": true,
          "linkText": "Glacier Tour",
          "link": "/",
          "background": "./images/antarctica/glaciers.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/skitag.png",
          "title": "Antarctic Hiking Adventure",
          "description": "This journey promises unforgettable experiences amidst one of the most remote and breathtaking environments on Earth",
          "isLinkExist": true,
          "linkText": "Let's go hiking",
          "link": "#",
          "background": "./images/antarctica/hiking.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/kayaktag.png",
          "title": "Kayaking in Antarctic Waters",
          "description": "Explore the pristine waters of Antarctica through kayaking, immersing yourself in the serene beauty of icy landscapes and the opportunity to observe unique marine wildlife up close ",
          "isLinkExist": true,
          "linkText": "Let's go kayaking",
          "link": "#",
          "background": "./images/antarctica/kayaking.jpg"
        },
        {
          "tags": ["EXCURSION"],
          "tagIcon": "./images/antarctica/boattag.png",
          "title": "Lectures by Scientists",
          "description": "Learn about the latest scientific advancements, nature exploration, environmental conservation efforts, and engage with experts to deepen your understanding through insightful discussions.",
          "isLinkExist": true,
          "linkText": "Learn more",
          "link": "#",
          "background": "./images/antarctica/lectures.jpg"
        }]
      } title="Exclusive continent with first class"
      ></SliderBig>
      <Runline text={"Discover other incredible worlds with /first class/"} />
      <Cities slides={[
        {
          "title": "Murmansk",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/murmansk.jpg",
        },
        {
          "title": "Irkutsk",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/irkutsk.jpg",
        },
        {
          "title": "Kamchatka",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/kamchatka.jpg",
        },
        {
          "title": "Reykjavik",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/reykjavik.jpg",
        },
        {
          "title": "Courchevel",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/courchevel.jpg",
        },
        {
          "title": "Luxembourg",
          "cursive": "cursive",
          "link": "#",
          "image": "./images/circle/backgrounds/luxembourg.jpg",
        },
      ]} ></Cities>
      <Runline text={"/Dear Ladies &/ Gentlemen we will turn your journey into a true work of art"} />
      <Footer color="#397a9e" image="./images/antarctica/footerpic.jpg" />
    </div >
  );
});
