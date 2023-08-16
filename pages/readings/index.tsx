import React from "react";
import Footer from "../../components/TypingProject/Footer/Footer";
import ArrowIcon from "../../components/Icons/ArrowIcon";

export default function Home(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];
return (
  <div id="readings" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
  <div className="flex flex-row items-center ">
    <div className="flex flex-row  items-center mr-4">
      <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
      <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
      <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
        My Readings
      </span>
    </div>
    <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
  </div>
    <div className="font-Header tracking-wide">
      <span className="text-gray-400  ">
        I read a few papers every week around various topics that interests me and here are some of them that I found amusing
      </span>
    </div>
    <div className="font-Header tracking-wide flex flex-row space-x-16">
      <div className="flex flex-row space-x-2 items-center">
        <div className="flex flex-col space-y-4 sm:text-base text-sm">
          {technologies[0].map((tech, index) => {
            return (
              <div key={index} className="flex flex-row items-center space-x-2">
                <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <div className="flex flex-col space-y-4 sm:text-base text-sm">
          {technologies[1].map((tech, index) => {
            return (
              <div key={index} className="flex flex-row items-center space-x-2">
                <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="flex flex-row items-center ">
      <div className="flex flex-row  items-center mr-4">
        <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
        <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 02.</span>
        <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
          My BookShelf
        </span>
      </div>
      <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
    </div>
      <div className="font-Header tracking-wide">
        <span className="text-gray-400  ">
          I read a few books every month around various topics and here are some of them that I recommend.
        </span>
      </div>
      <div className="font-Header tracking-wide flex flex-row space-x-16">
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-4 sm:text-base text-sm">
            {technologies[0].map((tech, index) => {
              return (
                <div key={index} className="flex flex-row items-center space-x-2">
                  <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                  <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-col space-y-4 sm:text-base text-sm">
            {technologies[1].map((tech, index) => {
              return (
                <div key={index} className="flex flex-row items-center space-x-2">
                  <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                  <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>


  <Footer className="pt-16" link="https://github.com/hktitof/Typing" />
  </div>
  );
}
