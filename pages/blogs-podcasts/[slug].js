import Head from "next/head";
import sanityClient from "@sanity/client";
import { sanityConfig } from "@/lib/config";
import { PortableText } from "@portabletext/react";
import Date from "@/components/date";
import { urlForImage } from "@/lib/sanity";
import { RichTextComp } from "@/components/RichTextComp";
import Image from "next/image";

const client = sanityClient(sanityConfig);

const Post = (post) => {
  return (
    <>
      <Head>
        <title>Yogakshema Gurukulam</title>
        <meta
          name="description"
          content={`Yogakshema Gurukulam - ${post.post[0].title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIco.ico" />
      </Head>
      <div className="min-h-screen container mx-auto max-w-2xl px-5">
        <div className="max-w-2xl py-10 px-4 bg-white rounded-lg dark:bg-gray-800 cursor: auto">
          <div>
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              <Date dateString={post.post[0]._createdAt} />
            </span>
          </div>
          <div>
            {post.post[0].mainImage ? (
              <Image
                className="h-48 py-5 w-full object-cover"
                src={urlForImage(post.post[0].mainImage).url()}
                alt="Main Image"
                width={500}
                height={300}
              />
            ) : null}
          </div>
          <div className="mt-2 text-2xl pb-5 font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">
            {post.post[0].title}
          </div>
          <PortableText
            value={post.post[0].body}
            components={RichTextComp}
            className="px-8"
          />
          {/* <div className="flex items-center"> */}
          {/* <img
            src="https://stackdiary.com/140x100.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 rounded-full sm:block"
          /> */}
          <div className="mt-4 font-bold text-gray-700 dark:text-gray-200">
            {post.post[0].author.name}
          </div>
          <div className="pt-2 space-x-4">
            {post.post[0].categories.map((category, index) => {
              return (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                >
                  {category.title}
                </span>
              );
            })}
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 border-t border-slate-200 dark:border-slate-200/5">
          <h2 className="text-xl font-semibold text-slate-900 tracking-tight dark:text-white">
            Get all of our updates directly to your&nbsp;inbox.
            <br />
            Sign up for our newsletter.
          </h2>
          <div className="mt-5 max-w-md">
            <form className="flex flex-wrap -mx-2">
              <div className="px-2 grow-[9999] basis-64 mt-3">
                <div className="group relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"
                  >
                    <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
                    <path d="m6 7 6 5 6-5"></path>
                  </svg>
                  <input
                    type="email"
                    name="email_address"
                    required=""
                    autoComplete="email"
                    aria-label="Email address"
                    className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                    placeholder="Subscribe via email"
                  />
                </div>
              </div>
              <div className="px-2 grow flex mt-3">
                <button
                  // type="submit"
                  className="bg-red-400 hover:bg-red-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
    //   <div className="flex items-center justify-between">
    //     <span className="text-sm font-light text-gray-600 dark:text-gray-400">
    //       {post.post[0].createdAt}
    //     </span>
    //     {/* {post.categories.map((category, index) => {
    //               return (
    //                 <a
    //                   key={index}
    //                   className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
    //                 >
    //                   {category}
    //                 </a>
    //               );
    //             })} */}
    //   </div>
    //   <div className="mt-2">
    //     {post.post[0].title}

    //     {/* <p className="mt-2 text-gray-600 dark:text-gray-300">
    //       <PortableText value={post.post[0].body} />
    //     </p> */}
    //   </div>
    //   <div className="flex items-center justify-between mt-4">
    //     <div className="flex items-center">{post.post[0].author}</div>
    //   </div>
    // </div>
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
    categories[] -> { title },
    mainImage,
    body, 
    _createdAt,
    author -> { name }
  }`;
  const post = await client.fetch(query);
  // .then((res) => res.json());
  // console.log("Result:", result);
  // const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};

export default Post;
