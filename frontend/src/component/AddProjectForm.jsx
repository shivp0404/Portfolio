import React, { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa"; // Importing the close icon from React Icons

const AddProjectForm = ({ handleClose ,handleContent }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    live: '',  // Optional live link
    secret: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/add-project', formData);
      // Reset form data to empty values
      setFormData({
        title: '',
        description: '',
        github: '',
        live: '',
        secret: ''
      });
      // Close the form after submission
      alert(res.data.message);
      handleClose(); // Close the form after successful submission
      handleContent()
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex top-3 right-10 text-black items-center justify-center min-h-screen bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
      >
        {/* Close Icon Button */}
        <button 
          type="button" 
          onClick={handleClose}
          className="absolute top-3 right-3  text-gray-600 hover:text-gray-800"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Project</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">Project Title</label>
          <input 
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter project title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Project Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full resize-none px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter project description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="github">GitHub Link</label>
          <input 
            type="url"
            name="github"
            id="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub repository link"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="live">Live Project Link (Optional)</label>
          <input 
            type="url"
            name="live"
            id="live"
            value={formData.live}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter live project link (optional)"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="secret">Admin Secret</label>
          <input 
            type="password"
            name="secret"
            id="secret"
            value={formData.secret}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter admin secret"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
