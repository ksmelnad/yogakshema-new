import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero";
import Depatments from "@/components/Depatments";
import sanityClient from "@sanity/client";
import { sanityConfig } from "@/lib/config";
import { PortableText } from "@portabletext/react";
import { getServerSideProps } from "@/components/programs";
import Programs from "./programs";
import Newsletter from "@/components/newsletter";
import Mentors from "@/components/Mentors.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ programs }) {
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
      {/* <div className="flex felx-grow"> */}

      <Hero />
      <Depatments />
      <Programs programs={programs} />
      <Mentors />
      <Newsletter />
    </>
  );
}

export { getServerSideProps }; 




