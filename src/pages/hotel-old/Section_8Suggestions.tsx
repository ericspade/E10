import classes from './styles/suggestions.module.css';
import { CircleIcon } from './CircleIcon';
import { JapanIcon } from './JapanIcon';
import { LasVegasIcon } from './LasVegasIcon';
import { MaldivesMapIcon } from './MaldivesMapIcon';

export default function Suggestions() {
    return (
      <div>
        <div className={classes._2Background}></div>
        <div className={classes.circle}>
            <CircleIcon className={classes.icon} />
        </div>
        <div className={classes.maldivesMap}>
            <MaldivesMapIcon className={classes.icon2} />
        </div>
        <div className={classes.maldives}>Maldives</div>
        <div className={classes.japan}>
            <JapanIcon className={classes.icon3} />
        </div>
        <div className={classes.japan2}>Japan</div>
        <div className={classes.kyoto}>Kyoto</div>
        <div className={classes.lasVegas}>
            <LasVegasIcon className={classes.icon4} />
        </div>
        <div className={classes.lasVegas2}>Las Vegas</div>
        </div>
    )
}