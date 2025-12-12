import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-40 px-4 sm:px-6 lg:px-16 bg-white text-black">
      <h2 className="text-6xl lg:text-8xl font-extrabold mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
          Hi! I'm Suriya T, a Computer Science and Engineering student specializing in Artificial intelligence
 and Machine Learning at KIT - Kalaignar Karunanidhi Institute of Technology.
        </p>
        <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
          I'm fascinated by how technology can think, learn, and solve problems — but I'm also deeply in love with design.
        </p>
        <p className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800">
          My goal? To blend creativity and code, making digital products that are both smart and beautiful.
        </p>
      </div>
    </section>
  );
};

export default About;
