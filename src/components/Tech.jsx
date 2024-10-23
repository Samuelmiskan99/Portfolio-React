import { BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import {
   FaCss3Alt,
   FaHtml5,
   FaLinux,
   FaPython,
   FaRedhat,
   FaUnity,
   FaWordpress,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiMysql, SiVite } from 'react-icons/si';
import { RiFirebaseLine } from 'react-icons/ri';

const Tech = () => {
   const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <div
         id='tech'
         className='flex min-h-[70vh] w-full items-center justify-center flex-col gap-16 md:gap-32'>
         <motion.h1
            variants={variants}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-4xl font-light text-white md:text-6xl'>
            Technologies
         </motion.h1>
         <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <BiLogoTailwindCss className='cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaLinux className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaRedhat className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaCss3Alt className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaHtml5 className='cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <SiMysql className='cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaUnity className='cursor-pointer text-[80px] text-slate-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaWordpress className='cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <SiVite className='cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <RiFirebaseLine className='cursor-pointer text-[80px] text-yellow-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
            <motion.div
               variants={variants}
               initial='hidden'
               whileInView='visible'
               transition={{ duration: 0.5, delay: 0.2 }}>
               <FaPython className='cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
            </motion.div>
         </div>
      </div>
   );
};

export default Tech;
