import heroImage from '@/assets/hero-bg.jpg';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Code, ExternalLink, Globe, Smartphone, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestão Empresarial',
      category: 'Web Development',
      client: 'Empresa de Logística',
      description: 'Sistema completo de gestão com módulos de vendas, estoque, financeiro e relatórios em tempo real.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      features: ['Dashboard em tempo real', 'Gestão de estoque', 'Relatórios avançados', 'API integrada'],
      results: [
        'Redução de 40% no tempo de processamento',
        'Eliminação de planilhas manuais',
        'Integração com 5 sistemas externos'
      ],
      duration: '3 meses',
      year: '2024'
    },
    {
      id: 2,
      title: 'App de Delivery Premium',
      category: 'Mobile Development',
      client: 'Rede de Restaurantes',
      description: 'Aplicativo mobile para pedidos com geolocalização, pagamento integrado e acompanhamento em tempo real.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      features: ['Geolocalização', 'Pagamentos seguros', 'Push notifications', 'Avaliações'],
      results: [
        'Aumento de 60% nas vendas online',
        '50k+ downloads em 6 meses',
        'Nota 4.8 nas app stores'
      ],
      duration: '4 meses',
      year: '2024'
    },
    {
      id: 3,
      title: 'E-commerce B2B Personalizado',
      category: 'Web Development',
      client: 'Distribuidora Industrial',
      description: 'Plataforma de vendas B2B com catálogo personalizado, cotações automáticas e integração ERP.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Shopify Plus', 'Webhook', 'REST API'],
      features: ['Catálogo dinâmico', 'Cotações automáticas', 'Portal do cliente', 'Integração ERP'],
      results: [
        'Digitalização de 100% das vendas',
        'Redução de 50% no tempo de cotação',
        'Aumento de 35% na receita'
      ],
      duration: '5 meses',
      year: '2023'
    },
    {
      id: 4,
      title: 'Sistema de Telemedicina',
      category: 'Web Development',
      client: 'Clínica Médica',
      description: 'Plataforma completa para consultas online com prontuário eletrônico e agendamento integrado.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'WebRTC', 'Node.js', 'MongoDB'],
      features: ['Videochamadas HD', 'Prontuário eletrônico', 'Prescrições digitais', 'Agendamento'],
      results: [
        'Atendimento 24/7 implementado',
        '200% aumento em consultas',
        'Redução de custos operacionais'
      ],
      duration: '6 meses',
      year: '2023'
    }
  ];

  const stats = [
    { number: '6+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação do Cliente' },
    { number: '3+', label: 'Estados do Brasil Atendidos' },
    { number: '24/7', label: 'Suporte Técnico' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return Code;
      case 'Mobile Development':
        return Smartphone;
      default:
        return Globe;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb
        title="Portfólio"
        subtitle="Casos de sucesso e projetos que transformaram negócios"
        backgroundImage={heroImage}
      />

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estudos de <span className="text-gradient">Caso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos e os resultados alcançados
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <Card
                  key={project.id}
                  className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Project Image */}
                      <div className={`relative h-80 lg:h-auto bg-gradient-to-br from-primary/20 to-primary/5 ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CategoryIcon className="h-24 w-24 text-primary opacity-30" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-black/20 border-white/20 text-white hover:bg-black/40">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className={`p-8 lg:p-12 space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <CategoryIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <Badge variant="outline" className="border-primary/30 text-primary">
                                {project.client}
                              </Badge>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Funcionalidades principais:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                  <Star className="h-3 w-3 text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Resultados alcançados:</h4>
                            <div className="space-y-1">
                              {project.results.map((result) => (
                                <div key={result} className="flex items-center gap-2">
                                  <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                                  <span className="text-sm text-green-400">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{project.duration}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnologias que <span className="text-gradient">Dominamos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stack moderno para garantir performance, segurança e escalabilidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'TypeScript', 'Next.js', 'React Native', 'PostgreSQL',
              'MongoDB', 'AWS', 'Docker', 'Firebase', 'Stripe', 'Tailwind CSS', 'Bootstrap',
              'MySql'
            ].sort().map((tech, index) => (
              <Card
                key={tech}
                className="border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-border bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seu projeto pode ser o <span className="text-gradient">próximo case de sucesso</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vamos conversar sobre sua ideia e como podemos transformá-la em uma solução tecnológica de impacto
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
                  Iniciar Meu Projeto
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

export default Portfolio;