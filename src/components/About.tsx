import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Clock } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Universidad Nacional de Medicina, Especialización en Pediatría"
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Certificada por el Consejo Mexicano de Pediatría"
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Más de 5,000 niños atendidos en 15 años de práctica"
    },
    {
      icon: Clock,
      title: "Dedicación",
      description: "Atención personalizada y seguimiento continuo"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                Conoce a la Dra. María González
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con más de 15 años de experiencia en pediatría, me dedico a brindar atención médica 
                integral y especializada para el cuidado de la salud infantil. Mi filosofía se basa 
                en crear un ambiente cálido y seguro donde los niños se sientan cómodos y los padres 
                encuentren confianza.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creo firmemente que cada niño es único y merece una atención personalizada. Me 
                especializo en el seguimiento del desarrollo, prevención de enfermedades y 
                promoción de hábitos saludables desde temprana edad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="card-gradient shadow-soft hover:shadow-medium transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="pt-4">
              <Button variant="hero" size="lg">
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={doctorPortrait}
                alt="Dra. María González - Pediatra"
                className="w-full max-w-md mx-auto rounded-3xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl max-w-md mx-auto"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary blob-shape opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent blob-shape opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;