import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import anim from "./burgers.json";
import anim2 from "./burgerh.json";

function Burgeranim() {
  const container = useRef(null);
  const [la2] = useState(0);

  useEffect(() => {
    const la2 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: anim,
      name: "burgers",
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className="burgeranim">
      <div
        ref={container}
        onMouseEnter={() => {
          lottie.destroy("burgers");
          lottie.destroy("burgerh");
          lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: anim2,
            name: "burgerh",
          });
          lottie.setDirection(1, "burgerh");
          lottie.play("burgerh");
        }}
        onMouseLeave={() => {
          lottie.pause("burgerh");
          lottie.setDirection(-1, "burgerh");
          lottie.play("burgerh");
        }}
      />
    </div>
  );
}

export default Burgeranim;
