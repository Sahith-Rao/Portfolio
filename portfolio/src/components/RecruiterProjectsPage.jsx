import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

// Projects data from Dashboard recruiter section
const projects = [
  {
    title: "BlogSpace",
    period: "2024",
    description: "Educational platform for Telangana State Board students with interactive quizzes and map exercises.",
    longDescription: "BlogSpace is a full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React, and Node.js), designed to offer users a secure and dynamic space to create, browse, and interact with blog posts. Users can register, log in, create and edit posts, and view their own content. The platform allows users to engage with blog content by posting comments under each article. Additionally, it integrates Cloudinary for efficient and scalable image handling—enabling users to upload and store post images securely in the cloud, with fast delivery and optimization. With a responsive UI design and real-time search functionality for filtering posts by title, BlogSpace ensures a seamless and user-friendly experience across devices.",
    techStack: "React, Node.js, Material UI, MongoDB, Express.js",
    imageUrl: "/projects/blogspace.png",
    link: "https://blogspace-bay.vercel.app/",
    github: "https://github.com/Sahith-Rao/blog-space.git",
    domain: "Web Development"
  },
  {
    title: "Metic Synergy Website",
    period: "2025",
    description: "Responsive corporate website using React, Node.js, and Tailwind CSS.",
    longDescription: "Metic Synergy is a full-stack web application built using React (with Vite), Express.js, and MongoDB, designed to showcase services, handle client interactions, and provide administrative insights. The platform includes an appointment booking feature that allows users to schedule services, and a client survey form to collect feedback. Once logged in, admins can access a protected dashboard where all booking requests and survey responses are displayed. Survey data is visualized using interactive bar and pie charts, enabling admins to analyze user sentiment and service performance effectively. ",
    techStack: "Node.js, React JS, Tailwind CSS, MongoDB, Express.js",
    imageUrl: "/projects/logo.png",
    link: "https://meticsynergy.com",
    github: "https://github.com/sreevallabh04/Metic-Synergy.git",
    domain: "Web Development"
  },
  {
    title: "Face Emotion Detector",
    period: "2024",
    description: "A real-time emotion detection system that uses a CNN model to recognize facial emotions from webcam input via a Flask web application.",
    longDescription: "A deep learning-based real-time facial emotion recognition system that uses a Convolutional Neural Network (CNN) to classify emotions from live webcam input. It detects faces using Haar cascades, processes them into 48×48 grayscale images, and predicts one of seven emotions using a Keras-trained model. The Flask backend handles image processing and model inference, while the frontend (HTML, CSS, JavaScript) captures video frames and displays predictions dynamically. This project combines computer vision and deep learning for interactive emotion analysis, with potential applications in mental health, virtual assistants, and human-computer interaction.",
    techStack: "Tensorflow, Keras, OpenCV, Numpy Flask",
    imageUrl: "/projects/emotion.png",
    github: "https://github.com/Sahith-Rao/face-emotion-recognition.git",
    domain: "Deep Learning"
  }
];

const RecruiterProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Mobile: Compact cards */}
      <div className="flex flex-col gap-6 py-8 px-2 sm:hidden">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-full bg-zinc-900 rounded-xl shadow-xl overflow-hidden flex flex-col cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="w-full h-40 relative">
          <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
        </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">{project.domain}</span>
                <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">{project.period}</span>
          </div>
        </div>
      </div>
        ))}
        {/* Modal for long version */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative bg-zinc-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-y-auto max-h-[90vh] flex flex-col">
            <button
                className="absolute top-4 right-4 text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/90 transition-colors z-10 border-2 border-white/20"
                onClick={() => setSelectedProject(null)}
            >
                <span className="text-2xl font-bold">×</span>
            </button>
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-48 object-cover object-center rounded-t-2xl"
                  draggable={false}
                />
              <div className="flex-1 flex flex-col justify-between p-6 gap-4">
                <h2 className="text-2xl font-bold mb-2 text-white">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">{selectedProject.domain}</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">{selectedProject.techStack}</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-2 py-1 rounded">{selectedProject.period}</span>
              </div>
                <div className="flex gap-3 mt-2 mb-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-base shadow"
                    >
                      View
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black/60 text-white font-semibold rounded hover:bg-black/80 transition-colors text-base shadow flex items-center gap-2"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
                <div className="text-white/80 text-base">
                  {selectedProject.longDescription || selectedProject.description}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Desktop: Long cards */}
      <div className="hidden sm:flex flex-col gap-12 py-12 px-2 sm:px-6 md:px-16 lg:px-32">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-full bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Project Image */}
            <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0 relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </div>
            {/* Project Details */}
            <div className="flex-1 flex flex-col justify-between p-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
                <div className="text-white/80 text-base mb-4">
                  {project.longDescription || project.description}
                </div>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">{project.domain}</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded">{project.techStack}</span>
                  <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded">{project.period}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors text-lg shadow"
                  >
                    View
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-black/60 text-white font-semibold rounded hover:bg-black/80 transition-colors text-lg shadow flex items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecruiterProjectsPage; 