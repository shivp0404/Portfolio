import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const titles = [
  "Shivansh Patel",
  "Full-Stack Developer",
  "MERN Stack Enthusiast",
  "Problem Solver",
  "Tech Explorer",
];

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing Animation
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    let typingTimeout;
    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const backgroundPosition = `center ${Math.min(scrollPosition * 0.4, 100)}%`;

  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: backgroundPosition,
        transition: 'background-position 0.3s ease-out',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-start h-full text-left text-white px-6 md:px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hello, I'm <span className="text-blue-400">{displayedText}</span><span className="animate-blink">|</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
            I am a Full-Stack Developer with a passion for building interactive web experiences.
          </p>
          <Link to="/CV" className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-blue-600 transition">
            Look for a CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
