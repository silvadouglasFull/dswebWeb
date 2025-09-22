import heroImage from '@/assets/hero-bg.jpg';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Clock, Instagram, Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta imediata',
      value: '+55 11 99999-9999',
      action: 'Conversar no WhatsApp',
      link: 'https://wa.me/5519999705447',
      primary: true
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Resposta em até 2h',
      value: 'contato@dswebdev.com',
      action: 'Enviar E-mail',
      link: 'mailto:contato@dswebdev.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Nos siga',
      value: '@dswebdev',
      action: 'Seguir no Instagram',
      link: 'https://instagram.com/dswebdev'
    }
  ];

  const workingHours = [
    { day: 'Segunda - Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Plantão de emergência' },
  ];

  const faqs = [
    {
      question: 'Qual o prazo para desenvolvimento?',
      answer: 'Varia conforme a complexidade do projeto. Projetos simples: 2-4 semanas. Projetos complexos: 2-6 meses.'
    },
    {
      question: 'Vocês oferecem manutenção?',
      answer: 'Sim! Oferecemos suporte técnico 24/7 e manutenção contínua para todos os projetos desenvolvidos.'
    },
    {
      question: 'Como funciona o orçamento?',
      answer: 'Fazemos uma consultoria gratuita para entender suas necessidades e preparamos um orçamento personalizado.'
    },
    {
      question: 'Atendem empresas de outros países?',
      answer: 'Sim! Atendemos empresas do mundo inteiro com equipe preparada para trabalhar em diferentes fusos horários.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb
        title="Contato"
        subtitle="Entre em contato conosco e transforme sua ideia em realidade"
        backgroundImage={heroImage}
      />

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Vamos conversar sobre seu <span className="text-gradient">projeto</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp.
                Respondemos em até 2 horas durante horário comercial.
              </p>

              <Card className="border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos sobre seu projeto, necessidades e objetivos..."
                        rows={6}
                        required
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Formas de Contato</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <Card
                        key={method.title}
                        className={`border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer ${method.primary ? 'ring-2 ring-primary/20' : ''}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.primary ? 'bg-primary/20' : 'bg-primary/10'} group-hover:bg-primary/30 transition-colors neon-glow`}>
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{method.title}</h4>
                                <p className="text-sm text-muted-foreground">{method.description}</p>
                                <p className="text-sm font-medium text-primary">{method.value}</p>
                              </div>
                            </div>
                            <Button
                              asChild
                              size="sm"
                              variant={method.primary ? "default" : "outline"}
                              className={method.primary ? "neon-glow" : ""}
                            >
                              <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {method.action}
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horário de Atendimento
                </h3>
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {workingHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-primary font-medium">
                        💬 WhatsApp disponível 24/7 para emergências
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card
                  key={faq.question}
                  className="border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-border bg-gradient-to-r from-green-500/10 to-green-600/5 border-green-500/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <MessageCircle className="h-10 w-10 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefere conversar <span className="text-gradient">diretamente</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Clique no botão abaixo e fale conosco no WhatsApp. Consultoria gratuita e resposta imediata!
              </p>

              <Button
                size="lg"
                asChild
                className="neon-glow bg-green-500 text-white hover:bg-green-600 font-semibold text-lg px-8 py-4"
              >
                <a
                  href="https://wa.me/5519999705447?text=Olá! Gostaria de saber mais sobre os serviços da DS Web Dev."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp Agora
                </a>
              </Button>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Resposta imediata</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Consultoria gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;