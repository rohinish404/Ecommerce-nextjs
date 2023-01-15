import React from "react";
import { useProductContext } from "../contexts/MainContext";
import Image from "next/image";
function Cart() {
  const { showCart, cartItems} =
    useProductContext();
let {xyz} = useProductContext()
 cartItems.forEach(element => {
    xyz+=element.total
  });
  return (
    <div>
      {showCart && (
        <div className="text-black z-40 border-2 border-black h-screen w-1/4 fixed right-0 top-0 transition ease-in duration-500 bg-white overflow-y-auto pb-8">
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
              </div>
            );
          })}
          <div className="p-2 border-y-2 border-black fixed bottom-0 bg-white w-full">
            <button className="ml-4">
              Total Price:
              <span className="ml-24">${xyz.toFixed(2)}</span>
            </button>
            <button  className="ml-20 text-black rounded hover:bg-black hover:text-white mt-2 p-2 py-1 block border-2 border-black">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
