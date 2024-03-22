import React from 'react'
import about from '../assets/about-us.png'
import { motion } from "framer-motion";


const About = () => {
  return (
    
    <div className='w-full bg-white py-16 px-4'>
    <motion.div className='slide-in'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={about} alt="/" className='lg:w-[400px] mx-auto py-6 w-[200px]'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#7a50eb] font-bold'>About Me</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lets Introduce Myself...</h1>
            <p>
            As a recent graduate in Computer Science.Where i can use my education and skills to achieve personal and professional growth while making the positive impact And I have a strong passion towards learning and updating my skills.Eager to learn new technologies. Looking for opportunities to uplift myself.
            </p>
            <button className='bg-white w-[200px] border-2 border-[#7a50eb] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] ease-in-out duration-300 hover:text-black'>Download CV</button>
        </div>
    </div>
    <motion.div 
       className="slide-out"
       initial={{scaley: 1}}
       animate={{scaleY:0}}
       exit={{scaleY:0}}
       transition={{duration:3,ease:[0.22,1,0.36,1]}}
       />
</div>
  )
}

export default About
