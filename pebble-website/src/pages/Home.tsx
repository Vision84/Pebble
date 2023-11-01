import React from 'react'
import { Navbar, Footer } from '../components'
import phone from "../assets/PhonePebble.png"
import investmentGraph from "../assets/investmentgraph.jpg"
import publicationsGraph from "../assets/studentsLearning.jpg"
import design1 from "../assets/appDesign1.png"
import design2 from "../assets/appDesign2.png"
import design3 from "../assets/appDesign3.png"

const Home = () => {
  return (
    <div className='h-screen max-w-screen overflow-x-hidden bg-bg-light text-black dark:bg-bg-dark dark:text-off-white'>
      <Navbar current='Home'/>

      <div className='flex flex-row h-4/5 px-28 py-28'>
        <div className='flex flex-1 flex-col ml-28 justify-center items-center gap-5'>
          <h1 className='w-2/3 text-5xl leading-snug font-bold'>This is <b className="text-pebble-blue dark:text-pebble-blue-light">Pebble</b>. Let's change <b className="text-pebble-blue dark:text-pebble-blue-light">education</b>.</h1>
          <h3 className='w-2/3 text-1xl font-bold'>Revolutionizing education by providing users with up-to-date, AI-analyzed online lectures that are catered specifically to the individual's strengths, weaknesses, and interests.</h3>
        </div>
        <div className='flex flex-1 items-center justify-center mr-28'>
        <img alt='phone' src={phone} />
        </div>
      </div>

      <div className='w-screen flex flex-row justify-center'>
        <hr className='w-3/5'/>
      </div>
      
      <div className='flex flex-row-reverse h-2/3 px-28 py-28 gap-10 '>
        <div className='flex flex-1 flex-col mr-18 ml-28 justify-center items-start gap-5'>
          <h1 className='w-2/3 text-3xl leading-snug font-bold'>The Rise of AI</h1>
          <h3 className='w-2/3 text-2xl font-normal'>With AI processing power and private investment at an all-time high, we decided to take advantage of this and create Pebble, hoping to change how students perceive education completely.</h3>
        </div>
        <div className='flex flex-1 items-center justify-center ml-28'>
          <img alt='private investment in Ai graph' src={investmentGraph} />
        </div>
      </div>

      <div className='flex flex-row h-2/3 px-28 py-28 gap-10'>
        <div className='flex flex-1 flex-col ml-28 justify-center items-center gap-5'>
          <h3 className='w-2/3 text-2xl font-normal'>The growth of AI, specifically machine learning and pattern recognition technologies, is reshaping education. Machine learning's intricate algorithms enable AI to deeply understand students' unique learning styles and thought processes. Pebble is poised to revolutionize education by providing highly personalized learning experiences that nurture each student's individual cognitive journey to its fullest potential.</h3>
        </div>
        <div className='flex flex-1 items-center justify-center mr-28'>
          <img alt='Ai publications graph' src={publicationsGraph} />
        </div>
      </div>

      <div className='w-screen flex flex-row justify-center'>
        <hr className='w-3/5'/>
      </div>

      <div className='flex flex-col items-center h-5/6 py-16 mx-28 gap-16'>
        <div className='w-3/5 text-center'>
          <h3 className='text-2xl'>Our goal is to make Pebble as accessible and easy to use for everyone, so we designed our app around this concept, resulting in many simple features as demonstrated below:</h3>
        </div>
        <div className='flex flex-row items-center h-full w-4/5 ml-5'>
          <img alt="design showcase 1" src={design1} className='flex-grow h-full object-scale-down'/>
          <img alt="design showcase 2" src={design2} className='flex-shrink h-full object-scale-down'/>
          <img alt="design showcase 3" src={design3} className='flex-grow h-full object-scale-down'/>
        </div>
      </div>

      <div className='w-screen flex flex-row justify-center mt-28'>
        <hr className='w-3/5'/>
      </div>

      <Footer/>
    </div>
  )
}


export default Home