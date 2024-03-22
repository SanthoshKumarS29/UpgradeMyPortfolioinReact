import React from 'react'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
    <motion.div className='slide-in z-40'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
    <div className='w-full text-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex flex-col items-center'>
            <h1 className='font-bold text-4xl mb-2'>My Skills</h1>
            <p>Computer skills involve the ability to learn and operate various technology.</p>
            </div>
            <div className='lg:flex  sm:justify-center sm:items-center gap-56 w-full mt-28'>
                <div>
                <div className='w-50 mt-6 lg:w-96'>
                <h1 className='font-bold text-xl mb-4'>FrontEnd</h1>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>Javascript</p>
                    <p>80%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0  w-52  border-1 p-1 bg-[#7a50eb] lg:w-[250px]'></div>
                    </div>
                </div>
                <div className='w-50 mt-6'>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>TailWind Css</p>
                    <p>90%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0 w-56 border-1 p-1 bg-[#7a50eb] lg:w-[300px]'></div>
                    </div>
                </div>
                <div className='w-50 mt-6'>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>Vite+ React js</p>
                    <p>70%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0 w-48 border-1 p-1 bg-[#7a50eb] lg:w-[240px]'></div>
                    </div>
                </div>
                </div>
                <div>
                <div className='w-50 mt-6 lg:w-96'>
                <h1 className='font-bold text-xl mb-4'>BackEnd</h1>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>Django</p>
                    <p>75%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0 w-48 border-1 p-1 bg-[#7a50eb] lg:w-[270px]'></div>
                    </div>
                </div>
                <div className='w-50 mt-6'>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>Python</p>
                    <p>70%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0 w-44 border-1 p-1 bg-[#7a50eb] lg:w-[250px]'></div>
                    </div>
                </div>
                <div className='w-50 mt-6'>
                <div className='flex justify-between'>
                    <p className='font-bold text-lg mb-2'>My Sql</p>
                    <p>80%</p>
                </div>
                <div className=' border-2 border-black rounded-md p-1 relative'>
                        <div className='absolute top-0 left-0 w-56 border-1 p-1 bg-[#7a50eb] lg:w-[290px]'></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      
    </div>
    <motion.div className='slide-out z-40'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
    </>
  )
}

export default Skills
