import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TransLine(props) {
  const lineRef = useRef(null);
  const rectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const allLines = document.querySelectorAll(".trans-line");
    setTimeout(() => {
      allLines.forEach((line) => {
        ScrollTrigger.create({
          trigger: line.parentElement,
          start: "top 75%",
          end: "bottom 20%",
          scrub: true,
          // markers: true,
          animation: gsap.to(line, {
            scaleY: 1,
          }),
        });
      });
    }, 0);

    ScrollTrigger.refresh(true);
  }, []);

  return (
    <>
      <div className=" h-[240px] w-full flex justify-center items-center">
        <div className="trans-line h-full w-[1px] rounded-[40px] scale-y-0 origin-top"></div>
      </div>
    </>
  );
}
