import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineHeart} from 'react-icons/ai'
type ProductProps = {
    dataset: {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
    }
}
function Product({dataset}:ProductProps) {
 
  return (
    <div className='py-5 px-5 bg-white rounded-lg'>
      <Image className='block mx-auto h-1/2 object-contain' alt={dataset.title} loader={() => dataset.image} src={dataset.image} height={120} width={120}/>
      <h1 className='text-xl mt-3'>{dataset.title}</h1>
      <h2 className='text-2xl font-semibold'>${dataset.price}</h2>
      <div className='flex items-center justify-around mt-3'>
        <button className='border-2 border-black rounded-3xl px-3 py-1 hover:text-white hover:bg-black'>Add to Cart</button>
        <button className='border-2 border-black rounded-full text-red-500 p-1.5 hover:bg-red-500 hover:text-black'><AiOutlineHeart size='1.5rem'/></button>
       
      </div>
      <Link href='/FullProduct' ><h1 className='mt-2 text-center underline text-black hover:text-blue-400'>View Product</h1></Link>
    </div>
  )
}

export default Product
