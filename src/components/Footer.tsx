import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. María González</h3>
                <p className="text-primary-foreground/80">Pediatra Especialista</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Comprometida con el cuidado y bienestar de la salud infantil. 
              Más de 15 años de experiencia brindando atención pediátrica especializada.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">dra.gonzalez@pediatria.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  123 Calle Principal, Col. Centro<br />
                  Ciudad de México, CDMX
                </span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horarios de Atención</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados</span>
                <span>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos</span>
                <span>Cerrado</span>
              </div>
              <div className="mt-3 p-3 bg-primary-foreground/10 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">Emergencias:</span> Disponible 24/7 para consultas urgentes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2024 Dr. María González - Pediatría. Todos los derechos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Sitio web creado con ❤️ para el cuidado de la salud infantil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;