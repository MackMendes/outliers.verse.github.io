
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  const [language, setLanguage] = useState('en');

  // Detect browser language on initial load
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'pt') {
      setLanguage('pt');
    }
  }, []);

  // Scroll to section smoothly
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    // Setup intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      document.removeEventListener('click', handleClick);
      document.documentElement.classList.remove('scroll-smooth');
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LanguageToggle onLanguageChange={setLanguage} currentLanguage={language} />
      <Navbar language={language} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <TeamSection language={language} />
      <ServicesSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
