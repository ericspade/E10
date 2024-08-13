import styles from "./CardDest.module.css";
import pic from "./piccz.png"

export interface ICardDestnetherlandsProps {
  className?: string;
}

export const CardDestnetherlands = ({
  className,
  ...props
}: ICardDestnetherlandsProps): JSX.Element => {
  return (
    <div className={styles.c1 + " " + className}>
      <div className={styles.tags}>
        <div className={styles.line4}></div>
        <div className={styles.line5}></div>
        <div className={styles.tours}>
          <div className={styles.threeTours}>3 tours </div>
          <div className={styles.tours2}>tours </div>
        </div>
        <div className={styles.cities}>
          <div className={styles.popularCities}>popular cities </div>
          <div className={styles.threeCities}>3 cities </div>
        </div>
        <div className={styles.hotels}>
          <div className={styles.luxuryHotels}>luxury hotels </div>
          <div className={styles.threeHotels}>3 hotels </div>
        </div>
      </div>
      <div className={styles.line3}></div>
      <div className={styles.photoName}>
        <img className={styles.rectangle176} src={pic} />
        <div className={styles.country}>Netherlands </div>
      </div>
    </div>
  );
};