import React from 'react'
import { useProductContext } from '../contexts/MainContext'

function FullProduct() {
  const {product} = useProductContext()
  console.log(product)
  return (
    <div>
      <h1 className='mt-28'>hi</h1>
    </div>
  )
}

export default FullProduct
