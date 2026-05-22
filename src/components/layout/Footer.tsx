import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12 px-6 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-none italic">
              Experience <br /> Beauty Reimagined.
            </h2>
            <p className="text-secondary/60 max-w-sm text-sm leading-relaxed uppercase tracking-wider">
              A premium salon experience dedicated to your unique style and hair health. 
              Modern techniques, timeless results.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40">Locations</h4>
            <div className="text-sm space-y-2 text-secondary/80">
              <p>123 Style Avenue<br />Beverly Hills, CA 90210</p>
              <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-secondary/10">
          <p className="text-[10px] uppercase tracking-widest text-secondary/30 mb-4 md:mb-0">
            © {new Date().getFullYear()} SIGNATURE SALON. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-secondary/30 hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-secondary/30 hover:text-secondary transition-colors">TikTok</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-secondary/30 hover:text-secondary transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
