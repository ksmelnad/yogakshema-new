import React from "react";
import Container from "./container";
import logoBig from "@/public/logo-big.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-none md:grid-cols-2 justify-end items-center bg-gradient-to-b from-red-300 to-orange-100">
      <div className="container w-25 flex flex-col justify-center  mx-auto my-8 py-10 px-10 lg:px-20">
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:leading-tight">
          Wholesome Wellness Academy
        </h1>
        <p className="py-10 text-lg leading-normal text-gray-700 lg:text-xl">
          Yogakshema Gurukulam is an online school where people can access
          unique wisdom of life and learn how to be better version of oneself
          from resourceful mentors.
        </p>

        <button className="button sm:max-w-25">Register Now</button>
      </div>
      <div className="hidden md:flex justify-center">
        <Image src={logoBig} width="500" height="500" alt="Logo" />
      </div>
    </div>
  );
}

export default Hero;
