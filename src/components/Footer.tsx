import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'New Arrivals', href: '#' },
      { label: 'Best Sellers', href: '#' },
      { label: 'Sale', href: '#' },
      { label: 'Gift Cards', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Press', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
  ];

  return (
    <footer
      className={`bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 py-12 px-6 border-t border-pink-100 ${className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-pink-500">G</span>
              <span className="text-xl font-bold text-gray-800">Girly Pants</span>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Premium women's pants boutique offering elegant styles for every occasion.
            </p>
            
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="text-pink-500" size={16} />
                <a href="mailto:hello@girlypants.com" className="hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">
                  hello@girlypants.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="text-pink-500" size={16} />
                <a href="tel:+1234567890" className="hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="text-pink-500" size={16} />
                <span>123 Fashion Street, Style City</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-600 hover:bg-pink-500 hover:text-white shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded px-1 py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-purple-600 mb-1">
                Stay Stylish
              </h3>
              <p className="text-sm text-gray-600">
                Subscribe for exclusive offers and new arrivals.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all duration-200 sm:min-w-[280px]"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-pink-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pink-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} Girly Pants Boutique. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <a href="#" className="hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">
                Terms of Service
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export type { FooterProps };