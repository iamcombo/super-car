import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { loadCursor } from "@/utils/cursor";
import PageRouteProgress from "@/utils/PageRouteProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageRouteAnimation from "@/components/PageRouteAnimation";
import Head from "next/head";
// import Snowfall from 'react-snowfall'

export default function App({ Component, pageProps }: AppProps) {
  PageRouteProgress();
  const router = useRouter();
  const ballCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ballCanvas.current) {
      return;
    }

    return loadCursor(ballCanvas.current);
  }, []);

  return (
    <>
      <Head>
        <title>Piset Heang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Snowfall radius={[0.5, 3]} /> */}
      {/*===> Header <===*/}
      <Header />
      {/*===> Main <===*/}
      <PageRouteAnimation keyProp={router.asPath}>
        <main className="mx-auto max-w-3xl px-8 md:px-0 md:py-16 lg:py-8">
          <Component {...pageProps} />
        </main>
      </PageRouteAnimation>
      {/*===> Footer <===*/}
      <Footer />
      {/*===> Cursor <===*/}
      <div
        ref={ballCanvas}
        className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border border-black bg-transparent opacity-0 shadow-md duration-200 dark:border-white"
      />
    </>
  );
}
