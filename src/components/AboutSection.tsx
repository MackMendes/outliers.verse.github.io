
import { useEffect } from 'react';

interface AboutSectionProps {
  language: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "About Us",
      description: `OutliersVerse is an education and consulting company founded on the principle that true innovation happens when different fields of expertise intersect. We combine deep technical knowledge with product strategy and artistic vision to create transformative experiences and solutions.

      Our mission is to share knowledge, foster community, and help organizations and individuals navigate the complex landscape of modern technology and creativity. Whether through organized events, workshops, or direct consulting work, we're committed to empowering others to turn their visions into reality.`
    },
    pt: {
      title: "Sobre Nós",
      description: `OutliersVerse é uma empresa de educação e consultoria fundada no princípio de que a verdadeira inovação acontece quando diferentes campos de especialização se cruzam. Combinamos profundo conhecimento técnico com estratégia de produto e visão artística para criar experiências e soluções transformadoras.

      Nossa missão é compartilhar conhecimento, fomentar comunidade e ajudar organizações e indivíduos a navegar pelo complexo cenário da tecnologia moderna e criatividade. Seja através de eventos organizados, workshops ou trabalho direto de consultoria, estamos comprometidos em capacitar outras pessoas a transformar suas visões em realidade.`
    }
  };

  useEffect(() => {
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
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-8 text-outliers-olive text-center reveal">
          {language === 'pt' ? content.pt.title : content.en.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          {(language === 'pt' ? content.pt.description : content.en.description)
            .split('\n\n')
            .map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-lg mb-6 leading-relaxed text-gray-700 reveal`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {paragraph}
              </p>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
