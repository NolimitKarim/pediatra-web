import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: "(555) 123-4567",
      subtitle: "WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      details: "nubia.rangel@test.com",
      subtitle: "Respuesta en 24 horas",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "123 Calle Principal, Col. Centro",
      subtitle: "Querétaro, Qro.",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: "Lun-Vie: 8:00-18:00",
      subtitle: "Sáb: 9:00-14:00",
    },
  ];

  // Estado para los campos del formulario
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    nino: "",
    edad: "",
    motivo: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validaciones
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    // Teléfono (solo dígitos, mínimo 10)
    const phoneDigits = form.telefono.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.telefono = "El teléfono debe tener al menos 10 dígitos";
    }

    // Edad (mayor que 0 y menor de 18)
    const edadNum = parseInt(form.edad, 10);
    if (isNaN(edadNum) || edadNum <= 0 || edadNum >= 18) {
      newErrors.edad = "La edad debe ser mayor que 0 y menor de 18";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Maneja cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccess(false);
    try {
      await fetch("http://localhost:5678/webhook/webhook-cita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({
        nombre: "",
        telefono: "",
        email: "",
        nino: "",
        edad: "",
        motivo: "",
      });
      setErrors({});
    } catch (err) {
      // Manejo de error opcional
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Contacto y Citas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estoy aquí para responder tus preguntas y agendar la consulta de tu
            pequeño. No dudes en contactarme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="card-gradient shadow-soft hover:shadow-medium transition-smooth"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {info.details}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick actions */}
            <Card className="card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Agendar Cita Rápida</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ¿Necesitas una cita urgente? Contáctame directamente:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar Ahora
                  </Button>
                  <Button variant="appointment" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Envía un Mensaje</CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario y te contactaré a la brevedad
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">
                      Nombre del Padre/Madre
                    </label>
                    <Input
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">
                      Teléfono
                    </label>
                    <Input
                      name="telefono"
                      placeholder="(555) 123-4567"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Nombre del paciente
                  </label>
                  <Input
                    name="nino"
                    placeholder="Ej: Ana Rangel"
                    value={form.nino}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Edad
                  </label>
                  <Input
                    name="edad"
                    placeholder="Ej: 5 años"
                    value={form.edad}
                    onChange={handleChange}
                    required
                  />
                  {errors.edad && (
                    <p className="text-red-500 text-xs">{errors.edad}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Motivo de la consulta
                  </label>
                  <Textarea
                    name="motivo"
                    placeholder="Describe brevemente el motivo de la consulta o cualquier pregunta que tengas..."
                    rows={4}
                    value={form.motivo}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  variant="hero"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </Button>
                {success && (
                  <p className="text-green-600 text-center text-sm mt-2">
                    ¡Mensaje enviado correctamente!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
