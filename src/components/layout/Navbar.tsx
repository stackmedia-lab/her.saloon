import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          HER<span className="text-accent">STUDIO</span>
        </Link>
        
        <div className="flex gap-8">
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
        
        <Link 
          to="/contact" 
          className="hidden md:block text-[10px] uppercase tracking-[0.2em] px-6 py-3 bg-primary text-secondary font-bold hover:bg-neutral-800 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.nav>
  );
}
