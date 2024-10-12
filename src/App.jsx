import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BsMoonStarsFill } from 'react-icons/bs';
import { CiSun } from 'react-icons/ci';

function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   // Toggle dark mode and save the theme to local storage
   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
   };

   // Load saved theme preference on mount
   useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
         setIsDarkMode(true);
      }
   }, []);

   return (
      <>
         {/* Initial background gradient */}
         <div className='fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>

         {/* Overlay to adjust theme without removing the initial gradient */}
         <div
            className={`fixed -z-5 min-h-screen w-full ${
               isDarkMode ? 'bg-black/70' : 'bg-white/70'
            } transition-colors duration-300 pointer-events-none`}></div>

         <main className='relative z-0 flex flex-col items-center px-4 md:px-8 lg:px-16'>
            {/* Theme Toggle Button */}
            <button
               onClick={toggleDarkMode}
               className='fixed bottom-4 right-4 bg-slate-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors z-10'>
               {isDarkMode ? <CiSun /> : <BsMoonStarsFill />}
            </button>

            <Navbar />
            <Hero />
            <Tech />
            <Projects />
            <Timeline />
            <Contact />
            <Footer />
         </main>
      </>
   );
}

export default App;
