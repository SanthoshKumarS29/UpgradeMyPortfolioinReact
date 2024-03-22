import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ezngvvp', 'template_fox5g59', form.current, {
      publicKey: 'e22_OxMTSoi1nWWPA',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setButton(true)
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset()
};

const [button,setButton] = useState(false)

const handleclick =()=>{
  
}

  return (
    <div className='w-full h-screen flex justify-center items-center p-4 mt-20 mb-20'>
      <motion.div className='slide-in z-40'
        initial={{ scaley: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
      </motion.div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl text-center font-bold text-black mt-10'>Contact</p>
          <p className='text-gray-300 text-center py-4'>// Submit the form below </p>
        </div>
        <input className='border-2 border-[#7a50eb] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 border-2 border-[#7a50eb]' type="email" placeholder='Email' name='email' />
        <input className='my-4 p-2 border-2 border-[#7a50eb]' type="subject" placeholder='Subject' name='subject' />
        <textarea className='border-2 border-[#7a50eb] p-2' name="message" rows="10" placeholder='Message'></textarea>
        { button ? <button className='text-black font-bold border-2 rounded-md border-green-500 bg-green-500 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Send Succussfully</button>:<button className='text-black font-bold border-2 rounded-md border-[#7a50eb] hover:bg-[#7a50eb] ease-in-out duration-500 px-4 py-3 my-8 mx-auto flex items-center' type='submit' onClick={handleclick}>Send Mail</button>}
      </form>
      <motion.div className='slide-out'
        initial={{ scaley: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
      </motion.div>
    </div>
  )
}

export default Contact
