import React from 'react'
import Product from './ProductCard'
type DataProps = {
    data:{
        id:number
        title:string
        price:string
        category:string
        description:string
        image:string

    }[]
 
}

function ProductsPg({data}:DataProps) {

  return (
    <div className='grid grid-cols-3 gap-16 m-5 p-5 pb-8'>
      {data.map(function(data1,id){
          return(
            <Product key={id} dataset={data1}/>
          )
      })}
  
    </div>
  )
}

export default ProductsPg
