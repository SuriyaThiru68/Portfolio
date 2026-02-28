import React from 'react';

const skills = ['PYTHON', 'JAVA', 'C', 'HTML', 'CSS', 'TAILWIND CSS', 'JAVASCRIPT', 'REACT', 'BOOTSTRAP', 'SQL', 'MONGODB', 'GIT', 'GITHUB', 'VS CODE', 'FIGMA', 'FRAMER', 'VERCEL', 'NETLIFY'];

const Marquee = () => {
  return (
    <section
      style={{
        borderTop: '1.5px solid rgba(26,26,26,0.12)',
        borderBottom: '1.5px solid rgba(26,26,26,0.12)',
        overflow: 'hidden',
        padding: '1.2rem 0',
        backgroundColor: 'var(--cream-dark)',
      }}
    >
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            {skills.map((skill) => (
              <React.Fragment key={skill}>
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--ink-light)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {skill}
                </span>
                <span style={{ color: 'var(--blue-accent)', fontSize: '1rem' }}>✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
