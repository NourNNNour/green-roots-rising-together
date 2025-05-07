
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { language } = useLanguage();
  
  return (
    <div className={`flex min-h-screen flex-col ${language === 'ar' ? 'font-tajawal' : ''}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
