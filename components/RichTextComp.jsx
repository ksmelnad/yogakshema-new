import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity";

export const RichTextComp = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-xl pt-2 pb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-lg">{children}</h2>,
    h3: ({ children }) => <h3 className="text-md">{children}</h3>,

    blockquote: ({ children }) => (
      <blockquote className="p-5 border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="list-disc pt-5 pb-5  space-y-3 space-x-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pt-5 pb-5  space-y-3 space-x-5">
        {children}
      </ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  // listItem: {
  //   // Ex. 1: customizing common list types
  //   bullet: ({ children }) => (
  //     <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
  //   ),

  //   // Ex. 2: rendering custom list items
  //   checkmarks: ({ children }) => <li>✅ {children}</li>,
  // },
};
