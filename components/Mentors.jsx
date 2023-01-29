import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import Image from "next/image";
import aravindPic from "../public/Aravind.jpg";
import lipiPic from "../public/Lipi.jpeg";
import gayathriPic from "../public/Gayathri.jpeg";
import anantaPic from "../public/Ananta.jpg";

function Mentors() {
  const mentorsDetails = [
    {
      name: "Aravind Prasad",
      pic: aravindPic,
      designation: "Founder Director & Lead Mentor – Dept of Life Education",
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
      designation: "Director & Lead Mentor – Dept of Healing",
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
      designation: "Director & Lead Mentor – Dept of Indic Wisdom",
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
      designation: "Director & Lead Mentor – Dept of Wellness",
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
    <div className="container mx-auto px-5 pt-20 pb-20">
      <div className="w-25 text-center pb-10">
        <h3 className="text-md font-bold tracking-wider uppercase bg-gradient-to-r from-red-700 to-orange-100 text-transparent bg-clip-text">
          Our Mentors{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-5 pb-5 lg:pt-5 lg:pb-5"></div>
      {mentorsDetails.map((person) => {
        return (
          <div
            key={person.name}
            className="grid grid-cols-2 gap-4 p-6 rounded-lg hover:shadow-lg  "
          >
            <div className="flex justify-center items-center mb-5 ">
              <Image
                src={person.pic}
                width="250"
                height="250"
                className="rounded-lg border-none"
                alt={person.name}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 ">{person.name}</h3>
              <h3 className="">{person.designation}</h3>
              <p className="text-sm leading-6 text-gray-600">
                {person.profile}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mentors;
