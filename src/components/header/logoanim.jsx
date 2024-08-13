import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import logoanim from "./logo.json";

function Logoanim() {
  const container = useRef(null);
  const [la1] = useState(0);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: logoanim,
    });
    return () => {
      lottie.goToAndStop(30, true);
      lottie.destroy();
    };
  }, []);

  return (
    <div className="Logoanim">
      <div ref={container} />
    </div>
  );
}

export default Logoanim;
