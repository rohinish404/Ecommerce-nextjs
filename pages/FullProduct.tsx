import React, { useState } from "react";
import { useProductContext } from "../contexts/MainContext";
import Image from "next/image";
function FullProduct() {

  const {
    product,
    idState,
    cartItems,
    setCartItems,
    totalPrice, settotalPrice
  } = useProductContext();
 

  let sameId;
  let sametf;

  return (
    <div>
      {product.map(function (data, id) {
        if (data.id === idState) {
          const [quantity,setQuantity] = useState(data.quantity);
          data.quantity = quantity
          return (
            <div key={id}>
              <div
                className="absolute top-10 w-screen p-12 flex justify-around"
                key={id}
              >
                <Image
                  alt={data.title}
                  loader={() => data.image}
                  src={data.image}
                  height={200}
                  width={200}
                ></Image>
                <div className="bg-gray-100 p-5 rounded-2xl w-2/5">
                  <h1 className="text-xl font-semibold">{data.title}</h1>
                  <p className="mt-3 text-s font-light">
                    <span className="text-l font-semibold">
                      Description:
                      <br />{" "}
                    </span>
                    {data.description}
                  </p>
                  <h1 className="mt-5 text-xl">${data.price}</h1>
                  <button
                    className="mt-4 border-2 border-black rounded-3xl px-3 py-1 hover:text-white hover:bg-black"
                    onClick={() => {
                      sameId = cartItems.find((x) => data.id == x.id);

                      sametf = sameId ? true : false;
                      if (!sametf) {
                        setCartItems((prev) => {
                          return [
                            ...prev,
                            {
                              id: data.id,
                              title: data.title,
                              price: data.price,
                              image: data.image,
                              quantity:data.quantity,
                            },
                          ];
                        });
                      }
                      {cartItems.map(function(data,key){
                        settotalPrice(
                            (prev) => prev + data.quantity * Number(data.price)
                          );
                      })}
                    }}
                  >
                    Add to Cart
                  </button>
                  <div>
                    <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
                    <p>{quantity}</p>
                    <button onClick={()=>quantity>=2 && setQuantity((prev)=>prev-1)}>-</button>
                  </div>
                </div>
              </div>

              <div className="relative top-1/2 text-center">
                <h1 className="text-xl ">You may also like</h1>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default FullProduct;
