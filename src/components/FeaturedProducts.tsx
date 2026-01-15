import React, { useState } from 'react';
import { Heart, ShoppingBag, ChevronRight, Sparkles, Filter, ArrowUpDown } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
}

interface FeaturedProductsProps {
  onProductClick?: (product: Product) => void;
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick, className = '' }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');

  // Static product data with realistic variety
  const products: Product[] = [
    {
      id: 'prod-001',
      title: 'Rose Garden Slim Fit',
      description: 'Elegant rose-colored slim-fit pants with premium cotton blend. Perfect for both office and evening wear.',
      price: '$89.99',
      category: 'Workwear',
      badge: 'Bestseller',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Rose-colored slim-fit pants on display',
    },
    {
      id: 'prod-002',
      title: 'Summer Breeze Wide Leg',
      description: 'Lightweight wide-leg pants in soft peach. Breathable fabric for warm summer days.',
      price: '$69.99',
      category: 'Summer',
      badge: 'New',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Summer peach wide-leg pants',
    },
    {
      id: 'prod-003',
      title: 'Midnight Elegance Trousers',
      description: 'Deep navy tailored trousers with satin lining. Sophisticated evening wear.',
      price: '$129.99',
      category: 'Workwear',
      badge: 'Premium',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Midnight blue tailored trousers',
    },
    {
      id: 'prod-004',
      title: 'Blossom Casual Chinos',
      description: 'Comfortable chinos in soft pink. Ideal for weekend outings and casual meetings.',
      price: '$59.99',
      category: 'Casual',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Pink casual chinos',
    },
    {
      id: 'prod-005',
      title: 'Active Flex Yoga Pants',
      description: 'Stretchable yoga pants with moisture-wicking technology. Performance meets style.',
      price: '$74.99',
      category: 'Active',
      badge: 'Performance',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Active yoga pants in purple',
    },
    {
      id: 'prod-006',
      title: 'Lavender Lounge Pants',
      description: 'Ultra-soft lounge pants in lavender. Perfect for relaxing in style.',
      price: '$49.99',
      category: 'Casual',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Lavender lounge pants',
    },
    {
      id: 'prod-007',
      title: 'Floral Summer Palazzos',
      description: 'Flowy palazzos with subtle floral prints. Breezy and beautiful for summer.',
      price: '$79.99',
      category: 'Summer',
      badge: 'Seasonal',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Floral print palazzo pants',
    },
    {
      id: 'prod-008',
      title: 'Power Suit Tailored Pants',
      description: 'Sharp tailored pants for the modern professional. Command the room.',
      price: '$119.99',
      category: 'Workwear',
      badge: 'Luxury',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Grey power suit tailored pants',
    },
  ];

  // Filter and sort logic
  const filteredProducts = products.filter((product) => 
    activeFilter === 'All' || product.category === activeFilter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));
    
    switch (sortBy) {
      case 'price-low':
        return priceA - priceB;
      case 'price-high':
        return priceB - priceA;
      case 'newest':
      default:
        return 0; // Keep original order
    }
  });

  const categories = ['All', 'Workwear', 'Casual', 'Summer', 'Active'];

  const handleSortChange = () => {
    const nextSortBy: Record<'newest' | 'price-low' | 'price-high', 'newest' | 'price-low' | 'price-high'> = {
      'newest': 'price-low',
      'price-low': 'price-high',
      'price-high': 'newest',
    };
    setSortBy(nextSortBy[sortBy]);
  };

  return (
    <section
      id="featured"
      className={`py-16 md:py-24 bg-gray-50 ${className}`}
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            <span>Curated Selection</span>
          </div>
          <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Featured Products
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium pants. Each piece is selected for its quality, style, and fit.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-pink-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                  aria-label={`Filter by ${category}`}
                  aria-pressed={isActive}
                >
                  <Filter size={14} />
                  {category}
                </button>
              );
            })}
          </div>

          {/* Sort Button */}
          <button
            onClick={handleSortChange}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg font-medium text-sm border border-gray-200 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            aria-label={`Sort by ${sortBy === 'newest' ? 'Newest' : sortBy === 'price-low' ? 'Price Low to High' : 'Price High to Low'}`}
          >
            <ArrowUpDown size={14} />
            <span>Sort: {sortBy === 'newest' ? 'Newest' : sortBy === 'price-low' ? 'Price: Low' : 'Price: High'}</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                price={product.price}
                badge={product.badge}
                variant="product"
                onClick={() => onProductClick?.(product)}
                className="cursor-pointer group"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>

        {/* Load More / CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            onClick={() => console.log('Load more clicked')}
            className="flex items-center justify-center gap-2 mx-auto"
            ariaLabel="View all products in catalog"
          >
            <ShoppingBag size={18} />
            <span>View All Products</span>
            <ChevronRight size={18} />
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>{sortedProducts.length} Products Found</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Premium Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>Free Shipping on Orders $100+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
export type { FeaturedProductsProps, Product };