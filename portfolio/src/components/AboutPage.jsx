import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutPage = () => {
  const aboutContent = {
    title: "About Me",
    subtitle: "Full Stack Developer & AI Enthusiast",
    description: `I'm a Computer Science student at Chaitanya Bharathi Institute of Technology, specializing in full-stack development and AI/ML solutions. My passion lies in creating innovative web applications and exploring the intersection of technology and user experience.

With a strong foundation in both frontend and backend development, I strive to build applications that are not only technically robust but also provide an exceptional user experience. My journey in technology has led me to work on various projects, from web applications to machine learning solutions.`,
    
    skills: {
      technical: [
        "Full Stack Development",
        "Machine Learning",
        "Web Development",
        "UI/UX Design",
        "Cloud Computing"
      ],
      soft: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Adaptability",
        "Continuous Learning"
      ]
    },
    
    education: [
      {
        institution: "Chaitanya Bharathi Institute of Technology",
        degree: "B.Tech in Computer Science (AI-ML)",
        period: "2022 - 2026",
        location: "Hyderabad"
      },
      {
        institution: "Excellencia Junior College",
        degree: "Intermediate Education",
        period: "2020 - 2022",
        location: "Hyderabad"
      },
      {
        institution: "Global Indian International School",
        degree: "Secondary Education",
        period: "2015 - 2020",
        location: "Hyderabad"
      }
    ],
    
    contact: {
      email: "sahithraolingampally@gmail.com",
      linkedin: "www.linkedin.com/in/sahith-rao-lingampally-b2158a320",
      github: "github.com/Sahith-Rao"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] w-full bg-gradient-to-r from-red-900 to-black flex flex-col items-center justify-center">
        <img 
          src="/photo1.png" 
          alt="Sahith Rao" 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-red-500 shadow-lg mb-4" 
        />
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            {aboutContent.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90">
            {aboutContent.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-white/90 leading-relaxed whitespace-pre-line">
            {aboutContent.description}
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="bg-zinc-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Technical Skills</h2>
            <ul className="space-y-2">
              {aboutContent.skills.technical.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-white/90">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-zinc-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Soft Skills</h2>
            <ul className="space-y-2">
              {aboutContent.skills.soft.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-white/90">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Education</h2>
          <div className="space-y-6">
            {aboutContent.education.map((edu, index) => (
              <div key={index} className="bg-zinc-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.institution}</h3>
                <p className="text-white/90 mb-1">{edu.degree}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <span>{edu.period}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-zinc-900/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-500 mb-6">Get in Touch</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href={`https://${aboutContent.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`https://${aboutContent.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage; 