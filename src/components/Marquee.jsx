import React from 'react';

const skills = ['PYTHON', 'JAVA', 'C', 'HTML', 'CSS', 'TAILWIND CSS', 'JAVASCRIPT', 'REACT', 'BOOTSTRAP', 'SQL', 'MONGODB', 'GIT', 'GITHUB', 'VS CODE', 'FIGMA', 'FRAMER', 'VERCEL', 'NETLIFY'];

const Marquee = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-stretch bg-[#0B0B0C]"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="w-full md:w-[25%] lg:w-[20%] flex items-center justify-center py-6 md:py-0 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] z-10">
        <span className="text-[#FFFFFF] font-normal tracking-[0.2em] text-sm uppercase">
          Tech Stack
        </span>
      </div>

      <div className="w-full md:w-[75%] lg:w-[80%] overflow-hidden py-6 md:py-8 relative bg-transparent flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 px-8">
              {skills.map((skill) => (
                <React.Fragment key={skill}>
                  <span
                    className="text-[#EAEAEA]"
                    style={{
                      fontFamily: "'Sulphur Point', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {skill}
                  </span>
                  <span style={{ color: '#00E5FF', fontSize: '1rem' }}>✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;


