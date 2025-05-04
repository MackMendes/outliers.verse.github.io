
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Service {
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  icon: React.ReactNode;
}

interface ServicesSectionProps {
  language: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "What We Do",
      description: "We offer a range of services to help you grow and innovate"
    },
    pt: {
      title: "O Que Fazemos",
      description: "Oferecemos uma variedade de serviços para ajudar você a crescer e inovar"
    }
  };

  const services: Service[] = [
    {
      title: {
        en: "Meetups",
        pt: "Meetups"
      },
      description: {
        en: "Regular community gatherings around specific tech and creative topics. Join us to learn, share, and connect with like-minded professionals.",
        pt: "Encontros regulares da comunidade em torno de tópicos específicos de tecnologia e criatividade. Junte-se a nós para aprender, compartilhar e se conectar com profissionais com ideias semelhantes."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: {
        en: "Lean Coffees",
        pt: "Lean Coffees"
      },
      description: {
        en: "Structured but agenda-less meetings where participants democratically build the agenda and discuss topics of interest in a time-boxed format.",
        pt: "Reuniões estruturadas, mas sem agenda, onde os participantes democraticamente constroem a pauta e discutem tópicos de interesse em um formato com tempo limitado."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    },
    {
      title: {
        en: "Consulting",
        pt: "Consultoria"
      },
      description: {
        en: "Expert guidance on technology strategy, product development, user experience, and creative direction. Tailored advice to solve your specific challenges.",
        pt: "Orientação especializada em estratégia de tecnologia, desenvolvimento de produtos, experiência do usuário e direção criativa. Conselhos personalizados para resolver seus desafios específicos."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: {
        en: "Projects",
        pt: "Projetos"
      },
      description: {
        en: "End-to-end implementation of digital products and experiences. From concept to delivery, we bring your ideas to life with technical excellence and creative flair.",
        pt: "Implementação completa de produtos e experiências digitais. Do conceito à entrega, damos vida às suas ideias com excelência técnica e toque criativo."
      },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
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
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-4 text-outliers-olive text-center reveal">
          {language === 'pt' ? content.pt.title : content.en.title}
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-2xl mx-auto reveal">
          {language === 'pt' ? content.pt.description : content.en.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="reveal" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-outliers-olive/10 text-outliers-olive">
                  {service.icon}
                </div>
                <CardTitle>{language === 'pt' ? service.title.pt : service.title.en}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {language === 'pt' ? service.description.pt : service.description.en}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
