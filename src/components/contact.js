import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageCircle, FiSend } from 'react-icons/fi';
import "../styles/contact.css";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_s9xo2jm', 'template_c8urh4o', form.current, 'yKXpqiv8R-PeNFAkz')
      .then((result) => {
          alert('Mensagem enviada com sucesso!');
          e.target.reset();
      }, (error) => {
          alert('Erro ao enviar mensagem, tente novamente.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact">
      <div className="container contact-section">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-icon">
              <FiMessageCircle />
            </div>
            <h3>Thank You!</h3>
            <p>Feel free to drop<br /> a message anytime!</p>
          </div>

          <div className="box contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email"><FiMail /> Email</label>
                  <input type="email" name="user_email" id="email" placeholder="example@gmail.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name"><FiUser /> Name</label>
                  <input type="text" name="user_name" id="name" placeholder="John Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message"><FiMessageCircle /> Message</label>
                <textarea name="message" id="message" rows="6" placeholder="Hey there!" required></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                <FiSend /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
