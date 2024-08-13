import { memo } from 'react';
import type { FC } from 'react';

import styles from '../_styles.module.css';
import { LogoIcon } from './LogoIcon';
import { AirplaneIcon } from './AirplaneIcon';
import { PhoneIcon } from './PhoneIcon';
import classes from './event.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import $ from 'jquery';
import MultipleItems from './continentscaro';
import MultipleItems2 from './continentscarohotel';
import MultipleItems4 from './tourscaro';
import Section_1Welcome from './Section_1Welcome';
import Section_2Tags from './Section_2Tags';
import Section_3CityS from './Section_3CityS';
import Section_4Title from './Section_4Title';
import Section_5Title from './Section_5Title';
import SectionMap from './SectionMap';
import Section_6Title from './Section_6Title';
import FormTitle from './FormTitle'
import Form from './Form';
import SuggestionTitle from './SuggestionTitle'
import Suggestions from './Section_8Suggestions';
import { Footer } from './Footer'
import Section_3Gallery from './Section_3Gallery';
import emailanim from "./emaildata.json"
import phoneanim from "./phoneanim.json"
import ruseng from "./ruseng.json"
import typeoftrips2 from "./typeoftrips2.json"
import rentals from "./rentalsheader.json"
import destinations from "./destinationsheader.json"
import HotelCaro from './continentscarohotel2'

interface Props {
  className?: string;
}

var lottiePlayer = document.getElementsByTagName("lottie");

$(lottiePlayer).on('mouseenter', function(event) {
    console.log(this);
    "this.setDirection(1)"
    "this.play()"

}).on('mouseleave', function(event) {
    "this.setDirection(-1)"
    "this.play()"
});


export const _event: FC<Props> = memo(function continent(props = {}) {
  return (
    <div className={`${styles.mainStyles} ${classes.root}`}>
      <div>
        <Section_1Welcome />
      </div>
      <div>
        <Section_2Tags />
      </div>
      <div>
        <Section_3Gallery />
      </div>
      <div>
        <Section_4Title />
        <div className={classes.slider}>
        <MultipleItems />
        </div>
      </div>
      <div>
        <Section_5Title />
        <div className={classes.sliderhotel}>
        <HotelCaro />
        </div>
      </div>
      <div>
        <Section_6Title />
        <div className={classes.slider2}>
        <MultipleItems4 />
        </div>
      </div>
      <div>
        <SuggestionTitle />
      </div>
      <div className={classes.suggestions}>
        <Suggestions />
      </div>
      <div>
        <Footer />
      </div>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon5} />
      </div>
      <div className={classes.createYourDreamTour}>Create your dream tour</div>
      <div className={classes.rectangle152}></div>
      <div className={classes.airplane}>
        <AirplaneIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle153}>
      <div className={classes.destinationsbutton}>
      <Player
  hover
  src={destinations}
  style={{ height: '54px', width: '199px', transform: 'translate(-17px, -3px)', overflow: 'visible' }}
></Player></div>
</div>
      <div className={classes.rectangle154}>
      <Player
  hover
  src={rentals}
  style={{ height: '54px', width: '199px', transform: 'translate(-23px, -2px)', overflow: 'visible' }}
></Player></div>
      <div className={classes.rectangle155}></div>
      <div className={classes.typeOfTrips}>
      <Player
  hover
  src={typeoftrips2}
  style={{ height: '55px', width: '199px', transform: 'translate(-27px, -11px)', overflow: 'visible' }}
></Player>
        <p className={classes.labelWrapper11}>

        </p>
      </div>
      <div className={classes.meetGreetServices}>Meet + Greet Services</div>
      <div className={classes.rectangle156}>
      <Player
  hover
  src={phoneanim}
  style={{ height: '55px', width: '54px', transform: 'translate(5px, -3px)', overflow: 'visible' }}
></Player>
      </div>
      <div className={classes.phoneCall}>
      </div>
      <div className={classes.rectangle157}>
      <Player
  hover
  src={emailanim}
  style={{ height: '55px', width: '54px', transform: 'translate(5px, -3px)', overflow: 'visible' }}
></Player>
      </div>
      <div className={classes.email}>
      </div>
      <div className={classes.rectangle158}>
      <Player
  hover
  src={ruseng}
  style={{ height: '55px', width: '54px', transform: 'translate(5px, -3px)', overflow: 'visible' }}
></Player>
      </div>
      <div className={classes.eng}></div>
    </div>
  );
});
