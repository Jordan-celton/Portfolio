import React, { useContext } from "react";
import { TranslationContext } from "../App"; // Importer le contexte

const Contact = () => {
  const { translations } = useContext(TranslationContext); // Utiliser le contexte

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">{translations.contactTitle}</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title={translations.mapTitle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85433.60571906895!2d-4.1796019119734655!3d47.99824870816598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810d5972e13aeaf%3A0xd32d85efcaa2cdd0!2s29000%20Quimper!5e0!3m2!1sfr!2sfr!4v1728554413633!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">{translations.contactFormTitle}</h3>

        <form
          action="https://formspree.io/f/xnnqqgon"
          method="POST"
          className="form"
          id="contactForm"
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder={translations.namePlaceholder}
              required
              id="fullname"
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder={translations.emailPlaceholder}
              required
              id="email"
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder={translations.messagePlaceholder}
            required
            id="message"
          ></textarea>

          <button className="form-btn" type="submit" id="submitBtn">
            <ion-icon name="paper-plane"></ion-icon>
            <span>{translations.submitButton}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
