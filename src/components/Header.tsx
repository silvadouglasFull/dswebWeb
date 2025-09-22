import dsLogo from '@/assets/ds-webdev-logo.png';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    // { name: 'Portfólio', href: '/portfolio' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={dsLogo} alt="DS Web Dev" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gradient">DS Web Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <a
                href="https://wa.me/5519999705447"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={toggleMenu}
                  className="px-4 py-3 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full neon-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  <a
                    href="https://wa.me/5519999705447"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contato WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;