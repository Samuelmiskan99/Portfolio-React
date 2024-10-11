import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import image1 from '/image1.jpg';
import image2 from '/image2.jpg';
import image3 from '/image3.jpg';
import image4 from '/image4.jpg';
import image5 from '/image5.jpg';
import image6 from '/image6.jpg';

// Komponen ScrollReveal untuk animasi
const ScrollReveal = ({ children }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }} // Ubah ke `once: false`
         transition={{ duration: 0.5, delay: 0.2 }}>
         {children}
      </motion.div>
   );
};

// Komponen ProjectCard untuk menampilkan detail proyek
const ProjectCard = ({ project, index }) => {
   return (
      <ScrollReveal delay={index * 0.1}>
         {' '}
         {/* Tambahkan delay berdasarkan indeks */}
         <div className='flex flex-col items-center gap-6 md:flex-row md:gap-10'>
            <img
               src={project.image}
               alt={project.title}
               className='h-auto w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105 md:w-[300px]'
            />
            <div className='flex flex-col gap-3 text-left md:text-left'>
               <h2 className='text-2xl font-semibold'>{project.title}</h2>
               <p className='text-gray-400'>{project.description}</p>
               <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, index) => (
                     <span key={index} className='rounded-lg bg-gray-700 px-4 py-1 text-sm'>
                        {tech}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </ScrollReveal>
   );
};

// Menambahkan propTypes untuk ProjectCard
ProjectCard.propTypes = {
   project: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
   }).isRequired,
   index: PropTypes.number.isRequired,
};

// Komponen utama Projects untuk menampilkan semua proyek
const Projects = () => {
   const projectData = [
      {
         image: image1,
         title: 'Bring Back the Nature',
         description:
            'A child stranded on an island has a mission to save their homeland, which is on another island, by planting 5 magical seeds that can restore the environment from harmful toxic waste...',
         technologies: ['C#', 'Unity', 'Blender', 'Figma'],
      },
      {
         image: image2,
         title: 'Asean Youth Forum',
         description:
            'The ASEAN Youth Forum (AYF) is an online platform designed to serve as a space for young people across Southeast Asia to engage in meaningful discussions on social and real-world issues...',
         technologies: [
            'React.js',
            'CSS3',
            'Html5',
            'React Bootstrap',
            'Javascript',
            'Node.js',
            'React Redux',
            'MongoDB',
            'Firebase',
         ],
      },
      {
         image: image3,
         title: 'Simple CRUD App',
         description:
            'This CRUD application is built with React.js and utilizes Tailwind CSS for styling. The app allows users to perform basic operations on user data, such as adding, editing, and deleting users.',
         technologies: ['React.js', 'Javascript', 'Node.js', 'Tailwind CSS', 'Axios'],
      },
      {
         image: image4,
         title: 'BMI Calculator',
         description:
            'A simple BMI calculator that you can use for free, this App includes your height and weight.',
         technologies: ['React.js', 'Javascript', 'Node.js', 'React Redux', 'CSS3'],
      },
      {
         image: image5,
         title: 'Movie List App',
         description:
            'This is a simple Movie List App that you can use for free. You can search for your favorite movie. This App uses TMDB API for demonstration.',
         technologies: ['Html5', 'Javascript', 'TMDB API', 'CSS3'],
      },
      {
         image: image6,
         title: 'Todolist APP',
         description:
            'This Todo List application is developed using React.js and utilizes local storage to persist tasks. Users can add, edit, mark tasks as completed, and delete tasks from their list...',
         technologies: ['React.js', 'Javascript', 'Node.js', 'CSS3', 'Tailwind CSS'],
      },
   ];

   return (
      <div
         id='projects'
         className='flex flex-col items-center justify-center min-h-screen w-full p-4 md:px-14 md:py-24 md:gap-10 mt-10 '>
         <ScrollReveal>
            <h1 className='text-4xl font-light text-white md:text-6xl mb-20 text-center'>
               My Projects
            </h1>
         </ScrollReveal>
         <div className='flex flex-col gap-16 w-full max-w-[1000px] text-white'>
            {projectData.map((project, index) => (
               <ProjectCard key={index} project={project} index={index} />
            ))}
         </div>
      </div>
   );
};

export default Projects;
