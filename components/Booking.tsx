"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type BookingFormData = {
  name: string;
  email: string;
  quantity: string;
  accepted: boolean;
};

type BookingErrors = Partial<Record<keyof BookingFormData, string>>;

const quantityOptions = ["1", "2", "3", "4"];

const initialForm: BookingFormData = {
  name: "",
  email: "",
  quantity: "1",
  accepted: false,
};

export default function Booking() {
  const [formData, setFormData] = useState<BookingFormData>(initialForm);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    const nextErrors: BookingErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Escribe tu nombre.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Escribe tu email.";
    } else if (!validateEmail(formData.email)) {
      nextErrors.email = "Introduce un email válido.";
    }

    if (!formData.accepted) {
      nextErrors.accepted = "Debes aceptar la condición para reservar.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;

    const isCheckbox = type === "checkbox";
    const nextValue = isCheckbox
      ? (event.target as HTMLInputElement).checked
      : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));

    if (errors[name as keyof BookingFormData]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialForm);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="reservas" className="section-shell booking-section">
      <div className="container booking-layout">
        <div className="booking-content">
          <p className="section-tag">Próxima edición y reserva</p>
          <h2>Tu próxima pausa empieza aquí.</h2>
          <p>
            Las plazas son limitadas para mantener un grupo cercano, tranquilo y
            acompañado.
          </p>

          <div className="booking-card">
            <div className="booking-card-header">
              <span>Próxima edición</span>
            </div>
            <ul>
              <li>18–19 de abril</li>
              <li>Barcelona</li>
              <li>24 horas</li>
              <li>Grupo máximo de 20 personas</li>
              <li>89 € por persona</li>
            </ul>
          </div>

          <div className="booking-included">
            <h3>Incluye</h3>
            <ul>
              <li>Participación en la experiencia completa</li>
              <li>Actividades guiadas</li>
              <li>Comidas indicadas en el programa</li>
              <li>Acompañamiento de una persona responsable</li>
              <li>Materiales para la comunicación alternativa</li>
            </ul>
          </div>
        </div>

        <div className="booking-form-wrap">
          {!isSubmitted ? (
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field-group">
                <label htmlFor="quantity">Número de plazas</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                >
                  {quantityOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="checkbox-group">
                <label htmlFor="accepted" className="checkbox-label">
                  <input
                    id="accepted"
                    name="accepted"
                    type="checkbox"
                    checked={formData.accepted}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.accepted)}
                    aria-describedby={errors.accepted ? "accepted-error" : undefined}
                  />
                  <span>
                    Entiendo que SILENCIO 24 es una experiencia social y no una
                    terapia ni un tratamiento.
                  </span>
                </label>
                {errors.accepted && (
                  <p id="accepted-error" className="field-error" role="alert">
                    {errors.accepted}
                  </p>
                )}
              </div>

              <button type="submit" className="button button-primary form-button">
                Reservar mi plaza
              </button>
            </form>
          ) : (
            <div className="success-panel" aria-live="polite">
              <h3>Tu solicitud de reserva se ha enviado.</h3>
              <p>Te contactaremos pronto con los siguientes pasos.</p>
              <button type="button" className="button button-secondary" onClick={resetForm}>
                Enviar otra solicitud
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
