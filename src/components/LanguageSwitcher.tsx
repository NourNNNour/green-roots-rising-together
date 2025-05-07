
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-9 px-2 py-1">
          <Globe className="h-4 w-4" />
          <span>{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage('ar')} 
          className={language === 'ar' ? 'bg-green-50 text-green-600' : ''}
        >
          {t('language.ar')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')} 
          className={language === 'en' ? 'bg-green-50 text-green-600' : ''}
        >
          {t('language.en')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
