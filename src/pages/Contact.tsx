import { Section, Reveal } from '@/src/components/ui/LayoutUtils';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      <Section className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Get in touch</span>
              <h1 className="text-[10vw] lg:text-[7vw] font-display font-medium leading-[0.8] mb-12">
                Connect <br /> 
                <span className="italic">With Us.</span>
              </h1>
            </Reveal>
            
            <div className="space-y-12">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-3">
                      <MapPin size={14} /> Location
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      123 STYLE AVENUE<br />
                      BEVERLY HILLS, CA 90210
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-3">
                      <Clock size={14} /> Hours
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      MON - SAT: 9AM - 8PM<br />
                      SUN: BY APPOINTMENT ONLY
                    </p>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-primary/10">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-3">
                      <Phone size={14} /> Call Us
                    </h4>
                    <p className="text-sm font-medium">+1 (310) 555-0123</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-3">
                      <Mail size={14} /> Email
                    </h4>
                    <p className="text-sm font-medium">HELLO@HERSTUDIO.US</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <Reveal delay={0.4} width="100%">
              <div className="p-12 border border-primary/10 bg-white">
                <form className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-medium placeholder:text-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-medium placeholder:text-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Service Interested In</label>
                    <select className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-medium appearance-none">
                      <option>Haircut & Styling</option>
                      <option>Color & Lightening</option>
                      <option>Extensions</option>
                      <option>Treatment & Care</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your hair goals..." 
                      className="w-full bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-colors text-sm font-medium placeholder:text-primary/10 resize-none"
                    />
                  </div>
                  
                  <button className="w-full py-6 bg-primary text-secondary uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      
      <div className="h-[60vh] w-full bg-neutral-200 grayscale">
        {/* Mock Map Background */}
        <div className="w-full h-full flex items-center justify-center text-primary/20 uppercase tracking-[1em] font-display text-4xl">
          Map Interface
        </div>
      </div>
    </div>
  );
}
