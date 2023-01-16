import React, { useState } from "react";
import { useProductContext } from "../contexts/MainContext";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
function Cart() {
  const { showCart, cartItems, setshowCart, setCartItems } =
    useProductContext();
  let { xyz } = useProductContext();
  cartItems.forEach((element) => {
    xyz += element.total;
  });

  const closehandler = () => {
    setshowCart(false);
  };
  console.log(cartItems);

  return (
    <div className="relative">
      {showCart && (
        <div className="text-black z-40 border-2 border-black h-screen w-full fixed right-0 top-0 transition ease-in duration-500 bg-white overflow-y-auto pb-8 sm:w-1/4 sm:h-screen mb-10">
          <button
            onClick={closehandler}
            className="hover:bg-black hover:text-white m-2 transition ease-out duration-500"
          >
            <AiOutlineClose size="2rem" />
          </button>
          {cartItems.map(function (cartItem, id) {
            return (
              <div
                key={id}
                className="border-2 border-black rounded-2xl p-5 m-5"
              >
                <Image
                  src={cartItem.image}
                  width={50}
                  height={50}
                  loader={() => cartItem.image}
                  alt={""}
                />
                <div>
                  <h1>{cartItem.title}</h1>
                  <p>${cartItem.price}</p>
                  <p>Quantity: {cartItem.quantity}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      const updatedCart = cartItems.filter(function (item) {
                        return item.id !== cartItem.id;
                      });
                      setCartItems(updatedCart);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="p-2 border-y-2 border-black fixed bottom-0 bg-white w-full">
            <button className="ml-4">
              Total Price:
              <span className="ml-24">${xyz.toFixed(2)}</span>
            </button>
            <button className="ml-20 text-black rounded hover:bg-black hover:text-white mt-2 p-2 py-1 block border-2 border-black">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
