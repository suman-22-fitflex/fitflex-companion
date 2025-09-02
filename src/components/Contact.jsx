import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state to track submission

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);   // Show success message
    // Clear inputs
    setName('');
    setEmail('');
    setMessage('');
    // Hide success message after few seconds (optional)
    setTimeout(() => setSubmitted(false), 3000); 
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="bmi-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* ✅ Success message */}
        {submitted && <p style={{ color: 'green', marginTop: '10px' }}>✅ Message Sent!</p>}
      </div>
    </section>
  );
}

export default Contact;
