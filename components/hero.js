import React from "react";
import Container from "./container";
import logoBig from "@/public/logo-big.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-red-300 to-orange-100">
      <div className="container mx-auto px-5 flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 pt-20">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Wholesome Wellness Academy
            </h1>
            <p className="py-10 text-xl leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-300">
              Yogakshema Gurukulam is an online school where people can access
              unique wisdom of life and learn how to be better version of
              oneself from resourceful mentors.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button className="px-8 py-4 text-lg font-medium text-center text-white bg-red-400 hover:bg-red-500 rounded-md ">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={logoBig} width="500" height="500" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
