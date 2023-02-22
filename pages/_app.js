import '@/styles/globals.css'
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
