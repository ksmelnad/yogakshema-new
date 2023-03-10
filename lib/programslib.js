import sanityClient from "@sanity/client";
import { sanityConfig } from "@/lib/config";

const client = sanityClient(sanityConfig);

export const getServerSideProps = async (pageContext) => {
  const query = `*[_type == 'program'] {
    title,
    category -> { title },
    author -> { name },
    slug,
    body
  }`;
  const programs = await client.fetch(query);

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
