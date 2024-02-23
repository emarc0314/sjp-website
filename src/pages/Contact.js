
import React, { useState } from 'react';
import '../styles/Contact.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted. Check the console for data.');
  };

  return (
    <div className="contact-page-container">
      <div className="infographic-container">
        <h1>Contact Us</h1>
        <p>Have questions? Want to learn more? Interested in getting involved? Contact us using the form below, by email, or through our social media!</p>
        <p>Harvard College Palestine Solidarity Committee</p>
        <p>59 Shepard St. Box #126</p>
        <p>Cambridge, MA 02138</p>
        <p>harvardpsc@gmail.com</p>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="beautiful-contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder=""
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="submit-button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
