
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { DarkModeToggle } from '@/components/DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to top when location changes with smooth behavior
  useEffect(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Close mobile menu when navigating
    setIsMenuOpen(false);
  }, [location]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking language switcher elements
      if (event.target instanceof Element) {
        const isLanguageSwitcherClick = 
          event.target.closest('[data-radix-dropdown-menu]') ||
          event.target.closest('.language-switcher') ||
          event.target.closest('[data-no-menu-close="true"]');
        
        if (isLanguageSwitcherClick) {
          return;
        }
      }
      
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add event listener to prevent closing parent menus when language menu items are clicked
  useEffect(() => {
    const preventDefaultClosing = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('[data-no-menu-close="true"]')) {
        e.stopPropagation();
      }
    };

    document.addEventListener('click', preventDefaultClosing, true);
    return () => {
      document.removeEventListener('click', preventDefaultClosing, true);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-500" />
            <span className="font-montserrat font-bold text-xl text-green-500">Alakhdar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center md:space-x-8">
            <Link to="/" className="text-foreground dark:text-gray-200 hover:text-green-500 transition-colors mx-3">{t('nav.home')}</Link>
            <Link to="/about" className="text-foreground dark:text-gray-200 hover:text-green-500 transition-colors mx-3">{t('nav.about')}</Link>
            <Link to="/projects" className="text-foreground dark:text-gray-200 hover:text-green-500 transition-colors mx-3">{t('nav.projects')}</Link>
            <Link to="/blog" className="text-foreground dark:text-gray-200 hover:text-green-500 transition-colors mx-3">{t('nav.blog')}</Link>
            <Link to="/contact" className="text-foreground dark:text-gray-200 hover:text-green-500 transition-colors mx-3">{t('nav.contact')}</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <div className="language-switcher">
              <LanguageSwitcher />
            </div>
            <Link to="/login">
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-950">{t('nav.login')}</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-green-500 hover:bg-green-600 text-white">{t('nav.join')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            ref={menuButtonRef}
            className="md:hidden text-gray-600 dark:text-gray-300" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground dark:text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>{t('nav.home')}</Link>
              <Link to="/about" className="text-foreground dark:text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>{t('nav.about')}</Link>
              <Link to="/projects" className="text-foreground dark:text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>{t('nav.projects')}</Link>
              <Link to="/blog" className="text-foreground dark:text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>{t('nav.blog')}</Link>
              <Link to="/contact" className="text-foreground dark:text-gray-200 hover:text-green-500 py-2 transition-colors" onClick={toggleMenu}>{t('nav.contact')}</Link>
              
              <div className="flex items-center space-x-3 mb-2">
                <DarkModeToggle />
                <div className="language-switcher">
                  <LanguageSwitcher />
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 pt-2">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-950">{t('nav.login')}</Button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">{t('nav.join')}</Button>
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
