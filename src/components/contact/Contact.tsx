import styles from "./contact.module.css";
import { Contactdetails } from './contactdetails'
import Footer from '../footer/Footer'

export interface IComponentProps {
  className?: string;
}

export const Contact = ({
  className,
  ...props
}: IComponentProps): JSX.Element => {

  return (
    <div className={styles.div + " " + className}>
      <div>
        <Footer color="#4B4B4B" image="./images/ph.jpg" />
      </div>
    </div>
  );
};
