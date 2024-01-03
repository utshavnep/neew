import React from 'react'
import herostyles from '@/styles/herosection.module.css'
import commonstyles from '@/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'



import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const Herosection = ({title, imageUrl}) => {
  return (
  <main className={herostyles.main_section}>
<div className={commonstyles.container}>
<div className={commonstyles.grid_two_section}>
<div className={herostyles.hero_content}>
<h1>
    {title}
</h1>
<p>
    from our best collections,powered by ktm ayurvedic we deliver our natural product 
</p>

<Link href='/products'>
<button className={mulish.className}>
    Explore product
</button>
</Link>

</div>
<div className={herostyles.hero_image}>
<Image src={imageUrl} alt='watching netflix' width={500} height={500}/> 
</div>

</div>
</div>

  </main>
  )
}

export default Herosection