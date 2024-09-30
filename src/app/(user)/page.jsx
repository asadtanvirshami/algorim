import Image from 'next/image'
import React from 'react'

import logo from '../../../public/a_white.png'

const page = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='w-full h-full flex justify-center items-center align-middle'>
        <div>
          <Image src={logo} className='h-full w-full animate-pulse' alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default page