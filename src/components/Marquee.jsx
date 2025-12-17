import React from 'react';

const Marquee = () => {
  return (
    <section className="py-16 border-y border-white/10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            {['PYTHON' , 'JAVA' , 'C' , 'HTML' , 'CSS' , 'TAILWIND CSS' , 'JAVASCRIPT' , 'REACT' , 'BOOTSTRAP' , 'SQL' , 'MONGODB' , 'GIT' , 'GITHUB' , 'VS CODE' , 'JUPYTER NOTEBOOK' , 'MONGODB COMPASS' , 'FIGMA' , 'FRAMER' , 'AFFINITY DESIGNER' , 'PHOTOSHOP' , 'CANVA' , 'VERCEL' , 'NETLIFY' , 'GITHUB PAGES'].map((skill) => (
              <React.Fragment key={skill}>
                <span className="text-xl font-medium text-gray-500">{skill}</span>
                <span className="text-gray-500">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
