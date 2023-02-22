import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function ProgramsComp({ programs }) {
  return (
    <div className="relative bg-[#fefaf2] pt-20">
      <section className={`${styles.shapedivider}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#f0f5f1"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          ></path>
        </svg>
      </section>
      <div className="container mx-auto pt-20 py-5 lg:py-20">
        <h3 className="text-center text-3xl text-gray-700 font-bold tracking-wider uppercase">
          Our Programs{" "}
        </h3>

        <div className="flex flex-col gap-5 md:justify-around p-6 lg:flex-row ">
          {programs.map((program, index) => {
            return (
              <div
                key={index}
                className="flex flex-col min-w-[300px] justify-center rounded-lg p-5 bg-white shadow-sm hover:shadow-lg"
              >
                <Link
                  href={`/programs/${program.slug.current}`}
                  className="pb-5 text-xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200 hover:underline"
                >
                  {program.title}
                </Link>
                <div className="pt-5 pb-5">
                  Dept. of {program.category.title}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/programs/${program.slug.current}`}
                    className="text-red-400 dark:text-blue-400 hover:underline"
                  >
                    Learn more ⟶
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgramsComp;
