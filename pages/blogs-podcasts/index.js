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
import Image from "next/image";

const client = sanityClient(sanityConfig);

export default function Index({ posts }) {
  // console.log("Posts:", posts);

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

      <div className="min-h-screen py-5">
        <div className="w-25 text-center py-5">
          <h3 className="text-md font-bold tracking-wider uppercase bg-gradient-to-r from-red-700 to-orange-100 text-transparent bg-clip-text">
            Our Blogs and Podcasts{" "}
          </h3>
        </div>
        <div className="grid grid-cols-1 py-5 px-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => {
            return (
              <div key={index}>
                <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 dark:bg-gray-800 cursor: auto hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                      <Date dateString={post._createdAt} />
                    </span>
                  </div>
                  <div className="pt-3">
                    {post.mainImage ? (
                      <Image
                        className="h-48 w-full object-cover text-gr "
                        src={urlForImage(post.mainImage).url()}
                        alt="Main Image"
                        width={500}
                        height={300}
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

                  <div className="pt-5 font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                    {post.author.name}
                  </div>

                  <div className="pt-3 space-x-4">
                    {post.categories.map((category, index) => {
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

                  <div className="pt-3">
                    <Link
                      href={`/blogs-podcasts/${post.slug.current}`}
                      className="text-red-400  dark:text-blue-400 hover:underline "
                    >
                      Read ⟶
                    </Link>
                  </div>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == 'post'] {
    title,
    categories[] -> { title },
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
