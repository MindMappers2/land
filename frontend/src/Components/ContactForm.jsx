import React, { useState } from 'react';

const ContactForm = ({ land, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          inquiryType: 'general'
        });
        if (onClose) onClose();
      }, 3000);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="contact-form-overlay">
        <div className="contact-form success">
          <div className="success-icon">✅</div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for your inquiry. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-overlay">
      <div className="contact-form">
        <div className="contact-form-header">
          <h3>Inquire About This Property</h3>
          {land && (
            <div className="property-info">
              <h4>{land.title}</h4>
              <p>{land.location} • ${land.price.toLocaleString()}</p>
            </div>
          )}
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inquiryType">Inquiry Type</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="viewing">Schedule Viewing</option>
                <option value="purchase">Purchase Interest</option>
                <option value="rental">Rental Interest</option>
                <option value="investment">Investment Opportunity</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Tell us about your interest in this property..."
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 