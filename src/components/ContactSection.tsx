import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Card from './Card';
import Button from './Button';
import Input from './Input';

export interface ContactSectionProps {
  // No specific props needed for this component
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@darkcommerce.com',
      href: 'mailto:support@darkcommerce.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <section 
      id="contact-section"
      className="w-full py-20 bg-slate-900 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-600 rounded-full blur-3xl transform translate-x-1/3" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-emerald-600 rounded-full blur-3xl transform -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions? Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="group block"
                aria-label={`Contact us via ${info.label}`}
              >
                <Card className="p-6 text-center hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                  </div>
                  <div className="text-sm font-semibold text-slate-400 mb-1 group-hover:text-indigo-300 transition-colors">
                    {info.label}
                  </div>
                  <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                    {info.value}
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Form Card */}
          <Card className="p-8 border-indigo-500/20">
            <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Message Sent!</h4>
                <p className="text-emerald-300 text-sm">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                    disabled={isSubmitting}
                  />
                  
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full bg-slate-900 border rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none ${
                      errors.message ? 'border-rose-600' : 'border-slate-700'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-rose-400">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full justify-center group"
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Required fields are marked with <span className="text-indigo-400">*</span>
                </p>
              </form>
            )}
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-indigo-900/10 border-indigo-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-white font-semibold">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-emerald-500/20">
              <h3 className="text-lg font-bold text-white mb-3">Response Time</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We typically respond to all inquiries within <span className="text-emerald-400 font-semibold">24 hours</span> 
                {' '}during business days. For urgent matters, please include "URGENT" in your subject line.
              </p>
            </Card>

            <Card className="p-6 bg-slate-800/30 border-l-4 border-l-indigo-500">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Prefer Email?</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Direct all inquiries to: 
                    <br />
                    <a 
                      href="mailto:support@darkcommerce.com" 
                      className="text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-1"
                    >
                      support@darkcommerce.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className={`mt-12 text-center transition-all duration-700 delay-300 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xs text-slate-500">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/50">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/50">
              Terms of Service
            </a>
            . Your information will be kept confidential and used only for responding to your inquiry.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;