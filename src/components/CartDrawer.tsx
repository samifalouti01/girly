import React, { useEffect, useRef } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard } from 'lucide-react';
import Button from './Button';
import { CartItem } from './ProductsSection';

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap for accessibility
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => price.toFixed(2);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-md h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col transform transition-transform duration-300 animate-fade-in-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6 text-indigo-500" />
            <h3 
              id="cart-drawer-title"
              className="text-lg font-bold text-white"
            >
              Your Cart
            </h3>
            {cartItems.length > 0 && (
              <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs font-bold rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <ShoppingBag className="w-8 h-8 text-slate-500" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-semibold text-lg">Your cart is empty</h4>
                <p className="text-slate-400 text-sm">
                  Looks like you haven't added any products yet.
                </p>
              </div>
              <Button
                variant="primary"
                size="medium"
                onClick={onClose}
                className="group mt-2"
                aria-label="Start shopping"
              >
                Start Shopping
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-indigo-500/50 transition-all duration-200"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-slate-900 rounded-md overflow-hidden border border-slate-700 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white font-medium text-sm line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-500 hover:text-rose-400 transition-colors duration-200 p-1"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-indigo-400 font-bold text-sm">
                          ${formatPrice(item.price)}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                onUpdateQuantity(item.id, item.quantity - 1);
                              } else {
                                onRemoveItem(item.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label={`Decrease quantity of ${item.name}`}
                            disabled={item.quantity <= 0}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          
                          <span className="px-2 text-xs font-semibold text-white min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors duration-200"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="mt-1 text-right">
                        <span className="text-slate-400 text-xs">
                          Total: <span className="text-emerald-400 font-medium">${formatPrice(item.price * item.quantity)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-slate-800 pt-6 space-y-3">
                <h4 className="text-white font-semibold text-sm">Order Summary</h4>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-slate-300">${formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className="text-slate-300">${formatPrice(shipping)}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Tax (8%)</span>
                    <span className="text-slate-300">${formatPrice(tax)}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-2 flex items-center justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-indigo-400 font-bold text-lg">${formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 bg-slate-800/30 rounded-lg p-3">
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-indigo-400" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span>SSL Encrypted</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-800 p-6 bg-slate-900/95 backdrop-blur-sm space-y-3">
            <Button
              variant="primary"
              size="large"
              onClick={onCheckout}
              className="w-full justify-center group"
              aria-label="Proceed to checkout"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <button
              onClick={onClose}
              className="w-full py-3 text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
              aria-label="Continue shopping"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;