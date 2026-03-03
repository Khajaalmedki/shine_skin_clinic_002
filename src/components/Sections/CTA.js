// components/Sections/CTA.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/UI/Buttons';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {

  const cta = {
      headline: "Your Skin Deserves",
      headlineAccent: "Excellence",
      subtext: "Begin your transformation with a comprehensive skin analysis and personalized treatment roadmap.",
      buttonText: "Schedule Consultation",
      backgroundImage: "/images/cta-background.jpg",
    }

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="cta-content text-center max-w-3xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-light text-slate-900 mb-6">
            {cta.headline}{' '}
            <span className="text-teal-600">{cta.headlineAccent}</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            {cta.subtext}
          </p>
          <PrimaryButton href="/contact">
            {cta.buttonText}
          </PrimaryButton>
        </div>
      </div>

      {/* Ambient Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-100/50 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-100/30 rounded-full blur-[120px]" />
    </section>
  );
}