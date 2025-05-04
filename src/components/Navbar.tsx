
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  language: string;
}

const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = {
    en: [
      { title: 'Home', href: '#hero' },
      { title: 'About Us', href: '#about' },
      { title: 'Our Team', href: '#team' },
      { title: 'Services', href: '#services' },
      { title: 'Contact', href: '#contact' },
    ],
    pt: [
      { title: 'Início', href: '#hero' },
      { title: 'Sobre Nós', href: '#about' },
      { title: 'Nosso Time', href: '#team' },
      { title: 'Serviços', href: '#services' },
      { title: 'Contato', href: '#contact' },
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItemsToDisplay = language === 'pt' ? navItems.pt : navItems.en;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-outliers-olive hover:text-opacity-80 transition-colors font-serif text-xl font-bold">
          OutliersVerse
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItemsToDisplay.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-outliers-olive hover:text-opacity-80 transition-colors text-sm"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container py-4 flex flex-col space-y-4">
            {navItemsToDisplay.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-outliers-olive hover:text-opacity-80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
