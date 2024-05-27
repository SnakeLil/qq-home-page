import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

const currentBg = 'hsla(0, 0%, 100%, .5)'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full h-[64px] border-b-[2px] border-solid border-[#fff50] flex items-center  px-[56px]'>
        <div className='topside h-full flex items-center justify-between'>
            <Link href={'/'}>
                {/* qq logo */}
                <Image priority={true} className='h-[24px] w-[55px]' src={logo} alt="qq logo" />
            </Link>
            <ul className='ml-[47px] flex text-white '>
                <li className='px-[13px] h-[30px] flex justify-center items-center rounded-full hover:text-[#09f]'>首页</li>
                <li className='px-[13px] h-[30px] flex justify-center items-center rounded-full hover:text-[#09f]'>下载</li>
            </ul>
        </div>
        <div className='topTool'>

        </div>
    </header>
  )
}

export default Header