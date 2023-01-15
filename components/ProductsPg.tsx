import React from 'react'
import Footer from './Footer'
import Product from './ProductCard'
type DataProps = {
    data:{
        id:number
        title:string
        price:string
        category:string
        description:string
        image:string
        quantity:number
        total:number
    }[]
 
}

function ProductsPg({data}:DataProps) {

  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 m-5 p-5 pb-8'>
      {data.map(function(data1,id){
          return(
            <Product key={id} dataset={data1}/>

          )
      })}
   
    </div>
     <Footer />
     </div>
  )
}

export default ProductsPg
