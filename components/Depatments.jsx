import React from "react";
import styles from "../styles/Home.module.css";

function Depatments() {
  return (
    <>
      <div className="relative">
        <section className={`${styles.shapedivider}`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#fefaf2"
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            ></path>
          </svg>
        </section>
      </div>
      <div className="bg-[#f0f5f1]">
        <div className="container mx-auto pt-20 md:pt-20 ">
          <h3 className="text-center pt-20 text-3xl text-gray-700 font-bold tracking-wider uppercase">
            Our Departments{" "}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 md:pt-5 cursor: auto;">
            <div className="p-6 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-template inline-block w-12 h-12 text-red-300"
                  stroke="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    strokeWidth="1"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">Wellness</h3>

              <p className="text-sm leading-6 text-gray-600">
                The wellness department focuses on helping individuals achieve
                optimal physical, mental, and emotional health through the
                principles of Ayurveda, yoga, nutrition, and self-care. Our team
                of experts will guide you through the process of understanding
                your body and mind and how to maintain balance through proper
                diet, exercise, and stress management.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12"
                  stroke="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    // stroke-width="1"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">Wisdom</h3>

              <p className="text-sm leading-6 text-gray-600">
                The wisdom department is dedicated to helping individuals
                develop inner wisdom and spiritual growth through the study of
                Indian philosophy, meditation, yoga, and spiritual practices.
                Our team of experts will guide you through the process of
                self-discovery and understanding the connection between the
                mind, body, and spirit.
              </p>
            </div>

            <div className="p-6  rounded-lg cursor: auto;">
              <div className="mb-5 cursor: auto;">
                <svg
                  className="hi-outline hi-cog inline-block w-12 h-12"
                  stroke="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    strokeWidth="1"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    strokeWidth="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">Health</h3>

              <p className="text-sm leading-6 text-gray-600">
                The health department is focused on helping individuals achieve
                optimal physical health through the principles of Ayurveda,
                yoga, nutrition, and traditional Indian medicine. Our team of
                experts will guide you through the process of understanding your
                body and how to maintain balance through proper diet, exercise,
                and traditional medical practices.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-sparkles inline-block w-12 h-12"
                  stroke="red"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    strokeWidth="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">Healing</h3>

              <p className="text-sm leading-6 text-gray-600">
                The healing department is dedicated to helping individuals
                achieve optimal physical, mental, and emotional health through
                the principles of Ayurveda, yoga, traditional Indian medicine,
                and spiritual practices. Our team of experts will guide you
                through the process of understanding your body and mind, and how
                to maintain balance through proper diet, exercise, meditation,
                and spiritual practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Depatments;
