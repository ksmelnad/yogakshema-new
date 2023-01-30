import '@/styles/globals.css'
import "tailwindcss/tailwind.css";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        {/* <div className="flex flex-col h-screen"> */}

        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* </div> */}
      </SessionProvider>
    </>
  );
}
