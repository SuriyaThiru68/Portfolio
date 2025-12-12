import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleHover = (isHover) => {
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-2 lg:py-2">
          <div className="text-2xl lg:text-3xl font-bold">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-secondary transition-colors" aria-label="Scroll to Home section">ST</a>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-12">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-medium text-base lg:text-lg transition-colors hover:text-secondary ${activeSection === item.toLowerCase() ? 'text-secondary' : ''}`}
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                  aria-label={`Scroll to ${item} section`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-px bg-secondary transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0'}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 bg-primary">
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                    className="block py-2 text-base hover:text-secondary transition-colors"
                    aria-label={`Scroll to ${item} section`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
