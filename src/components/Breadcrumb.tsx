import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
  subtitle?: string;
}

const Breadcrumb = ({ title, backgroundImage, subtitle }: BreadcrumbProps) => {
  return (
    <section 
      className="relative py-24 mt-16 overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : undefined}
    >
      {!backgroundImage && (
        <div className="absolute inset-0 hero-gradient"></div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm mb-6">
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Home size={16} className="mr-1" />
              Home
            </Link>
            <ChevronRight size={16} className="text-muted-foreground" />
            <span className="text-primary font-medium">{title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float"></div>
    </section>
  );
};

export default Breadcrumb;