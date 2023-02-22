import React from "react";
import logoBig from "@/public/logo-big.png";
import heroImg from "@/public/bg-image.jpeg";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className={`w-full bg-[#fefaf2] `}>
        <div className="container mx-auto grid grid-cols-none md:grid-cols-2 justify-end items-center">
          <div className=" flex flex-col justify-center px-5 my-8 py-10 ">
            <h1 className="text-4xl font-bold leading-snug tracking-wide md:text-5xl lg:leading-tight">
              Wholesome Wellness Academy
            </h1>
            <p className="py-10 text-lg leading-normal text-gray-700 lg:text-xl">
              An online school where people can access unique wisdom of life and
              learn how to be better version of oneself from resourceful
              mentors.
            </p>
            <div className="flex space-x-2">
              <button className="button">Register Now</button>
              <button className="px-4 py-2 max-w-sm text-center hover:bg-red-500 rounded-l-full rounded-r-full border text-gray-700 hover:text-white border-red-400 fill-none">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <Image
              src={logoBig}
              width="500"
              height="500"
              alt="Logo"
              className="z-index"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
