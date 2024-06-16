import React, { useEffect } from "react";
import dashboard from "../../../assets/dashboard.svg";
import extension from "../../../assets/extension.svg";
import robotic from "../../../assets/robotic.svg";
import plugin from "../../../assets/plugin.svg";
import sourceCode from "../../../assets/source-code.svg";
import gsap from "gsap";
import arrow from "../../../assets/diagonal-arrow.svg";

export default function UseCases() {
  const tabs = [
    { name: "Dashboard", icon: dashboard },
    { name: "Extension", icon: extension },
    { name: "Editor Plugin", icon: plugin },
    { name: "Microbot", icon: robotic },
    { name: "Code Editor", icon: sourceCode },
  ];

  const descriptions = [
    {
      name: "Dashboard",
      icon: dashboard,
      list: [
        "Log in",
        "Github connection",
        "View stats",
        "Customize announcements",
      ],
    },
    {
      name: "Extension",
      icon: extension,
      list: [
        "Code review",
        "Optimize code",
        "Fix errorsddsd",
        "Explain code logic",
      ],
    },
    {
      name: "Editor Plugin",
      icon: plugin,
      list: [
        "Fix errors",
        "Explain code",
        "Predictive suggestions",
        "Search for code",
        "Summarize code",
      ],
    },
    {
      name: "Microbot",
      icon: robotic,
      list: [
        "Update alerts",
        "Keep your community (Telegram, Slack, Whatsapp, Discord) in sync with hassle free development updates",
        "Customize announcements",
        "Push announcements",
        "Code feedback",
        "Automated audit after commits",
      ],
    },
    {
      name: "Code Editor",
      icon: sourceCode,
      list: [
        "Lightweight AI-power editor",
        "Code optimization",
        "Security checks",
      ],
    },
  ];

  useEffect(() => {
    const allTabs = document.querySelectorAll(".caseTab");

    calcTab(allTabs[0]);
  }, []);

  function calcTab(currTab) {
    const allTabs = document.querySelectorAll(".caseTab");
    const allDescriptions = document.querySelectorAll(".descriptionTab");

    allTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    currTab.classList.add("active");

    allDescriptions.forEach((description, idx) => {
      const descripName = description.querySelector(".descriptionTab-name");
      const tabName = currTab.querySelector(".caseTab-name");

      gsap.to(description, {
        y: "20%",
        opacity: 0,
        duration: 0,
        position: "absolute",
      });

      if (descripName.textContent == tabName.textContent) {
        gsap.to(description, {
          x: "0%",
          y: "0%",
          top: "10%",
          left: "0%",
          opacity: 1,
          duration: 0.3,
          position: "relative",
        });
      }
    });
  }
  function toggleTab(e) {
    calcTab(e.currentTarget);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-6 sectionGap px-4">
      <h2 className="sub-heading grey-gradient-text font-extrabold">
        Use cases of microGPT
      </h2>

      {/* Container for tabs and description */}
      <div className="flex justify-center items-center w-full -768:flex-col overflow-hidden">
        {/* container for tabs */}
        <div className="flex flex-col gap-4 w-full max-w-[500px] justify-center items-center -768:justify-start  -768:flex-row -768:flex-wrap -768:gap-1 -768:ml-[20%]">
          {tabs.map((tab) => {
            return (
              <div
                onClick={(e) => {
                  toggleTab(e);
                }}
                key={tab.name}
                className="flex justify-start gap-4 w-[50%] max-w-[250px] -768:max-w-[140px] cursor-pointer items-center bg-white bg-opacity-0 duration-300 ease-in-out p-2  -768:gap-2 -768:p-2 text-white rounded-2xl -768:rounded-xl hover:bg-opacity-5 caseTab"
              >
                {/* container for icon */}
                <div className="bg-white bg-opacity-15 rounded-lg -768:rounded-md p-1 max-w-[40px] -768:max-w-[30px]">
                  <img
                    className="duration-300 ease-in-out"
                    src={tab.icon}
                    alt=""
                  />
                </div>

                {/* container for name */}
                <p className="caseTab-name -768:text-sm">{tab.name}</p>
              </div>
            );
          })}
        </div>

        {/* container for description */}
        <div className="w-full max-w-[400px] h-[400px]  relative -768:max-w-[320px] ">
          {descriptions.map((description) => {
            return (
              <div
                key={`${description.name} descrip`}
                className="flex flex-col gap-3 items-start justify-center text-sm bg-white bg-opacity-10 rounded-xl text-white p-6 px-8 descriptionTab absolute translate-y-[20%] w-fit opacity-0 min-w-[250px] -768:ml-[5%]"
              >
                {/* heading */}
                <div className="flex gap-2 justify-center items-center bg-[#904BBB] bg-opacity-30 rounded-[100px] border-[1px] border-white border-opacity-40 p-5 py-1">
                  <img src={description.icon} className="max-w-[15px]" alt="" />
                  <p className="descriptionTab-name">{description.name}</p>
                </div>

                <ul className="list-disc pl-6">
                  {description.list.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
                </ul>

                <button className="bg-white w-full p-3 py-2 font-bold rounded-xl text-black flex justify-center items-center gap-2">
                  <p>Go to</p>
                  <img
                    src={arrow}
                    className="black-diag-arrow max-w-[20px]"
                    alt=""
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
