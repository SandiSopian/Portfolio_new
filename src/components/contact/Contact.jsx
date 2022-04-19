import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiTelegramLine, RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qv4qq9i", "template_4mgd5qu", form.current, "b9qEsYNU_1VwFizCo");
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shunasand73@gmail.com</h5>
            <a href="mailto:shunasand73@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>SandiSopian</h5>
            <a href="https://t.me/SandiSopianv3" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+6282118338039</h5>
            <a href="https://api.whatsapp.com/send?phone=+6282118338039" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
