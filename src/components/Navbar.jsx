import React from 'react';

const Navbar = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-6">

          {/* Logo */}
          <div className="text-white text-sm font-semibold tracking-wider cursor-pointer">
            LOGO
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`
                      text-sm font-medium tracking-wider transition-colors
                      ${isActive ? 'text-indigo-500' : 'text-gray-300 hover:text-white'}
                    `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
