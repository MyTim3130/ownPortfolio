import React from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const Nav = () => {

  return (<section className='w-screen h-[5vh] flex justify-between items-center fixed z-50'>
        <span className='hover:cursor-pointer ml-10' onClick={()=>gsap.to(window, {duration: 0, scrollTo: 0 })}>Tim Hausl-Kramper</span>     
    <div className='w-2/6 hidden justify-evenly  sm:flex'>

        <span className='hover:cursor-pointer' onClick={()=>gsap.to(window, {duration: 0, scrollTo: 4000 })}>Photography</span>
        <span className='hover:cursor-pointer' onClick={()=>gsap.to(window, {duration: 0, scrollTo: 5350 })}>Programming</span>     
        <span className='hover:cursor-pointer' onClick={()=>gsap.to(window, {duration: 0, scrollTo: 7000 })}>Contact Me</span>    </div>

  </section>
  )
}

export default Nav