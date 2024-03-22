import React from 'react'
import {FaWhatsapp,FaYoutube,FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-center my-11 py-11'>
    <div>
      <h1 className='pb-8 font-bold text-xl text-[#7a50eb]'>SANTHOSH</h1>
    </div>
    <div className='flex justify-center gap-3'>
      <a href="https://wa.me//9751093403/">
        <FaWhatsapp size={25} className='hover:text-[#7a50eb] ease-in duration-300'/>
      </a>
      <a href = "https://youtube.com/@sk495gamer6?si=MyhEzrei7Qwb-ql7">
        <FaYoutube size={25} className='hover:text-[#7a50eb] ease-in duration-300'/>
      </a>
      <a href="https://www.linkedin.com/in/santhosh-kumar-5ab786251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin size={25} className='hover:text-[#7a50eb] ease-in duration-300'/>
      </a>
      <a href='https://app.netlify.com/teams/santhoshkumars29/overview'>
        <FaGithub size={25} className='hover:text-[#7a50eb] ease-in duration-300'/>
      </a>
    </div>
    </div>

  )
}

export default Footer
