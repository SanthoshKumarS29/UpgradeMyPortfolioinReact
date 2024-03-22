import React from 'react'
import {FaSchool,FaGraduationCap} from 'react-icons/fa'
import { motion } from "framer-motion";

const Education = () => {
  return (
<div className='w-full py-[10rem] px-4 bg-white'>
<motion.div className='slide-in'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
        <div className='text-center mb-40'>
            <h1 className='font-bold text-4xl my-3'>Education</h1>
            <p>I hereby declare that the contents of my resume are accurate to the best of my knowledge and verify their authenticity.</p>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
              <FaSchool size={30} className='w-56 mx-auto mt-[-3rem] bg-white'/>
              <h2 className='text-2xl font-bold text-center py-8'></h2>
              <p className='text-center text-4xl font-bold py-6'>X</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-6 mt-8'>Grace Matric Hr Sec school</p>
                  <p className='py-2 border-b mx-6'>(HSC),2014-2018 with 57% of mark</p>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <FaSchool size={30} className='w-56 mx-auto mt-[-3rem] bg-white'/>              
          <h2 className='text-2xl font-bold text-center py-8'></h2>
              <p className='text-center text-4xl font-bold py-6'>XII</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-6 mt-8'>Grace Matric Hr Sec school</p>
              <p className='py-2 border-b mx-6'>2018-2020 with 65% of mark</p>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <FaGraduationCap size={40} className='w-56 mx-auto mt-[-3rem] bg-white'/>              
          <h2 className='text-2xl font-bold text-center py-8'></h2>
              <p className='text-center text-4xl font-bold py-6'>UG</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-6 mt-8'>KLN Arts & Science College</p>
              <p className='py-2 border-b mx-6'>(HSC),2020-2023 with 71% of mark</p>
              </div>
          </div>
      </div>
      <motion.div className='slide-out'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
    </div>
  )
}

export default Education
