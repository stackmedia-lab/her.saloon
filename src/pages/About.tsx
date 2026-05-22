import { Section, Reveal } from '@/src/components/ui/LayoutUtils';
import { motion } from 'framer-motion';

const team = [
  { name: "Elena Rossi", role: "Creative Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "Master Stylist", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" },
  { name: "Sarah Miller", role: "Color Specialist", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop" },
  { name: "Julian Gray", role: "Extension Expert", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" }
];

const pillars = [
  { title: "Personalized Care", desc: "Every appointment starts with a deep dive into your goals, hair history, and lifestyle." },
  { title: "Education First", desc: "We don't just style; we teach you how to maintain your hair's health and look at home." },
  { title: "Sustainable Luxury", desc: "Our products and practices are chosen with both your health and the environment in mind." },
  { title: "Continuous Growth", desc: "Our team undergoes monthly training to stay at the absolute forefront of industry trends." }
];

export default function About() {
  return (
    <div className="pt-32">
      <Section className="border-b border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Our Story</span>
              <h1 className="text-[10vw] lg:text-[7vw] font-display font-medium leading-[0.8] mb-12">
                The Art of <br /> 
                <span className="italic">Self-Care.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-primary/60 max-w-md uppercase tracking-tight leading-snug">
                Founded on the principle that hair is the ultimate canvas for self-expression, SIGNATURE has become a sanctuary for modern style.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 aspect-[3/4] bg-neutral-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Reveal delay={0.3} width="100%">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop" 
                alt="SIGNATURE Salon Philosophy" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-24">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Our Standards</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight">The SIGNATURE <span className="italic">Difference.</span></h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
          {[
            { tag: "01", title: "7-Day Guarantee", desc: "Every service is backed by our week-long perfection promise. If it's not exactly what you envirosioned, we refine it." },
            { tag: "02", title: "Stylist Aftercare", desc: "We provide a customized maintenance plan and wash cadence for every guest to ensure style longevity." },
            { tag: "03", title: "Experienced Stylists", desc: "Our specialists undergo rigorous continuous education, ensuring they are masters of the latest techniques." },
            { tag: "04", title: "Premium Products", desc: "We exclusively use high-integrity brands that prioritize the structural health of your hair fiber." },
            { tag: "05", title: "Scalp Protection", desc: "Our methodology focuses on the follicle. Healthy growth is the foundation of every style we create." },
            { tag: "06", title: "Advanced Equipment", desc: "From thermal protection to precision tools, we utilize industry-leading technology for every appointment." }
          ].map((pillar, i) => (
            <div key={i} className="bg-canvas p-12 flex flex-col justify-between min-h-[320px] hover:bg-neutral-50 transition-colors">
              <span className="font-mono text-[10px] text-accent mb-12">[{pillar.tag}]</span>
              <div>
                <h3 className="text-2xl font-display font-medium mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-xs text-primary/40 uppercase tracking-widest leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-canvas">
        <Reveal>
          <h2 className="text-6xl font-display font-medium mb-24 text-center">
            Meet the <br /> 
            <span className="italic text-accent">Creators.</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={i} delay={0.1 * i} width="100%">
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    referrerPolicy="no-referrer"
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-display font-bold text-lg mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary/40">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Manifesto */}
      <Section className="text-center py-48 bg-primary text-secondary">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-12 italic">"We believe beauty is not about perfection, but about authenticity."</h2>
            <div className="h-px w-24 bg-secondary/20 mx-auto" />
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
