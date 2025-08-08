import { Button } from "@/components/ui/button";
import { Menu, Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-card/95 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - more subtle */}
        <div className="hidden md:flex items-center justify-between py-2 text-xs text-muted-foreground border-b border-border/30">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-primary" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-accent" />
              <span>Lun-Vie: 8:00-18:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-primary" />
            <span>123 Calle Principal, Ciudad</span>
          </div>
        </div>

        {/* Main header - more refined */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 hero-gradient rounded-2xl flex items-center justify-center shadow-soft">
              <span className="text-xl font-display font-bold text-primary-foreground">Dr</span>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-gradient">Dr. María González</h1>
              <p className="text-sm font-body text-muted-foreground">Pediatra Especialista</p>
            </div>
          </div>

          {/* Desktop Navigation - cleaner */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth font-body font-medium text-sm tracking-wide">
              Inicio
            </a>
            <a href="#sobre-mi" className="text-foreground hover:text-primary transition-smooth font-body font-medium text-sm tracking-wide">
              Sobre Mí
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-smooth font-body font-medium text-sm tracking-wide">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-smooth font-body font-medium text-sm tracking-wide">
              Galería
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-smooth font-body font-medium text-sm tracking-wide">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="appointment" className="hidden md:inline-flex px-6 py-2">
              Agendar Cita
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;