import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

interface ContactSectionProps {
  language: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      title: "Contact Us",
      description: "Ready to work together? Get in touch with us",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send Message",
      successToast: "Message sent successfully! We'll get back to you soon.",
      errorToast: "There was an error sending your message. Please try again.",
      emailRequired: "Please enter a valid email address.",
      nameRequired: "Please enter your name.",
      messageRequired: "Please enter a message."
    },
    pt: {
      title: "Contato",
      description: "Pronto para trabalhar junto? Entre em contato conosco",
      nameLabel: "Nome",
      emailLabel: "Email",
      messageLabel: "Mensagem",
      submitButton: "Enviar Mensagem",
      successToast: "Mensagem enviada com sucesso! Retornaremos em breve.",
      errorToast: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
      emailRequired: "Por favor, insira um endereço de email válido.",
      nameRequired: "Por favor, insira seu nome.",
      messageRequired: "Por favor, insira uma mensagem."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!name) {
      toast(language === 'pt' ? content.pt.nameRequired : content.en.nameRequired, {
        description: '',
      });
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast(language === 'pt' ? content.pt.emailRequired : content.en.emailRequired, {
        description: '',
      });
      return;
    }

    if (!message) {
      toast(language === 'pt' ? content.pt.messageRequired : content.en.messageRequired, {
        description: '',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast(language === 'pt' ? content.pt.successToast : content.en.successToast, {
        description: '',
      });
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
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
    <section id="contact" className="section-padding bg-outliers-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-outliers-olive text-center reveal">
            {language === 'pt' ? content.pt.title : content.en.title}
          </h2>
          <p className="text-lg text-center mb-12 text-gray-600 reveal">
            {language === 'pt' ? content.pt.description : content.en.description}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 reveal">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? content.pt.nameLabel : content.en.nameLabel}
              </label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder={language === 'pt' ? "Seu nome" : "Your name"} 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? content.pt.emailLabel : content.en.emailLabel}
              </label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={language === 'pt' ? "seu@email.com" : "your@email.com"} 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {language === 'pt' ? content.pt.messageLabel : content.en.messageLabel}
              </label>
              <Textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder={language === 'pt' ? "Sua mensagem..." : "Your message..."} 
                className="w-full" 
                rows={5}
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-outliers-olive hover:bg-opacity-90 text-white px-8 py-6 h-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'pt' ? "Enviando..." : "Sending..."}
                  </span>
                ) : (
                  language === 'pt' ? content.pt.submitButton : content.en.submitButton
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
