import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Noto_Sans } from 'next/font/google';
import { Footer, Header, Cursor, PageRouteAnimation } from "@/components";
import PageRouteProgress from "@/utils/n-progress";

import type { AppProps } from "next/app";

const notoSans = Noto_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  PageRouteProgress();
  const router = useRouter();

  return (
    <div className={notoSans.className}>
      <Head>
        <title>Piset Heang</title>
        <meta name="description" content="Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <Header />

      <PageRouteAnimation keyProp={router.asPath}>
        <div className="mx-auto max-w-3xl px-8 md:px-0 md:py-16 lg:py-8">
          <Component {...pageProps} />
        </div>
      </PageRouteAnimation>
      <Footer />
    </div>
  );
}
