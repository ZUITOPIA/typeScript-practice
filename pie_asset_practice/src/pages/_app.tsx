import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
