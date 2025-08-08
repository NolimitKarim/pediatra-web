import { Button } from "@/components/ui/button";
import { Heart, Shield, Star } from "lucide-react";
import happyChildren from "@/assets/happy-children.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-glow/20 blob-shape animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/20 blob-shape animate-gentle-bounce" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Cuidado Pediátrico 
                <span className="block text-gradient bg-white">con Amor</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg">
                Brindando atención médica especializada para el bienestar y desarrollo saludable de tus pequeños desde el nacimiento hasta la adolescencia.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Heart className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold">+15 años experiencia</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold">Atención integral</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-semibold">5★ en reseñas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Agendar Primera Cita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground hover:bg-white/20">
                Conocer Más
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={happyChildren}
                alt="Niños felices en consulta pediátrica"
                className="w-full h-auto rounded-3xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card card-gradient p-6 rounded-2xl shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Citas Disponibles</p>
                  <p className="text-sm text-muted-foreground">Esta semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;