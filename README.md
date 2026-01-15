# DarkCommerce SPA

A premium, dark-themed single-page e-commerce application built with React, TypeScript, and Tailwind CSS. Features smooth animations, a modern design system, and a seamless shopping experience.

## Features

- **Dark Mode Aesthetic**: Deep slate base with neon-indigo accents
- **Smooth Animations**: Hardware-accelerated transitions and cascading entry effects
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Shopping Cart**: Interactive cart drawer with quantity management
- **Product Filtering**: Real-time search and category filtering
- **Contact Form**: Validated form with success states
- **Accessibility**: WCAG AA compliant with reduced motion support

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Bundler**: ES Modules

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
      npm install
   3. Start development server:
      npm run dev
   4. Build for production:
      npm run build
   5. Preview production build:
      npm run preview
   
## Project Structure

src/
├── components/
│   ├── Navbar.tsx           # Sticky navigation with cart access
│   ├── HeroSection.tsx      # Landing page with animated features
│   ├── ProductsSection.tsx  # Product grid with filtering
│   ├── ProductCard.tsx      # Individual product display
│   ├── AboutSection.tsx     # Company information
│   ├── FeaturesSection.tsx  # Feature highlights
│   ├── Testimonials.tsx     # Customer reviews
│   ├── ContactSection.tsx   # Contact form
│   ├── Footer.tsx           # Footer with links
│   ├── Button.tsx           # Reusable button component
│   ├── Input.tsx            # Form input component
│   ├── Card.tsx             # Card container component
│   ├── Modal.tsx            # Modal dialog component
│   ├── CartDrawer.tsx       # Shopping cart sidebar
│   └── LoadingSpinner.tsx   # Loading indicator
├── pages/
│   └── Index.tsx            # Main SPA page with state management
├── App.tsx                  # Root application component
├── main.tsx                 # Entry point
└── index.css                # Global styles

## Design System

### Colors
- **Primary**: `bg-indigo-600` / `hover:bg-indigo-500`
- **Secondary**: `bg-slate-800` / `text-slate-200`
- **Tertiary**: `text-indigo-400` / `hover:text-indigo-300`
- **Success**: `bg-emerald-600`
- **Error**: `bg-rose-600`

### Typography
- **Font**: Inter (primary) / System sans-serif (fallback)
- **Headings**: 
  - h1: `text-4xl md:text-6xl`
  - h2: `text-3xl md:text-5xl`
  - h3: `text-2xl md:text-3xl`
- **Body**: `text-base text-slate-300`
- **Supporting**: `text-lg text-slate-400`

### Spacing & Layout
- **Mobile-first**: Single column → Multi-column (md/lg)
- **Container**: `max-w-7xl mx-auto px-4`
- **Section padding**: `py-20`
- **Border radius**: `rounded-xl` (cards), `rounded-lg` (buttons)

### Animations
- **Fade In**: `animate-fade-in` (0.3s)
- **Fade In Up**: `animate-fade-in-up` (0.5s)
- **Transitions**: `transition-all duration-200`
- **Hover Lift**: `hover:-translate-y-0.5`

## Architecture

The application uses a state-driven SPA architecture:

1. **Navigation**: Clicking nav items updates `activeSection` state
2. **Scrolling**: `useEffect` scrolls to section refs based on active state
3. **Transitions**: Staggered animations using `setTimeout` delays
4. **Cart State**: Managed in `Index.tsx`, passed via props
5. **No Routing**: Single page with conditional rendering

## State Management

Global state is managed in `src/pages/Index.tsx`:
- `activeSection`: Currently visible section
- `cartItems`: Array of products in cart
- `isCartOpen`: Cart drawer visibility
- `mounted`: Initial mount trigger for animations

## Accessibility Features

- **Keyboard Navigation**: Full support for tab/enter/escape
- **Focus Management**: Visible focus rings with `focus:ring-2 focus:ring-indigo-400`
- **Screen Reader Labels**: All interactive elements have `aria-label`
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Semantic HTML**: Proper use of header, nav, main, section, footer

## Responsive Breakpoints

- **Mobile**: < 640px (default)
- **sm**: ≥ 640px (minor padding adjustments)
- **md**: ≥ 768px (2-column layouts)
- **lg**: ≥ 1024px (3-column layouts, horizontal nav)
- **xl**: ≥ 1280px (max-width constraints)
- **2xl**: ≥ 1536px (large containers)

## Custom Components

### Button
<Button variant="primary" size="large" onClick={handleClick}>
  Action
</Button>

### Input
<Input
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
/>

### Card
<Card className="p-6" hover onClick={handleClick}>
  Content
</Card>

## Mock Data

Product data is static and located in `src/components/ProductsSection.tsx`:
- 6 premium tech products
- Categories: Audio, Wearables, AR/VR, Computers, Peripherals
- Price range: $129.99 - $899.00

## Development

### Code Style
- **Strict TypeScript**: No `any` types
- **Explicit Exports**: All interfaces exported
- **Descriptive Names**: `camelCase` for variables, `PascalCase` for components
- **Self-documenting**: Code explains itself where possible

### Performance
- **Hardware Acceleration**: Transforms and opacity only
- **Code Splitting**: Manual chunks in Vite config
- **Lazy Loading**: Images use `loading="lazy"`
- **Efficient Renders**: Memoized state updates

### Testing Checklist
- [ ] Mobile navigation opens/closes correctly
- [ ] Cart adds/removes items
- [ ] Quantity updates work
- [ ] Form validation displays errors
- [ ] Smooth scrolling to all sections
- [ ] Reduced motion disables animations
- [ ] Focus trap in modals/cart drawer
- [ ] Escape key closes overlays

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS 14+, Android 10+
- **Note**: Uses ES Modules, requires modern browser or bundler

## Deployment

### Build Process
1. `npm run build` creates optimized `dist/` folder
2. Assets are minified and bundled
3. Static files ready for hosting

### Hosting Options
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static hosting
- **Any static host**: S3, Firebase, Cloudflare Pages

## Environment Variables

None required for this static SPA.

## Known Limitations

- No backend API integration
- No user authentication
- No persistent cart (refresh clears cart)
- No real payment processing
- Static product data only

## Future Enhancements

- [ ] Backend integration for real products
- [ ] User accounts and order history
- [ ] Payment gateway integration
- [ ] Product reviews and ratings system
- [ ] Newsletter subscription
- [ ] Wishlist functionality
- [ ] Advanced search and filtering
- [ ] Multi-language support

## License

This project is provided as-is for educational and commercial use. Please check individual libraries' licenses for their terms.

## Support

For issues or questions, review the code comments and component implementations. All components are self-contained and follow React best practices.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**