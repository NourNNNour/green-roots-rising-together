
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-500" />
            <span className="font-montserrat font-bold text-xl text-green-500">GreenRoots</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-green-500 transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-green-500 transition-colors">About</Link>
            <Link to="/projects" className="text-foreground hover:text-green-500 transition-colors">Projects</Link>
            <Link to="/blog" className="text-foreground hover:text-green-500 transition-colors">Blog</Link>
            <Link to="/contact" className="text-foreground hover:text-green-500 transition-colors">Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">Log In</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Join Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-foreground hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/projects" className="text-foreground hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>Projects</Link>
              <Link to="/blog" className="text-foreground hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link to="/contact" className="text-foreground hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>Contact</Link>
              
              <div className="flex flex-col space-y-3 pt-2">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">Log In</Button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Join Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
