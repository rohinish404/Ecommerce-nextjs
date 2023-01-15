import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {AiFillHeart} from 'react-icons/ai'
import { useProductContext } from '../contexts/MainContext';
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
  const {idState,setidState} = useProductContext()
  const setidStateHandler = ()=>{
    setidState(dataset.id)
  }

  return (
    <div className='py-5 px-5 bg-white rounded-lg flex flex-col items-center justify-center'>
  <Image className='block mx-auto h-1/2 object-contain sm:h-64 sm:w-64' alt={dataset.title} loader={() => dataset.image} src={dataset.image} height={120} width={120}/>
  <h1 className='text-xl mt-3 text-center sm:text-2xl'>{dataset.title}</h1>
  <h2 className='text-2xl font-semibold text-center sm:text-4xl'>${dataset.price}</h2>
  <div className='flex items-center justify-around mt-3'>
    <button className='border-2 border-black rounded-full text-red-500 p-1.5 hover:bg-red-500 hover:text-white sm:text-lg sm:px-4 sm:py-2'><AiFillHeart size='1.5rem'/></button>
  </div>
  <Link href='/FullProduct' ><button className='mt-4 text-center underline text-black hover:text-blue-400 block mx-auto sm:text-lg sm:px-4 sm:py-2' onClick={setidStateHandler}>View Product</button></Link>
</div>
  )
}

export default Product
