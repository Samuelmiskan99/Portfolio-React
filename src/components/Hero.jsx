import image from '/public/image.jpg';
const Hero = () => {
   return (
      <div
         id='home'
         className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
         <div className='flex flex-col items-center justify-center gap-10 text-white'>
            <div className='relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 overflow-hidden'>
               <img src={image} className='w-full h-full object-cover' alt='' />
            </div>
         </div>
      </div>
   );
};

export default Hero;
