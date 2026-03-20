"use client";

import { useMemo, useState } from "react";

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = name ? `Oportunidad de colaboración - ${name}` : "Contacto desde portafolio";
    const body = [name ? `Nombre: ${name}` : "", senderEmail ? `Email: ${senderEmail}` : "", "", message].filter(Boolean).join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, message, name, senderEmail]);

  return (
    <form className="contact-form" onSubmit={(event) => { event.preventDefault(); window.location.href = mailtoHref; }}>
      <div className="field-grid">
        <label className="contact-field">
          <span>Nombre</span>
          <input name="name" type="text" placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input name="email" type="email" placeholder="tu@email.com" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} />
        </label>
      </div>
      <label className="contact-field">
        <span>Mensaje</span>
        <textarea name="message" placeholder="¿Cómo puedo ayudarte?" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
      </label>
      <button className="btn btn-primary" style={{ width: '100%' }} type="submit">
        Preparar correo electrónico ✨
      </button>
    </form>
  );
}
