import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import Depatments from "@/components/Depatments";
import ProgramsComp from "@/components/ProgramsComp";
import Newsletter from "@/components/Newsletter";
import Mentors from "@/components/Mentors";
import { getServerSideProps } from "@/lib/programslib";

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
      <main>
        <Hero />
        <Depatments />
        <ProgramsComp programs={programs} />
        <Mentors />
        <Newsletter />
      </main>
    </>
  );
}

export { getServerSideProps };
