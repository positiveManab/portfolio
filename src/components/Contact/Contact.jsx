import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // ✅ Replace with your real Web3Forms access key
    formData.append("access_key", "ea2b912d-27d1-43e7-949b-0a8ff1832b15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        alert("Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left" data-aos="fade-right">
          <h2>Let's Talk</h2>
          <p>📞 +91 8873405065</p>
          <p>📧 manabm.dd22.ee@nitp.ac.in</p>
          <p>📍 NIT Patna, Bihar, India</p>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/manab-mondal-123456/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/manabm"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="contact-right" data-aos="fade-left">
          <form onSubmit={onSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
