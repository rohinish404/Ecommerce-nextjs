import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useProductContext } from "../contexts/MainContext";
import Cart from "./Cart";


function Navbar() {
  const {showCart,showCartHandler,cartItems} = useProductContext()
  return (
    <div className="bg-black text-white fixed left-0 top-0 w-screen flex justify-around items-center py-3 border-b-2 border-black z-50 mb-5">
  <h1 className="text-xl font-semibold">
    <Link href="/">BUYHERE</Link>
  </h1>
  <div className="flex items-center relative">
    <button onClick={showCartHandler} className="hover:text-red-500">
      <div className="border-2 border-white absolute rounded-full left-5 bg-black text-white top-[-0.2rem] text-xs px-1">{cartItems.length}</div>
      <AiOutlineShoppingCart size="2rem" />
    </button>
    <Cart />
    <Link href="/" className="hidden md:block ml-12 hover:text-red-500">
      <h1>Wishlist</h1>
    </Link>
  </div>
</div>
  );
}

export default Navbar;
