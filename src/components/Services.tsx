import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Heart,
  Activity,
  Shield,
  Syringe,
  Brain,
  Eye,
  Ear,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Pediátrica General",
      description:
        "Evaluación completa del estado de salud, crecimiento y desarrollo de tu hijo.",
      color: "bg-primary",
    },
    {
      icon: Syringe,
      title: "Vacunación",
      description:
        "Esquema completo de vacunación según el calendario oficial y recomendaciones internacionales.",
      color: "bg-accent",
    },
    {
      icon: Activity,
      title: "Control de Crecimiento",
      description:
        "Seguimiento del desarrollo físico, mental y emocional en cada etapa de la infancia.",
      color: "bg-secondary",
    },
    // Se comenta para quitar componente del frontend
    // {
    //   icon: Heart,
    //   title: "Cardiología Pediátrica",
    //   description: "Evaluación y seguimiento de problemas cardíacos congénitos y adquiridos en niños.",
    //   color: "bg-primary"
    // },
    // {
    //   icon: Brain,
    //   title: "Neurología Pediátrica",
    //   description:
    //     "Diagnóstico y tratamiento de trastornos del sistema nervioso en la infancia.",
    //   color: "bg-accent",
    // },
    {
      icon: Shield,
      title: "Medicina Preventiva",
      description:
        "Programas de prevención y promoción de hábitos saludables desde temprana edad.",
      color: "bg-secondary",
    },
    // Se comenta para quitar componente del frontend
    // {
    //   icon: Eye,
    //   title: "Oftalmología Pediátrica",
    //   description:
    //     "Revisión y cuidado de la salud visual, detección temprana de problemas oculares.",
    //   color: "bg-primary",
    // },
    // {
    //   icon: Ear,
    //   title: "Otorrinolaringología",
    //   description:
    //     "Tratamiento de problemas del oído, nariz y garganta en niños y adolescentes.",
    //   color: "bg-accent",
    // },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Servicios Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios pediátricos para asegurar el
            bienestar integral de tu hijo en cada etapa de su desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-gradient shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
