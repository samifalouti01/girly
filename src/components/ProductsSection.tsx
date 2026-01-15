import React from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import ProductCard from './ProductCard';
import Card from './Card';

// Mock product data
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'NeonTech Headphones',
    description: 'Premium wireless audio with active noise cancellation and 40h battery life.',
    price: 299.99,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'Audio',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Quantum Smartwatch',
    description: 'Next-gen health tracking with ECG, blood oxygen, and seamless connectivity.',
    price: 449.50,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'Wearables',
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: 'HoloLens Pro',
    description: 'Augmented reality glasses with crystal clear displays and spatial audio.',
    price: 899.00,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'AR/VR',
    rating: 4.9,
    reviews: 203
  },
  {
    id: 4,
    name: 'CyberDeck Mini',
    description: 'Portable development terminal with mechanical keyboard and touch display.',
    price: 699.99,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'Computers',
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: 'ZeroGravity Speaker',
    description: '360° sound projection with deep bass and adaptive EQ technology.',
    price: 189.99,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'Audio',
    rating: 4.5,
    reviews: 67
  },
  {
    id: 6,
    name: 'Neural Mouse',
    description: 'AI-powered precision tracking with customizable haptic feedback.',
    price: 129.99,
    image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
    category: 'Peripherals',
    rating: 4.4,
    reviews: 92
  }
];

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProductsSectionProps {
  onAddToCart: (product: typeof MOCK_PRODUCTS[0]) => void;
  cartItems: CartItem[];
}

type FilterCategory = 'All' | 'Audio' | 'Wearables' | 'AR/VR' | 'Computers' | 'Peripherals';

const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart, cartItems }) => {
  const [filterCategory, setFilterCategory] = React.useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [visibleCount, setVisibleCount] = React.useState<number>(3);
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Filter products
  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  const categories: FilterCategory[] = ['All', 'Audio', 'Wearables', 'AR/VR', 'Computers', 'Peripherals'];

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProducts.length));
  };

  return (
    <section 
      id="products-section"
      className="w-full py-20 bg-slate-900 relative"
      aria-labelledby="products-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="products-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Products
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore our curated collection of premium tech gadgets. Each product is handpicked for quality and innovation.
          </p>
        </div>

        {/* Controls Bar */}
        <div className={`sticky top-20 z-20 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl p-4 mb-8 transition-all duration-700 transform shadow-xl ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(3);
                }}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                aria-label="Search products"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
              <Filter className="w-4 h-4 text-slate-400 hidden lg:block" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setFilterCategory(category);
                    setVisibleCount(3);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    filterCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  aria-label={`Filter by ${category}`}
                  aria-pressed={filterCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className={`mb-6 text-center transition-all duration-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-slate-400">
              Found <span className="text-indigo-400 font-semibold">{filteredProducts.length}</span> products matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProducts.map((product, index) => {
            const isInCart = cartItems.some(item => item.id === product.id);
            const delay = index * 100;
            
            return (
              <div
                key={product.id}
                className={`transition-all duration-700 transform ${
                  mounted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  isInCart={isInCart}
                />
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <Card className="text-center py-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-white">No Products Found</h3>
              <p className="text-slate-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setFilterCategory('All');
                  setSearchQuery('');
                  setVisibleCount(3);
                }}
                className="text-indigo-400 hover:text-indigo-300 underline mt-2"
              >
                Clear filters
              </button>
            </div>
          </Card>
        )}

        {/* Load More */}
        {hasMoreProducts && filteredProducts.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group px-8 py-3 bg-slate-800 text-slate-200 rounded-lg font-medium hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Load more products"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="text-center py-6">
            <div className="text-3xl font-bold text-indigo-400 mb-2">150+</div>
            <div className="text-sm text-slate-400">Premium Products</div>
          </Card>
          <Card className="text-center py-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-sm text-slate-400">Customer Satisfaction</div>
          </Card>
          <Card className="text-center py-6">
            <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">Support Available</div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;