import React from "react";
import Container from "./container";
import logoBig from "@/public/logo-big.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="container mx-auto px-5 flex flex-wrap mt-8">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Wholesome wellness Academy
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Yogakshema Gurukulam is an online school where people can access
            unique wisdom of life and learn how to be better version of oneself
            from resourceful mentors.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <button className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image src={logoBig} width="500" height="500" alt="Logo" />
      </div>
    </div>
  );
}

export default Hero;
