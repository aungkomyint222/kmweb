'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header remains fixed with a z-index of 50 */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative text-2xl font-bold text-white hover:opacity-80 transition-opacity"
            >
              <span className="relative z-10">KM Web Design</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative text-white font-medium group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                </Link>
              ))}
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform transition-all hover:scale-105 active:scale-95">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-lg transition-transform duration-300 md:hidden">
          {/* Close button positioned at the top right of the overlay */}
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X className="w-8 h-8 text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-2xl text-white font-medium hover:text-blue-500 transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <button
              className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform transition-all hover:scale-105 active:scale-95"
              onClick={toggleMenu}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
