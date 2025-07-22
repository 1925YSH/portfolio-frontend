import React from "react";
import "./Contact.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-backend-lsbg.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
    }
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="title">Contact Me</h2>

        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-left">
            <h3>Let's Connect</h3>
            <p>
              I’m actively seeking internship or entry-level opportunities as a
              Full Stack Developer. I’m eager to apply my skills in real-world
              projects, contribute to dynamic teams, and continue growing as a
              developer. Let’s connect and explore how I can add value to your
              organization!
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> yashotwal777@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Indore, India
              </p>
              <div className="contact-socials">
                <a href="https://github.com/1925YSH" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/yash-otwal-55137a258"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit}> 
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
