
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme} 
      className="px-2 py-1 dark:hover:bg-gray-800 dark:text-white"
      title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
    >
      {theme === 'dark' ? 
        <Sun className="h-4 w-4 text-yellow-300" /> : 
        <Moon className="h-4 w-4 text-gray-600" />
      }
    </Button>
  );
};
