import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='w-full bg-slate-300 shadow-md sticky top-0 z-10 '>
      <div className='flex items-center justify-between px-4 py-5'>
        <div className='flex items-center gap-x-3'>
          <img src='./logo.png' alt='School Logo' className='h-16'/>
          <h3 className='text-2xl uppercase text-slate-900 font-semibold'>Springdale Public School</h3>
        </div>

        {/* Mobile menu icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex gap-6'>
          <HashLink smooth to="#home" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>HOME</HashLink>
          <HashLink smooth to="#academics" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>ACADEMICS</HashLink>
          <HashLink smooth to="#gallery" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>GALLERY</HashLink>
          <HashLink smooth to="#contact" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>CONTACT US</HashLink>
          <HashLink smooth to="#students" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>STUDENTS</HashLink>
          <HashLink smooth to="#admissions" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>ADMISSIONS</HashLink>
          <HashLink smooth to="#about" className='text-gray-700 font-medium hover:text-blue-500 transition-colors'>ABOUT US</HashLink>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 p-4`}>
        <HashLink smooth to="#home" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>HOME</HashLink>
        <HashLink smooth to="#academics" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>ACADEMICS</HashLink>
        <HashLink smooth to="#gallery" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>GALLERY</HashLink>
        <HashLink smooth to="#contact" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>CONTACT US</HashLink>
        <HashLink smooth to="#students" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>STUDENTS</HashLink>
        <HashLink smooth to="#admissions" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>ADMISSIONS</HashLink>
        <HashLink smooth to="#about" className='block text-gray-700 font-medium py-2 hover:text-blue-500 transition-colors' onClick={handleLinkClick}>ABOUT US</HashLink>
      </div>
    </div>
  );
}

export default Navbar;
