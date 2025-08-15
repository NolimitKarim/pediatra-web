import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const AgendarCita = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    nino: "",
    edad: "",
    motivo: "",
    fecha: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validaciones
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    const phoneDigits = form.telefono.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      newErrors.telefono = "El teléfono debe tener al menos 10 dígitos";
    }
    const edadNum = parseInt(form.edad, 10);
    if (isNaN(edadNum) || edadNum <= 0 || edadNum >= 18) {
      newErrors.edad = "La edad debe ser mayor que 0 y menor de 18";
    }
    if (!form.fecha) {
      newErrors.fecha = "Selecciona una fecha";
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
        fecha: "",
      });
      setErrors({});
    } catch (err) {
      // Manejo de error opcional
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient flex items-center justify-center gap-2">
            <Calendar className="w-7 h-7 text-primary" />
            Agendar Cita
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona la fecha y llena el formulario para agendar tu cita.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Formulario de Cita</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Fecha de la cita
                  </label>
                  <Input
                    name="fecha"
                    type="date"
                    value={form.fecha}
                    onChange={handleChange}
                    required
                  />
                  {errors.fecha && (
                    <p className="text-red-500 text-xs">{errors.fecha}</p>
                  )}
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {loading ? "Agendando..." : "Agendar Cita"}
                </Button>
                {success && (
                  <p className="text-green-600 text-center text-sm mt-2">
                    ¡Cita agendada correctamente!
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

export default AgendarCita;
