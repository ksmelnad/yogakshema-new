import React from "react";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Yogakshema Gurukulam</title>
        <meta
          name="description"
          content="Yogakshema Gurukulam - A wholesome wellness academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIco.ico" />
      </Head>
      <div className="w-25 text-center pt-10 pb-5">
        <h3 className="text-md font-bold tracking-wider uppercase bg-gradient-to-r from-red-700 to-orange-100 text-transparent bg-clip-text">
          About Us{" "}
        </h3>
      </div>
      <div className="max-w-2xl mx-auto p-5">
        <div className="max-w-2xl mt-3 uppercase font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
          Vision
        </div>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          So as to fill the gap in the modern education system, Yogakshema will
          enable the young and energetic minds to understand lacunas of modern
          lifestyle management and empower them through Indic Wisdom to Develop
          and manage oneself in the most harmonious way possible. This will in
          turn create a sense of true health & happiness. Yogakshema will also
          be a platform to share the Indic wisdom in the most lucid and
          practical ways of application in day to day life of every aspirant who
          seeks it.
        </p>

        <div className="max-w-2xl mt-3 uppercase font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
          Mission
        </div>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Yogakshema is on a mission to reach and coach as many young &
          energetic minds as possible to transform their understanding about
          life. We are on a mission to create a platform for an abundant
          treasure of wisdom and lifestyle management to be shared with all
          those who are in search of transformation and stress free life.
          Yogakshema will provide creative solutions to problems based on Indic
          methodology as prescribed in Indian Knowledge System that are
          practical and very much in sync to modern needs.
        </p>

        <div className="mt-3 pt-10 pb-5 text-red-400 font-bold tracking-wider uppercase ">
          Our Team
        </div>
        <div>
          <h2 className="max-w-2xl mt-3 uppercase font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
            Mentors
          </h2>
        </div>

        <div className="text-md font-bold uppercase">Aravind Prasad</div>
        <div className="text-md">
          Founder Director & Lead Mentor – Dept. of Wellness
        </div>
        <div className="text-md font-bold uppercase pt-3">Lipi Pushpakaran</div>
        <div className="text-md">Director & Lead Mentor – Dept. of Healing</div>
        <div className="text-md font-bold uppercase pt-3">Ananta Sharma</div>
        <div className="text-md">
          Director & Lead Mentor – Dept. of Indic Wisdom
        </div>
        <div className="text-md font-bold uppercase pt-3">Gayathri Melnad</div>
        <div className="text-md">Director & Lead Mentor – Dept. of Health</div>

        <div>
          <h2 className="max-w-2xl mt-3 uppercase font-bold leading-snug tracking-wide text-gray-800 lg:leading-tight lg:text-lg dark:text-white">
            Administration
          </h2>
        </div>
        <div className="text-md font-bold uppercase pt-3">Prabhakar Rao</div>
        <div className="text-md">
          Director & Chief Organizer – Organising Committee
        </div>

        <div className="text-md font-bold uppercase pt-3">Shwetha H M</div>
        <div className="text-md">Director & Manager – Administration</div>

        <div className="text-md font-bold uppercase pt-3">Shilpa Prasad</div>
        <div className="text-md">Director & Manager – Marketing</div>
      </div>
    </>
  );
}

export default About;
