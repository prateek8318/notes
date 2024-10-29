
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-800 px-5 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3 border-b-4 border-blue-500 inline-block">
          About Us
        </h2>
        <p className="mt-8 text-lg">
          Welcome to our Notes App! This application is designed to help you
          organize your thoughts, ideas, and tasks efficiently. Whether you're
          a student, a professional, or just someone who loves to jot down
          notes, our app provides a user-friendly interface to manage your
          notes seamlessly.
        </p>
        <p className="mt-5 text-lg">
          Our features include:
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>✔ Create, edit, and delete notes</li>
          <li>✔ Organize notes with tags and categories</li>
          <li>✔ Search functionality to find notes quickly</li>
          <li>✔ Responsive design for mobile and desktop use</li>
        </ul>
        <p className="mt-5 text-lg">
          We believe in simplicity and efficiency, and we hope our app helps
          you stay organized and productive. Thank you for choosing our Notes
          App!
        </p>
      </div>
    </section>
  );
};

export default About;