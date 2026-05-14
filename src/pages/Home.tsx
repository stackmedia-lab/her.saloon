import { motion } from 'motion/react';
import { Section, Reveal } from '@/src/components/ui/LayoutUtils';
import { ArrowRight, Star, Scissors, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex flex-col justify-center border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">
                Exclusive Salon Experience
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-[12vw] lg:text-[10vw] font-display font-medium leading-[0.8] mb-8">
                Beauty <br /> 
                <span className="italic">Redefined.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg lg:text-xl text-primary/60 max-w-xl mb-12 uppercase tracking-tight leading-tight">
                Modern techniques meet timeless elegance. We specialize in transformations that reflect your true self.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-10 py-5 bg-primary text-secondary uppercase text-xs tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center gap-4">
                  Book Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="px-10 py-5 border border-primary/20 uppercase text-xs tracking-widest font-bold hover:bg-primary/5 transition-all">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-4 h-full min-h-[400px]">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full aspect-[3/4] bg-neutral-200 overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560066922-1e67f8b62179?q=80&w=1000&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[1.5rem] border-canvas/50 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="border-b border-primary/10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 md:gap-x-12">
          {[
            { tag: "01", title: "7-Day Guarantee", desc: "We stand by our work. If you're not perfectly happy, we fix it within a week.", icon: Star },
            { tag: "02", title: "Advanced Equipment", desc: "Utilizing the latest technology in hair and scalp protection and styling.", icon: Sparkles },
            { tag: "03", title: "Premium Products", desc: "Only the finest formulas touch your hair. Luxury brands for luxury results.", icon: Palette }
          ].map((item, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="group">
                <item.icon className="mb-8 text-accent group-hover:text-primary transition-colors" size={32} strokeWidth={1} />
                <span className="font-mono text-[10px] text-accent block mb-4">[{item.tag}]</span>
                <h3 className="text-3xl font-display font-medium mb-6">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed max-w-xs text-sm uppercase tracking-wide">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured Service */}
      <Section className="bg-canvas overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1 w-full">
            <Reveal>
              <h2 className="text-6xl md:text-8xl font-display font-medium leading-[0.8] mb-12">
                Expertise <br /> 
                <span className="text-accent italic">& Skill.</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={0.2}>
                <div className="p-8 border border-primary/10 bg-white space-y-4">
                  <h4 className="font-display font-bold text-xl">Haircuts & Extensions</h4>
                  <p className="text-xs text-primary/40 leading-relaxed uppercase tracking-widest">
                    Precision cutting and seamless extensions designed to enhance your natural beauty.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="p-8 border border-primary/10 bg-white space-y-4">
                  <h4 className="font-display font-bold text-xl">Color & Lightening</h4>
                  <p className="text-xs text-primary/40 leading-relaxed uppercase tracking-widest">
                    Bespoke color services from sun-kissed balayage to high-fashion pigments.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Reveal delay={0.4}>
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" 
                  alt="Stylist work" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section className="bg-primary text-secondary text-center py-48">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.5em] text-secondary/40 mb-12">Philoshophy</p>
          <blockquote className="text-4xl md:text-7xl font-display font-medium max-w-5xl mx-auto leading-none italic mb-12">
            "A new hairstyle can change your day, or even your life."
          </blockquote>
          <Link to="/about" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-secondary/20 pb-2 hover:border-secondary transition-all">
            Read Our Story
          </Link>
        </Reveal>
      </Section>
    </div>
  );
}
