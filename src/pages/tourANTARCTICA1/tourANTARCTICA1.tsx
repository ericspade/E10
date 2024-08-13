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
import Section_1TourWelcome from '../../components/tourwelcome/Section_1TourWelcome';
import Tourvisadesc from './tourvisadesc/tourvisadesc'
import Section_2Tags from './tagcarousel/Section_2Tags';
import Daytoday from './daytoday/daytoday'
import Daytoday2 from './daytoday/daytoday2'
import Daytoday3 from './daytoday/daytoday3'
import Daytoday4 from './daytoday/daytoday4'
import Daytoday5 from './daytoday/daytoday5'
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


export const _tourANTARCTICA1: FC<Props> = memo(function continent(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <Header full={false} transparent={false} />
      <Section_1TourWelcome />
      <Tourvisadesc />
      <Section_2Tags />

      <Daytoday />
      <SliderBigTour slides={[
        {
          "title": "Boarding the Liner",
          "description": "Upon arrival in Ushuaia, the capital of Argentina's Tierra del Fuego province, you'll find yourself at the gateway to the White Continent and the South Pole.",
          "isLinkExist": false,
          "linkText": "",
          "link": "/",
          "background": "./images/antarctica/tourpic1.jpg"
        },
        {
          "title": "Comfortable cabins",
          "description": "Nestled aboard our vessel, these cabins offer a tranquil retreat at sea. ",
          "isLinkExist": false,
          "linkText": "Whale Spotting",
          "link": "#",
          "background": "./images/antarctica/tourpic2.jpg"
        },
        {
          "title": "Main Lounge",
          "description": "It's the perfect place to socialize with fellow travelers, make new friends, or simply unwind after a fulfilling day en route to Antarctica.",
          "isLinkExist": false,
          "linkText": "Iceberg Journey",
          "link": "#",
          "background": "./images/antarctica/tourpic3.jpg"
        },
        {
          "title": "Open Pool and Bar",
          "description": "Enjoy our open bar and pool deck, where you can unwind and soak up the sun while sipping refreshing drinks.",
          "isLinkExist": false,
          "linkText": "Birdwatching",
          "link": "#",
          "background": "./images/antarctica/tourpic4.jpg"
        },
        {
          "title": "Restaurant Area",
          "description": "Experience our restaurant zone, where culinary delights meet spectacular views.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic5.jpg"
        },
        {
          "title": "Fitness Center",
          "description": "Our onboard fitness center is equipped with state-of-the-art facilities, providing a perfect space for maintaining your wellness routine while on your Antarctic expedition.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic6.jpg"
        },
        {
          "title": "SPA Center",
          "description": "In partnership with SOTHYS™: massage and treatment rooms, beauty salon, balneotherapy room.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic7.jpg"
        }]
      } title="Boarding"
      ></SliderBigTour>
      <Daytoday2 />
      <SliderBigTour slides={[
        {
          "title": "Vast Ocean Scenery",
          "description": "Expansive views of the Southern Ocean, often with dramatic waves and weather conditions.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic8.jpg"
        },
        {
          "title": "Marine Wildlife",
          "description": "Possible sightings of whales, including humpback and orca whales, dolphins, and various seabirds like albatrosses and petrels.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic9.jpg"
        },
        {
          "title": "Icebergs and Sea Ice",
          "description": "Floating ice formations such as tabular icebergs and sea ice, showcasing the pristine environment of Antarctica.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic10.jpg"
        },
        {
          "title": "Educational Lectures",
          "description": "Informative talks on the history of exploration in Antarctica, its unique geography, and the challenges faced by early explorers.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic11.jpg"
        },
        {
          "title": "Nature's Avian Wonders",
          "description": "Accompanied by naturalist guides, you can enjoy birdwatching. You'll be amazed at how fascinating and engaging it is to observe albatrosses",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic12.jpg"
        }]
      } title="Drake Passage"
      ></SliderBigTour>
      <Daytoday3 />
      <SliderBigTour slides={[
        {
          "title": "Magnificent Scenery",
          "description": "Giant icebergs and sea ice floes drifting in the waters surrounding the peninsula.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic13.jpg"
        },
        {
          "title": "Wildlife",
          "description": "Opportunities to see various marine and terrestrial fauna, including penguins, leopard seals, and various seabird species.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic14.jpg"
        },
        {
          "title": "Unique natural phenomena",
          "description": "Observing phenomena such as the aurora (Northern Lights) in the sky above the Antarctic Peninsula.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic15.jpg"
        },
        {
          "title": "Lectures by Scientists",
          "description": "Understanding the uniqueness and importance of preserving the nature and ecosystems of Antarctica, including their impact on global climate and oceanography.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic16.jpg"
        }]
      } title="Northern Antarctic Peninsula"
      ></SliderBigTour>
      <Daytoday4 />
      <SliderBigTour slides={[
        {
          "title": "Natural Phenomena",
          "description": "The Drake Passage is where cold currents from the South Pole meet warmer equatorial waters. You'll witness magnificent views of the ocean and sky during your crossing of this passage.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic17.jpg"
        },
        {
          "title": "Diverse Marine Life",
          "description": "Known for its rich biodiversity, the Drake Passage offers sightings of elegant albatrosses and playful Cape petrels soaring around the ship, enhancing your journey with glimpses of these remarkable seabirds.",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic18.jpg"
        },
        {
          "title": "Historical and Cultural Significance ",
          "description": "Crossing the Drake Passage is not just a route to Antarctica but a symbolic journey revered by travelers and sailors alike. ",
          "isLinkExist": false,
          "linkText": "Seal Safari",
          "link": "#",
          "background": "./images/antarctica/tourpic19.jpg"
        }]
      } title="RETURN"
      ></SliderBigTour>
      <Daytoday5 />
      <Runline text={"/Dear Ladies &/ Gentlemen we will turn your journey into a true work of art"} />
      <Footer color="#397a9e" image="./images/antarctica/tourfooterpic.jpg" />
    </div >
  );
});
