import { Button } from "@/components/ui/button";
import { Menu, Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Lun-Vie: 8:00-18:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>123 Calle Principal, Ciudad</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">
                P+
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">
                Dr. Nubia Rangel
              </h1>
              <p className="text-sm text-muted-foreground">
                Pediatra Especialista
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre Mí
            </a>
            <a
              href="#servicios"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="appointment" className="hidden md:inline-flex">
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
