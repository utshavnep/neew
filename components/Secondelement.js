import Image from 'next/image'
import React from 'react'
function Secondelement() {
  return (
    <div style={{alignItems:'center', justifyContent:'center',  margin:10}}>
    <Image style={{height:500, width:'100%'   }} className='w-full'  src={require("../public/hy.jpg")} />
</div>
  )
}

export default Secondelement