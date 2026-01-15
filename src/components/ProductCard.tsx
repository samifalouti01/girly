import React from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';
import Button from './Button';

// Define the product type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isInCart }) => {
  return (
    <article 
      className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:shadow-lg hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      aria-labelledby={`product-${product.id}-name`}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-indigo-400 border border-slate-700">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 
            id={`product-${product.id}-name`}
            className="text-lg font-semibold text-white leading-tight group-hover:text-indigo-400 transition-colors duration-200"
          >
            {product.name}
          </h3>
          <span className="text-lg font-bold text-emerald-400 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-slate-300 font-medium">{product.rating}</span>
          <span className="text-slate-500 text-xs">({product.reviews})</span>
        </div>

        {/* Action Button */}
        <div className="pt-2 mt-auto">
          <Button
            variant={isInCart ? "success" : "primary"}
            size="medium"
            onClick={() => onAddToCart(product)}
            disabled={isInCart}
            className="w-full justify-center"
            aria-label={isInCart ? `${product.name} added to cart` : `Add ${product.name} to cart`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                In Cart
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;