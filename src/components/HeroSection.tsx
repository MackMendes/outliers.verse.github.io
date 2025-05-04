
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  language: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const content = {
    en: {
      slogan: "Where Courage Meets Opportunity"
    },
    pt: {
      slogan: "Onde Coragem Encontra Oportunidade"
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-outliers-beige to-white">
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img 
            src="/lovable-uploads/3a69f69c-28d8-4dc0-86a9-d503fcd62d2c.png" 
            alt="OutliersVerse Logo" 
            className="mx-auto w-full max-w-md mb-6"
          />
        </div>
        <h2 
          className={`text-lg md:text-xl text-outliers-olive mt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {language === 'pt' ? content.pt.slogan : content.en.slogan}
        </h2>
        <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#about"
            className="inline-flex items-center justify-center text-outliers-olive hover:text-opacity-80 transition-all"
          >
            <span className="mr-2">
              {language === 'pt' ? 'Saiba mais' : 'Learn more'}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
