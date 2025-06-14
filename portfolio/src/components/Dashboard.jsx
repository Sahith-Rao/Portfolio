import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SimpleContentRow from '@/components/SimpleContentRow';
import { Button } from '@/components/ui/button';
import * as anime from 'animejs';
import { Github } from 'lucide-react';

const Dashboard = () => {
  const { profile } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const [pinDigits, setPinDigits] = useState(['', '', '', '']);
  const [pinError, setPinError] = useState('');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const getProfileContent = () => {
    if (profile !== 'recruiter') {
      return {
        banner: {
          title: "Welcome",
          description: "Explore my portfolio"
        },
        rows: []
      };
    }

    return {
      banner: {
        title: "Sahith Rao",
        subtitle: "Chaitanya Bharathi Institute of Technology, Hyderabad",
        period: "2022 - 2027",
        description: "Computer Science and Engineering student specializing in full-stack development and AI/ML solutions",
        imageUrl: "/photo1.png",
        contact: {
          email: "sahithraolingampally@gmail.com",
          linkedin: "www.linkedin.com/in/sahith-rao-lingampally-b2158a320/",
          github: "github.com/Sahith-Rao"
        }
      },
      rows: [
        {
          title: "Projects",
          items: [
            {
              title: "BlogSpace",
              period: "2024",
              description: "A full-stack blog platform where users can register, log in, create, search, and manage blog posts with authentication using JWT and MongoDB.",
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
              description: "A full-stack web application for Metic Synergy that offers client-side rendered service pages, booking, surveys, and admin management, built using React, Express.js, and MongoDB.",
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
          ]
        },
        {
          title: "Professional Experience",
          items: [
            {
              title: "Research Intern",
              subtitle: "Agriculture Domain Research - IIIT Sri City",
              period: "June 2025 - July 2025",
              description: "Classification of spongy tissue disorder in mangoes using deep learning.",
              imageUrl: "/experience/iiit.png",
              domain: "Deep Learning"
            },
            {
              title: "Freelance Web Developer",
              subtitle: "Metic Synergy Website",
              period: "Feb. 2024 - Apr. 2025",
              description: "Developed interactive corporate website with CMS and SEO improvements.",
              imageUrl: "/experience/freelance.png",
              domain: "Full Stack"
            }
          ]
        },
        {
          title: "Technical Skills",
          isSkills: true,
          items: [
            {
              title: "Languages",
              skills: [
                { name: "Python", logo: "/skills/python.jpeg" },
                { name: "Java", logo: "/skills/java.png" },
                { name: "Git", logo: "/skills/git.png" },
                { name: "SQL", logo: "/skills/sql.jpeg" }
              ]
            },
            {
              title: "Web Development Frameworks",
              skills: [
                { name: "HTML", logo: "/skills/html.png" },
                { name: "CSS", logo: "/skills/css.png" },
                { name: "JavaScript", logo: "/skills/javascript.png" },
                { name: "ReactJS", logo: "/skills/reactjs.jpeg" },
                { name: "Flask", logo: "/skills/flask.png" },
                { name: "Node.js", logo: "/skills/nodejs.png" },
                { name: "ExpressJS", logo: "/skills/expressjs.png" },
                { name: "MongoDB", logo: "/skills/mongodb.png" },
              ]
            },
            {
              title: "Machine Learning Frameworks",
              skills: [
                { name: "Numpy", logo: "/skills/Numpy.png" },
                { name: "Scikit-learn", logo: "/skills/scikit learn.png" },
                { name: "Matplotlib", logo: "/skills/matplotlib.png" }
              ]
            },
            {
              title: "Cloud Technologies",
              skills: [
                { name: "Azure Cloud", logo: "/skills/azure.png" }
              ]
            }

          ]
        },
        {
          title: "Education & Coursework",
          items: [
            {
              title: "Global Indian International School",
              subtitle: "Uppal, Hyderabad",
              period: "2015 - 2020",
              description: "Secondary education",
              imageUrl: "/education/GIIS.png"
            },
            {
              title: "Excellencia Junior College",
              subtitle: "Shamirpet, Hyderabad",
              period: "2020 - 2022",
              description: "Intermediate education",
              imageUrl: "/education/excellencia.png"
            },
            {
              title: "Chaitanya Bharathi Institute of Technology",
              subtitle: "Hyderabad",
              period: "2022 - 2026",
              description: "CSE (AI-ML)",
              imageUrl: "/education/cbit.png"
            }
          ]
        }
      ]
    };
  };

  const content = getProfileContent();
  const isRecruiter = profile === 'recruiter';

  // Handler for PIN input
  const handlePinChange = (idx, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newDigits = [...pinDigits];
    newDigits[idx] = value;
    setPinDigits(newDigits);
    setPinError('');
    if (value && idx < 3) {
      inputRefs[idx + 1].current.focus();
    }
    if (newDigits.every(d => d.length === 1)) {
      if (newDigits.join('') === '1501') setShowVideo(true);
      else setPinError('Incorrect PIN. Try again.');
    }
  };

  const handlePinKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !pinDigits[idx] && idx > 0) {
      inputRefs[idx - 1].current.focus();
    }
  };

  if (profile === 'adventurer' && !showVideo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-2">
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <div className="text-gray-300 text-base md:text-xl mb-4 text-center">Profile Lock is currently on.</div>
          <div className="text-white text-2xl md:text-5xl font-bold mb-8 text-center leading-tight">Enter your PIN to access this profile.</div>
          <div className="flex gap-3 md:gap-6 mb-6 w-full justify-center">
            {[0, 1, 2, 3].map(idx => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={pinDigits[idx]}
                onChange={e => handlePinChange(idx, e.target.value)}
                onKeyDown={e => handlePinKeyDown(idx, e)}
                className="w-12 h-12 md:w-20 md:h-20 text-2xl md:text-4xl text-center rounded border-2 border-gray-400 bg-black text-white focus:outline-none focus:border-red-600 transition-all font-mono"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          {pinError && <div className="text-red-500 mb-4 text-base md:text-lg text-center">{pinError}</div>}
          <div className="text-gray-400 text-base md:text-lg mt-8 cursor-pointer hover:underline text-center">Forgot PIN?</div>
        </div>
      </div>
    );
  }

  // Adventurer unlocked: show immersive Apple-style background video with audio
  if (profile === 'adventurer' && showVideo) {
    return (
      <div className="min-h-screen w-full h-full fixed inset-0 overflow-hidden bg-black">
        <video
          src="/adv.mp4"
          autoPlay
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none', minHeight: '100vh', minWidth: '100vw' }}
        />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-black text-white"
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[65vh] lg:h-[80vh] w-full">
        <img 
          src={content.banner.imageUrl} 
          alt="Banner background" 
          className="absolute inset-0 h-full w-full object-cover object-right md:object-[85%_center]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="absolute bottom-[10%] md:bottom-[15%] left-[4%] md:left-[5%] max-w-xl lg:max-w-2xl z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 drop-shadow-lg">
            {content.banner.title}
          </h1>
          
          {content.banner.description && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-sm">
              {content.banner.description}
            </p>
          )}
          
          {isRecruiter && (
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('/resume.pdf', '_blank')} 
                className="bg-white text-black px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                Resume
              </Button>
              <Button 
                onClick={() => window.open(`https://${content.banner.contact.github}`, '_blank', 'noopener,noreferrer')} 
                className="border-white/70 text-white hover:bg-white/20 px-6 py-3 text-lg font-semibold rounded-md bg-white/10 backdrop-blur-sm transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-[4%] md:px-[5%] py-8 md:py-12">
        {content.rows.map((row, index) => (
          <SimpleContentRow 
            key={index} 
            title={row.title} 
            items={row.items} 
            isSkills={row.isSkills}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;