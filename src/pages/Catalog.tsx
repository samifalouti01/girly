import React, { useState, useMemo, useEffect } from 'react';
import { ChevronRight, Filter, ArrowUpDown, Heart, ShoppingBag, Sparkles, Grid, List, X, Search, Star } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  rating: number;
  isNew?: boolean;
}

interface CatalogProps {
  className?: string;
}

const Catalog: React.FC<CatalogProps> = ({ className = '' }) => {
  // State for filtering and sorting
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'rating'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 200 });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Static product data
  const products: Product[] = [
    {
      id: 'prod-001',
      title: 'Rose Garden Slim Fit',
      description: 'Elegant rose-colored slim-fit pants with premium cotton blend. Perfect for both office and evening wear.',
      price: '89.99',
      category: 'Workwear',
      badge: 'Bestseller',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Rose-colored slim-fit pants on display',
      rating: 4.8,
      isNew: true,
    },
    {
      id: 'prod-002',
      title: 'Summer Breeze Wide Leg',
      description: 'Lightweight wide-leg pants in soft peach. Breathable fabric for warm summer days.',
      price: '69.99',
      category: 'Summer',
      badge: 'New',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Summer peach wide-leg pants',
      rating: 4.7,
      isNew: true,
    },
    {
      id: 'prod-003',
      title: 'Midnight Elegance Trousers',
      description: 'Deep navy tailored trousers with satin lining. Sophisticated evening wear.',
      price: '129.99',
      category: 'Workwear',
      badge: 'Premium',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Midnight blue tailored trousers',
      rating: 5.0,
    },
    {
      id: 'prod-004',
      title: 'Blossom Casual Chinos',
      description: 'Comfortable chinos in soft pink. Ideal for weekend outings and casual meetings.',
      price: '59.99',
      category: 'Casual',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Pink casual chinos',
      rating: 4.5,
    },
    {
      id: 'prod-005',
      title: 'Active Flex Yoga Pants',
      description: 'Stretchable yoga pants with moisture-wicking technology. Performance meets style.',
      price: '74.99',
      category: 'Active',
      badge: 'Performance',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Active yoga pants in purple',
      rating: 4.9,
    },
    {
      id: 'prod-006',
      title: 'Lavender Lounge Pants',
      description: 'Ultra-soft lounge pants in lavender. Perfect for relaxing in style.',
      price: '49.99',
      category: 'Casual',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Lavender lounge pants',
      rating: 4.6,
    },
    {
      id: 'prod-007',
      title: 'Floral Summer Palazzos',
      description: 'Flowy palazzos with subtle floral prints. Breezy and beautiful for summer.',
      price: '79.99',
      category: 'Summer',
      badge: 'Seasonal',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Floral print palazzo pants',
      rating: 4.4,
    },
    {
      id: 'prod-008',
      title: 'Power Suit Tailored Pants',
      description: 'Sharp tailored pants for the modern professional. Command the room.',
      price: '119.99',
      category: 'Workwear',
      badge: 'Luxury',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Grey power suit tailored pants',
      rating: 4.9,
    },
    {
      id: 'prod-009',
      title: 'Cotton Candy Joggers',
      description: 'Soft pastel joggers for ultimate comfort. Street style meets loungewear.',
      price: '54.99',
      category: 'Casual',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Pastel pink cotton joggers',
      rating: 4.3,
    },
    {
      id: 'prod-010',
      title: 'Royal Velvet Trousers',
      description: 'Luxurious velvet trousers in deep plum. Perfect for evening events.',
      price: '149.99',
      category: 'Workwear',
      badge: 'Luxury',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Plum velvet evening trousers',
      rating: 5.0,
      isNew: true,
    },
    {
      id: 'prod-011',
      title: 'Biker Short Set',
      description: 'Stretchy biker shorts with high waist. Ideal for active lifestyle.',
      price: '39.99',
      category: 'Active',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Black biker shorts',
      rating: 4.5,
    },
    {
      id: 'prod-012',
      title: 'Peach Linen Palazzos',
      description: 'Natural linen fabric in warm peach tone. Summer essential.',
      price: '89.99',
      category: 'Summer',
      imageSrc: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
      imageAlt: 'Peach linen palazzo pants',
      rating: 4.7,
    },
  ];

  // Filter, Search, and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category Filter
    if (activeFilter !== 'All') {
      result = result.filter((product) => product.category === activeFilter);
    }

    // Search Filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Price Range Filter
    result = result.filter((product) => {
      const price = parseFloat(product.price);
      return price >= priceRange.min && price <= priceRange.max;
    });

    // Sorting
    return [...result].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      switch (sortBy) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
        default:
          // Prioritize new items, then by id
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
      }
    });
  }, [products, activeFilter, searchQuery, sortBy, priceRange]);

  const categories = ['All', 'Workwear', 'Casual', 'Summer', 'Active'];
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat] = cat === 'All' 
        ? products.length 
        : products.filter(p => p.category === cat).length;
    });
    return counts;
  }, [products, categories]);

  // Handlers
  const handleSortChange = () => {
    const nextSortBy: Record<'newest' | 'price-low' | 'price-high' | 'rating', 'newest' | 'price-low' | 'price-high' | 'rating'> = {
      'newest': 'price-low',
      'price-low': 'price-high',
      'price-high': 'rating',
      'rating': 'newest',
    };
    setSortBy(nextSortBy[sortBy]);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = parseInt(e.target.value) || 0;
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveFilter('All');
    setSortBy('newest');
    setPriceRange({ min: 0, max: 200 });
  };

  const handleProductClick = (product: Product) => {
    console.log('Selected product:', product);
    // In a real app, this would navigate to product detail or open modal
    alert(`Viewing details for: ${product.title}`);
  };

  // Calculate results count and summary
  const resultsCount = filteredProducts.length;
  const totalValue = filteredProducts.reduce((sum, p) => sum + parseFloat(p.price), 0);

  return (
    <main 
      className={`min-h-screen bg-gray-50 ${className}`} 
      role="main" 
      aria-label="Product Catalog"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles size={16} />
                <span>Premium Collection</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
                Browse Our Catalog
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Discover {products.length}+ premium pants for every style and occasion. Filter, search, and sort to find your perfect pair.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-gray-50 rounded-lg px-4 py-2 text-center border border-gray-200">
                <p className="text-2xl font-bold text-pink-600">{resultsCount}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Products</p>
              </div>
              <div className="bg-gray-50 rounded-lg px-4 py-2 text-center border border-gray-200 hidden sm:block">
                <p className="text-2xl font-bold text-purple-600">${totalValue.toFixed(2)}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Total Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Search size={18} className="text-pink-500" />
                  Search
                </h3>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  ariaLabel="Search products"
                  className="border-pink-200 focus:border-pink-500 focus:ring-pink-200"
                />
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter size={18} className="text-pink-500" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = activeFilter === category;
                    const count = categoryCounts[category] || 0;
                    return (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-pink-500 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                        } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                        aria-pressed={isActive}
                      >
                        <span>{category}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-pink-500 text-lg">$</span>
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 w-10">Min</span>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange(e, 'min')}
                      className="flex-1 accent-pink-500"
                      aria-label="Minimum price"
                    />
                    <span className="text-sm font-semibold text-gray-700 w-12 text-right">${priceRange.min}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 w-10">Max</span>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange(e, 'max')}
                      className="flex-1 accent-purple-500"
                      aria-label="Maximum price"
                    />
                    <span className="text-sm font-semibold text-gray-700 w-12 text-right">${priceRange.max}</span>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <Button
                variant="tertiary"
                onClick={handleResetFilters}
                className="w-full flex items-center justify-center gap-2"
                ariaLabel="Reset all filters"
              >
                <X size={16} />
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                {/* Sort Dropdown (Mobile Visible) */}
                <div className="w-full md:w-auto">
                  <button
                    onClick={handleSortChange}
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium text-sm border border-gray-200 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                    aria-label={`Current sort: ${sortBy === 'newest' ? 'Newest' : sortBy === 'price-low' ? 'Price Low to High' : sortBy === 'price-high' ? 'Price High to Low' : 'Rating'}`}
                  >
                    <ArrowUpDown size={14} />
                    <span>Sort: {sortBy === 'newest' ? 'Newest' : sortBy === 'price-low' ? 'Price: Low' : sortBy === 'price-high' ? 'Price: High' : 'Rating'}</span>
                  </button>
                </div>

                {/* View Toggles */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300`}
                    aria-label="Grid view"
                    aria-pressed={viewMode === 'grid'}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300`}
                    aria-label="List view"
                    aria-pressed={viewMode === 'list'}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Mobile Filter Toggle (Hidden on Desktop) */}
              <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                <Button
                  variant="primary"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center gap-2"
                  ariaLabel="Toggle filters"
                >
                  <Filter size={16} />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div>
              {resultsCount > 0 ? (
                <div className={`grid gap-6 md:gap-8 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className={`transition-all duration-300 ${
                        viewMode === 'list' ? 'bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden' : ''
                      }`}
                    >
                      {viewMode === 'list' ? (
                        // List View Layout
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative h-48 md:h-auto">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {product.badge && (
                              <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                {product.badge}
                              </span>
                            )}
                            {product.isNew && (
                              <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                NEW
                              </span>
                            )}
                          </div>
                          <div className="flex-1 p-6 md:p-8 flex flex-col">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{product.title}</h3>
                              <span className="text-2xl font-bold text-pink-600">${product.price}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Star size={14} className="fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                              <span className="text-xs text-gray-400">({product.category})</span>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 flex-1">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-3 mt-auto">
                              <Button
                                variant="primary"
                                onClick={() => handleProductClick(product)}
                                className="flex-1 flex items-center justify-center gap-2"
                                ariaLabel={`View ${product.title} details`}
                              >
                                <ShoppingBag size={16} />
                                View Details
                              </Button>
                              <button
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:scale-110 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                                aria-label="Add to wishlist"
                              >
                                <Heart size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Grid View Layout (Card Component)
                        <Card
                          title={product.title}
                          description={product.description}
                          imageSrc={product.imageSrc}
                          imageAlt={product.imageAlt}
                          price={`$${product.price}`}
                          badge={product.badge}
                          variant="product"
                          onClick={() => handleProductClick(product)}
                          className="cursor-pointer group"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 md:p-16 text-center">
                  <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag size={32} className="text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <Button
                    variant="tertiary"
                    onClick={handleResetFilters}
                    className="mx-auto flex items-center justify-center gap-2"
                  >
                    Clear Filters
                    <ChevronRight size={16} />
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination / Load More */}
            {resultsCount > 0 && (
              <div className="mt-12 text-center">
                <Button
                  variant="secondary"
                  onClick={() => console.log('Load more products')}
                  className="flex items-center justify-center gap-2"
                  ariaLabel="Load more products"
                >
                  <ShoppingBag size={18} />
                  Load More Products
                  <ChevronRight size={18} />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Showing {resultsCount} of {products.length} products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Stats Bar */}
      <div className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-gray-600">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-gray-600">Free Shipping Over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span className="text-gray-600">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
export type { CatalogProps, Product };