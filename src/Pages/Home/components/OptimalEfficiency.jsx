import React from "react";
import efficiency from "../../../assets/optimal-efficiency.svg";
import efficiencyBots from "../../../assets/efficiency-bots.png";
import TransLine from "./TransLine";

export default function OptimalEfficiency() {
  return (
    <section className=" text-white mt-[0px] w-full px-5">
      {/* Efficiency div */}
      <div className="flex justify-center items-center gap-16 -768:flex-col">
        <img src={efficiency} alt="" />

        {/* div for typography */}
        <div className="flex flex-col gap-4 items-start max-w-[350px] w-full -768:items-center -768:justify-center">
          <h2 className="sub-heading grey-gradient-text font-bold leading-[120%] test-text">
            Optimal Efficiency meets Tangible Rewards
          </h2>
          <p className="leading-[150%] text-center">
            Each development phase is an opportunity to{" "}
            <span className="text-[#F0AC88] font-bold">earn $MICRO</span>,
            ensuring that your time spent coding translates directly into value.
          </p>
        </div>
      </div>

      {/* Container with percentage stats and robots */}
      <div className="stats-robots flex justify-center items-center mt-[160px] -768:mt-[100px] gap-16 -1100:gap-8 -768:flex-col">
        <div className="relative">
          <img src={efficiencyBots} className="object-fit" alt="" />
          <div className="bg-[#F0AC88] h-[150px] -768:hidden w-[150px] ml-blur absolute right-[0%] top-[30%]"></div>
        </div>

        {/* div for typography */}
        <div className="flex justify-center items-center gap-4 text-white text-opacity-70 ">
          {/* First stat */}
          <div className="flex flex-col gap-5 max-w-[250px] text-center -500:text-sm -500:max-w-[150px]">
            <p>UP TO</p>
            <h3 className="text-[#F0AC88] text-8xl font-bold tracking-tighter font-worksans -1100:text-7xl -950:text-6xl">
              75%
            </h3>
            <p>higher satisfaction rate over those not using microGPT</p>
          </div>

          {/* line in between */}
          <div className="h-[250px] w-[1px] bg-white bg-opacity-30"></div>

          {/* Second stat */}
          <div className="flex flex-col gap-5 max-w-[250px] text-center -500:text-sm -500:max-w-[150px]">
            <p>UP TO</p>
            <h3 className="text-[#8A73FA] text-8xl font-bold tracking-tighter font-worksans -1100:text-7xl -950:text-6xl">
              55%
            </h3>
            <p>more efficient than the same group</p>
          </div>
        </div>
      </div>

      {/* Div for transition line */}
      <div className="flex justify-center items-center mt-[100px]">
        <TransLine trigger=".stats-robots" />
      </div>
    </section>
  );
}
