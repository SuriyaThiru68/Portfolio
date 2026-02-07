import React from 'react';

const Navbar = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-white text-sm font-medium tracking-wider">
            LOGO
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            {['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-xs font-medium tracking-wider hover:text-gray-400 transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
