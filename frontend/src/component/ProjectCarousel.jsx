import React, { useEffect, useState } from "react";
 // your data file
import { FaGithub } from "react-icons/fa"; 
import { FiExternalLink } from "react-icons/fi"; 
import AddProjectForm from "./AddProjectForm"; // Assuming your AddProjectForm is in the same folder

const ProjectCarousel = () => {
  const [showForm, setShowForm] = useState(false);  // State to toggle form visibility
  const [projects,setProjects] = useState([]);
  const handleAddProjectClick = () => {
    setShowForm(true);  // Show form when clicked
  };

  const handleClose = ()=>{
    setShowForm(false)
  }

  const getContent = async () => {
    try {
      const response = await fetch("http://localhost:5000/getprojects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);  // Set the data into state
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    getContent();
  }, []);
  
  

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl relative mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Add Project Button */}
        <div className="  mb-6">
          <button
            onClick={handleAddProjectClick}
            className="px-6 absolute  hidden md:block   right-7 top-0  py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add New Project
          </button>
        </div>

        {/* Show Add Project Form when showForm is true */}
        {showForm && <AddProjectForm handleClose={handleClose} handleContent = {getContent}  />}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              /> */}
              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
                <div className="flex mt-6 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    <FiExternalLink className="mr-2" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectCarousel;
