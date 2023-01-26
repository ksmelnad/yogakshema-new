import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import Image from "next/image";
import aravindPic from "../public/Aravind.jpg";
import lipiPic from "../public/Lipi.jpeg";
import gayathriPic from "../public/gayathri.jpeg";
import anantaPic from "../public/ananta.jpg";

function Mentors() {
  return (
    <div className="container mx-auto px-5 pt-20">
      <div className="text-center text-sm font-bold pb-10 tracking-wider text-indigo-600 uppercase">
        Our Mentors
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-5 pb-10 lg:pt-5 lg:pb-20 cursor: auto;">
        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="mb-5">
            <Image
              src={aravindPic}
              width="250"
              height="250"
              alt="Aravind Prasad"
            />
          </div>

          <h3 className="text-lg font-bold mb-2">Aravind Prasad</h3>

          <p className="text-sm leading-6 text-gray-600">
            Metus potenti velit sollicitudin porttitor magnis elit lacinia
            tempor varius, ut cras orci vitae parturient id nisi vulputate
            consectetur, primis venenatis cursus tristique malesuada viverra
            congue risus.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="mb-5">
            <Image src={lipiPic} width="250" height="250" alt="Lipi" />
          </div>

          <h3 className="text-lg font-bold mb-2">Lipi Pushpakaran</h3>

          <p className="text-sm leading-6 text-gray-600">
            Metus potenti velit sollicitudin porttitor magnis elit lacinia
            tempor varius, ut cras orci vitae parturient id nisi vulputate
            consectetur, primis venenatis cursus tristique malesuada viverra
            congue risus.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg cursor: auto;">
          <div className="mb-5 cursor: auto;">
            <Image
              src={anantaPic}
              width="250"
              height="250"
              alt="Ananta Sharma"
            />
          </div>

          <h3 className="text-lg font-bold mb-2">Ananta Sharma</h3>

          <p className="text-sm leading-6 text-gray-600">
            Metus potenti velit sollicitudin porttitor magnis elit lacinia
            tempor varius, ut cras orci vitae parturient id nisi vulputate
            consectetur, primis venenatis cursus tristique malesuada viverra
            congue risus.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="mb-5">
            <Image
              src={gayathriPic}
              width="250"
              height="250"
              alt="Gayathri Melnad"
            />
          </div>

          <h3 className="text-lg font-bold mb-2">Gayathri Melnad</h3>

          <p className="text-sm leading-6 text-gray-600">
            Metus potenti velit sollicitudin porttitor magnis elit lacinia
            tempor varius, ut cras orci vitae parturient id nisi vulputate
            consectetur, primis venenatis cursus tristique malesuada viverra
            congue risus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mentors;
