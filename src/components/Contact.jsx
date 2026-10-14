import { useState } from "react";
import { profile } from "../data.js";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Tell me a little more (10+ characters).";
    return next;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section className="section section--muted" id="contact">
      <div className="container">
        <header className="section__head">
          <p className="section__kicker">03 — Contact</p>
          <h2 className="section__title">Let&apos;s build something</h2>
          <p className="section__sub">
            Have a role, a project idea or just a question? Send a note and I&apos;ll
            reply within a couple of days.
          </p>
        </header>

        <div className="contact">
          <form className="card contact__form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="field__error">{errors.name}</p>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="field__error">{errors.email}</p>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                placeholder="What would you like to talk about?"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="field__error">{errors.message}</p>}
            </div>

            <button className="btn btn--primary" type="submit">
              Send message
            </button>

            <p className={`form-note ${sent ? "is-visible" : ""}`} role="status">
              {sent ? "Thanks! Your message is ready to send. ✨" : ""}
            </p>
          </form>

          <aside className="contact__aside">
            <h3 className="contact__aside-title">Direct</h3>
            <a className="contact__mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="contact__location">{profile.location}</p>

            <ul className="socials">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
