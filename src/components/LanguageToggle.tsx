
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onLanguageChange: (lang: string) => void;
  currentLanguage: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ onLanguageChange, currentLanguage }) => {
  return (
    <div className="flex items-center space-x-2 fixed top-4 right-4 z-50">
      <Button 
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="text-sm font-medium"
      >
        EN
      </Button>
      <Button 
        variant={currentLanguage === 'pt' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('pt')}
        className="text-sm font-medium"
      >
        PT
      </Button>
    </div>
  );
};

export default LanguageToggle;
