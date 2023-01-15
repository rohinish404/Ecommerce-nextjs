import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProductProvider } from "../contexts/MainContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}
