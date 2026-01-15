import React from 'react';
import { Award, Users, Heart, Zap, ChevronRight, Sparkles, Star, ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';
import Button from '../components/Button';

interface AboutProps {
  setActiveSection: (section: string) => void;
  setIsCatalogView: (isCatalog: boolean) => void;
  className?: string;
}

const About: React.FC<AboutProps> = ({ setActiveSection, setIsCatalogView, className = '' }) => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award, color: 'text-pink-500' },
    { number: '500+', label: 'Happy Clients', icon: Users, color: 'text-purple-500' },
    { number: '100%', label: 'Quality Assurance', icon: Heart, color: 'text-pink-500' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'text-purple-500' },
  ];

  const features = [
    {
      title: 'Premium Materials',
      description: 'We source only the finest fabrics to ensure durability, comfort, and elegance in every piece.',
      icon: Award,
    },
    {
      title: 'Sustainable Fashion',
      description: 'Our commitment to the environment means eco-friendly production methods and ethical sourcing.',
      icon: Heart,
    },
    {
      title: 'Perfect Fit Guarantee',
      description: 'Every pair of pants is tailored to flatter your silhouette and provide unmatched comfort.',
      icon: Users,
    },
    {
      title: 'Fast Delivery',
      description: 'Get your favorite styles delivered quickly and safely to your doorstep anywhere in the world.',
      icon: Zap,
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
  ];

  const handleExploreClick = () => {
    setIsCatalogView(true);
    setActiveSection('home');
  };

  const handleShopNowClick = () => {
    setIsCatalogView(true);
    setActiveSection('home');
  };

  return (
    <main 
      className={`min-h-screen bg-white ${className}`} 
      role="main" 
      aria-label="About Girly Pants Boutique"
    >
      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            About Girly Pants
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Boutique
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            We believe every woman deserves pants that make her feel confident, comfortable, and stylish. 
            From our founding in 2014 to today, our mission has remained unchanged: create premium pants 
            that combine style, comfort, and quality.
          </p>
          <Button
            variant="primary"
            onClick={handleExploreClick}
            className="group flex items-center justify-center gap-2 mx-auto"
            ariaLabel="Explore our collection"
          >
            <span>Explore Collection</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image & Stats */}
            <div className="space-y-8">
              {/* Main Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-4 shadow-xl">
                  <img
                    src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    alt="Founder of Girly Pants Boutique standing with premium pant collection"
                    className="w-full h-80 md:h-96 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Quote */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-pink-100 max-w-xs hidden md:block">
                  <p className="text-sm font-semibold text-gray-800 italic">
                    "Fashion is about dreaming until you become someone else."
                  </p>
                  <p className="text-xs text-gray-500 mt-1">— Coco Chanel</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                      <Icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
                      <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Content & Features */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600">
                  We Empower Women Through Style
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Founded in 2014, Girly Pants Boutique started with a simple mission: to create premium pants 
                  that combine style, comfort, and quality. We noticed that women often struggled to find pants 
                  that fit perfectly and made them feel confident.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to offer a curated collection of pants for every occasion—from office-ready 
                  trousers to weekend-chic casuals and summer florals. Every piece is designed with the modern 
                  woman in mind.
                </p>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-xl p-5 border border-rose-100 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white shadow-md">
                          <Icon size={18} />
                        </div>
                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  onClick={handleShopNowClick}
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto"
                  ariaLabel="Shop our collection now"
                >
                  <ShoppingBag size={18} />
                  <span>Shop Now</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Girly Pants Boutique, we are committed to empowering women through fashion that doesn't compromise 
              on comfort or quality. Our core values guide every decision we make, from fabric sourcing to customer service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Eco-friendly materials and ethical manufacturing processes that respect our planet.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusivity</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pants designed for every body type, celebrating the diversity of women's shapes and sizes.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-pink-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Uncompromising quality standards to ensure every pair meets our premium expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              Meet Our Team
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Our passionate team of designers, stylists, and customer service specialists work tirelessly to bring 
              you the best in women's fashion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="Sarah Mitchell, Founder & CEO"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Mitchell</h3>
                <p className="text-sm text-pink-600 font-semibold mb-3">Founder & CEO</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fashion visionary with a passion for empowering women through style.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="Emma Chen, Head Designer"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emma Chen</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">Head Designer</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Award-winning designer focused on creating flattering, comfortable fits.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="Maria Rodriguez, Quality Director"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Maria Rodriguez</h3>
                <p className="text-sm text-pink-600 font-semibold mb-3">Quality Director</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ensures every piece meets our premium quality standards and durability requirements.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                alt="Lisa Wang, Customer Experience"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Lisa Wang</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">Customer Experience</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dedicated to making every customer feel heard, valued, and beautifully dressed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>Join Our Family</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Be Part of Our Community
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
                Join thousands of women who have found their perfect fit and confidence with Girly Pants. 
                Share your style, get inspired, and be the first to know about new arrivals and exclusive offers.
              </p>
              
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-pink-600 hover:bg-pink-50 hover:scale-110 transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <Button
                variant="tertiary"
                onClick={handleExploreClick}
                className="flex items-center justify-center gap-2 text-white border-white hover:bg-white hover:text-purple-600"
                ariaLabel="Explore our collection"
              >
                <ShoppingBag size={18} />
                <span>Shop Our Story</span>
                <ChevronRight size={18} />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2">10K+</span>
                  <span className="text-sm text-white/80 uppercase tracking-wide">Community Members</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2">98%</span>
                  <span className="text-sm text-white/80 uppercase tracking-wide">Satisfaction Rate</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2">500+</span>
                  <span className="text-sm text-white/80 uppercase tracking-wide">Five Star Reviews</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-extrabold text-white mb-2">50+</span>
                  <span className="text-sm text-white/80 uppercase tracking-wide">Unique Styles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Pair?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore our curated collection of premium pants designed to make you feel confident, 
            comfortable, and effortlessly stylish. Your perfect fit is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={handleExploreClick}
              className="group flex items-center justify-center gap-2"
              ariaLabel="Explore our collection"
            >
              <span>Explore Collection</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              onClick={handleShopNowClick}
              className="flex items-center justify-center gap-2"
              ariaLabel="Shop now"
            >
              <ShoppingBag size={18} />
              <span>Shop Now</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
export type { AboutProps };