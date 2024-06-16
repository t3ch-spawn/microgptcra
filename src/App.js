import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
// import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   // lenis.on("scroll", (e) => {
  //   //   console.log(e);
  //   // });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  useEffect(() => {
    const allText = document.querySelectorAll(".test-text");

    allText.forEach((text) => {
      ScrollTrigger.create({
        trigger: text,
        scrub: true,
        markers: true,
        start: "top 70%",
        end: "bottom 60%",
        duration: 2,
        animation: gsap.to(text, {
          y: 100,
          opacity: 0,
        }),
      });
    });

    ScrollTrigger.refresh(true);
  }, []);

  const [count, setCount] = useState(0);

  return (
    <main>
      <Home />
    </main>
  );
}

export default App;
