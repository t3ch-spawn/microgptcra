import React from "react";
import arrow from "../../../assets/diagonal-arrow.svg";
import box from "../../../assets/gift-box.svg";

export default function CodeToEarn() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 sectionGap">
      {/* image */}
      <div className="-768:max-w-[90px]">
        <img src={box} alt="" />
      </div>

      <h2 className="sub-heading text-white font-extrabold max-w-[700px] test-text">
        <span>
          Introducing a pioneering ‘Code to Earn’ model that rewards your
          development efforts with{" "}
          <span className="purple-gradient-text">$MICRO</span>
        </span>
      </h2>

      <button className="flex justify-center gap-2 items-center w-full max-w-[200px] font-bold rounded-lg py-2 bg-white">
        <p>Discover more</p>
        <img src={arrow} className="black-diag-arrow" alt="" />
      </button>
    </section>
  );
}
