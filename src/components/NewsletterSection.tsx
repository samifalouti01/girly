import React, { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';
import Button from './Button';
import Input from './Input';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status === 'error') {
      setStatus('idle');
    }
  };

  return (
    <section
      className={`py-16 md:py-24 bg-white ${className}`}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute bottom-0 -left-20 w-32 h-32 bg-white rounded-full"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>Exclusive Offers</span>
              </div>

              <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Stay in the Loop
              </h2>

              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                Subscribe to our newsletter and be the first to know about new arrivals, exclusive sales, and styling tips.
              </p>

              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>15% Off First Order</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Early Access</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleInputChange}
                    className="bg-white/10 border border-white/20 text-white placeholder-white/70 focus:border-white focus:ring-white/20"
                    ariaLabel="Email address for newsletter subscription"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70" size={18} />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  disabled={status === 'loading'}
                  className="w-full bg-white text-purple-600 hover:bg-gray-100 focus:ring-4 focus:ring-purple-300"
                  ariaLabel={status === 'loading' ? 'Subscribing...' : 'Subscribe to newsletter'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                </Button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-sm text-white font-medium text-center animate-fade-in">
                    ✨ Welcome to the family! Check your inbox for your exclusive discount.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-rose-200 font-medium text-center animate-fade-in">
                    Please enter a valid email address.
                  </p>
                )}

                <p className="text-xs text-white/60 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
export type { NewsletterSectionProps };