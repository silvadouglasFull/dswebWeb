import heroImage from '@/assets/hero-bg.jpg';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Code, ExternalLink, Globe, Smartphone, Star } from 'lucide-react';
import dliosPrimoLogo from '@/assets/clients/dliosprimo.jpg';
import fioAgenda from '@/assets/clients/fioagenda.png';
import flaFlorLogo from '@/assets/clients/flaflor.png';
import greatwallLogo from '@/assets/clients/greatwall.png';
import imaginacaoArteLogo from '@/assets/clients/imaginacao-arte.png';
import tudoAzulLogo from '@/assets/clients/tudo-azul.jpeg';
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Fio Agenda — Plataforma SaaS/PWA de Gestão',
      category: 'SaaS / Web & Mobile Development',
      client: 'DS Web Dev (Produto Proprietário)',
      description: 'Plataforma SaaS/PWA completa para gestão de barbearias e agendamentos, com busca geoespacial, pagamentos e integrações de calendário.',
      image: fioAgenda,
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'PostGIS', 'Drizzle ORM', 'RabbitMQ', 'Redis'],
      features: ['Agendamento online em tempo real', 'Busca geoespacial de estabelecimentos', 'Gestão de pagamentos', 'Integrador de calendários', 'Notificações e workers assíncronos'],
      results: [
        'Plataforma live operando em produção com clientes pagantes',
        'Alta performance no processamento de filas com RabbitMQ/Redis',
        'Busca geolocalizada precisa com suporte a PostGIS'
      ],
      duration: 'Em evolução contínua',
      year: '2026'
    },
    {
      id: 2,
      title: 'Modernização de Plataforma de Gestão de Lojistas',
      category: 'Fintech / Refatoração de Sistemas Críticos',
      client: 'BrasilCard',
      description: 'Reengenharia e refatoração de aproximadamente 80% do backend de uma plataforma legada de gestão de mercadores com alto débito técnico.',
      image: '',
      technologies: ['PHP', 'Node.js', 'Práticas de Clean Code', 'Testes Automatizados'],
      features: ['Reengenharia de arquitetura legada', 'Cobertura de testes automatizados', 'Refatoração modular de endpoints', 'Otimização de rotinas de faturamento e gestão'],
      results: [
        'Refatoração de ~80% do código backend legado',
        'Elevação expressiva dos padrões de engenharia e confiabilidade',
        'Garantia de estabilidade em rotinas críticas de abrangência nacional'
      ],
      duration: '6 meses',
      year: '2025'
    },
    {
      id: 3,
      title: 'Plataforma Autônoma de Automação de Marketing com IA',
      category: 'AI / Automation / Real Estate',
      client: 'EEmovel',
      description: 'Ferramenta baseada em Inteligência Artificial para automatizar fluxos repetitivos de publicação e campanhas de marketing imobiliário.',
      image: '',
      technologies: ['Next.js', 'Python', 'FastAPI', 'LangChain', 'Meta APIs', 'C#', 'RabbitMQ', 'PostgreSQL', 'Elasticsearch'],
      features: ['Geração e agendamento autônomo de anúncios', 'Integração direta com APIs da Meta', 'Arquitetura serverless orientada a eventos', 'Mecanismo de busca acelerado com Elasticsearch'],
      results: [
        'Eliminação de tarefas manuais repetitivas no fluxo de marketing',
        'Orquestração eficiente de LLMs via LangChain',
        'Alta escalabilidade com microsserviços serverless em C#'
      ],
      duration: '4 meses',
      year: '2026'
    },
    {
      id: 4,
      title: 'Portal Social de Análise de Dados com Agentes de IA',
      category: 'AI & Data / Big Data',
      client: 'EEmovel / Projeto de Dados Sociais',
      description: 'Portal de dados focado em vulnerabilidade social que permite a exploração de grandes bases públicas por meio de consultas em linguagem natural.',
      image: '',
      technologies: ['React', 'Node.js', 'LangChain', 'OpenAI API', 'Gemini API'],
      features: ['Interface conversacional para consulta de dados', 'Processamento de datasets públicos via LLM', 'Visualizações dinâmicas de mapas e indicadores', 'Respostas estruturadas em tempo real'],
      results: [
        'Substituição de análises manuais pesadas em planilhas por consultas de IA',
        'Acesso rápido a inteligência de dados para tomada de decisão',
        'Integração de múltiplos provedores de LLM (OpenAI e Gemini)'
      ],
      duration: '3 meses',
      year: '2026'
    },
    {
      id: 5,
      title: 'Plataforma de Captura e Score de Crédito / Seguros',
      category: 'Fintech / Insurtech',
      client: '11Ponto11',
      description: 'Desenvolvimento de produtos web e mobile focados em aquisição de leads, cálculo de score de crédito e conexão com ofertas de seguros.',
      image: '',
      technologies: ['Laravel', 'Django', 'React', 'React Native', 'APIs Financeiras'],
      features: ['Fluxos otimizados de conversão de leads', 'Motor de matchmaking para seguros', 'Algoritmos de score de crédito', 'Painel administrativo para gestão de propostas'],
      results: [
        'Entrega completa do ecossistema frontend, backend e integrações',
        'Processamento ágil de simulações de crédito e seguros',
        'Alta taxa de conversão na captura de novos clientes'
      ],
      duration: '5 meses',
      year: '2024'
    },
    {
      id: 6,
      title: 'Sistema de Inspeção de Qualidade com Visão Computacional',
      category: 'AgTech / Computer Vision',
      client: 'Brazil Beef Quality',
      description: 'Arquitetura de API e ecossistema mobile para coleta de dados de campo integrada a modelos de inteligência artificial e visão computacional.',
      image: '',
      technologies: ['Node.js', 'React Native', 'AWS', 'Modelos de Visão Computacional'],
      features: ['Coleta de dados offline via app mobile', 'Processamento de imagens por IA na nuvem AWS', 'Classificação automatizada de padrões de qualidade', 'Dashboards de acompanhamento industrial'],
      results: [
        'Integração fluida entre aplicativo mobile, backend e modelos de IA',
        'Padronização e precisão no processo de inspeção de carne',
        'Infraestrutura escalável hospedada em nuvem AWS'
      ],
      duration: '5 meses',
      year: '2023'
    },
    {
      id: 7,
      title: 'Sistema de Gestão Rodoviária e Infraestrutura',
      category: 'GovTech / Enterprise Software',
      client: 'ARTESP (Governo do Estado de SP)',
      description: 'Atuação no desenvolvimento de sistema de grande porte para administração e monitoramento das rodovias concedidas do Estado de São Paulo.',
      image: '',
      technologies: ['Java', 'Spring Boot', 'Oracle Database', 'TypeScript', 'Angular'],
      features: ['Módulos de fiscalização e auditoria', 'Gestão de dados de tráfego e ocorrências', 'Relatórios regulatórios complexos', 'Integração com órgãos de trânsito'],
      results: [
        'Suporte à gestão da malha rodoviária do Estado de São Paulo',
        'Atendimento a rigorosos requisitos de segurança e auditoria pública',
        'Processamento de grande volume de dados transacionais'
      ],
      duration: '8 meses',
      year: '2024'
    }
  ];
  const landingProjects = [
    {
      id: 8,
      title: 'D\'Lios Primo — E-commerce & Alfaiataria sob Medida',
      category: 'E-commerce & Web Development',
      client: 'D\'Lios Primo Alfaiataria',
      description: 'Plataforma e-commerce exclusiva para venda de roupas de alta alfaiataria com integração de meios de pagamento e gestão de catálogo.',
      image: dliosPrimoLogo,
      technologies: ['React.js', 'Node.js', 'MySQL', 'Gateway de Pagamentos'],
      features: ['Checkout transparente', 'Gestão de produtos e pedidos', 'Painel administrativo', 'Layout responsivo e elegante'],
      results: [
        'Digitalização completa das vendas da marca própria',
        'Experiência de compra fluida e otimizada para dispositivos móveis',
        'Integração segura com meios de pagamento'
      ],
      duration: '6 meses',
      year: '2024'
    },
    {
      id: 9,
      title: 'Plataforma Digital & Catálogo — Soluções Great Wall',
      category: 'Landing Page & Web Application',
      client: 'Soluções Great Wall',
      description: 'Website corporativo com catálogo dinâmico de serviços, preços e sistema automatizado de envio de propostas via e-mail.',
      image: greatwallLogo,
      technologies: ['React.js', 'Node.js', 'Nodemailer/APIs de E-mail'],
      features: ['Catálogo dinâmico de serviços', 'Formulário de contato interativo', 'Envio automático de cotações por e-mail', 'SEO otimizado'],
      results: [
        'Desenvolvimento e publicação ágil em apenas 7 dias',
        'Automação na captação de leads interessados via e-mail',
        'Presença digital de alta performance com React'
      ],
      duration: '7 dias',
      year: '2024'
    },
    {
      id: 10,
      title: 'Imaginação e Arte Helo — Catálogo Interativo de Produtos',
      category: 'Landing Page & Product Catalog',
      client: 'Imaginação e Arte Helo',
      description: 'Landing page responsiva com catálogo de produtos, galeria de fotos de alta qualidade e exibição clara de preços para os clientes.',
      image: imaginacaoArteLogo,
      technologies: ['React.js', 'Styled Components', 'Vite'],
      features: ['Galeria fotográfica de alta velocidade', 'Listagem clara de preços', 'Botão de atendimento via WhatsApp', 'Design responsivo'],
      results: [
        'Entrega expressa em 2 dias',
        'Facilidade para clientes consultarem o catálogo atualizado',
        'Aumento na conversão de contatos diretos'
      ],
      duration: '2 dias',
      year: '2024'
    },
    {
      id: 11,
      title: 'Flaflor Climatização — Presença Digital Institucional',
      category: 'Landing Page',
      client: 'Flaflor Climatização',
      description: 'Landing page corporativa focada em apresentação de serviços de climatização, autoridade de marca e geração de contatos.',
      image: flaFlorLogo,
      technologies: ['React.js', 'Tailwind CSS'],
      features: ['Design moderno e veloz', 'Call-to-actions estratégicos', 'Otimização para SEO local'],
      results: [
        'Projeto entregue em apenas 2 dias',
        'Página de alta velocidade de carregamento com React',
        'Ponto de contato profissional para clientes da região'
      ],
      duration: '2 dias',
      year: '2024'
    },
    {
      id: 12,
      title: 'Tudo Azul Piscinas — Landing Page Promocional',
      category: 'Landing Page',
      client: 'Tudo Azul Piscinas',
      description: 'Website de apresentação rápida de produtos e serviços para o setor de instalação e manutenção de piscinas.',
      image: tudoAzulLogo,
      technologies: ['React.js', 'Single Page Application'],
      features: ['Apresentação visual impactante', 'Integração com redes sociais e WhatsApp', 'Navegação fluida'],
      results: [
        'Desenvolvimento em tempo recorde de 2 dias',
        'Presença web garantida para campanhas de anúncios locais'
      ],
      duration: '2 dias',
      year: '2024'
    }
  ];
  const stats = [
    { number: '8+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação do Cliente' },
    { number: '3+', label: 'Estados do Brasil Atendidos' },
    { number: '24/7', label: 'Suporte Técnico' }
  ];

  const getCategoryIcon = (category: string, imageSas?:string) => {
    switch (category) {
      case 'Web Development':
        return Code;
      case 'Mobile Development':
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
              const CategoryIcon = getCategoryIcon(project.category, project.image);

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
                          {project.image ? (
                            <img src={project.image} className='h-full w-full'/>
                          ):
                          (<CategoryIcon className="h-24 w-24 text-primary opacity-30" />)
                        }
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
            {/* Ladingpages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estudos de <span className="text-gradient">Caso</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos sites que desenvolvemos
            </p>
          </div>

          <div className="space-y-16">
            {landingProjects.map((project, index) => {
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
                      <div className={`relative h-80 lg:h-auto ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img src={project.image} className='h-full w-full text-primary'/>
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