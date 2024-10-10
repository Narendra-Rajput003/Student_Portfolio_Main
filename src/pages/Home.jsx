import React from 'react'
import Apps from './sub-component/Apps'
import Hero from './sub-component/Hero'
import Timeline from './sub-component/Timeline'
import About from './sub-component/About'
import Skills from './sub-component/Skills'
import Portfolio from './sub-component/Portfolio'
import Contact from './sub-component/Contact'

function Home() {

 

  return (
    <article className='px-5 mt-10 sm:mt-12 md:mt-14 lg:mt-22 xl:mt-30 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14 '>
      <Hero/>
      <Timeline/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Apps/>
      <Contact/>
    </article>
  )
}

export default Home