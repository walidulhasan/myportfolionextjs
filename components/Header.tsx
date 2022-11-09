import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center p-5'>
      <div className='flex flex-row items-center'>
        {/*Social iCon*/}
        <SocialIcon url="https://www.youtube.com/@bdpro"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://www.youtube.com/@bdpro"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://www.youtube.com/@bdpro"
          fgColor='gray'
          bgColor='transparent'
        />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >Get in Touch</p>
      </div>
    </header>
  )
}

export default Header