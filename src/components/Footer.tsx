import { Award, Instagram, Lock, MessageCircle, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">DS Web Dev</h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvendo soluções personalizadas em software para empresas do mundo inteiro.
              Sua ideia, nossa tecnologia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5519999705447"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors neon-glow"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/dswebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors neon-glow"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Trust Seals */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Segurança & Confiança</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">SSL Certificado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Dados Protegidos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Qualidade Garantida</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Atendemos empresas de todo Brasil
              </p>
              <p className="text-sm text-muted-foreground">
                Suporte 24/7 via WhatsApp
              </p>
              <p className="text-sm text-muted-foreground">
                Consultoria gratuita
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DS Web Dev. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Site desenvolvido por{' '}
              <span className="text-primary font-medium">DS Web Dev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;