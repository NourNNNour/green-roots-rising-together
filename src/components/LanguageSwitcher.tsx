
import React, { useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

  // Function to handle language change and force reload styles for proper RTL/LTR
  const handleLanguageChange = useCallback((newLang: 'en' | 'ar') => {
    // Only change if it's different from current language
    if (newLang !== language) {
      setLanguage(newLang);
      // Force a small timeout to ensure DOM update
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = '';
      }, 10);
    }
  }, [language, setLanguage]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-9 px-2 py-1">
          <Globe className="h-4 w-4" />
          <span>{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "center" : "end"} className="z-50">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('ar')}
          className={language === 'ar' ? 'bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-300' : ''}
        >
          {t('language.ar')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className={language === 'en' ? 'bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-300' : ''}
        >
          {t('language.en')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
