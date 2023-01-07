import Head from 'next/head'
import { useState,useEffect,useContext } from 'react';
import { createClient } from '@supabase/supabase-js'
import { MainContext, useProductContext} from '../contexts/MainContext';
import ProductsPg from '../components/ProductsPg';
import Banner from '../components/Banner';

export async function getStaticProps(){
  

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );
  return {
    props:{},
  }
  }

export default function Home() {
  
 const { product } =useProductContext()
  
  return (
    <>
      <Head>
        <title>Ecommerce app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='bg-gray-100'>
        <Banner />
        <ProductsPg data={product} />

      </div>
    </>
  )
}
