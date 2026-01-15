import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

export type ModalVariant = 'default' | 'danger';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  variant?: ModalVariant;
  isLoading?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actionText,
  onAction,
  variant = 'default',
  isLoading = false
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus trap
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      if (focusableElements.length > 0) {
        firstElement.focus();
      }

      modalRef.current.addEventListener('keydown', handleTabKey as EventListener);

      return () => {
        modalRef.current?.removeEventListener('keydown', handleTabKey as EventListener);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const variantStyles = {
    default: 'border-slate-700',
    danger: 'border-rose-600'
  };

  const buttonVariant = variant === 'danger' ? 'error' : 'primary';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className={`relative w-full max-w-lg bg-slate-900 border ${variantStyles[variant]} rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 animate-fade-in-up`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <h3 
            id="modal-title"
            className="text-lg font-bold text-white"
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {children}
        </div>

        {/* Footer Actions */}
        {(actionText || onAction) && (
          <div className="px-6 py-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-end gap-3">
            <Button
              variant="secondary"
              size="medium"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            {actionText && onAction && (
              <Button
                variant={buttonVariant}
                size="medium"
                onClick={onAction}
                disabled={isLoading}
                aria-label={actionText}
              >
                {isLoading ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  actionText
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;