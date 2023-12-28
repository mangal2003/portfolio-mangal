import React, { useRef } from "react";
import "./contact.css";
import certificate from "./certificate.jpg";
import certificate1 from "./certificate1.jpg";
import certificate2 from "./certificate2.jpg";
import certificate3 from "./certificate3.jpg";
import certificate4 from "./certificate4.jpg";
import GitHub from "./github.png";
import Instagram from "./instagram.jpg";
import linkedIn from "./linkedIn.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unpt23j",
        "template_ryqzom5",
        form.current,
        "W-ghWs-nKjXUvCVe6"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="showcase">
        <h2 className="title">My Certificates</h2>
        <p className="titleDesc">
          Explore my journey and expertise through certifications, showcasing a
          commitment to continual learning and mastery in the field of design.
        </p>
        <div className="certificateGallery">
          <img src={certificate} alt="Certificate" className="certificateImg" />
          <img
            src={certificate1}
            alt="certificate1"
            className="certificateImg"
          />
          <img
            src={certificate2}
            alt="certificate2"
            className="certificateImg"
          />
          <img
            src={certificate3}
            alt="certificate3"
            className="certificateImg"
          />
          <img
            src={certificate4}
            alt="certificate4"
            className="certificateImg"
          />
        </div>
      </div>
      <div id="contact">
        <h2 className="title">Contact Me</h2>
        <p className="titleDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="user_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email"
            name="user_email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/shivmangal/">
              <img src={linkedIn} alt="" className="link" />
            </a>
            <a href="https://github.com/mangal2003">
              <img src={GitHub} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com/_as_am_as_/">
              <img src={Instagram} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
