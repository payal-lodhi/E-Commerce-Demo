import "bootstrap/dist/css/bootstrap.css";
import "../styles/templatemo.css";
import type { AppProps } from "next/app";
import Context from "../context/Context";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <>
        <Component {...pageProps} />
      </>
    </Context>
  );
}

export default MyApp;
