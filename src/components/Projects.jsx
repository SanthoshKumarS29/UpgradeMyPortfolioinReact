import React, { useState } from 'react';
import img1 from '../assets/First.png';
import img2 from '../assets/Second.png';
import img3 from '../assets/Third.png';
import img4 from '../assets/six.png';
import img5 from '../assets/Fourth.png';
import img6 from '../assets/Fiveth.png';
import { motion } from 'framer-motion';

const Projects = () => {
  const config = {
    proj: [
      {
        id: 1,
        imag: img1,
        des: 'I will start learning HTML and CSS, and then I will create this portfolio.',
        link: 'https://santhoshkumars29.github.io/my-portfolio/',
        type: 'Portfolio',
      },
      {
        id: 2,
        imag: img2,
        des: 'Next, I learn javascript add some specification in My portfolio',
        link: 'https://santhoshkumars29.github.io/UpgradeMyPortfolio/',
        type: 'Portfolio',
      },
      {
        id: 3,
        imag: img3,
        des: 'Next, I create a project and its based on my Video Editing Instgram Profile ',
        link: 'https://santhoshkumars29.github.io/VEPortfolio',
        type: 'Portfolio',
      },
      {
        id: 4,
        imag: img4,
        des: "I create large site using html css and js its is big project",
        link: "https://cartprj.netlify.app",
        type: 'Website',
      },
      {
        id: 5,
        imag: img5,
        des: "I will start learn React that time I will create this webiste ",
        link: "https://cartprj.netlify.app",
        type: 'ReactWebsite',
      },
      {
        id: 6,
        imag: img6,
        des: "And I will Create Another Static Website using React ",
        link: "https://reactsmallwebsite.netlify.app",
        type: 'ReactWebsite',
      }
    ]
  };

  const [selectedType, setSelectedType] = useState('All');

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const filteredProjects = selectedType === 'All' ? config.proj : config.proj.filter(project => project.type === selectedType);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <motion.div className='slide-in z-40'
        initial={{ scaley: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
      </motion.div>
      {/* Rest of your code */}
      <div>
        <ul className='flex justify-start mt-10 md:px-32  gap-3 cursor-pointer'>
          <li className={`font-bold md:text-xl ${selectedType === 'All' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('All')}>All</li>
          <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'Website' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('Website')}>Websites</li>
          <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'Portfolio' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('Portfolio')}>Portfolio</li>
          <li className={`font-bold md:text-xl hover:text-[#7a50eb] ease-in duration-300 ${selectedType === 'ReactWebsite' ? 'text-[#7a50eb]' : ''}`} onClick={() => handleTypeClick('ReactWebsite')}>React Website</li>
        </ul>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center mt-16 md:flex-row  md:px-10 gap-14 '>
        {filteredProjects.map((project) => (
          <div key={project.id} className='relative animate-[up_1s_ease-in-out_1]'>
            <img className='h-[200px] w-[300px] p-2 bg-[#7a50eb] object-cover border-2 border-black rounded-md' src={project.imag} />
            <div className='project-description opacity-0 hover:opacity-100 duration-300 bg-black'>
              <p className='text-center px-5 py-4'>{project.des}</p>
              <div className='flex justify-center'>
                <a className='button' target='_blank' href={project.link}>View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <motion.div className='slide-out'
        initial={{ scaley: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>
      </motion.div>
    </div>
  );
};

export default Projects;
