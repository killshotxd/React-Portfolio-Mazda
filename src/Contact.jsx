import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="cont-heading">
          <h2>How can I help?</h2>
          <h3>Drop me a line and I’ll get back to you shortly.</h3>
        </div>

        <div className="contact-wrapper">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xleverav"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                className="contact-input-text"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                className="contact-input-text"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                className="contact-textArea"
                required
              ></textarea>

              <input type="submit" value="send" className="contact-submit" />
            </form>
          </div>

          <div className="contact-image-wrapper">
            <img src="./contact.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
