import React from "react";
import robot from "../../../assets/mL-robot.png";
import bulb from "../../../assets/bulb.svg";
import debug from "../../../assets/debug.svg";
import refactor from "../../../assets/refactor.svg";
import documentation from "../../../assets/documentation.svg";
import codeBracket from "../../../assets/code-bracket.svg";
import feedback from "../../../assets/mL-feedback.svg";
import TransLine from "./TransLine";

export default function MachineLearning() {
  return (
    <section className="flex flex-col justify-center items-center sectionGap gap-16 px-2">
      {/* Heading */}
      <h2 className="sub-heading font-bold text-center max-w-[650px] test-text">
        <span className="grey-gradient-text">
          Sophisticated Machine Learning to help you code
        </span>
        <span className="purple-gradient-text"> super efficiently</span>
      </h2>

      {/* Container for all the boxes  */}
      <div className="cases-cont flex flex-wrap justify-center items-center gap-3 -768:gap-4 relative max-w-[1000px]">
        <div className="bg-[#F0AC88] h-[200px] w-[200px] blur absolute right-[20%] top-[40%] -768:hidden"></div>
        <div className="bg-[#7929FF] h-[200px] w-[200px] blur absolute left-[10%] top-[40%] -768:hidden"></div>
        <CardHelper
          heading="Real-time, Context-aware Suggestions"
          para="Get instant code suggestions ranging from simple code snippets to entire
                functions, depending on the context of your existing code and past
                inputs"
          img={bulb}
        />
        <CardHelper
          heading="Custom Feedback to suit your style"
          para="Given the uniqueness of our individual coding journeys, MicroGPT allows you to adjust how much assistant it gives you, adapting to your preferences."
          img={feedback}
        />

        <CardHelper
          heading="Automated Code Refactoring"
          para="microGPT optimizes your existing code in line with standard coding practice at the snap of a finger."
          img={refactor}
        />
        <CardHelper
          heading="Intelligent Debugging"
          para="Detect and resolve issues quickly with microGPT. Smart detection as you type make errors less likely."
          img={debug}
        />
        <CardHelper
          heading="Supports your coding language"
          para="Being able to speak multiple programming languages makes microGPT handy for various projects. "
          img={codeBracket}
        />

        <CardHelper
          heading="Documentation Assistance"
          para="Generates in-line comments and documentation, making your project documentation always easy to update."
          img={documentation}
        />
      </div>

      <TransLine className="mt-[100px]" trigger=".cases-cont"/>
    </section>
  );
}

function CardHelper(props) {
  return (
    <div
      className={`flex flex-col gap-4 h-auto text-white p-6 bg-white bg-opacity-5 border-white border-[1px] border-opacity-20 rounded-2xl max-w-[300px] min-h-[340px] -768:min-h-fit ${props.className}`}
    >
      <img className="max-w-[100px] -768:max-w-[70px]" src={props.img} alt="" />
      <h3 className="text-2xl -768:text-xl font-extrabold tracking-tighter">
        {props.heading}
      </h3>
      <p className="text-sm">{props.para}</p>
    </div>
  );
}
