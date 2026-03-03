// components/Sections/About.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SectionTitle, BodyText } from '@/components/UI/Typography';

gsap.registerPlugin(ScrollTrigger);

export default function About({ data, docImg }) {
  console.log(data)
  const values = [
        {
          title: "Evidence-Based",
          description: "Every treatment backed by peer-reviewed research",
        },
        {
          title: "Personalized",
          description: "Protocols tailored to your skin's unique biology",
        },
        {
          title: "Holistic",
          description: "Addressing root causes, not just symptoms",
        },
      ]


  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.fromTo('.about-text',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo('.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 lg:py-48 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <div ref={imageRef} className="absolute inset-0 scale-125">
                <Image
                  src="/doctor.jpg" //{docImg}
                  alt="doctor-jpg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-16 bg-white border border-slate-200 p-8 max-w-xs shadow-2xl">
              <div className="text-4xl font-light text-teal-600 mb-2">12+</div>
              <div className="text-sm uppercase tracking-wider text-slate-500">Years of Excellence</div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-teal-200/50 -z-10" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="about-text">
              <SectionTitle>The Doctor</SectionTitle>
              <h2 className="text-5xl lg:text-7xl font-light text-slate-900 mb-2">{data.drname}</h2>
              <p className="text-teal-600 text-lg tracking-wide">{data.drCred}</p>
            </div>

            <div className="space-y-6">
              {data.drBio.map((paragraph, index) => (
                <BodyText key={index} className="about-text">
                  {paragraph}
                </BodyText>
              ))}
            </div>

            {/* Values Grid */}
            <div className="values-grid grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h4 className="text-sm uppercase tracking-wider text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}