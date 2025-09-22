import brasilcardLogo from '@/assets/clients/brasilcard.png';
import dliosPrimoLogo from '@/assets/clients/dliosprimo.jpg';
import flaFlorLogo from '@/assets/clients/flaflor.png';
import greatwallLogo from '@/assets/clients/greatwall.png';
import imaginacaoArteLogo from '@/assets/clients/imaginacao-arte.png';
import tudoAzulLogo from '@/assets/clients/tudo-azul.jpeg';

const ClientsSection = () => {
  const clients = [
    { name: 'Fla Flor Climatizações', logo: flaFlorLogo },
    { name: 'Imaginação é Arte', logo: imaginacaoArteLogo },
    { name: 'Soluções Greatwall', logo: greatwallLogo },
    { name: "D'lios Primo", logo: dliosPrimoLogo },
    { name: 'Tudo Azul Piscinas', logo: tudoAzulLogo },
    { name: 'BrasilCard', logo: brasilcardLogo },
  ];

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam na DS Web Dev para suas soluções tecnológicas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Junte-se a essas empresas e transforme sua ideia em realidade
          </p>
          <a
            href="https://wa.me/5519999705447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors neon-glow"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;