import React from 'react'
import { Footer, Navbar, Profile } from '../components'
import KV from '../assets/Pictures/KV.png'
import AB from '../assets/Pictures/AB2.jpg'
import TJ from '../assets/Pictures/TJ2.jpg'
import DM from '../assets/Pictures/DM.jpg'

const AboutUs = () => {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden bg-bg-light text-black dark:bg-bg-dark dark:text-off-white'>
      <Navbar current='About Us'/>

      <div className='flex flex-col h-3/5 px-28 py-28 align-middle items-center justify-center gap-5'>
        <h1 className='text-5xl font-bold'><b className="text-pebble-blue dark:text-pebble-blue-light">About Us</b></h1>
        <p className='text-2xl text-center w-1/2 leading-relaxed'>Here at Pebble, we passionately champion the evolution of education. 
          Through our innovative social media platform, we empower students to 
          effortlessly exchange AI-enhanced class lectures, cultivating a realm of 
          personalized learning experiences. Our unwavering mission is to forge a
          worldwide community where knowledge knows no bounds—where accessibility,
          collaboration, and individualized learning converge in perfect harmony.
        </p>
      </div>

      <div className='w-screen flex flex-row justify-center'>
        <hr className='w-3/5'/>
      </div>

      <div className='flex flex-col h-5/6 px-28 py-28 align-middle items-center justify-center gap-10'>
        <h1 className='text-4xl font-bold'>Meet the Team behind Pebble</h1>
        <div className='flex flex-row h-full w-5/6 gap-6'>
          <Profile name="Arnav Bonigala" title="Founder & President" image={AB}/>
          <Profile name="Dan Mano" title="Founder & Vice-President" image={DM}/>
          <Profile name="Karthikeya Vattem" title="Founder & Executive Director" image={KV}/>
          <Profile name="Tejas Palukuri" title="Chief Marketing Officer" image={TJ}/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default AboutUs