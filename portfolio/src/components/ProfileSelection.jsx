import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Using actual avatar images with explicit paths
const profiles = [
  { 
    id: 'recruiter', 
    name: 'Recruiter',
    color: 'bg-red-600',  // Fallback color
    avatar: '/avatars/avatar1.png', 
    content: {
      education: 'Vellore Institute of Technology, Chennai - Integrated MTech in Software Engineering',
      experience: 'Research Intern at VIT Chennai, Freelance Web Developer',
      projects: 'VHTOP - Hostel Management Suite, Sarah - AI Virtual Assistant',
      skills: 'Python, Java, JavaScript, NextJS, Machine Learning'
    }
  },
  {
    id: 'developer',
    name: 'Developer',
    color: 'bg-blue-600',  // Fallback color
    avatar: '/avatars/avatar2.png',
    content: {
      education: 'Vellore Institute of Technology, Chennai - Integrated MTech in Software Engineering',
      experience: 'Full Stack Developer, AI/ML Engineer',
      projects: 'Portfolio Website, AI Projects, Web Applications',
      skills: 'React, Node.js, Python, Machine Learning, Cloud Computing'
    }
  }
];

const ProfileSelection = ({ onProfileSelect }) => {
  // State to track if images are loaded
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const loadStatus = {};
      
      profiles.forEach(profile => {
        const img = new Image();
        img.src = profile.avatar;
        
        img.onload = () => {
          loadStatus[profile.id] = true;
          setImagesLoaded(prev => ({...prev, [profile.id]: true}));
        };
        
        img.onerror = () => {
          loadStatus[profile.id] = false;
          setImagesLoaded(prev => ({...prev, [profile.id]: false}));
          console.error(`Failed to load image for ${profile.id}`);
        };
      });
    };
    
    preloadImages();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen flex-col items-center bg-[#121212] p-4 sm:p-8"
    >
      <h1 className="mt-[30px] mb-10 text-center text-3xl sm:text-4xl md:text-[48px] font-light text-white font-sans">
        Who's Watching?
      </h1>

      <div className="flex justify-center items-center w-full max-w-4xl mx-auto gap-8 sm:gap-12 md:gap-16">
        {profiles.map((profile) => (
          <motion.div
            key={profile.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center"
            onClick={() => onProfileSelect(profile.id)}
          >
            <div className={`w-32 h-32 sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] cursor-pointer rounded-lg shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 overflow-hidden ${!imagesLoaded[profile.id] ? profile.color : ''}`}>
              {/* Display image if loaded, otherwise show colored background */}
              {imagesLoaded[profile.id] !== false && (
                <img 
                  src={profile.avatar}
                  alt={`${profile.name} Avatar`}
                  className="h-full w-full object-cover border-2 border-transparent hover:border-white transition-all duration-300"
                />
              )}
            </div>
            <h2 className="mt-4 text-center text-xl sm:text-2xl text-white font-sans">{profile.name}</h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileSelection;
