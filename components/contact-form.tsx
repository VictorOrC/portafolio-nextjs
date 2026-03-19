"use client";

import { useMemo, useState } from "react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = name
      ? `Contacto desde portafolio - ${name}`
      : "Contacto desde portafolio";

    const body = [
      name ? `Nombre: ${name}` : "",
      senderEmail ? `Email: ${senderEmail}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, message, name, senderEmail]);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="field-grid">
        <label className="contact-field">
          <span>Nombre</span>
          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="contact-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
          />
        </label>
      </div>

      <label className="contact-field contact-field-full">
        <span>Mensaje</span>
        <textarea
          name="message"
          placeholder="Cuéntame brevemente sobre la vacante, proyecto o colaboración."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
        />
      </label>

      <div className="contact-form-actions">
        <button className="button button-primary" type="submit">
          Abrir correo preparado
        </button>
        <p className="form-note">
          El formulario abre tu cliente de correo con el mensaje ya armado.
        </p>
      </div>
    </form>
  );
}
