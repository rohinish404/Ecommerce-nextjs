import React from 'react'
import { useProductContext } from '../contexts/MainContext';
import Image from 'next/image';
function Cart() {
    const {showCart,cartItems,setQuantities} = useProductContext();
    console.log(cartItems)
  return (
    <div>
    {showCart && 
    <div className='z-40 border-2 border-black h-screen w-1/4 fixed right-0 top-0 transition ease-in duration-500 bg-white'>
        {cartItems.map(function(cartItem,id){
            return(
                <div key={id} className='border-2 border-black rounded-2xl p-5 m-5'>
                    <Image src={cartItem.image} width={50} height={50} loader={() => cartItem.image} alt={''}/>
                    <div>
                        <h1>{cartItem.title}</h1>
                        <p>{cartItem.price}</p>
                        <h1>{setQuantities}</h1>
                        <p>Quantity: </p>
                    </div>
                </div>
            )
        })}
    </div>}
    </div>
  )
}

export default Cart
