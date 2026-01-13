import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-info">
                    <h4>Tekkzy</h4>
                    <p>Building the future of business with intelligent cloud applications and automated solutions. Trusted, innovative, and results-driven.</p>
                    <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Registered in Bhubaneswar, Odisha, India.</p>
                </div>
                
                <div className="footer-column">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="footer-column">
                    <h5>Services</h5>
                    <ul>
                        <li><Link href="/services">Cloud Solutions</Link></li>
                        <li><Link href="/services">Business Automation</Link></li>
                        <li><Link href="/services">Digital Marketing</Link></li>
                        <li><Link href="/services">Web Maintenance</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="mailto:info@tekkzy.com">info@tekkzy.com</a></li>
                        <li><a href="tel:+910000000000">+91 00000 00000</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 Tekkzy Intelligent Cloud Applications Pvt. Ltd. All Rights Reserved.</p>
                <p>CIN: U62013OD2025PTC049193</p>
            </div>
        </div>
    </footer>
  );
}
