import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
}

export function Section({ children, className, id, grid = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative py-24 px-6 md:px-12",
        grid && "border-b border-primary/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  [key: string]: any;
}

export function Reveal({ children, width = "fit-content", delay = 0.25 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
