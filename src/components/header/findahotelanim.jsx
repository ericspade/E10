import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import fahanim from "./findahotelstart.json";
import fahanim2 from "./findahotelh.json";

function Findahotelanim() {
  const container = useRef(null);
  const [la2] = useState(0);

  useEffect(() => {
    const la2 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: fahanim,
      name: "fahs",
    });
    return () => lottie.destroy();
  }, []);

  console.log(lottie.getRegisteredAnimations()[4]);

  return (
    <div className="findahotelanim">
      <div
        ref={container}
        onMouseEnter={() => {
          lottie.destroy("fahs");
          lottie.destroy("fahh");
          lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: fahanim2,
            name: "fahh",
          });
          lottie.setDirection(1, "fahh");
          lottie.play("fahh");
        }}
        onMouseLeave={() => {
          lottie.pause("fahh");
          lottie.setDirection(-1, "fahh");
          lottie.play("fahh");
        }}
      />
    </div>
  );
}

export default Findahotelanim;
