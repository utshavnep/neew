import Image from 'next/image'
import React from 'react'

export default function Newelement() {
  return (
    <div style={{alignItems:'center', justifyContent:'center', margin:10}}>
        <Image style={{height:500, width:'100%'   }} className='w-full'  src={require("../public/img1.jpg")} />
    </div>
  )
}
