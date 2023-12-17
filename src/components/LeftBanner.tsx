import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiBootstrap } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { cv } from "../assets";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Forntend Developer", "Forntend Developer", "Forntend Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleDownloadResume = () => {
    
    const resumeUrl =  cv;
    window.open(resumeUrl, '_blank');
  };

  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Suman Paudel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          Dedicated and skilled Frontend Developer with a passion
          for creating visually appealing and user-friendly web
          applications. Proficient in modern web technologies and
          frameworks, committed to delivering high-quality,
          responsive, and engaging user interfaces. Experienced in
          collaborating with cross-functional teams to bring
          innovative digital solutions to life.
        </p>
      </div>
       <button
              className="bannerIcon cursor-pointer m-2"
              onClick={handleDownloadResume}
            >
            Download Resume
            
            </button>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sumanp20570201/" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/suman-poudel-0a6234289/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/suman.poudel.129357/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
           
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
