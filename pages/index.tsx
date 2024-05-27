import Layout from '@/components/layout'
import Image from 'next/image'
import React from 'react'

const Index = () => {
  return (
    <Layout title='QQ-轻松做自己'>
      <div style={{
        height:'100vh',
      }} className='w-screen h-screen flex justify-center items-center'>
        <img style={{
          filter:'blur(150px)'
        }} className='absolute z-0 top-0 left-0 w-full h-full' src="https://static-res.qq.com/web/im.qq.com/qq9_introduction_poster.jpg" alt="" />
        <div style={{
          backgroundColor:'#00000030'
        }} className='absolute z-0 top-0 left-0 w-full h-full'></div>
        {/* 内容主体 */}
        <div className='absolute top-0 left-0 w-full min-h-full z-[1]'>
            <h1>全新版本</h1>
            <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white'>QQ9</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Index