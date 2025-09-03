'use client';

import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const defaultState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "Corporate Law",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Valid email is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    // Replace this block with your actual API call
    console.log("Submitting contact form:", form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(defaultState);
    }, 2500);
  }

  return (
    
    <section className="contact bg-none" aria-label="Free Consultation">
        
      <div className="contact__inner">
        <div className="contact__left">
          <div className="contact__meta">
            <span className="contact__bar" />
            <span className="contact__kicker">Free Consultation</span>
          </div>

          <h2 className="contact__title">Free Consultation</h2>

          <p className="contact__lead">
            Law is a complex matter that can lead to significant problems if disregarded. Allow us to assist you!
          </p>

          <ul className="contact__list" aria-hidden>
            <li>
              <span className="contact__icon">📞</span>
              <span>(1) 2345-2345-54</span>
            </li>
            <li>
              <span className="contact__icon">✉️</span>
              <span>contact@firm.co</span>
            </li>
            <li>
              <span className="contact__icon">🕒</span>
              <span>Mon - Fri 9.00 - 18.00</span>
            </li>
            <li>
              <span className="contact__icon">📍</span>
              <span>12th Wall Street NY CV564 United States</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <div className="field">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name*"
                aria-label="First name"
              />
              {errors.firstName && <div className="field__err">{errors.firstName}</div>}
            </div>

            <div className="field">
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name*"
                aria-label="Last name"
              />
              {errors.lastName && <div className="field__err">{errors.lastName}</div>}
            </div>
          </div>

          <div className="contact__row">
            <div className="field">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                aria-label="Email"
                type="email"
              />
              {errors.email && <div className="field__err">{errors.email}</div>}
            </div>

            <div className="field">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone*"
                aria-label="Phone"
              />
              {errors.phone && <div className="field__err">{errors.phone}</div>}
            </div>
          </div>

          <div className="contact__row">
            <div className="field field--full">
              <select name="service" value={form.service} onChange={handleChange} aria-label="Service">
                <option>Corporate Law</option>
                <option>Real Estate Law</option>
                <option>Healthcare Law</option>
                <option>Tax Law</option>
                <option>Insurance Law</option>
                <option>E-commerce Law</option>
              </select>
            </div>
          </div>

          <div className="contact__row">
            <div className="field field--full">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message*"
                rows={6}
                aria-label="Message"
              />
              {errors.message && <div className="field__err">{errors.message}</div>}
            </div>
          </div>

          <div className="contact__actions">
            <button type="submit" className="btn btn--submit" aria-label="Submit form" disabled={sent}>
              {sent ? "Submitted" : "Submit Now"}
            </button>
            {sent && <div className="contact__sent">Thanks — we&apos;ll contact you shortly.</div>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;