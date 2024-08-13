import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import anims from "./m+gs.json";
import animh from "./m+gh.json";

function MGanim() {
  const container = useRef(null);
  const [la1] = useState(0);

  useEffect(() => {
    const la1 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: anims,
      name: "mgs",
    });
    return () => lottie.destroy();
  }, []);

  console.log(la1);

  return (
    <div className="MGanim">
      <div
        ref={container}
        onMouseEnter={() => {
          lottie.destroy("mgs");
          lottie.destroy("mgh");
          lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animh,
            name: "mgh",
          });
          lottie.setDirection(1, "mgh");
          lottie.play("mgh");
        }}
        onMouseLeave={() => {
          lottie.pause("mgh");
          lottie.setDirection(-1, "mgh");
          lottie.play("mgh");
        }}
      />
    </div>
  );
}

export default MGanim;
