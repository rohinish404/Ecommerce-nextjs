import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProductProvider } from "../contexts/MainContext";


export default function App({ Component, pageProps }: AppProps) {

  const [showCart, setshowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [setQuantities, settotalQuantities] = useState();

  return (
    <>
      <ProductProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ProductProvider>
    </>
  );
}
