import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import anim from "./contacts.json";
import anim2 from "./contacth.json";

function Contactanim() {
  const container = useRef(null);
  const [la2] = useState(0);

  useEffect(() => {
    const la2 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: anim,
      name: "contacts",
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className="contactanim">
      <div
        ref={container}
        onMouseEnter={() => {
          lottie.destroy("contacts");
          lottie.destroy("contacth");
          lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: anim2,
            name: "contacth",
          });
          lottie.setDirection(1, "contacth");
          lottie.play("contacth");
        }}
        onMouseLeave={() => {
          lottie.pause("contacth");
          lottie.setDirection(-1, "contacth");
          lottie.play("contacth");
        }}
      />
    </div>
  );
}

export default Contactanim;
