import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar";

const CVPage = () => {
  
    document.body.classList.add('dark');

  
    return (
     <>
      <Navbar/>
      <div className="bg-gray-100 text-gray-900 p-10 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">Shivansh Patel</h1>
            <p className="mt-2">Email: <a href="mailto:Shivanshpatel1432@gmail.com" className="text-blue-500">Shivanshpatel1432@gmail.com</a></p>
            <p>Contact Number: 7389417906</p>
            <p>GitHub: <a href="https://github.com/shivp0404" className="text-blue-500" target="_blank" rel="noopener noreferrer">shivp0404</a></p>
          </header>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b pb-1">Professional Summary</h2>
            <p className="mt-2">
              Curious and driven B.Tech student with a love for building web apps, looking to grow as a Full Stack Developer through real-world experience.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b pb-1">Education</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>B.Tech</strong>, Gyan Ganga Institute of Technology and Science — <em>Expected June 2026</em></li>
              <li><strong>Class 12th</strong>, Mispa Mission Senior Secondary School — <em>Passed in 2022</em></li>
              <li><strong>Class 10th</strong>, Mispa Mission Senior Secondary School — <em>Passed in 2020</em></li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b pb-1">Skills</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Languages: JavaScript, Python</li>
              <li>Frontend: HTML, CSS, Tailwind CSS, React (Vite.js)</li>
              <li>Backend & Database: Node.js, Express.js, MongoDB</li>
              <li>Tools & AI: GitHub, Postman, ChatGPT</li>
              <li>Other Skills: Streamlit, CNN, OpenCV</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b pb-1">Projects</h2>
  
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Brain Tumor Detection using CNN (In Progress)</h3>
                <p><strong>Technologies:</strong> Streamlit, CNN, OpenCV</p>
                <p>Classifies MRI brain scans into tumor/non-tumor. Achieved 85% accuracy; model optimization ongoing.</p>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold">AI Doctor Finder using BERT</h3>
                <p><strong>Technologies:</strong> BERT, Node.js, Express.js, React (Vite.js)</p>
                <p>Suggests doctors based on natural language queries using a fine-tuned BERT model for intent detection.</p>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold">Portfolio Website</h3>
                <p><strong>Technologies:</strong> React (Vite.js), Nodemailer</p>
                <p>Personal site to showcase skills and projects with backend email functionality using Nodemailer.</p>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold">CodeVault – Snippet Manager</h3>
                <p><strong>Technologies:</strong> Node.js, Express.js, MongoDB, React (Vite.js)</p>
                <p>Full-stack CRUD app to store personal code snippets. Built to simplify saving handwritten code while learning.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
     </>
    );
};

export default CVPage;
