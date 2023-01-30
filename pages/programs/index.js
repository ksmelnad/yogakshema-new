import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "@/components/container";
import { PortableText } from "@portabletext/react";
import { getServerSideProps } from "@/components/programs";

function Programs({ programs }) {
  // console.log("Programs: ", programs);
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

      <div className="container py-5">
        <div className="w-25 text-center py-5">
          <h3 className="text-md font-bold tracking-wider uppercase bg-gradient-to-r from-red-700 to-orange-100 text-transparent bg-clip-text">
            Our Programs{" "}
          </h3>
        </div>

        {programs.map((program, index) => {
          return (
            <div key={index} className="sm:p-0">
              <div className="max-w-2xl px-4 mx-auto bg-white rounded-lg sm:max-w-xl dark:bg-gray-800 cursor: auto; hover:shadow-md">
                <div className="flex items-center justify-between"></div>
                <div className="mt-2">
                  <Link
                    href={`/programs/${program.slug.current}`}
                    className="pb-5 text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200 hover:underline"
                  >
                    {program.title}
                  </Link>
                </div>
                <div className="pt-5 pb-5">
                  Dept. of {program.category.title}
                </div>
                <div>
                  <PortableText
                    value={program.body}
                    className="mt-2 text-gray-600 dark:text-gray-300"
                  />
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
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Programs;

export { getServerSideProps };
