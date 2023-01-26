import sanityClient from "@sanity/client";
import { sanityConfig } from "@/lib/config";

const client = sanityClient(sanityConfig);
export const getServerSideProps = async (pageContext) => {
  const query = `*[ _type == "program"]`;
  const programs = await client.fetch(query);
  // .then((res) => res.json());
  // console.log("Result:", result);
  // const post = result.result[0];

  if (!programs) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        programs,
      },
    };
  }
};
