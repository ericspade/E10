import "./Footer.css";

export interface IFooterProps {
  className?: string;
}

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <div className={"footer " + className}>
      <div className="background"></div>
      <div className="dear-ladies-gentlemens-we-will-turn-your-journey-into-a-true-work-of-art">
        <span>
          <span className="dear-ladies-gentlemens-we-will-turn-your-journey-into-a-true-work-of-art-span">
            Dear Ladies &amp;
          </span>
          <span className="dear-ladies-gentlemens-we-will-turn-your-journey-into-a-true-work-of-art-span2">
           Gentlemens we will turn your journey into a true work of art
          </span>
        </span>{" "}
      </div>
      <div className="button"></div>
      <div className="footer-2">
        <div className="_2024-first-class-solutions">
          2024 © first class solutions{" "}
        </div>
        <div className="public-offer">Public Offer </div>
        <div className="privacy-cookie-policy">
          Privacy &amp; Cookie Policy{" "}
        </div>
        <div className="developed-by-digital-trinity">
          Developed by Digital Trinity{" "}
        </div>
      </div>
      <div className="info">
        <div className="first-class-solutions-offers-premium-bookings-for-hotels-villas-private-jets-and-yachts-through-trusted-top-partners">
          First Class Solutions offers premium bookings for hotels, villas,
          private jets, and yachts through trusted top partners.{" "}
        </div>
        <div className="individual-taxpayer-number-9707025574-tax-registration-reason-code-770701001">
          Individual Taxpayer Number: 9707025574
          <br />
          Tax Registration Reason Code: 770701001{" "}
        </div>
      </div>
      <div className="social">
        <div className="instagram">instagram </div>
        <div className="whats-app">WhatsApp </div>
        <div className="telegram">Telegram </div>
        <div className="_7-903-384-48-42"> +7 903 384-48-42 </div>
      </div>
    </div>
  );
};
