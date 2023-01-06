import React from 'react'

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
    console.log(data)
  return (
    <div>
      {data.map(function(data1,id){
          return(
            <h1 className='text-3xl text-black' key={id}>{data1.title}</h1>
          )
      })}
  
    </div>
  )
}

export default ProductsPg
