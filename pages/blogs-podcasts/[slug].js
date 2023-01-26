import { useRouter } from "next/router";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";
import Container from "@/components/container";
import Date from "@/components/date";
import { urlForImage } from "@/lib/sanity";

const client = sanityClient({
  dataset: "production",
  projectId: "dvls582m",
  apiVersion: "v2021-10-21",
  useCdn: true,
});

const Post = (post) => {
  const router = useRouter();
  //same name as name of your file, can be [slug].js; [specialId].js - any name you want
  const { slug } = router.query;
  //result will be '55' (string)

  console.log("Categories:", post.post[0].categories);

  return (
    <Container>
      <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 cursor: auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            <Date dateString={post.post[0]._createdAt} />
          </span>
          {post.post[0].categories.map((category, index) => {
            return (
              <span
                key={index}
                className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
              >
                {category.title}
              </span>
            );
          })}
        </div>
        <div>
          <br />
          {post.post[0].mainImage ? (
            <img
              className="h-48 w-full object-cover"
              src={urlForImage(post.post[0].mainImage).url()}
              alt=""
            />
          ) : null}
          <br />
        </div>
        <div className="mt-2 text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">
          {post.post[0].title}
        </div>
        <PortableText value={post.post[0].body} className="px-8" />
        {/* <div className="flex items-center"> */}
        {/* <img
            src="https://stackdiary.com/140x100.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 rounded-full sm:block"
          /> */}
        <div className="mt-4 font-bold text-gray-700 dark:text-gray-200">
          {post.post[0].author.name}
        </div>
        {/* </div> */}
      </div>
      <br />
    </Container>
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
    categories[] -> {
      title
    },
    mainImage,
    body, 
    _createdAt,
    author -> {
      name
    }
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
