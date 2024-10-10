import React from 'react';

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
         title: 'Dunkirk',
         description:
            'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
      },
      {
         date: 'August 2020',
         title: 'The Battle of Britain',
         description: 'RAF Spitfire pilots scramble for their planes.',
         highlight: true,
      },
      {
         date: 'July 2017',
         title: 'Operation Barbarossa',
         description:
            'A column of Red Army prisoners taken during the first days of the German invasion.',
      },
      {
         date: ' March 2014',
         title: 'Pearl Harbor',
         description:
            'The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft.',
      },
      {
         date: ' February 2011',
         title: 'The fall of Singapore',
         description:
            'Lieutenant General Arthur Percival and staff on their way to negotiate the surrender with General Yamashita.',
      },
      {
         date: '4 June 1942',
         title: 'Midway',
         description:
            'The American aircraft carrier USS Yorktown under Japanese attack during the battle of Midway.',
      },
   ];

   return (
      <div id='timeline' className='relative flex flex-col items-center justify-center'>
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
   );
};

export default Timeline;
