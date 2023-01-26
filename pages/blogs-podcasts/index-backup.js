import React from "react";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export async function getStaticProps(context) {
  const client = createClient({
    projectId: "dvls582m",
    dataset: "production",
    useCdn: true,
  });
  const query = `*[_type == 'post']`;
  const blogs = await client.fetch(query);

  return {
    props: {
      blogs,
    },
  };
}

function BlogsPodcasts({ blogs }) {
  // console.log("Blogs:", blogs);

  return (
    <div>
      {/* <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Jan 15, 2022
          </span>
          <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            JavaScript
          </a>
        </div>
        <div className="mt-2">
          <a
            href="https://stackdiary.com/"
            className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            How to sanitiz array() in JS
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Dui urna vehicula tincidunt pretium consequat luctus mi, platea
            fermentum conubia tempus ac orci. Pellentesque dictum malesuada
            cubilia faucibus dignissim mi nascetur senectus, augue ad libero
            efficitur dolor duis lobortis, non etiam sociosqu.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more ⟶
          </a>
          <div className="flex items-center">
            <img
              src="https://stackdiary.com/140x100.png"
              alt="Author Photo"
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              John Doe
            </a>
          </div>
        </div>
      </div> */}

      {blogs.map((post, index) => {
        return (
          <div key={index}>
            <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  {post.createdAt}
                </span>
                {/* {post.categories.map((category, index) => {
                  return (
                    <a
                      key={index}
                      className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    >
                      {category}
                    </a>
                  );
                })} */}
              </div>
              <div className="mt-2">
                <a
                  href="https://stackdiary.com/"
                  className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                >
                  {post.title}
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <PortableText value={post.body} />
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/blogs-podcasts/${post.slug.current}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more ⟶
                </Link>
                <div className="flex items-center">
                  <img
                    src="https://stackdiary.com/140x100.png"
                    alt="Author Photo"
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  />
                  <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                    John Doe
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogsPodcasts;
