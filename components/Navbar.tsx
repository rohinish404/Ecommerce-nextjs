import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-white fixed left-0 top-0 w-screen flex justify-around items-center py-3 border-b-2 border-black z-50">
      <h1 className="text-xl font-semibold">
        <Link href="/">BUYHERE</Link>
      </h1>
      <div className="flex items-center">
        <button className="hover:text-red-500">
          <AiOutlineShoppingCart size="2rem" />
        </button>
        <Link href="/">
          <h1 className="ml-12 hover:text-red-500">Wishlist</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
