import React from 'react';
import hero from '../assets/home-right.png';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>    
    <motion.div className='slide-in'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
      <div className='w-full text-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#7a50eb] font-bold'>Hi, I am a</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>SANTHOSH KUMAR</h1>
          <p>
            My goal is always the same: to create a website that resonates with my client and leaves a lasting impression. Outside of work, (Video editing, Listening to Music, Reading, Spending time with my family).
          </p>
          <button className='bg-white border-2 border-[#7a50eb] w-[200px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3 text-[#7a50eb] hover:bg-[#7a50eb] hover:text-black  ease-in-out duration-500'>Hire Me</button>
        </div>
        <img src={hero} alt="/" className='lg:w-[400px] mx-auto py-6 w-[200px]'/>
      </div>
    <motion.div className='slide-out'
    initial={{scaley: 0}}
    animate={{scaleY:0}}
    exit={{scaleY:1}}
    transition={{duration:2,ease:[0.22,1,0.36,1]}}>
    </motion.div>
    </div>
    
    </>
  );
};

export default Hero; // Wrap Hero with transistion when exporting
