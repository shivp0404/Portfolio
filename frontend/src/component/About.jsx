import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Who I Am</h2>
          <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
            <li>Passionate Full-Stack Developer experienced in building responsive and interactive web applications.</li>
            <li>Specialized in JavaScript, React, Node.js, and seamless user experience design.</li>
            <li>Continuously learning and staying updated with the latest web technologies.</li>
            <li>Love contributing to open-source projects and collaborating with fellow developers.</li>
            <li>Enjoy reading tech blogs and exploring innovative solutions for real-world problems.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/image/img.webp"
            alt="Shivansh Patel Portrait" 
            loading="lazy" 
            className="w-64 h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;
