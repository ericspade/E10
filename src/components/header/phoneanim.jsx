import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import anim from "./phones.json";
import anim2 from "./phoneh.json";

function Phoneanim() {
  const container = useRef(null);
  const [la2] = useState(0);

  useEffect(() => {
    const la2 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: anim,
      name: "phones",
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className="phoneanim">
      <div
        ref={container}
        onMouseEnter={() => {
          lottie.destroy("phones");
          lottie.destroy("phoneh");
          lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: anim2,
            name: "phoneh",
          });
          lottie.setDirection(1, "phoneh");
          lottie.play("phoneh");
        }}
        onMouseLeave={() => {
          lottie.pause("phoneh");
          lottie.setDirection(-1, "phoneh");
          lottie.play("phoneh");
        }}
      />
    </div>
  );
}

export default Phoneanim;
