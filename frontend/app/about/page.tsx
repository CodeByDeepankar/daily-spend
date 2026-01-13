import Link from 'next/link';

export default function About() {
  return (
    <main>
        <section className="section-header" style={{marginTop: '60px'}}>
            <span className="subtitle">About Tekkzy</span>
            <h2>Innovating for the Digital Future</h2>
            <p>We are dedicated to simplifying technology for businesses, ensuring growth through intelligent automation and cloud capabilities.</p>
        </section>

        <section className="about-section" style={{paddingTop: '20px'}}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <h3>Our Mission & Vision</h3>
                        <p style={{marginBottom: '20px'}}>Founded in 2025, Tekkzy Intelligent Cloud Applications Private Limited was established with a singular vision: to bridge the gap between complex technology and practical business needs.</p>
                        <p style={{marginBottom: '20px'}}>We believe that digital transformation shouldn&apos;t be complicated. Our mission is to empower businesses of all sizes with accessible, high-performance cloud tools and automation strategies that drive real results. We focus on clear outcomes—reducing manual workload, increasing efficiency, and enabling data-driven growth.</p>
                        
                        <div style={{marginTop: '30px'}}>
                            <h4 style={{marginBottom: '15px', color: 'var(--primary-color)'}}>Why Choose Tekkzy?</h4>
                            <ul style={{display: 'grid', gap: '10px'}}>
                                <li style={{display: 'flex', alignItems: 'start', gap: '10px'}}>
                                    <span style={{color: 'var(--secondary-color)'}}>✓</span>
                                    <span>Outcome-oriented approach focused on ROI</span>
                                </li>
                                <li style={{display: 'flex', alignItems: 'start', gap: '10px'}}>
                                    <span style={{color: 'var(--secondary-color)'}}>✓</span>
                                    <span>Registered and Compliant Pvt. Ltd. Company</span>
                                </li>
                                <li style={{display: 'flex', alignItems: 'start', gap: '10px'}}>
                                    <span style={{color: 'var(--secondary-color)'}}>✓</span>
                                    <span>Expertise in both development and digital strategy</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="legal-box" style={{marginTop: 0}}>
                            <h4 style={{color: 'var(--primary-color)', marginBottom: '16px'}}>Corporate Information</h4>
                            <p><strong>Company Name:</strong><br/>Tekkzy Intelligent Cloud Applications Private Limited</p>
                            <div style={{height: '1px', background: '#E2E8F0', margin: '12px 0'}}></div>
                            <p><strong>Corporate Identity Number (CIN):</strong><br/>U62013OD2025PTC049193</p>
                            <div style={{height: '1px', background: '#E2E8F0', margin: '12px 0'}}></div>
                            <p><strong>Registration:</strong><br/>Registrar of Companies (RoC), Cuttack</p>
                            <div style={{height: '1px', background: '#E2E8F0', margin: '12px 0'}}></div>
                            <p><strong>Headquarters:</strong><br/>Bhubaneswar, Odisha, India</p>
                            <div style={{height: '1px', background: '#E2E8F0', margin: '12px 0'}}></div>
                            <p><strong>Incorporation Year:</strong><br/>2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Values Section */}
        <section style={{backgroundColor: 'var(--bg-light)'}}>
            <div className="container">
                <div className="section-header">
                    <h2>Our Core Values</h2>
                </div>
                <div className="services-grid">
                    <div className="service-card" style={{textAlign: 'center'}}>
                        <h3 style={{marginTop: 0}}>Integrity</h3>
                        <p>We operate with transparency and adhere to the highest standards of corporate governance.</p>
                    </div>
                    <div className="service-card" style={{textAlign: 'center'}}>
                        <h3 style={{marginTop: 0}}>Innovation</h3>
                        <p>We constantly explore new technologies to provide smarter solutions for our clients.</p>
                    </div>
                    <div className="service-card" style={{textAlign: 'center'}}>
                        <h3 style={{marginTop: 0}}>Client Success</h3>
                        <p>Your growth is our metric for success. We build solutions that solve real problems.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2>Partner with a Trusted Technology Company</h2>
                <p>Verify our credentials and explore how we can support your business.</p>
                <Link href="/contact" className="btn btn-primary" style={{backgroundColor: 'var(--bg-white)', color: 'var(--primary-color)'}}>Contact Our Team</Link>
            </div>
        </section>
    </main>
  );
}
