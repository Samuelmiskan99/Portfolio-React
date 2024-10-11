import { motion } from 'framer-motion';

// Utility function to generate random colors
const getRandomColor = () => {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};

const Timeline = () => {
   const events = [
      {
         date: 'August 2024',
         title: 'Graduation from University Maritim Raja Ali Haji (UMRAH)',
         description:
            "I am a fresh graduate with a Bachelor's Degree in Informatics Engineering from Maritim Raja Ali Haji University with focus on Computer Engineering, with GPA 3.69/4.00",
      },
      {
         date: 'August 2020',
         title: 'Student at Raja Ali Haji Maritime University (UMRAH)',
         description:
            'My first year at Raja Ali Haji Maritime University (UMRAH) majoring in Informatics Engineering.',
         highlight: true,
      },
      {
         date: 'July 2017',
         title: 'My first year as a student at SMAN 15 Batam.',
         description:
            'My first year as a senior high school student at SMAN 15 Batam, where I majored in science (IPA). This experience marked the beginning of my journey into a more advanced and specialized curriculum, focusing on subjects like physics, chemistry, biology, and mathematics.',
      },
      {
         date: ' March 2014',
         title: 'Student at SMPN 28 Batam',
         description:
            'My time in junior high school was at SMPN 28 Batam, where I laid the foundation in core subjects like mathematics, science, social studies, and language arts. It was during these years that I began to develop an interest in the sciences, which eventually led me to choose the science major in high school',
      },
      {
         date: ' February 2007',
         title: 'The fall of Singapore',
         description:
            'I began my education at SDN 006 Batam Kota, where I learned the basics in subjects like math, science, language, and social studies. These formative years were all about building curiosity and understanding fundamental skills, which later set the stage for my interest in the sciences.',
      },
      {
         date: '14 Agustus 2001',
         title: "The Champion's Born",
         description:
            'I was born in RS Budi Kemuliaan Batam, marking the start of my journey that would eventually lead to my interests and studies. Those early years were filled with curiosity and exploration, setting a foundation for my love of learning',
      },
   ];
   const ScrollReveal = ({ children }) => {
      return (
         <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {children}
         </motion.div>
      );
   };

   return (
      <ScrollReveal>
         <div
            id='timeline'
            className='relative flex flex-col items-center justify-center gap-3 mt-20'>
            <h1 className='text-4xl font-light text-white md:text-6xl mb-10 text-center'>
               Timeline
            </h1>
            {/* Garis Vertikal */}
            <div className='absolute left-1/4 top-0 w-px h-full bg-gray-300'></div>

            {/* Daftar Event */}
            {events.map((event, index) => {
               // Generate a random color for each event
               const randomColor = getRandomColor();
               return (
                  <div key={index} className='relative w-full flex items-center mb-8 '>
                     {/* Kolom Tanggal dan Dot Kiri */}
                     <div className='w-1/4 flex justify-end pr-8 relative'>
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-right'>
                           <p className='font-medium text-gray-500'>{event.date}</p>
                        </div>
                        <div
                           className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full'
                           style={{ backgroundColor: randomColor }}></div>
                     </div>

                     {/* Konten */}
                     <div className='w-3/4 pl-8'>
                        <div
                           className='p-4 border rounded-lg shadow'
                           style={{ borderColor: randomColor }}>
                           <p className='text-lg text-white font-semibold'>{event.title}</p>
                           <p className='text-gray-400'>{event.description}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </ScrollReveal>
   );
};

export default Timeline;
