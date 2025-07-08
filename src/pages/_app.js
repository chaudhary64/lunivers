import BackgroundMask from "@/components/BackgroundMask";
import Cursor from "@/components/Cursor";
import Meta from "@/components/Meta";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Nav />
      <Cursor />
      <Component {...pageProps} />
      <BackgroundMask />
    </>
  );
}
