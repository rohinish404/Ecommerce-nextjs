import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useProductContext } from "../contexts/MainContext";
import Cart from "./Cart";

function Navbar() {
  const {showCart,showCartHandler} = useProductContext()
  return (
    <div className="bg-white fixed left-0 top-0 w-screen flex justify-around items-center py-3 border-b-2 border-black z-50 mb-5">
      <h1 className="text-xl font-semibold">
        <Link href="/">BUYHERE</Link>
      </h1>
      <div className="flex items-center">
        <button onClick={showCartHandler} className="hover:text-red-500">
          <AiOutlineShoppingCart size="2rem" />
        </button>
        <Cart />
        <Link href="/">
          <h1 className="ml-12 hover:text-red-500">Wishlist</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
