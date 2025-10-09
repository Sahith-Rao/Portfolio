import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const skillsData = {
  "Languages": [
    { name: "Python", logo: "/skills/python.jpeg" },
    { name: "Java", logo: "/skills/java.png" },
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
  "Developer Tools": [
    { name: "Git", logo: "/skills/git.png" },
    { name: "Github", logo: "/skills/github.png" },
    { name: "Docker", logo: "/skills/docker.jpg" },
    { name: "Azure Cloud", logo: "/skills/azure.png" }
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/skills/postgresql.png" },
    { name: "MongoDB", logo: "/skills/mongodb.png" }
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
            
            {/* Mobile: Swiper with navigation arrows */}
            <div className="block sm:hidden relative">
              <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={16}
                slidesPerView="auto"
                freeMode={true}
                navigation={{
                  nextEl: `.swiper-button-next-${category.replace(/\s+/g, '')}`,
                  prevEl: `.swiper-button-prev-${category.replace(/\s+/g, '')}`,
                }}
                className="skills-swiper"
              >
                {skills.map((skill, index) => (
                  <SwiperSlide key={index} className="!w-32">
                    <motion.div
                      whileHover={{ scale: 1.12, zIndex: 10 }}
                      className="w-32 h-32 bg-zinc-900 rounded-md shadow-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                      onHoverStart={() => setHoveredIndex(`${category}-${index}`)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain mb-2" />
                      <span className="text-sm font-semibold text-white text-center mt-2 drop-shadow-lg">
                        {skill.name}
                      </span>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation arrows for mobile */}
              <button
                className={`swiper-button-prev-${category.replace(/\s+/g, '')} absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-200`}
                aria-label="Previous skills"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                className={`swiper-button-next-${category.replace(/\s+/g, '')} absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-200`}
                aria-label="Next skills"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

            {/* Desktop: Regular horizontal scroll */}
            <div className="hidden sm:flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.12, zIndex: 10 }}
                  className="w-40 md:w-52 h-40 md:h-52 bg-zinc-900 rounded-md shadow-xl flex flex-col items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-300"
                  onHoverStart={() => setHoveredIndex(`${category}-${index}`)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 md:w-24 md:h-24 object-contain mb-2" />
                  <span className="text-base md:text-lg font-semibold text-white text-center mt-2 drop-shadow-lg">
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
