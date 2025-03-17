'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import styles from './contact.module.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredTime: string;
  projectUrgency: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || 'Your message has been sent successfully!',
        });
        reset(); // Reset form on success
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <h1>Get Your Free Quote Today</h1>
        <p className={styles.subheading}>No obligation, same-day responses for most inquiries</p>
      </header>

      <div className={styles.contactWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h2>Tell Us About Your Project</h2>
            <p>We're ready to help with your electrical needs</p>
          </div>

          {submitStatus.success ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3>Thank You!</h3>
              <p>{submitStatus.message}</p>
              <p className={styles.followUp}>We'll be in touch within 24 hours (often much sooner!)</p>
              <button 
                className={styles.button}
                onClick={() => setSubmitStatus({})}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Best number to reach you"
                    {...register('phone', { required: 'Phone number is required' })}
                    className={errors.phone ? styles.errorInput : ''}
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Needed *</label>
                  <select 
                    id="service" 
                    {...register('service', { required: 'Please select a service' })}
                    className={errors.service ? styles.errorInput : ''}
                  >
                    <option value="">Select Service</option>
                    <option value="Residential Electrical">Residential Electrical</option>
                    <option value="Commercial Electrical">Commercial Electrical</option>
                    <option value="Emergency Repair">Emergency Repair</option>
                    <option value="Heat Pump Installation">Heat Pump Installation</option>
                    <option value="Heat Pump Service">Heat Pump Service/Maintenance</option>
                    <option value="Smart Home Installation">Smart Home Installation</option>
                    <option value="Electrical Inspection">Electrical Inspection</option>
                    <option value="Other">Other (specify in message)</option>
                  </select>
                  {errors.service && <span className={styles.errorMessage}>{errors.service.message}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="projectUrgency">How Urgent Is Your Project?</label>
                  <select id="projectUrgency" {...register('projectUrgency')}>
                    <option value="Not Urgent">Not Urgent - Planning Ahead</option>
                    <option value="Somewhat Urgent">Somewhat Urgent - Within 2 Weeks</option>
                    <option value="Very Urgent">Very Urgent - As Soon as Possible</option>
                    <option value="Emergency">Emergency - Need Help Today</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="preferredTime">Best Time to Contact You</label>
                <select id="preferredTime" {...register('preferredTime')}>
                  <option value="Anytime">Anytime During Business Hours</option>
                  <option value="Morning">Morning (8am - 12pm)</option>
                  <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="Evening">Evening (After 5pm)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Tell Us About Your Project *</label>
                <textarea
                  id="message"
                  placeholder="Please describe what you need help with"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className={errors.message ? styles.errorInput : ''}
                />
                {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
              </div>

              <div className={styles.guaranteeBox}>
                <div className={styles.guaranteeIcon}>🛡️</div>
                <div>
                  <strong>Kings Electrical Guarantee:</strong>
                  <p>100% satisfaction guarantee on all our work. We're not happy until you are!</p>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
              </button>

              <p className={styles.formDisclaimer}>
                By submitting this form, you agree to be contacted about our services. We respect your privacy and will never share your information.
              </p>

              {submitStatus.message && !submitStatus.success && (
                <div className={styles.errorBanner}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          )}
        </div>

        <div className={styles.contactSidebar}>
          <div className={styles.whyChooseUs}>
            <h3>Why Choose Kings Electrical?</h3>
            <ul className={styles.benefitsList}>
              <li><span className={styles.checkmark}>✓</span> Licensed & certified professionals</li>
              <li><span className={styles.checkmark}>✓</span> Transparent pricing - no hidden fees</li>
              <li><span className={styles.checkmark}>✓</span> 100% satisfaction guarantee</li>
              <li><span className={styles.checkmark}>✓</span> Fast response times</li>
              <li><span className={styles.checkmark}>✓</span> Fully insured workmanship</li>
              <li><span className={styles.checkmark}>✓</span> Clean, tidy, and respectful service</li>
            </ul>
          </div>
          
          <div className={styles.contactDirect}>
            <h3>Need Immediate Assistance?</h3>
            <p>Call us directly:</p>
            <a href="tel:+6433771546" className={styles.phoneButton}>03 377 1546</a>
            <p className={styles.businessHours}>
              <strong>Business Hours:</strong><br />
              Monday - Friday: 8am - 6pm<br />
              Saturday: 9am - 2pm<br />
              <span className={styles.emergencyNote}>24/7 Emergency Service Available</span>
            </p>
          </div>
          
          <div className={styles.testimonialSidebar}>
            <div className={styles.stars}>★★★★★</div>
            <blockquote>
              "Kings Electrical provided exceptional service. They arrived on time, solved our electrical issue quickly, and kept the work area clean. Highly recommend!"
            </blockquote>
            <cite>- James Thompson, Christchurch</cite>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Kings Electrical. All rights reserved.</p>
      </footer>
    </div>
  );
} 