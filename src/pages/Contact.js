import React, { useState, useRef } from 'react'; // Import useRef
import emailjs from 'emailjs-com';
import '../styles/Contact.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef(null); // Define form using useRef

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Use EmailJS to send the form data
    emailjs.sendForm('service_nirfux5', 'template_9f56h2i', form.current, 'RYZ56LrPNBCUNQLLj')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
          setFormData({
            name: '',
            email: '',
            message: '',
          }); // Reset form data after submission
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="contact-page-container">
      <div className="infographic-container">
        <h1>Contact Us</h1>
        <p>
          We advocate for justice, demand accountability, and support self-determination.</p>

        <p> Have questions or want to learn more? Interested in getting involved? Contact us 
          using the form, by email, or through our social media!.</p>

        {/* <p>Students for Justice in Palestine</p> */}
        <p><a href="mailto:sjpcornell@gmail.com" style={{ color: '#e58174', textDecoration: 'none' }}>sjpcornell@gmail.com</a></p>
      </div>
      <div className="contact-form-container">
        <form ref={form} onSubmit={handleSubmit} className="beautiful-contact-form">
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
