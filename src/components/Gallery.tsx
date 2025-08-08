import Carousel from "@/components/Carousel";
import clinicInterior from "@/assets/clinic-interior.jpg";
import examinationRoom from "@/assets/examination-room.jpg";
import childrenPlaying from "@/assets/children-playing.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Gallery = () => {
  const carouselImages = [
    {
      src: clinicInterior,
      alt: "Interior de la clínica pediátrica",
      title: "Instalaciones Modernas",
      description: "Un ambiente cálido y acogedor diseñado especialmente para los niños"
    },
    {
      src: examinationRoom,
      alt: "Sala de consulta pediátrica",
      title: "Consultorios Equipados",
      description: "Tecnología médica de vanguardia para un diagnóstico preciso"
    },
    {
      src: childrenPlaying,
      alt: "Niños jugando felices",
      title: "Momentos de Alegría",
      description: "Promoviendo el desarrollo saludable y la felicidad en cada consulta"
    },
    {
      src: doctorPortrait,
      alt: "Dra. María González",
      title: "Experiencia y Dedicación",
      description: "Más de 15 años brindando atención pediátrica especializada"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            <span className="animate-title">Nuestra Clínica</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto font-light">
            Conoce nuestras instalaciones y el ambiente cálido donde brindamos 
            atención pediátrica de calidad para el bienestar de tus hijos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel images={carouselImages} />
        </div>

        {/* Additional info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 card-gradient rounded-2xl shadow-elegant">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-primary-foreground">15+</span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Años de Experiencia</h3>
            <p className="font-body text-muted-foreground text-sm">
              Dedicados al cuidado y bienestar de la salud infantil
            </p>
          </div>

          <div className="text-center p-6 card-gradient rounded-2xl shadow-elegant">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-accent-foreground">5K+</span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Niños Atendidos</h3>
            <p className="font-body text-muted-foreground text-sm">
              Familias que confían en nuestra atención especializada
            </p>
          </div>

          <div className="text-center p-6 card-gradient rounded-2xl shadow-elegant">
            <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-display font-bold text-white">★5</span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Calificación Promedio</h3>
            <p className="font-body text-muted-foreground text-sm">
              Excelencia reconocida por nuestros pacientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;