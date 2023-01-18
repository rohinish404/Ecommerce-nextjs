import React from 'react'
import Image from 'next/image'
type Banner1 = {
  id:number
  href: string
  name: string
}
function Banner({bann}:{bann:Banner1[]}) {
  
  return (
    <div className='m-10 mt-15 flex items-center p-5 pt-10 rounded-lg'>
        <h2 className='text-5xl'>{bann[0].name}!!</h2>
        <Image src={bann[0].href} height={1000} width={800} alt=""/>
    </div>
  )
}

export default Banner
