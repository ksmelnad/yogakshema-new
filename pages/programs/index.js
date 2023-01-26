import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "@/components/container";
import { PortableText } from "@portabletext/react";
import { getServerSideProps } from "@/lib/programs";

function Programs({ programs }) {
  // console.log("Programs: ", programs);
  return (
    <div className="container mx-auto px-20 background-color:rgb(255, 255, 255)">
      <div className="text-center text-sm font-bold pb-10 tracking-wider text-indigo-600 uppercase">
        Our Programs
      </div>
      {programs.map((program, index) => {
        return (
          <div key={index}>
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <Link
                  href={`/programs/${program.slug.current}`}
                  className="mt-2 text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200 hover:underline"
                >
                  {program.title}
                </Link>

                <PortableText
                  value={program.body}
                  className="mt-2 text-gray-600 dark:text-gray-300"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/programs/${program.slug.current}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more ⟶
                </Link>
                <div className="flex items-center">
                  <img
                    src="https://stackdiary.com/140x100.png"
                    alt="Author Photo"
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  />
                  <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"></a>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Programs;

export { getServerSideProps };
