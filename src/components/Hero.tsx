import { Button } from "@/components/ui/button";
import { Heart, Shield, Star } from "lucide-react";
import happyChildren from "@/assets/happy-children.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden soft-gradient">
      {/* Decorative elements - more subtle */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 blob-shape animate-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/10 blob-shape animate-gentle-bounce" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - refined typography */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="animate-title">Cuidado Pediátrico</span>
                <span className="block text-foreground mt-2">con Amor y Experiencia</span>
              </h1>
              <p className="text-lg md:text-xl font-body text-muted-foreground max-w-lg leading-relaxed font-light">
                Brindando atención médica especializada y personalizada para el bienestar y desarrollo saludable 
                de tus pequeños desde el nacimiento hasta la adolescencia.
              </p>
            </div>

            {/* Stats - more elegant */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 glass rounded-full px-5 py-3 shadow-elegant">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground font-medium">+15 años experiencia</span>
              </div>
              <div className="flex items-center space-x-3 glass rounded-full px-5 py-3 shadow-elegant">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-body text-foreground font-medium">Atención integral</span>
              </div>
              <div className="flex items-center space-x-3 glass rounded-full px-5 py-3 shadow-elegant">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground font-medium">5★ en reseñas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Agendar Primera Cita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-border bg-card/50 hover:bg-card">
                Conocer Más
              </Button>
            </div>
          </div>

          {/* Right image - more elegant */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={happyChildren}
                alt="Niños felices en consulta pediátrica"
                className="w-full h-auto rounded-3xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating card - refined */}
            <div className="absolute -bottom-6 -left-6 bg-card card-gradient p-6 rounded-2xl shadow-medium border border-border/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-soft">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-card-foreground">Citas Disponibles</p>
                  <p className="text-sm font-body text-muted-foreground">Esta semana</p>
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