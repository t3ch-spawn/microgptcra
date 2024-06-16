import React from "react";
import ImageCarousel from "./ImageCarousel";
import logos_1 from "../../../assets/trusted-logos-1.svg";
import logos_2 from "../../../assets/trusted-logos-2.svg";
import discordScreen from "../../../assets/discord-screen.svg";

export default function Trusted() {
  return (
    <section className="text-white sectionGap flex flex-col gap-3">
      <h3 className="text-center font-bold px-2 test-text">
        Trusted by multiple Professionals & Teams
      </h3>
      <div className="overflow-hidden">
        <ImageCarousel img={logos_2} time={10} className="mt-[50px]" />
        <ImageCarousel img={logos_1} time={8} className="mt-[50px]" />
      </div>

      <div className="flex justify-center items-start">
        <img
          className="scale-[0.9] mt-[-100px] -768:mt-[-50px] -500:mt-[-10px] -500:scale-100"
          src={discordScreen}
          alt=""
        />
      </div>
    </section>
  );
}
