
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: {
    en: string;
    pt: string;
  };
  bio: {
    en: string;
    pt: string;
  };
  linkedin?: string;
  image?: string;
}

interface TeamSectionProps {
  language: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Team",
      description: "Meet the minds behind OutliersVerse"
    },
    pt: {
      title: "Nosso Time",
      description: "Conheça as mentes por trás da OutliersVerse"
    }
  };

  const team: TeamMember[] = [
    {
      name: "Charles Mendes de Macedo",
      role: {
        en: "Software Engineer",
        pt: "Engenheiro de Software"
      },
      bio: {
        en: "With 12 years of experience in Web development, Cloud, Mobile, Software Architecture, LLMs, and Artificial Intelligence. Specializing in ChatGPT automations and cutting-edge technology innovations.",
        pt: "Com 12 anos de experiência em desenvolvimento Web, Cloud, Mobile, Arquitetura de Software, LLMs e Inteligência Artificial. Especializado em automações com ChatGPT e inovações tecnológicas de ponta."
      },
      linkedin: "https://www.linkedin.com/in/charles-mendes-de-macedo"
    },
    {
      name: "Daniel Calmazini",
      role: {
        en: "Product Manager",
        pt: "Gerente de Produto"
      },
      bio: {
        en: "Expert in Product Management with extensive knowledge in technological product development, strategy, and market analysis. Skilled in translating complex requirements into actionable roadmaps.",
        pt: "Especialista em Gestão de Produtos com amplo conhecimento em desenvolvimento de produtos tecnológicos, estratégia e análise de mercado. Habilidoso em traduzir requisitos complexos em roteiros acionáveis."
      },
      linkedin: "https://www.linkedin.com/in/calmazini/"
    },
    {
      name: "Priscila Leopoldino",
      role: {
        en: "Visual Arts & Marketing",
        pt: "Artes Visuais & Marketing"
      },
      bio: {
        en: "Visual arts graduate with experience in event promotion and marketing. Brings creative vision and strategic thinking to every project, combining artistic sensibility with business acumen.",
        pt: "Graduada em artes visuais com experiência em promoção de eventos e marketing. Traz visão criativa e pensamento estratégico para cada projeto, combinando sensibilidade artística com visão de negócios."
      },
      linkedin: "https://www.linkedin.com/in/priscila-leopoldino2/"
    }
  ];

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
    <section id="team" className="section-padding bg-outliers-beige/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-4 text-outliers-olive text-center reveal">
          {language === 'pt' ? content.pt.title : content.en.title}
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto reveal">
          {language === 'pt' ? content.pt.description : content.en.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={member.name} className="overflow-hidden reveal" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6">
                {member.image && (
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                )}
                {!member.image && (
                  <div className="w-32 h-32 rounded-full bg-outliers-olive/20 flex items-center justify-center text-outliers-olive text-4xl font-bold mx-auto mb-6">
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-medium text-center mb-2">{member.name}</h3>
                <p className="text-sm text-center text-muted-foreground mb-4">
                  {language === 'pt' ? member.role.pt : member.role.en}
                </p>
                <p className="text-gray-700 mb-4">
                  {language === 'pt' ? member.bio.pt : member.bio.en}
                </p>
                {member.linkedin && (
                  <p className="text-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-outliers-olive hover:text-outliers-olive/80 font-medium inline-flex items-center gap-1"
                    >
                      LinkedIn
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
