// app/services/page.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionTitle, DisplayHeading, BodyText } from '@/components/UI/Typography';
import Testimonials from '@/components/Sections/Testimonials';
import CTA from '@/components/Sections/CTA';
import { Clock, ArrowUpRight } from 'lucide-react';

import { siteConfig } from '@/dataConfig';
//import { PrimaryButton } from '@/components/UI/Buttons';


gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ service, index, color }) {

  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardRef.current,
            
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  const colorClasses = {
    teal: 'border-teal-200 hover:border-teal-400',
    coral: 'border-coral-200 hover:border-coral-400',
  };

  return (
    <div 
      ref={cardRef}
      className={`group p-8 bg-white border ${colorClasses[color]} transition-all duration-500 shadow-sm hover:shadow-xl`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl lg:text-2xl font-light text-slate-900 group-hover:text-teal-600 transition-colors duration-500">
          {service.title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-teal-500 transition-all duration-300" />
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-4 text-xs text-slate-500 border-t border-slate-200 pt-4">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{service.duration}</span>
        </div>
        <span>•</span>
        <span>{service.sessions}</span>
        <span className="ml-auto text-teal-600 font-medium">{service.price}</span>
      </div>
    </div>
  );
}

export default function ServicePage( {slug} ) {

  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero-content',
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.3 }
      );
    });

    return () => ctx.revert();
  }, []);

  const { services } = siteConfig;

  return (
    <main>
        {/* Hero */}
        <section ref={heroRef} className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 to-transparent" />
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="services-hero-content max-w-3xl">
                <SectionTitle>Our Expertise</SectionTitle>
                <h1 className="text-6xl lg:text-8xl font-light text-slate-900 mb-6 leading-[0.9]">
                {services.hero.headline}{' '}
                <span className="text-teal-600">{services.hero.headlineAccent}</span>
                </h1>
                <BodyText>{services.hero.subheadline}</BodyText>
            </div>
            </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
            {services.categories.map((category) => (
                <div key={category.id} className="scroll-mt-24" id={category.id}>
                <div className="mb-12 border-b border-slate-200 pb-8">
                    <h2 className="text-3xl lg:text-5xl font-light text-slate-900 mb-4">{category.title}</h2>
                    <p className="text-slate-600 max-w-2xl">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {category.treatments.map((treatment, index) => (
                    <ServiceCard 
                        key={treatment.id} 
                        service={treatment} 
                        index={index}
                        color={category.color}
                    />
                    ))}
                </div>
                </div>
            ))}
            </div>
        </section>

        <Testimonials data={services.testimonials} />
        <CTA slug={slug} />
    </main>
  );
}