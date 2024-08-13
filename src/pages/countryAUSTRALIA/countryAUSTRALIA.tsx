import { memo } from 'react';
import type { FC } from 'react';

import "../../common.css"

import styles from '../../components/_styles.module.css';
import { LogoIcon } from './LogoIcon';
import { AirplaneIcon } from './AirplaneIcon';
import { PhoneIcon } from './PhoneIcon';
import classes from './countryAUSTRALIA.module.css';
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


export const _countryAUSTRALIA: FC<Props> = memo(function country(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />

      <Section_1Welcome full={false} country="Australia" image="./images/australia/australiawelcome.jpg" isButtonExist={true} />
      <Description title="Unlocking Your /Australian/ Visa with /first class/" text="Navigating the Australian visa application process can be complex, but we're here to help. Learn about the various types of Australia visas, the necessary documents, and the application procedures. Our comprehensive guidance ensures you meet all the requirements and increase your chances of a successful application." />
      <Section_2Tags />
      <Runline text={"Welcome to /Australia/"} />
      <Section_4Pic text="/Hamilton Island/" image="./images/australia/middlepic.jpg" isButtonExist={true} />
      <SliderBigTour slides={[
        {
          "title": "Sydney Festival",
          "description": "A summer festival featuring a mix of theater, music, dance, and visual arts",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic1.jpg"
        },
        {
          "title": "Melbourne Comedy Festival",
          "description": "One of the largest comedy festivals in the world, showcasing comedians from around the globe",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic2.jpg"
        },
        {
          "title": "Vivid Sydney",
          "description": "A festival of light, music, and ideas, transforming the city with large-scale light installations and projections",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic3.jpg"
        },
        {
          "title": "Brisbane Festival",
          "description": "An annual arts festival with performances across music, theater, and dance",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic4.jpg"
        },
        {
          "title": "Adelaide Fringe",
          "description": "A diverse arts festival featuring everything from cabaret to circus performances",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic5.jpg"
        },
        {
          "title": "Splendour in The Grass",
          "description": "A popular music festival with performances from both international and local artists",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic6.jpg"
        },
        {
          "title": "MONA FOMA",
          "description": "A contemporary music and arts festival in Tasmania hosted by the Museum of Old and New Art",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/eventpic7.jpg"
        }]
      } title="Australia's Vibrant Events"
      ></SliderBigTour>
      {/* <HotelCaro /> */}
      <SliderBig slides={[
        {
          "tags": ["20 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Australia",
          "description": "Diverse landscapes, stunning coastlines, and vibrant cities. Explore adventure, wildlife, and unique culture",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic1.jpg"
        },
        {
          "tags": ["14 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Cook Islands",
          "description": "A paradise with white sandy beaches and crystal-clear waters",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic2.jpg"
        },
        {
          "tags": ["15 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Fiji",
          "description": "Idyllic beaches, crystal-clear waters, and lush tropical beauty. Experience pure relaxation and vibrant island life",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic3.jpg"
        },
        {
          "tags": ["14 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "French Polynesia",
          "description": "Tropical paradise with turquoise lagoons, pristine beaches, and rich cultural heritage. Discover breathtaking beauty and serenity",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic4.jpg"
        },
        {
          "tags": ["20 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "New Zealand",
          "description": "Majestic landscapes, dramatic fjords, and vibrant cities. Embrace adventure, stunning natural beauty, and unique Maori culture",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic5.jpg"
        },
        {
          "tags": ["14 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Palau",
          "description": "Crystal-clear waters, breathtaking dive sites, and serene island beauty. Discover an underwater paradise and tranquil escapes",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic6.jpg"
        },
        {
          "tags": ["15 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Samoa",
          "description": "Pristine beaches, lush rainforests, and rich Polynesian culture. Experience island beauty and warm, welcoming traditions",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic7.jpg"
        },
        {
          "tags": ["14 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Solomon Islands",
          "description": "Untamed beauty, vibrant marine life, and rich cultural heritage. Discover secluded beaches and historical treasures",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic8.jpg"
        },
        {
          "tags": ["14 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Tonga",
          "description": "Idyllic beaches, crystal-clear waters, and vibrant Polynesian culture. Experience serene island life and natural splendor",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic9.jpg"
        },
        {
          "tags": ["12 Days"],
          "tagIcon": "./images/icons/Airplane.svg",
          "title": "Vanuatu",
          "description": "Stunning landscapes, crystal-clear waters, and vibrant cultural experiences. Discover pristine beaches, volcanic terrains, and rich traditions",
          "isLinkExist": true,
          "linkText": "Visit",
          "link": "/",
          "background": "./images/australia/uniquepic10.jpg"
        }]
      } title="Unique Experiences"
      ></SliderBig>
      <Runline text={"Discover other incredible worlds with /first class/ "} />
      <Circle title="" full={false} places={
        {
          1: ["Seville", "Spain", "./images/circle/points/kyoto.svg", "./images/circle/backgrounds/seville.jpg"],
          2: ["Rome", "Italy", "./images/circle/points/las-vegas.svg", "./images/circle/backgrounds/rome.jpg"],
          3: ["Doha", "Qatar", "./images/circle/points/maldives.svg", "./images/circle/backgrounds/doha.jpg"],
          4: ["Istambul", "Turkey", "./images/circle/points/kyoto.svg", "./images/circle/backgrounds/stambul.jpg"],
          5: ["Lima", "Peru", "./images/circle/points/las-vegas.svg", "./images/circle/backgrounds/lima.jpg"],
          6: ["Cairo", "Egypt", "./images/circle/points/maldives.svg", "./images/circle/backgrounds/cairo.jpg"],
        }
      } />
      <Runline text={"/Dear Ladies &/ Gentlemen we will turn your journey into a true work of art"} />
      <Footer color="#9e8839" image="./images/australia/footerpic.jpg" />
    </div >
  );
});
