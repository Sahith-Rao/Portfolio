import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const skillsData = {
  "Languages": [
    { name: "Python", logo: "/skills/python.jpeg" },
    { name: "Java", logo: "/skills/java.png" },
    { name: "Git", logo: "/skills/git.png" },
    { name: "SQL", logo: "/skills/sql.jpeg" }
  ],
  "Web Development Frameworks": [
    { name: "HTML", logo: "/skills/html.png" },
    { name: "CSS", logo: "/skills/css.png" },
    { name: "JavaScript", logo: "/skills/javascript.png" },
    { name: "Django", logo: "/skills/django.png" },
    { name: "ReactJS", logo: "/skills/reactjs.jpeg" },
    { name: "NextJS", logo: "/skills/nextjs.png"},
    { name: "NodeJS", logo: "/skills/nodejs.png" },
    { name: "ExpressJS", logo: "/skills/expressjs.png" },
  ],
  "Machine Learning Frameworks": [
    { name: "Numpy", logo: "/skills/Numpy.png" },
    { name: "Scikit-learn", logo: "/skills/scikit learn.png" },
    { name: "Matplotlib", logo: "/skills/matplotlib.png" },
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/skills/postgresql.png" },
    { name: "MongoDB", logo: "/skills/mongodb.png" }
  ],
  "Cloud Technologies": [
    { name: "Azure", logo: "/skills/azure.png" }
  ],
};

const SkillsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] w-full bg-gradient-to-r from-red-900 to-black flex items-center justify-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg text-center px-2 netflix-font">
          Skills Showcase
        </h1>
      </div>

      <div className="px-2 sm:px-[4%] py-6 sm:py-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4 netflix-font">{category}</h2>
            <div className="netflix-row">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.12, zIndex: 10 }}
                  className="netflix-card w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 bg-zinc-900 rounded-md shadow-xl flex flex-col items-center justify-center mx-2 cursor-pointer transition-all duration-300"
                  onHoverStart={() => setHoveredIndex(`${category}-${index}`)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={skill.logo} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain mb-2" />
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-white text-center mt-2 drop-shadow-lg">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsPage;
