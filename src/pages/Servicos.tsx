import heroImage from '@/assets/hero-bg.jpg';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Clock, Code, Computer, Settings, Smartphone, Users, Zap } from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      subtitle: 'Sites e sistemas web personalizados',
      description: 'Desenvolvemos sites institucionais, e-commerce, sistemas de gestão e aplicações web completas. Utilizamos as tecnologias mais modernas do mercado para garantir performance, segurança e escalabilidade.',
      features: [
        'Sites responsivos e otimizados',
        'E-commerce completo',
        'Sistemas de gestão (ERP/CRM)',
        'APIs e integrações',
        'Painel administrativo',
        'SEO otimizado',
        'Integrações de PDVs com TEF'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB', 'MySql'],
      price: 'A partir de R$ 500',
      delivery: '15-90 dias'
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento Mobile',
      subtitle: 'Apps nativos e híbridos para iOS e Android',
      description: 'Criamos aplicativos móveis que proporcionam uma experiência excepcional aos usuários. Seja nativo ou híbrido, desenvolvemos soluções que atendem perfeitamente às necessidades do seu negócio.',
      features: [
        'Apps nativos (iOS/Android)',
        'Apps híbridos multiplataforma',
        'Interface intuitiva (UI/UX)',
        'Integração com APIs',
        'Push notifications',
        'Publicação nas stores'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo Go'],
      price: 'A partir de R$ 5.000',
      delivery: '30-60 dias'
    },
    {
      icon: Settings,
      title: 'Consultoria em TI',
      subtitle: 'Estratégias digitais e otimização de processos',
      description: 'Analisamos sua infraestrutura atual e propomos soluções tecnológicas que aumentam a produtividade e reduzem custos. Nossa consultoria abrange desde arquitetura de sistemas até estratégias de transformação digital.',
      features: [
        'Análise de infraestrutura',
        'Arquitetura de sistemas',
        'Otimização de processos',
        'Migração para nuvem',
        'Segurança da informação',
        'Treinamento de equipes'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      price: 'A partir de R$ 700',
      delivery: '30-60 dias'
    },
    {
      icon: Computer,
      title: 'Suporte Contínuo',
      subtitle: 'Manutenção, Atualização e Configuração de Firewall',
      description: 'Oferecemos suporte técnico contínuo para garantir que seus computadores e sistemas estejam sempre atualizados, seguros e funcionando perfeitamente. Nosso serviço inclui manutenção preventiva, atualizações de software e configuração de firewalls para proteger seus dados.',
      features: [
        'Manutenção preventiva e corretiva',
        'Atualizações de software e sistema operacional',
        'Configuração e gerenciamento de firewall',
        'Otimização de desempenho',
        'Remoção de vírus e malwares',
        'Suporte remoto e presencial'
      ],
      technologies: ['Windows', 'Linux', 'macOS', 'Norton', 'McAfee', 'ZoneAlarm', 'AnyDesk'],
      price: 'A partir de R$ 120',
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Desenvolvedores sênior com anos de experiência em projetos complexos.'
    },
    {
      icon: Clock,
      title: 'Entrega no Prazo',
      description: 'Metodologia ágil que garante entregas pontuais e dentro do orçamento.'
    },
    {
      icon: Zap,
      title: 'Suporte Contínuo',
      description: 'Suporte técnico 24/7 e manutenção para garantir o funcionamento perfeito.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb
        title="Serviços"
        subtitle="Soluções tecnológicas completas para transformar seu negócio"
        backgroundImage={heroImage}
      />

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center neon-glow">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                        <p className="text-muted-foreground">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">O que está incluso:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.sort().map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-8">
                      <div>
                        <p className="text-sm text-muted-foreground">Investimento</p>
                        <p className="text-xl font-bold text-primary">{service.price}</p>
                      </div>
                      {service.delivery && (
                        <div>
                          <p className="text-sm text-muted-foreground">Prazo de entrega</p>
                          <p className="text-xl font-bold">{service.delivery}</p>
                        </div>
                      )}
                    </div>

                    <Button
                      size="lg"
                      asChild
                      className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
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
                  </div>

                  {/* Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <IconComponent className="h-24 w-24 text-primary opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="text-gradient">DS Web Dev</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinamos experiência técnica com foco nos resultados do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors neon-glow">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-border bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforme sua ideia em <span className="text-gradient">realidade</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Consultoria gratuita para entender suas necessidades e propor a melhor solução tecnológica
              </p>
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
                  Iniciar Projeto
                  <ArrowRight size={20} />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;