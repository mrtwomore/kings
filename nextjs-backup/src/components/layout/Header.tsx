'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className="site-header sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="container py-4 flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image 
              src="/images/kings-electrical-logo.svg" 
              alt="Kings Electrical Logo" 
              width={180} 
              height={60}
              className="h-auto"
            />
          </Link>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:static md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center">
            <li className="py-3 px-4 md:px-3 border-b md:border-b-0">
              <Link href="/" className="text-dark hover:text-primary font-medium">
                Home
              </Link>
            </li>
            <li className="relative py-3 px-4 md:px-3 border-b md:border-b-0">
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between w-full md:w-auto text-dark hover:text-primary font-medium"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`dropdown ${activeDropdown === 'services' ? 'block' : 'hidden'} md:absolute md:top-full md:left-0 md:bg-white md:shadow-md md:min-w-[200px] pl-4 md:pl-0`}>
                <li className="py-2 px-4 hover:bg-light">
                  <Link href="/services/heat-pump-solutions" className="block text-dark hover:text-primary">
                    Heat Pump Solutions
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-light">
                  <Link href="/services/electrical-services" className="block text-dark hover:text-primary">
                    Electrical Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-3 px-4 md:px-3 border-b md:border-b-0">
              <Link href="/about" className="text-dark hover:text-primary font-medium">
                About Us
              </Link>
            </li>
            <li className="py-3 px-4 md:px-3">
              <Link href="/contact" className="text-dark hover:text-primary font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-contact flex items-center">
          <a href="tel:+6408008084448" className="phone-number hidden md:flex items-center mr-4 text-dark hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0800 808 448
          </a>
          <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
            Contact Us
          </Link>
          <button 
            className="mobile-menu-toggle md:hidden flex flex-col justify-center items-center w-10 h-10 border border-gray-200 rounded"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <span className={`block w-5 h-0.5 bg-dark mb-1 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-dark mb-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-dark ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 