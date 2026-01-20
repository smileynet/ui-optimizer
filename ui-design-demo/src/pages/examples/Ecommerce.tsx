import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { CalloutProvider, CalloutToggle, DesignCallout, PersonaSwitcher, PersonaSwitcherProvider, usePersona } from '../../components/ui';
import { ThemeToggle } from '../../components/ThemeToggle';
import { cn } from '../../lib/utils';

const ecommercePersonas = [
  { id: 'jessica', name: 'Jessica', avatar: 'J', description: 'Quick Buyer - Knows what she wants' },
  { id: 'tom', name: 'Tom', avatar: 'T', description: 'Researcher - Compares before buying' }
];

function PersonaElement({ 
  persona, 
  children, 
  className 
}: { 
  persona: 'jessica' | 'tom' | 'both'; 
  children: React.ReactNode;
  className?: string;
}) {
  const { activePersonaId } = usePersona();
  
  if (!activePersonaId) return <>{children}</>;
  
  const isRelevant = persona === 'both' || activePersonaId === persona;
  
  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-in-out", 
        !isRelevant && "opacity-25 grayscale blur-[1px] pointer-events-none",
        className
      )}
      data-persona={persona}
    >
      {children}
    </div>
  );
}

// Types for our fake data
interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  onSale?: boolean;
  salePrice?: number;
  category: string;
  gradient: string;
}

// Fake Product Data
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Lumina Noise-Canceling Headphones',
    price: 299.00,
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    category: 'Audio',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: '2',
    name: 'ErgoFit Mechanical Keyboard',
    price: 149.00,
    rating: 4.6,
    reviewCount: 89,
    category: 'Accessories',
    gradient: 'from-slate-400 to-zinc-500',
  },
  {
    id: '3',
    name: 'Chronos Smart Watch',
    price: 199.00,
    salePrice: 169.00,
    onSale: true,
    rating: 4.5,
    reviewCount: 230,
    category: 'Wearables',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: '4',
    name: 'Aeris Air Purifier',
    price: 129.00,
    rating: 4.7,
    reviewCount: 56,
    category: 'Home',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: '5',
    name: 'Sonic Bluetooth Speaker',
    price: 89.00,
    rating: 4.3,
    reviewCount: 210,
    category: 'Audio',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: '6',
    name: 'Nexus Tablet Pro',
    price: 499.00,
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
    category: 'Electronics',
    gradient: 'from-indigo-400 to-violet-500',
  },
  {
    id: '7',
    name: 'Focus Desk Lamp',
    price: 79.00,
    rating: 4.4,
    reviewCount: 78,
    category: 'Home',
    gradient: 'from-yellow-400 to-amber-500',
  },
  {
    id: '8',
    name: 'Horizon VR Headset',
    price: 349.00,
    salePrice: 299.00,
    onSale: true,
    rating: 4.2,
    reviewCount: 112,
    category: 'Gaming',
    gradient: 'from-pink-400 to-rose-500',
  },
];

const CATEGORIES = ['All Products', 'Audio', 'Electronics', 'Wearables', 'Home', 'Accessories', 'Gaming'];

// Simple Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={cn("w-4 h-4", filled ? "text-[var(--color-warning)] fill-current" : "text-[var(--color-border-strong)]")} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={filled ? 0 : 2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

function EcommerceContent() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [cartCount, _setCartCount] = useState(2);
  void _setCartCount;

  return (
    <CalloutProvider>
    <div className="min-h-screen bg-[var(--color-bg-page)] pb-20 font-sans">
      <div className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-bg-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <Container size="xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-[var(--radius-lg)] bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  Ui
                </div>
                <span className="font-bold text-lg">Optimizer</span>
              </Link>
              <span className="text-[var(--color-text-tertiary)] hidden md:inline">/</span>
              <span className="text-[var(--color-text-secondary)] hidden md:inline">E-commerce Example</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block w-64">
                <Input 
                  placeholder="Search products..." 
                  leftIcon={<SearchIcon />}
                  className="bg-[var(--color-bg-subtle)] border-transparent focus:bg-[var(--color-bg-surface)] h-9 text-sm"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative p-2" aria-label="Shopping Cart">
                <ShoppingCartIcon />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-accent)] text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/story/ecommerce')}>
                View Story
              </Button>
              <PersonaSwitcher />
              <CalloutToggle />
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </div>

      <Container size="xl" className="mt-8">
        <DesignCallout 
          variant="pattern" 
          title="Parallel Paths Pattern"
          className="mb-6"
        >
          <strong>Personas:</strong> <Badge variant="info" size="sm" className="ml-1 mr-1">Jessica</Badge> wants fast checkout, <Badge variant="info" size="sm" className="ml-1 mr-1">Tom</Badge> wants research tools.<br/>
          <strong>Pattern:</strong> Both paths coexist - quick "Add" buttons for Jessica, filters/ratings/reviews for Tom.
          Neither path blocks the other.
        </DesignCallout>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Tom's Research Tools */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <PersonaElement persona="tom">
              <div className="hidden lg:block">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Categories</h3>
                <Stack gap={2}>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "text-left text-sm py-1.5 px-3 rounded-[var(--radius-md)] transition-colors w-full",
                        selectedCategory === category
                          ? "bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-medium"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-primary)]"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </Stack>
              </div>
            </PersonaElement>

            {/* Mobile Category Scroll */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-2">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <PersonaElement persona="tom">
              <div className="hidden lg:block space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Price Range</h3>
                  <div className="px-1">
                    <div className="h-1 bg-[var(--color-bg-muted)] rounded-full mb-4 relative">
                      <div className="absolute left-0 w-2/3 h-full bg-[var(--color-primary)] rounded-full"></div>
                      <div className="absolute left-2/3 w-3 h-3 bg-[var(--color-bg-surface)] border-2 border-[var(--color-primary)] rounded-full top-1/2 -translate-y-1/2 shadow-sm"></div>
                    </div>
                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] font-medium">
                      <span>$0</span>
                      <span>$500+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Rating</h3>
                <Stack gap={2}>
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--ring-color)]" />
                        <div className="flex text-[var(--color-warning)]">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} filled={i < rating} />
                          ))}
                        </div>
                        <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)]">& Up</span>
                      </label>
                    ))}
                  </Stack>
                </div>
              </div>
            </PersonaElement>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                {selectedCategory}
                <span className="ml-2 text-sm font-normal text-[var(--color-text-tertiary)]">({PRODUCTS.length} items)</span>
              </h2>
              <div className="flex items-center gap-3">
                <PersonaElement persona="tom">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-text-secondary)] hidden sm:inline">Sort by:</span>
                    <select className="text-sm border-none bg-transparent font-medium text-[var(--color-text-primary)] focus:ring-0 cursor-pointer">
                      <option>Featured</option>
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                    <Button variant="secondary" size="sm" className="lg:hidden">
                      <FilterIcon /> Filters
                    </Button>
                  </div>
                </PersonaElement>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className={cn("relative aspect-[4/3] bg-gradient-to-br", product.gradient)}>
                    {(product.isNew || product.onSale) && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {product.isNew && (
                          <Badge variant="info" className="shadow-sm backdrop-blur-sm bg-white/90">New</Badge>
                        )}
                        {product.onSale && (
                          <Badge variant="error" className="shadow-sm backdrop-blur-sm bg-white/90">Sale</Badge>
                        )}
                      </div>
                    )}
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-[var(--color-text-secondary)] hover:text-[var(--color-error)] opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  <Card.Body className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-semibold">
                        {product.category}
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon filled={true} />
                        <span className="text-xs font-medium text-[var(--color-text-secondary)]">{product.rating}</span>
                        <span className="text-xs text-[var(--color-text-tertiary)]">({product.reviewCount})</span>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex flex-col">
                         {product.onSale && (
                          <span className="text-xs text-[var(--color-text-tertiary)] line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                        <span className={cn("font-bold text-lg", product.onSale ? "text-[var(--color-error)]" : "text-[var(--color-text-primary)]")}>
                          ${(product.salePrice || product.price).toFixed(2)}
                        </span>
                      </div>
                      <Button variant="secondary" size="sm" className="group/btn hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                        Add
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </CalloutProvider>
  );
}

export function Ecommerce() {
  return (
    <PersonaSwitcherProvider personas={ecommercePersonas}>
      <EcommerceContent />
    </PersonaSwitcherProvider>
  );
}
