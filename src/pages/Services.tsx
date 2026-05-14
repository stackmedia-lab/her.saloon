import { Section, Reveal } from '@/src/components/ui/LayoutUtils';
import { Scissors, Palette, Sparkles, Wind, Zap, Shield } from 'lucide-react';

const serviceCategories = [
  {
    title: "Haircuts & Extensions",
    description: "Precision techniques for length, volume, and shape.",
    icon: Scissors,
    services: [
      { name: "Signature Haircut", price: "from $120", detail: "Consultation, wash, cut, and signature blowout." },
      { name: "Executive Cut", price: "from $85", detail: "Short precision cutting and scalp treatment." },
      { name: "K-Tip Extensions", price: "Quote Only", detail: "Individual keratin bond application for natural movement." },
      { name: "Weft Extensions", price: "Quote Only", detail: "Hand-tied or machine wefts for maximum volume." }
    ]
  },
  {
    title: "Color & Lightening",
    description: "Bespoke color artistry for multi-dimensional depth.",
    icon: Palette,
    services: [
      { name: "Heritage Balayage", price: "from $350", detail: "Hand-painted highlights for sun-kissed results." },
      { name: "Full Foil Highlight", price: "from $280", detail: "Maximum brightness and dimension from root to tip." },
      { name: "Gloss & Tone", price: "from $95", detail: "Refresh your shade and add diamond-like shine." },
      { name: "Correction Artistry", price: "from $150/hr", detail: "Expert correction for complex color history." }
    ]
  },
  {
    title: "Texture & Styling",
    description: "Smoothness, strength, and structural integrity.",
    icon: Sparkles,
    services: [
      { name: "Keratin Treatment", price: "from $300", detail: "Smoothing treatment to eliminate frizz for 3-5 months." },
      { name: "Signature Blowout", price: "from $65", detail: "Round brush finish for volume and longevity." },
      { name: "Scalp Detox", price: "from $85", detail: "Deep cleansing and hydration for follicle health." },
      { name: "Olaplex Bonding", price: "from $50", detail: "Internal structural repair for compromised hair." }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      <Section>
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Our Menu</span>
          <h1 className="text-[8vw] font-display font-medium leading-[0.8] mb-24">
            Curated <br /> 
            <span className="italic">Specialties.</span>
          </h1>
        </Reveal>

        <div className="space-y-48">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <Reveal>
                  <category.icon className="mb-8 text-accent" size={48} strokeWidth={1} />
                  <h2 className="text-4xl font-display font-medium mb-6">{category.title}</h2>
                  <p className="text-primary/60 text-sm uppercase tracking-wide leading-relaxed">
                    {category.description}
                  </p>
                </Reveal>
              </div>
              
              <div className="lg:col-span-8 flex flex-col gap-px bg-primary/10">
                {category.services.map((service, sIdx) => (
                  <Reveal key={sIdx} width="100%">
                    <div className="group bg-canvas py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-neutral-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-display font-bold">{service.name}</h3>
                          <div className="h-px flex-1 bg-primary/5 hidden md:block" />
                        </div>
                        <p className="text-xs text-primary/40 uppercase tracking-widest">{service.detail}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-sm tracking-tighter">{service.price}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white border-t border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-none">
              Need a custom <br /> transformation?
            </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <div className="space-y-8">
              <p className="text-primary/60 text-sm uppercase tracking-widest leading-relaxed">
                We offer digital consultations for extensions and major color changes. 
                Start your journey with a specialist today.
              </p>
              <button className="px-10 py-5 bg-primary text-secondary uppercase text-xs tracking-widest font-bold">
                Book Consultation
              </button>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
