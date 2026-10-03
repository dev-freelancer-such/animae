import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Anton, Manrope } from "next/font/google";

import { cn } from "@/utils/cn";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import "@/styles/globals.css";

const getManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});

const getAnton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        `max-container ${getManrope.className} ${getAnton.className} bg-black flex flex-col items-center justify-center min-h-screen`
      )}
    >
      <Header />
      <main className="container w-full flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
