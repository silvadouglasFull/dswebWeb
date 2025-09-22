import heroImage from '@/assets/hero-bg.jpg';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, Clock, Code, Globe, Heart, Shield, Target, Users, Zap } from 'lucide-react';

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Tecnologia',
      description: 'Amamos o que fazemos e isso se reflete na qualidade dos nossos projetos.'
    },
    {
      icon: Target,
      title: 'Foco nos Resultados',
      description: 'Cada linha de código tem um propósito: gerar valor real para o seu negócio.'
    },
    {
      icon: Shield,
      title: 'Transparência Total',
      description: 'Comunicação clara, prazos realistas e orçamentos sem surpresas.'
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Sempre atualizados com as últimas tecnologias e melhores práticas.'
    }
  ];

  const team = [
    {
      name: 'Douglas Silva',
      role: 'CEO & Full Stack Developer',
      description: 'Mais de 8 anos desenvolvendo soluções web e mobile. Especialista em React, Node.js e arquitetura de sistemas.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      name: 'Thais Quintino',
      role: 'UI/UX Designer',
      description: 'Designer especializada em criar interfaces intuitivas e experiências excepcionais para os usuários.',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      name: 'Heloísa Silva',
      role: 'Assistente Administrativa',
      description: 'Responsável por manter a organização interna e garantir que tudo funcione perfeitamente nos bastidores.',
      skills: ['Organização', 'Comunicação', 'Gestão de Projetos', 'Atendimento ao Cliente']
    }
  ];

  const stats = [
    { number: '6+', label: 'Projetos Entregues', icon: Award },
    { number: '3+', label: 'Estados do Brasil Atendidos', icon: Globe },
    { number: '3+', label: 'Anos de Experiência', icon: Clock },
    { number: '98%', label: 'Satisfação do Cliente', icon: Users }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Fundação da DS Web Dev',
      description: 'Iniciamos nossa jornada com o objetivo de democratizar o acesso à tecnologia de qualidade.'
    },
    {
      year: '2022',
      title: 'Conquistado o Primeiro cliente brasileiro',
      description: 'Nosso primeiro cliente brasileiro confiou em nossa visão e nos ajudou a dar o pontapé inicial.'
    },
    {
      year: '2022',
      title: 'Consultoria em TI',
      description: 'Adicionamos serviços de consultoria para ajudar empresas em sua transformação digital.'
    },
    {
      year: '2023',
      title: 'Certificações e Parcerias',
      description: 'Obtivemos certificações importantes e estabelecemos parcerias estratégicas.'
    },
    {
      year: '2024',
      title: 'Projeto projeto de grande porte',
      description: 'Participamos no desenvolvimento de um sistema para a Artesp, orgão público responsável pela administração de todas as rodovias do estado de São Paulo.'
    },
    {
      year: '2025',
      title: 'Conquistamos um cliente nacional',
      description: 'Expandimos nossa atuação conquistando clientes em todo o território nacional.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb
        title="Sobre Nós"
        subtitle="Conheça a história, valores e equipe por trás da DS Web Dev"
        backgroundImage={heroImage}
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa <span className="text-gradient">Missão</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Transformar ideias em soluções tecnológicas que geram valor real para empresas do mundo inteiro.
              Acreditamos que toda empresa merece ter acesso a software personalizado, sem funções desnecessárias
              que geram custos extras e complexidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    Nossa Visão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconhecida globalmente como a referência em desenvolvimento de software personalizado,
                    democratizando o acesso à tecnologia de qualidade para empresas de todos os tamanhos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    Nossa Filosofia
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Software deve ser uma ferramenta que simplifica, não complica. Por isso, desenvolvemos
                    soluções sob medida, com exatamente o que você precisa, quando você precisa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors neon-glow">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors neon-glow">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-gradient">Jornada</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Como chegamos até aqui e para onde estamos indo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <Card className={`border-border hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <CardContent className="p-6">
                          <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg neon-glow hidden md:block"></div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais apaixonados por tecnologia e comprometidos com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors neon-glow">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Atendimento <span className="text-gradient">Mundial</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A DS Web Dev atende empresas em mais de 3 estados do Brasil, oferecendo soluções tecnológicas
              personalizadas independentemente da localização. Nossa equipe trabalha em fusos horários
              flexíveis para garantir o melhor atendimento aos nossos clientes globais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🇧🇷 Brasil</div>
                <p className="text-muted-foreground">Nossa sede</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-border bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para conhecer a <span className="text-gradient">DS Web Dev</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar sua ideia em uma solução tecnológica de sucesso
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
                  Vamos Conversar
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

export default Sobre;