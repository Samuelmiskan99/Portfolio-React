const Contact = () => {
   return (
      <div
         id='contact'
         className='flex flex-col min-h-[70vh] w-full items-center justify-between mt-60'>
         {/* Contact Content */}
         <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
            <h1 className='text-center text-5xl md:text-7xl'>
               <span className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>
                  Get in touch with me!
               </span>
            </h1>
            <p className='text-center text-lg font-semibold text-gray-500'>
               I am always interested in hearing about new projects, so if you reach me for any
               reason, please feel free to contact me via email samuelmiskan@gmail.com . Send me an
               E-Mail through this button below!
            </p>
            <a
               target='_blank'
               href='https://mail.google.com/mail/u/1/#inbox?compose=new'
               className='text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600'>
               Contact Me
            </a>
         </div>

         {/* Footer with License and Copyright */}
      </div>
   );
};

export default Contact;
