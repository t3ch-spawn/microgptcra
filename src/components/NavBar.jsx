import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/mobile-logo.svg";
import gsap from "gsap";

export default function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navBar = document.querySelector(".nav-desktop");
      if (window.scrollY > 150) {
        navBar.classList.add("active");
      } else {
        navBar.classList.remove("active");
      }
    });
  }, []);

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/",
    },
    {
      name: "Innovators",
      link: "/",
    },
    {
      name: "Whitepaper",
      link: "/",
    },
    {
      name: "Pitchdeck",
      link: "/",
    },
    {
      name: "Impression",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
  ];

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);

  function toggleNav() {
    const hamburger = document.querySelector(".hamburger");
    let hamActive = hamburger.classList.contains("active");
    const allBars = document.querySelectorAll(".burger-bar");
    if (hamActive) {
      timeline1.current.reverse();
      timeline2.current.reverse();
    } else {
      timeline1.current = gsap
        .timeline()
        .to(allBars[2], {
          y: -8,
          width: "100%",
          duration: 0.3,
          onComplete: () => {
            gsap.to(allBars[1], {
              opacity: 0,
              duration: 0.1,
            });
          },
        })
        .to(allBars[0], {
          rotate: 45,
          x: 0,
          duration: 0.3,

          onReverseComplete: () => {
            gsap.to(allBars[1], {
              opacity: 1,
              duration: 0.2,
            });
          },
        });
      timeline2.current = gsap
        .timeline()
        .to(allBars[0], {
          y: 8,
          width: "100%",
          duration: 0.3,
        })
        .to(allBars[2], {
          rotate: -45,
          x: 0,
          duration: 0.3,
        });
    }

    hamburger.classList.toggle("active");

    hamActive = hamburger.classList.contains("active");

    gsap.to(".nav-mobile-drawer", {
      left: hamActive ? "0%" : "100%",
    });
  }
  return (
    <>
      <nav className="text-white z-[50] sticky top-0 ">
        <div className="nav-desktop flex justify-evenly items-center  py-4 px-2 overflow-hidden relative -1024:hidden">
          {/* Blur that comes out on sticky */}
          <div className="w-[100px] h-[100px] bg-white ml-blur translate-x-[0%] absolute opacity-0 duration-300 ease-in-out pointer-events-none"></div>

          <img src={logo} alt="" className="-1024:hidden" />

          <ul className="flex gap-14 -1200:gap-8 -1100:gap-6 items-center justify-center -1024:flex-col">
            {navLinks.map((link, idx) => {
              return (
                <li
                  key={link.name}
                  className={`${
                    idx == 0 ? "text-opacity-100" : "text-opacity-50 text-white"
                  } cursor-pointer`}
                >
                  {link.name}
                </li>
              );
            })}
          </ul>

          <button className="navbar-btn rounded-[10px] p-[1px] flex justify-center items-center">
            <div className="navbar-btn-box w-full h-full rounded-[10px] bg-[#111111] px-8 py-3 font-bold">
              Download
            </div>
          </button>
        </div>
        <div className="nav-mobile-drawer hidden -1024:flex items-center  py-4 px-2 overflow-hidden fixed flex-col bg-[#111111] gap-5 w-full h-full left-[100%] top-0 justify-center">
          {/* Blur that comes out on sticky */}
          <div className="w-[100px] h-[100px] bg-white ml-blur translate-x-[0%] absolute opacity-0 duration-300 ease-in-out pointer-events-none -1024:hidden"></div>

          <img src={logo} alt="" className="-1024:hidden" />

          <ul className="flex gap-14 -1200:gap-8 -1100:gap-6 items-center justify-center -1024:flex-col">
            {navLinks.map((link, idx) => {
              return (
                <li
                  key={link.name}
                  className={`${
                    idx == 0 ? "text-opacity-100" : "text-opacity-50 text-white"
                  } cursor-pointer`}
                >
                  {link.name}
                </li>
              );
            })}
          </ul>

          <button className="navbar-btn rounded-[10px] p-[1px] flex justify-center items-center">
            <div className="navbar-btn-box w-full h-full rounded-[10px] bg-[#111111] px-8 py-3 font-bold">
              Download
            </div>
          </button>
        </div>

        <div className="nav-mobile -1024:flex hidden justify-between px-5 items-center py-2 z-[60] relative">
          <img src={logoMobile} alt="" />

          <div
            onClick={toggleNav}
            className="h-[25px] w-[25px] cursor-pointer hamburger flex flex-col gap-[5px] justify-center items-center"
          >
            <span className="burger-bar w-[60%] self-end translate-x-[-10%]"></span>
            <span className="burger-bar w-full"></span>
            <span className="burger-bar w-[60%] self-start translate-x-[10%]"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
