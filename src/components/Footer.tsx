
import React from 'react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      rights: "All rights reserved",
      madeWith: "Made with"
    },
    pt: {
      rights: "Todos os direitos reservados",
      madeWith: "Feito com"
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-outliers-olive text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-serif text-xl font-medium">OutliersVerse</h3>
          </div>
          
          <div className="text-sm opacity-80">
            &copy; {currentYear} OutliersVerse. {language === 'pt' ? content.pt.rights : content.en.rights}.
          </div>
          
          <div className="mt-4 md:mt-0 text-sm opacity-80 flex items-center">
            {language === 'pt' ? content.pt.madeWith : content.en.madeWith} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1 text-red-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
