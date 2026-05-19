import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Anton, Manrope } from "next/font/google";

import { cn } from "@/utils/cn";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import "@/styles/globals.css";

const getManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const getAnton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cn(
        `max-container ${getManrope.className} ${getAnton.className} bg-black flex flex-col items-center justify-center`
      )}
    >
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}

export default appWithTranslation(App);
