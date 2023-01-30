import Head from "next/head";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";
import Container from "@/components/container";
import Date from "@/components/date";
import { urlForImage } from "@/lib/sanity";
import { sanityConfig } from "@/lib/config";

const client = sanityClient(sanityConfig);

const Program = (program) => {
  return (
    <div className="min-h-screen max-w-2xl  container mx-auto px-5 bg-white pt-20 rounded-lg dark:bg-gray-800 cursor: auto">
      <Head>
        <title>Yogakshema Gurukulam</title>
        <meta
          name="description"
          content={`Yogakshema Gurukulam - ${program.program[0].title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIco.ico" />
      </Head>
      <div className="mt-2 text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">
        {program.program[0].title}
      </div>
      <div className="pt-5 pb-5">
        Dept. of {program.program[0].category.title}
      </div>
      <PortableText value={program.program[0].body} className="px-8" />
      {/* <div className="flex items-center"> */}
      {/* <img
            src="https://stackdiary.com/140x100.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 rounded-full sm:block"
          /> */}
      <div className="mt-4 font-bold text-gray-700 dark:text-gray-200">
        {program.program[0].author.name}
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = `*[ slug.current == "${pageSlug}" ]{
    title, 
    body, 
    author -> {
      name
    },
    category -> { title }
  }`;
  const program = await client.fetch(query);
  // .then((res) => res.json());
  // console.log("Result:", result);
  // const program = result.result[0];

  if (!program) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        program,
      },
    };
  }
};

export default Program;
