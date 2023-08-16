import React from "react";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExternalLink from "../../Icons/ExternalLink";
export default function BookShelf() {
  const router = useRouter();
  return (
    <div
      id="BookShelf"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">My Readings</span>
        </div>
      </div>
      {/* // ? Get In Touch */}

      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is open. Whether you have a question or just
        want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <div className="z-10 flex fle-row space-x-5 ">
        <ExternalLink url={"readings"} router={router} />
      </div>
      <div className="pt-4">
        <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">My Readings</span>
      </div>
    </div>
  );
}
