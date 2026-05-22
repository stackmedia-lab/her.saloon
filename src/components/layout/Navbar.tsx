import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-canvas/95 backdrop-blur-md h-16 border-primary/10" : "bg-canvas/0 h-20 border-transparent",
        isMobileMenuOpen && "bg-canvas border-primary/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          SIGNA<span className="text-accent">TURE</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors hover:text-accent",
                location.pathname === link.href ? "text-primary" : "text-primary/40"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/contact" 
            className="hidden md:block text-[10px] uppercase tracking-[0.2em] px-6 py-3 bg-primary text-secondary font-bold hover:bg-neutral-800 transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/5 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-canvas border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-lg uppercase tracking-[0.2em] font-medium border-b border-primary/5 pb-4",
                    location.pathname === link.href ? "text-primary" : "text-primary/40"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="w-full text-center py-5 bg-primary text-secondary text-xs uppercase tracking-[0.3em] font-bold"
              >
                Book Your Experience
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
