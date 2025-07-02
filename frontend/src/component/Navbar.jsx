import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    // Update the body class for dark mode
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className={`text-2xl px-11 font-bold ${scrolled ? 'text-black' : 'text-white'}`}>Shivansh Patel</a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#hero" className={`text-lg ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 transition-colors`}>Home</a>
            <a href="#about" className={`text-lg ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 transition-colors`}>About</a>
            <a href="#projects" className={`text-lg ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 transition-colors`}>Projects</a>
            <a href="#contact" className={`text-lg ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 transition-colors`}>Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? ' text-white' : 'text-black'} transition-colors`}
              title="Toggle Black-and-White Mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} transition-colors`}
              title="Toggle Black-and-White Mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600  focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="black"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pb-3 shadow-lg rounded-w-lg">
            <a href="#hero" className={`block px-3 py-1 ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors`}>Home</a>
            <a href="#about" className={`block px-3 py-1 ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors`}>About</a>
            <a href="#work" className={`block px-3 py-1 ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors`}>Work</a>
            <a href="#contact" className={`block px-3 py-1 ${scrolled ? 'text-black' : 'text-white'} hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors`}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
