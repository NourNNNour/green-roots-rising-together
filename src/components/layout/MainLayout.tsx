
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();
  
  // Scroll to top when location changes with smooth behavior
  useEffect(() => {
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} transition-colors duration-300`}>
      <div className={`flex min-h-screen flex-col ${language === 'ar' ? 'font-tajawal' : ''} dark:bg-gray-900 dark:text-white`}>
        <Navbar />
        <main className="flex-grow dark:bg-gray-900 dark:text-white">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
