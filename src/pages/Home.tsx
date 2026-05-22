import { motion } from 'framer-motion';
import { Section, Reveal } from '@/src/components/ui/LayoutUtils';
import { ArrowRight, Star, Scissors, Palette, Sparkles, Shield, Clock, Droplets } from 'lucide-react';
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
              <h1 className="text-[15vw] sm:text-[12vw] lg:text-[10vw] font-display font-medium leading-[0.8] mb-8">
                Beauty <br /> 
                <span className="italic">Redefined.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg lg:text-xl text-primary/60 max-w-xl mb-12 uppercase tracking-tight leading-tight">
                Modern techniques meet timeless elegance. We specialize in transformations that reflect your true self through hair and scalp health.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-primary text-secondary border border-primary uppercase text-xs tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-4">
                  Book Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="w-full sm:w-auto px-10 py-5 border border-primary/20 uppercase text-xs tracking-widest font-bold hover:bg-primary/5 transition-all text-center">
                  Explore Menu
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
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop" 
                alt="Hair Styling" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[1rem] md:border-[1.5rem] border-canvas/50 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why Us / Values Section */}
      <Section className="border-b border-primary/10 bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-x-12">
          {[
            { tag: "01", title: "7-Day Guarantee", desc: "We are committed to perfection. If you aren't completely satisfied with your service, return within 7 days and we'll refine it.", icon: Shield },
            { tag: "02", title: "Stylist Aftercare", desc: "Your result depends on how you treat it at home. We provide a bespoke aftercare routine for every single guest.", icon: Droplets },
            { tag: "03", title: "Premium Products", desc: "Using only the world's most luxurious salon-exclusive formulas to protect your hair's structural integrity.", icon: Palette }
          ].map((item, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="group border-t border-primary/5 pt-12 md:border-none md:pt-0">
                <item.icon className="mb-8 text-accent group-hover:text-primary transition-colors" size={32} strokeWidth={1} />
                <span className="font-mono text-[10px] text-accent block mb-4">[{item.tag}]</span>
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-6 uppercase tracking-tight">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed max-w-xs text-sm uppercase tracking-wide">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The Ritual Section */}
      <Section className="bg-canvas">
        <div className="mb-24">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Our Methodology</span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.8] uppercase tracking-tighter">
              The <br /> <span className="italic">Ritual.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-24">
              {[
                { step: "I", title: "The Dialogue", desc: "A detailed 15-minute consultation to understand your hair history, lifestyle, and visual goals." },
                { step: "II", title: "The Treatment", desc: "Custom-mixed formulas based on your hair's current protein and moisture levels." },
                { step: "III", title: "The Transformation", desc: "Expert technical execution by specialists who undergo monthly training." }
              ].map((item, i) => (
                <Reveal key={i} delay={0.2}>
                  <div className="flex gap-8">
                    <span className="font-mono text-xl text-accent">{item.step}</span>
                    <div>
                      <h4 className="text-2xl font-display font-medium mb-4 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-sm text-primary/40 uppercase tracking-widest leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.4}>
              <div className="aspect-video bg-neutral-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop" 
                    alt="SIGNATURE Experience" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <Reveal delay={0.5}>
                <div className="aspect-[4/5] bg-neutral-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop" alt="Styling Station" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="aspect-[4/5] bg-neutral-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?q=80&w=800&auto=format&fit=crop" alt="Styling Detail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Curated Expertise */}
      <Section className="bg-white overflow-hidden border-t border-primary/10">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1 w-full order-2 lg:order-1">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-medium leading-[0.8] mb-12 uppercase tracking-tighter">
                Curated <br /> 
                <span className="text-accent italic">Expertise.</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10">
              <Reveal delay={0.2} width="100%">
                <div className="p-8 bg-white space-y-4 h-full group hover:bg-neutral-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-display font-bold text-xl uppercase tracking-tight">Precision Cutting</h4>
                    <Scissors size={16} className="text-accent" />
                  </div>
                  <p className="text-xs text-primary/40 leading-relaxed uppercase tracking-widest">
                    Signature cuts designed for your unique face shape and bone structure. We utilize dry-cutting techniques for natural movement.
                  </p>
                  <ul className="text-[9px] uppercase tracking-widest text-accent space-y-1 pt-4">
                    <li>+ Face Mapping</li>
                    <li>+ Texture Refinement</li>
                    <li>+ Structural Integrity</li>
                  </ul>
                  <div className="pt-6 aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1560869713-7d0a294308ef?q=80&w=800&auto=format&fit=crop" 
                      alt="Precision Cutting" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3} width="100%">
                <div className="p-8 bg-white space-y-4 h-full group hover:bg-neutral-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-display font-bold text-xl uppercase tracking-tight">Scalp Protection</h4>
                    <Shield size={16} className="text-accent" />
                  </div>
                  <p className="text-xs text-primary/40 leading-relaxed uppercase tracking-widest">
                    Advanced hydration and cleansing treatments for long-term follicle health. Healthy hair starts at the root.
                  </p>
                  <ul className="text-[9px] uppercase tracking-widest text-accent space-y-1 pt-4">
                    <li>+ Ph Selection</li>
                    <li>+ Scalp Analysis</li>
                    <li>+ Nutrient Infusion</li>
                  </ul>
                  <div className="pt-6 aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1534415662130-179b5d03ed2a?q=80&w=800&auto=format&fit=crop" 
                      alt="Scalp Treatment" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <Reveal delay={0.4}>
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f231263a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Hair Detail" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[8px] uppercase tracking-[0.3em] font-bold">
                  Technical Close-up
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Our Philosophy Section */}
      <Section className="bg-white border-t border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <Reveal>
              <div className="aspect-square bg-canvas overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
                  alt="SIGNATURE Interior" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-[20px] border-white pointer-events-none" />
              </div>
            </Reveal>
            <div className="space-y-12">
              <Reveal delay={0.2}>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tight leading-[0.9] mb-8">
                  Mindful <br /> 
                  <span className="italic">Elevated</span> <br />
                  Technique.
                </h2>
                <p className="text-sm text-primary/60 uppercase tracking-widest leading-relaxed max-w-sm">
                   We approach every appointment as a collaboration between stylist and guest. Our team is trained in precision techniques that respect the natural movement of your hair.
                </p>
                <div className="pt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-accent mt-3" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-1">High Integrity Products</h4>
                      <p className="text-[10px] text-primary/40 uppercase tracking-widest">We exclusively partner with brands that prioritize health.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-px bg-accent mt-3" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Continuous Education</h4>
                      <p className="text-[10px] text-primary/40 uppercase tracking-widest">Our team undergoes weekly training on cutting-edge techniques.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                 <Link to="/about" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Explore Our Story <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
              </Reveal>
            </div>
        </div>
      </Section>

      {/* Trending Styles Gallery */}
      <Section className="bg-canvas">
        <div className="flex justify-between items-end mb-16">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4 block">Seasonal Edit</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter">Trending <span className="italic">Looks.</span></h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/services" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-primary/20 pb-2 hover:border-primary transition-all mb-4 hidden md:block">
              View All Services
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop", label: "Dimensional Blonde" },
            { img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1000&auto=format&fit=crop", label: "Soft Texture Shag" },
            { img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop", label: "Glass Hair Silk" },
            { img: "https://images.unsplash.com/photo-1634449591410-ff26a71af333?q=80&w=1000&auto=format&fit=crop", label: "Copper Melt" }
          ].map((item, i) => (
            <Reveal key={i} delay={0.1 * i} width="100%">
              <div className="group relative aspect-[3/4] overflow-hidden bg-neutral-200">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white border-t border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-4xl font-display font-medium uppercase tracking-tight mb-8 italic">Voices of <br /> Our Guests.</h2>
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40 leading-relaxed max-w-[200px]">
                Consistently rated 5 stars for our technical precision and luxury experience.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { quote: "The best color correction I've ever had. My hair feels healthier now than before the bleach.", author: "VALENTINA K." },
              { quote: "A true sanctuary in the city. The aftercare routine they built for me changed my hair life.", author: "JULIAN M." }
            ].map((t, i) => (
              <Reveal key={i} delay={0.2 * i}>
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-primary/5 font-display italic">"</span>
                  <p className="text-lg text-primary/70 mb-6 uppercase tracking-tight leading-snug">
                    {t.quote}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">— {t.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Stylist Aftercare Banner */}
      <Section className="bg-canvas border-y border-primary/10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 aspect-square bg-neutral-200 overflow-hidden grayscale">
               <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop" referrerPolicy="no-referrer" className="w-full h-full object-cover" alt="Hair Care" />
            </div>
            <div className="lg:col-span-8">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-display font-medium leading-[0.9] mb-8 uppercase italic">Maintain the <br /> Excellence.</h2>
                  <p className="text-sm text-primary/40 max-w-xl uppercase tracking-widest mb-12 leading-relaxed">
                    Our commitment continues after you leave our salon. Every visit includes a personalized aftercare guide and recommended wash cadence to extend the life of your color and cut.
                  </p>
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="font-mono text-2xl">98%</span>
                      <span className="text-[10px] text-accent uppercase tracking-widest">Client Satisfaction</span>
                    </div>
                    <div className="w-px h-12 bg-primary/10" />
                    <div className="flex flex-col">
                      <span className="font-mono text-2xl">7-DAY</span>
                      <span className="text-[10px] text-accent uppercase tracking-widest">Full Guarantee</span>
                    </div>
                  </div>
                </Reveal>
            </div>
         </div>
      </Section>

      {/* Quote Section */}
      <Section className="bg-primary text-secondary text-center py-48">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.5em] text-secondary/40 mb-12">Philosophy</p>
          <blockquote className="text-4xl md:text-7xl font-display font-medium max-w-5xl mx-auto leading-none italic mb-12">
            "A new hairstyle can change your day, or even your life."
          </blockquote>
          <Link to="/about" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-secondary/20 pb-2 hover:border-secondary transition-all">
            Experience SIGNATURE
          </Link>
        </Reveal>
      </Section>
    </div>
  );
}
