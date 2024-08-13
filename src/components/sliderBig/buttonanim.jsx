import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import anim from "./hotelbutton.json"

function Buttonanim({ name }) {
  const container = useRef(null);
  const [la2] = useState(0);
  const animname = name

  useEffect(() => {
    const la2 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: anim,
      name: animname
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div className="buttonanim">
      <div
        ref={container}
        onMouseEnter={() => {lottie.setDirection(1, name); lottie.play(name)}}
        onMouseLeave={() => {lottie.setDirection(-1, name); lottie.play(name)}}
        />
    </div>
  );
}

export default Buttonanim;