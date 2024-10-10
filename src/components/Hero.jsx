import image from '/public/image.jpg';
import { motion } from 'framer-motion';
const Hero = () => {
   return (
      <div
         id='home'
         className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
         <div className='flex flex-col items-center justify-center gap-10 text-white'>
            <motion.div
               initial={{ y: -40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className='relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 overflow-hidden'>
               <img src={image} className='w-full h-full object-cover' alt='' />
            </motion.div>
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
               <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:tex-7xl'>
                  Samuel Miskan
               </h1>
               <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl md:tex-3xl'>
                  Web Developer & System Administrator
               </h3>
               <p className='md:text-base text-pretty text-sm text-gray-400'>
                  I am a fresh graduate with a Bachelors Degree in Informatics Engineering from
                  Maritim Raja Ali Haji University with focus on Computer Engineering. I have an
                  experience from internships and university projects in Computer Vision, Frontend
                  Developer and Linux Operating System. Proven ability to work effectively both
                  independently and as part of a team. Excellent communication, problem-solving, and
                  time management skills. I am eager to apply knowledge and skills in a dynamic and
                  challenging environment
               </p>
            </motion.div>
         </div>
      </div>
   );
};

export default Hero;
