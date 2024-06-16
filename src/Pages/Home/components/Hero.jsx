import React from "react";
import twitter from "../../../assets/twitter.svg";
import telegram from "../../../assets/telegram.svg";
import dextools from "../../../assets/dextools.svg";
import whitePaper from "../../../assets/white-paper.svg";
import pitchDeck from "../../../assets/pitch-deck.svg";
import diagonalArrow from "../../../assets/diagonal-arrow.svg";
import heroBg1 from "../../../assets/hero-bg-1.png";
import heroBg2 from "../../../assets/hero-bg-2.png";

export default function Hero() {
  const socialLinks = [
    { icon: twitter, name: "X.com" },
    { icon: telegram, name: "Telegram" },
    { icon: dextools, name: "Dextools" },
    { icon: whitePaper, name: "White Paper" },
    { icon: pitchDeck, name: "Pitch Deck" },
  ];
  return (
    <section className="text-white flex flex-col justify-center items-center text-center gap-8 mt-[100px] -500:mt-[50px] relative">
      {/* Header text of the hero */}
      <h1 className="grey-gradient-text text-5xl border-white border-2 -768:text-3xl -768:max-w-[300px] max-w-[700px] font-extrabold py-2 tracking-tighter leading-[120%] z-[5]">
        {" "}
        Optimize and monetize your coding experience with a new <br />
        <span className="purple-gradient-text text-6xl -768:text-3xl relative top-2">
          {"< AI Partner >"}
        </span>
      </h1>

      {/* Paragragh in the hero */}
      <p className="max-w-[400px] font-medium z-[5]">
        Get paid whenever you use MicroGPT's products. You earn money, and we
        enhance our LLMs. It's a win-win.
      </p>

      {/* Button of the hero */}
      <button className="hero-btn flex gap-2 items-center justify-start border-[1px] border-white border-opacity-80 font-bold rounded-2xl px-10 py-4">
        <p> Get Started</p>
        <img src={diagonalArrow} alt="" />
      </button>

      {/* Social links div */}
      <div className="flex justify-center items-center gap-3 -500:gap-2 mt-[100px] z-[5] flex-wrap">
        {socialLinks.map((social) => {
          return (
            <div
              key={social.name}
              className="flex justify-center items-center gap-2 rounded-[100px] text-sm border-white border-opacity-10 border-[1px] p-5 py-3"
            >
              <img src={social.icon} alt="" /> <p>{social.name}</p>
            </div>
          );
        })}
      </div>

      {/* glossy image on the left */}
      <img
        src={heroBg1}
        className="absolute left-0 translate-y-[-50%] top-[40%] z-[1] max-w-[350px]  -950:max-w-[200px] -768:top-[20%] -500:top-[10%] -500:max-w-[150px] "
        alt=""
      />
      {/* glossy image on the right */}

      <img
        src={heroBg2}
        className="absolute right-0 translate-y-[-50%] top-[50%] z-[1] max-w-[350px] -950:max-w-[200px] -768:hidden"
        alt=""
      />

    </section>
  );
}
