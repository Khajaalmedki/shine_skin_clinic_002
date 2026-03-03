// components/Sections/Specialties.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { SectionTitle, DisplayHeading } from '@/components/UI/Typography';
import { siteConfig } from '@/dataConfig';

gsap.registerPlugin(ScrollTrigger);

export default function Specialties({ data }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.specialty-card',
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(180deg, #94a3b8 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <SectionTitle>Signature Treatments</SectionTitle>
          <DisplayHeading as="h2" className="text-4xl lg:text-6xl max-w-3xl text-slate-900">
            Curated solutions for your most pressing skin concerns
          </DisplayHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.services.map((service, index) => (
            <div 
              key={service.id}
              className="specialty-card group relative bg-white border border-slate-200 overflow-hidden hover:border-teal-200 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
                  <Sparkles className="w-5 h-5 text-teal-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-slate-900 group-hover:text-teal-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-teal-600 font-medium">
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Ambient Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-200/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}