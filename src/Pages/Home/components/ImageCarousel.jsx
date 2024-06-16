import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ImageCarousel(props) {
  const imagesRef = useRef([]);
  const timeline = useRef(null);
  useEffect(() => {
    imagesRef.current.forEach((image, idx) => {
      gsap.to(image, {
        translateX: idx == 0 ? "-100%" : "0%",
        ease: "none",
        duration: props.time,
        repeat: -1,
        // transform: "translateZ(0)",
      });
    });
  }, []);

  return (
    <div
      className={`flex relative overflow-hidden h-[50px] -768:scale-[2] -500:scale-[2.7] items-center -500:h-[40px] image-carousel ${props.className}`}
    >
      <div className=" h-[100px] w-[100px] absolute left-[0px]  -768:left-[18%] black-blur z-[10]"></div>
      <div className=" h-[100px] w-[100px] absolute right-[0px] -768:right-[18%]  black-blur-right z-[10]"></div>
      <img
        ref={(el) => (imagesRef.current[0] = el)}
        className="trust-logos w-full absolute"
        src={props.img}
        alt=""
      />
      <img
        ref={(el) => (imagesRef.current[1] = el)}
        className="trust-logos w-full absolute translate-x-[100%]  "
        src={props.img}
        alt=""
      />
    </div>
  );
}
