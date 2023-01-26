import Head from "next/head";
import Link from "next/link";
import { CMS_NAME } from "@/lib/constants";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { urlForImage } from "@/lib/sanity";
import { sanityConfig } from "@/lib/config";
import Date from "@/components/date";

const client = sanityClient(sanityConfig);

export default function Index({ posts }) {
  // console.log("Posts:", posts);

  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <div className="container mx-auto px-5 grid grid-cols-3 gap-4">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    <Date dateString={post._createdAt} />
                  </span>
                </div>
                <div className="mt-2">
                  {post.mainImage ? (
                    <img
                      className="h-48 w-full object-cover"
                      src={urlForImage(post.mainImage).url()}
                      alt=""
                    />
                  ) : null}
                  <br />
                  <Link
                    href={`/blogs-podcasts/${post.slug.current}`}
                    className="mt-2 text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200 hover:underline"
                  >
                    {post.title}
                  </Link>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                    {post.author.name}
                  </div>

                  <div className="flex justify-around">
                    {post.categories.map((category, index) => {
                      return (
                        <div
                          key={index}
                          className="px-3 py-1 text-sm font-bold text-gray-600 transition-colors duration-200 transform bg-gray-100 rounded"
                        >
                          {category.title}
                        </div>
                      );
                    })}
                  </div>

                  <br />
                </div>
                <div>
                  <Link
                    href={`/blogs-podcasts/${post.slug.current}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read more ⟶
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

export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == 'post'] {
    title,
      categories[] -> {
        title
      },
      author -> { name },
      mainImage,
      slug,
      _createdAt
  }`;
  const posts = await client.fetch(query);

  if (!posts) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};
