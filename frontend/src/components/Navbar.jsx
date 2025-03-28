import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="  px-6 py-4 shadow-lg fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          PixelMind
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            // Menu Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
