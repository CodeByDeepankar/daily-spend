'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated, token } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const submitData = {
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    try {
        const response = await fetch('https://6uu73dgqj7.execute-api.us-east-1.amazonaws.com/dev/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(submitData)
        });

        if (response.ok) {
            alert('Thank you for contacting Tekkzy! We have received your message and will get back to you shortly.');
            form.reset();
        } else {
            console.error('Submission failed');
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('Error sending message. Please check your connection.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <main>
        <section className="section-header" style={{marginTop: '60px'}}>
            <span className="subtitle">Get in Touch</span>
            <h2>Let&apos;s Build Something Great</h2>
            <p>Have a project in mind or need assistance? Reach out to our team today.</p>
        </section>

        <section style={{paddingTop: 0}}>
            <div className="container">
                <div className="contact-grid">
                    
                    <div className="contact-info-card">
                        <div className="info-item">
                            <h4>Corporate Headquarters</h4>
                            <p>Bhubaneswar, Odisha, India</p>
                            <p style={{fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px'}}>Registered Office</p>
                        </div>
                        
                        <div className="info-item">
                            <h4>Email Us</h4>
                            <p>info@tekkzy.com</p>
                            <p style={{fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px'}}>For general inquiries & support</p>
                        </div>

                        <div className="info-item">
                            <h4>Call Us</h4>
                            <p>+91 (000) 000-0000</p>
                            <p style={{fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '4px'}}>Mon - Fri, 9am - 6pm IST</p>
                        </div>

                        <hr style={{border: 0, borderTop: '1px solid var(--border-color)', margin: '30px 0'}} />

                        <div className="legal-box" style={{margin: 0, padding: '20px', fontSize: '0.9rem'}}>
                            <p><strong>Legal Entity:</strong><br/>Tekkzy Intelligent Cloud Applications Pvt. Ltd.</p>
                            <p style={{marginTop: '8px'}}><strong>CIN:</strong><br/>U62013OD2025PTC049193</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3 style={{marginBottom: '24px', color: 'var(--primary-color)'}}>Send us a Message</h3>
                        
                        {isAuthenticated ? (
                            <form onSubmit={handleSubmit}>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" placeholder="john@company.com" required />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="service">Service Interest</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service...</option>
                                        <option value="custom cloud software">Custom Cloud Software</option>
                                        <option value="business automation">Business Automation</option>
                                        <option value="digital marketing">Digital Marketing</option>
                                        <option value="general consultation">General Consultation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your project or inquiry..." required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        ) : (
                            <div style={{textAlign: 'center', padding: '40px 0'}}>
                                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🔒</div>
                                <h4 style={{marginBottom: '10px', color: 'var(--primary-color)'}}>Authentication Required</h4>
                                <p style={{color: 'var(--text-light)', marginBottom: '30px'}}>Please log in to your account to send us a message.</p>
                                <Link href="/auth" className="btn btn-primary">
                                    Log In to Contact
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    </main>
  );
}
