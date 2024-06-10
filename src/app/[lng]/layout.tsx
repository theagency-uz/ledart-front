import NextTopLoader from "nextjs-toploader";
import { dir } from "i18next";
import Script from "next/script";
import AllScripts from "@/components/allScripts";
import { languages } from "../i18n/settings";

import "../globals.css";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export const metadata = {
  title: {
    default: "",
    template: "",
  },
  description: "",
  keywords: [],
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <AllScripts />
        {/* <div
          id="google_translate_element"
          style={{
            width: "0px",
            height: "0px",
            position: "absolute",
            left: "50%",
            zIndex: -9999,
          }}
        ></div> */}
        <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          shadow="0 0 10px #fff,0 0 5px #fff"
        />
        <Header lng={lng} />
        <div className="layout">{children}</div>

        <Footer lng={lng} />

        {/* for google translate */}
        {/* {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script src="https://translate.google.com/translate_a/element.js?cb=TranslateInit" />
        )} */}
        <Script src="/scripts/translation.js" />
      </body>
    </html>
  );
}
