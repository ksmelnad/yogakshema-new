import React, { useState } from "react";
import Image from "next/image";
import aravindPic from "../public/Aravind.jpg";
import lipiPic from "../public/Lipi.jpeg";
import gayathriPic from "../public/Gayathri.jpeg";
import anantaPic from "../public/Ananta.jpg";

function Mentors() {
  const [fullProfile, setFullProfile] = useState({});

  const handleClick = (id) => {
    setFullProfile((prev) => ({
      ...fullProfile,
      [id]: !prev[id],
    }));
  };

  const mentorsDetails = [
    {
      name: "Aravind Prasad",
      pic: aravindPic,
      designation: "Dept. of Life Education",
      profile: `Aravind Prasad was born in 1985 to spiritually inclined parents and
    was always curious about life and the world around him. He found
    that modern education was not fulfilling and searched for something
    more logical and interesting. In 2003, he dedicated 6 years of his
    teenage life to learning life skills and spiritual wisdom at a
    Gurukulam. After serving as the head of the department for Indian
    Culture at a prestigious institute in Guyana, he returned to India
    and co-founded an International Yoga Teacher Training Institute in
    Mysore. He then focused on self-Sadhana and farming, and began
    conducting personal online sessions on yoga philosophy. Aravind is
    the Founder Director of Yogakshema and the lead Mentor for the
    Division of Wellness at Yogakshema Gurukulam, where he offers
    creative and interesting sessions on wellness that are easily
    understandable for laypeople.`,
    },
    {
      name: "Lipi Pushpakaran",
      pic: lipiPic,
      designation: "Dept. of Healing",
      profile: `Lipi Prasad was born in 1985 to spiritually inclined parents and
  was always curious about life and the world around him. He found
  that modern education was not fulfilling and searched for something
  more logical and interesting. In 2003, he dedicated 6 years of his
  teenage life to learning life skills and spiritual wisdom at a
  Gurukulam. After serving as the head of the department for Indian
  Culture at a prestigious institute in Guyana, he returned to India
  and co-founded an International Yoga Teacher Training Institute in
  Mysore. He then focused on self-Sadhana and farming, and began
  conducting personal online sessions on yoga philosophy. Aravind is
  the Founder Director of Yogakshema and the lead Mentor for the
  Division of Wellness at Yogakshema Gurukulam, where he offers
  creative and interesting sessions on wellness that are easily
  understandable for laypeople.`,
    },
    {
      name: "Ananta Sharma",
      pic: anantaPic,
      designation: "Dept. of Indic Wisdom",
      profile: `Ananta Prasad was born in 1985 to spiritually inclined parents and
  was always curious about life and the world around him. He found
  that modern education was not fulfilling and searched for something
  more logical and interesting. In 2003, he dedicated 6 years of his
  teenage life to learning life skills and spiritual wisdom at a
  Gurukulam. After serving as the head of the department for Indian
  Culture at a prestigious institute in Guyana, he returned to India
  and co-founded an International Yoga Teacher Training Institute in
  Mysore. He then focused on self-Sadhana and farming, and began
  conducting personal online sessions on yoga philosophy. Aravind is
  the Founder Director of Yogakshema and the lead Mentor for the
  Division of Wellness at Yogakshema Gurukulam, where he offers
  creative and interesting sessions on wellness that are easily
  understandable for laypeople.`,
    },
    {
      name: "Gayathri Melnad",
      pic: gayathriPic,
      designation: "Dept. of Wellness",
      profile: `Ananta Prasad was born in 1985 to spiritually inclined parents and
  was always curious about life and the world around him. He found
  that modern education was not fulfilling and searched for something
  more logical and interesting. In 2003, he dedicated 6 years of his
  teenage life to learning life skills and spiritual wisdom at a
  Gurukulam. After serving as the head of the department for Indian
  Culture at a prestigious institute in Guyana, he returned to India
  and co-founded an International Yoga Teacher Training Institute in
  Mysore. He then focused on self-Sadhana and farming, and began
  conducting personal online sessions on yoga philosophy. Aravind is
  the Founder Director of Yogakshema and the lead Mentor for the
  Division of Wellness at Yogakshema Gurukulam, where he offers
  creative and interesting sessions on wellness that are easily
  understandable for laypeople.`,
    },
  ];

  return (
    <div className="bg-[#f0f5f1]">
      <div className="container mx-auto py-5 lg:py-20">
        <h3 className="text-center text-3xl text-gray-700 font-bold tracking-wider uppercase">
          Our Mentors{" "}
        </h3>

        <div className="flex flex-col gap-5 md:justify-around p-6 md:flex-row ">
          {mentorsDetails.map(({ name, pic, designation }) => {
            return (
              <div
                key={name}
                className="flex flex-col justify-center items-center rounded-lg p-5 shadow-sm hover:shadow-lg"
              >
                <Image
                  src={pic}
                  width="150"
                  height="150"
                  className="rounded-full"
                  alt={name}
                />
                <h3 className="py-2 text-lg font-bold">{name}</h3>
                <h3 className="pb-2">{designation}</h3>
              </div>
              // {/* <div className="pt-6">
              //   <h3 className="text-lg font-bold mb-2 ">{name}</h3>
              //   <h3 className="">{designation}</h3> */}
              // {/* <p
              //   className={
              //     fullProfile[`${index}`]
              //       ? "text-sm leading-6 text-gray-600 lg:line-clamp-none"
              //       : "line-clamp-4 text-sm leading-6 text-gray-600 lg:line-clamp-none"
              //   }
              // >
              //   {profile}
              // </p> */}
              // {/* {fullProfile[index] ? (
              //   <button
              //     className="text-sm italic text-red-300 float-right lg:hidden"
              //     onClick={() => handleClick(index)}
              //   >
              //     less
              //   </button>
              // ) : (
              //   <button
              //     className="text-sm italic text-red-300 float-right lg:hidden"
              //     onClick={() => handleClick(index)}
              //   >
              //     more
              //   </button>
              // )} */}
              // {/* </div> */}
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
