import heroImage from '@/assets/hero-bg.jpg';
import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Code, Globe, Settings, Shield, Smartphone, Zap } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Sites institucionais, e-commerce, sistemas web personalizados e aplicações sob demanda.',
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com funcionalidades específicas para seu negócio.',
    },
    {
      icon: Settings,
      title: 'Consultoria em TI',
      description: 'Análise técnica, arquitetura de sistemas e estratégias digitais para otimizar seus processos.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Personalização Total',
      description: 'Software desenvolvido especificamente para suas necessidades, sem funções desnecessárias.',
    },
    {
      icon: Globe,
      title: 'Atendimento em todo Brasil',
      description: 'Atendemos empresas em qualquer lugar do mundo com suporte 24/7.',
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Código limpo, seguro e otimizado seguindo as melhores práticas do mercado.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-50"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme sua <span className="text-gradient">ideia</span> em
              <br />software <span className="text-gradient">personalizado</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Pare de desperdiçar dinheiro com sistemas cheios de funções que você nunca usa.
              Desenvolvemos software sob demanda, exatamente como você precisa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-4"
              >
                <a
                  href="https://wa.me/5519999705447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-4"
              >
                <a href="#servicos">
                  Nossos Serviços
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/25 rounded-full blur-xl animate-pulse-slow"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher <span className="text-gradient">software personalizado</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Economia, eficiência e resultados que fazem a diferença no seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors neon-glow">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em tecnologia para empresas de todos os tamanhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors neon-glow">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Button
                      variant="outline"
                      className="group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      Saiba Mais
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua <span className="text-gradient">ideia em realidade</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Consultoria gratuita • Orçamento sem compromisso • Atendimento em todo Brasil
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-4"
              >
                <a
                  href="https://wa.me/5519999705447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Falar no WhatsApp
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Consultoria Gratuita</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Suporte 24/7</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Garantia de Qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
