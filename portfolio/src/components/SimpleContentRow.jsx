import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

// ProjectModal component
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  // Placeholder fields for now
  const year = project.year || project.period || '';
  const domain = project.domain || project.area || '';
  const techStack = project.techStack || 'React, Node.js, MongoDB';
  const description = project.longDescription || project.description || 'This is a placeholder for the long project description. You can provide a custom description for each project.';
  const badge = project.badge || '#1 in Projects Today';
  const quote = project.quote || "This is a sample project quote or tagline.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-zinc-900 rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 transition-colors z-10 border-2 border-white/20"
          onClick={onClose}
        >
          <span className="text-2xl font-bold">×</span>
        </button>
        {/* Top: Image with overlayed content */}
        <div className="relative w-full h-[340px] md:h-[420px] bg-black">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
          {/* Title, meta, buttons */}
          <div className="absolute left-0 bottom-0 w-full flex flex-col md:flex-row justify-between items-end p-8 gap-4">
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">{project.title}</h2>
              <div className="flex gap-3 mb-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition-colors text-lg shadow">
                    View
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/60 text-white px-5 py-2 rounded hover:bg-black/80 transition-colors text-lg shadow">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom: Details section, two columns */}
        <div className="flex flex-col md:flex-row w-full p-8 gap-8 bg-zinc-900">
          {/* Left: description */}
          <div className="flex-1 min-w-[220px]">
            <div className="text-white/90 text-base mb-4">
              {description}
            </div>
          </div>
          {/* Right: Domain, Tech stack, Year */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <div className="mb-1">
              <span className="text-white font-semibold">Domain: </span>
              <span className="text-white/80">{domain}</span>
            </div>
            <div className="mb-1">
              <span className="text-white font-semibold">Tech Stack: </span>
              <span className="text-red-400">{techStack}</span>
            </div>
            <div className="mb-1">
              <span className="text-white font-semibold">Year: </span>
              <span className="text-white/80">{year}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SimpleContentRow = ({ title, items, isSkills }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHoveringRow, setIsHoveringRow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  const handleCardClick = (item, e) => {
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    // If it's a project (not a skill), open modal
    if (!isSkills) {
      setSelectedProject(item);
    }
  };

  return (
    <div 
      className="mb-12 relative group"
      onMouseEnter={() => setIsHoveringRow(true)}
      onMouseLeave={() => setIsHoveringRow(false)}
    >
      <h2 className="text-3xl font-bold text-white mb-6 relative z-20">{title}</h2>

      {/* Navigation Buttons (outside content area) */}
      <AnimatePresence>
        {isHoveringRow && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-[60px] bottom-0 left-0 z-20 flex items-center justify-center pointer-events-none"
            style={{ width: '64px' }} // 16 * 4 = 64px (w-16)
          >
            <button
              onClick={() => scroll(-400)}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 pointer-events-auto"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHoveringRow && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-[60px] bottom-0 right-0 z-20 flex items-center justify-center pointer-events-none"
            style={{ width: '64px' }}
          >
            <button
              onClick={() => scroll(400)}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 pointer-events-auto"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Gradient Fade (outside content area) */}
      <div className="absolute left-0 top-[60px] bottom-0 z-10 pointer-events-none" style={{ width: '64px' }}>
        <div className="w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      {/* Right Gradient Fade (outside content area) */}
      <div className="absolute right-0 top-[60px] bottom-0 z-10 pointer-events-none" style={{ width: '64px' }}>
        <div className="w-full h-full bg-gradient-to-l from-black via-black/50 to-transparent" />
      </div>

      {/* Scrollable Content */}
      <div 
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide relative z-0 px-8" 
        ref={scrollRef}
      >
        {isSkills ? (
          // Render skills
          items.flatMap((category, categoryIndex) =>
            category.skills.map((skill, skillIndex) => {
                  const isHovered = hoveredIndex === `${categoryIndex}-${skillIndex}`;
                  return (
                <div key={`${categoryIndex}-${skillIndex}`} className="flex flex-col items-center">
                    <motion.div
                      onHoverStart={() => setHoveredIndex(`${categoryIndex}-${skillIndex}`)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      animate={{
                      scale: isHovered ? 1.04 : 1,
                        zIndex: isHovered ? 20 : 1,
                        transition: { 
                          duration: 0.3,
                          ease: [0.32, 0.72, 0, 1]
                        }
                      }}
                      className="relative w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer flex-shrink-0 bg-[#181818]"
                    >
                      {/* Background Image/Logo */}
                      <motion.div
                      className="w-full h-full flex items-center justify-center"
                        animate={{
                        scale: isHovered ? 1.02 : 1,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} Logo`}
                        className="w-full h-full object-cover"
                        />
                      </motion.div>
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end"
                          >
                            <div>
                              <h3 className="text-base font-semibold text-white mb-1">{skill.name}</h3>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  {/* Skill Name Below Card */}
                  <span className="text-base font-semibold text-white text-center mt-2 drop-shadow-lg">
                    {skill.name}
                  </span>
            </div>
              );
            })
          )
        ) : (
          // Render regular content
          items.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={(e) => handleCardClick(item, e)}
                animate={{
                  scale: isHovered ? 1.04 : 1,
                  zIndex: isHovered ? 20 : 1,
                  transition: { 
                    duration: 0.3,
                    ease: [0.32, 0.72, 0, 1]
                  }
                }}
                className="relative w-[300px] h-[169px] rounded-lg overflow-hidden cursor-pointer flex-shrink-0"
              >
                {/* Background Image */}
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Static Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-base font-semibold text-white truncate mb-1">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                        {(item.subtitle || item.period) && (
                          <div className="flex items-center text-xs text-white/90 mb-1">
                            {item.subtitle && <span>{item.subtitle}</span>}
                            {item.subtitle && item.period && <span className="mx-1">•</span>}
                            {item.period && <span>{item.period}</span>}
                          </div>
                        )}
                        {item.description && (
                          <p className="text-xs text-white/90 mb-2 max-h-[70px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent pr-1">
                            {item.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mb-2">
                          {item.domain && (
                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">{item.domain}</span>
                          )}
                          {item.techStack && (
                            <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">{item.techStack}</span>
                          )}
                          {item.period && (
                            <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">{item.period}</span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-2 right-2 flex gap-2">
                        {item.github && (
                          <motion.a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-white/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} className="text-white" />
                          </motion.a>
                        )}
                        {item.link && (
                          <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-black/70 backdrop-blur-sm hover:bg-white/20 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} className="text-white" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimpleContentRow;