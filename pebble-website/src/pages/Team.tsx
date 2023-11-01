import React from 'react'
import { Footer, Navbar } from '../components'
import Join from '../assets/join.png'

const Team = () => {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden bg-bg-light text-black dark:bg-bg-dark dark:text-off-white'>
      <Navbar current='Team'/>
      <div className='flex flex-col h-4/5 px-28 py-14 align-middle items-center justify-center gap-5'>
        <div className='flex-grow w-3/4'>
          <img alt='join' src={Join}></img>
        </div>
        <p className= 'font-semibold text-3xl text-center w-1/2 flex-shrink'>If you would like to join our 
        team here at Pebble and help us revolutionize the 
        education landscape, please contact us at <a className='text-blue-800 hover:underline hover:cursor-pointer' href="mailto:pebbleeducationinc@gmail.com?subject=Team%Interest">pebbleeducationinc@gmail.com</a></p>
      </div>
      <Footer/>
    </div>
  )
}

export default Team