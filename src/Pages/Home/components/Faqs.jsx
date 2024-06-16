import React from "react";
import plus from "../../../assets/plus.svg";
import gsap from "gsap";
export default function Faqs() {
  const faqs = [
    {
      question: "What is MicroGPT",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft.",
    },
    {
      question: "What data has MicroGPT been trained on?",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft. It has been trained on natural language text and source code from publicly available sources, including code in public repositories on GitHub.",
    },
    {
      question: "Is MicroGPT free?",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft.",
    },
    {
      question: "What languages, IDEs and platforms does MicroGPT support?",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft.",
    },
    {
      question: "Does MicroGPT ‘copy/paste’?",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft.",
    },
    {
      question: "What is MicroGPT?",
      answer:
        "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft.",
    },
  ];

  function toggleFaq(e) {
    const currAnswer = e.currentTarget.previousElementSibling;
    const allFaqAnswers = document.querySelectorAll(".faq-answer");

    function closeFaq(element) {
      gsap.to(element, {
        maxHeight: 0,
        paddingTop: 0,
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }

    if (!currAnswer.classList.contains("active")) {
      allFaqAnswers.forEach((answer) => {
        closeFaq(answer);
        answer.classList.remove("active");
      });

      gsap.to(currAnswer, {
        maxHeight: 300,
        paddingTop: 10,
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    } else {
      closeFaq(currAnswer);
    }

    currAnswer.classList.toggle("active");
  }

  return (
    <section className="flex justify-center items-center flex-col gap-8 mt-[140px] px-4">
      {/* heading */}
      <h2 className="sub-heading grey-gradient-text tracking-tighter font-extrabold text-center">
        FAQs
      </h2>

      {/* container for the faqs */}
      <div className="max-w-[800px] flex flex-col gap-4">
        {faqs.map((faq) => {
          return (
            <div
              key={faq.question}
              className="bg-white bg-opacity-5 border-white border-[1px] border-opacity-10 relative text-white rounded-lg p-4 px-8 -768:px-4"
            >
              <p className="font-bold">{faq.question}</p>
              <p className="faq-answer pt-0 max-h-0 opacity-0 translate-y-[10px]">
                {faq.answer}
              </p>

              <button
                onClick={(e) => {
                  toggleFaq(e);
                }}
                className="absolute right-3 top-4 cursor-pointer max-w-[20px]"
              >
                <img src={plus} alt="" className="" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
