// components/Sections/Hero.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '@/components/UI/Buttons';
import { siteConfig } from '@/dataConfig';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ data }) {

  const stats = [
        { value: "12+", label: "Years Experience" },
        { value: "15K+", label: "Happy Clients" },
        { value: "98%", label: "Success Rate" },
      ]

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.fromTo('.hero-headline',
        { y: 120, opacity: 0, rotateX: 45 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1.4, 
          stagger: 0.15, 
          ease: 'expo.out',
          delay: 0.5 
        }
      );

      gsap.fromTo('.hero-subtext',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 1.2 }
      );

      gsap.fromTo('.hero-cta',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 1.4 }
      );

      gsap.fromTo('.hero-stat',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', delay: 1.6 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-24 bg-white"
    >
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="/doctor.jpg"
            alt={data.drname}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-2 perspective-1000">
              <h1 className="hero-headline text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9] text-slate-900">
                Reveal Your
              </h1>
              <h1 className="hero-headline text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9] text-teal-600">
                Radiance
              </h1>
              <h1 className="hero-headline text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9] text-slate-900">
                Within
              </h1>
            </div>

            <p className="hero-subtext text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
              Advanced dermatological care where medical precision meets aesthetic artistry. Discover treatments tailored to your unique skin story.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton href="/services">
                Begin Your Journey
              </PrimaryButton>
              <SecondaryButton href="#about">
                Meet Dr. {data.subname}
              </SecondaryButton>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:block">
            <div className="space-y-12">
              { 
              stats.map((stat, index) => (
                <div key={index} className="hero-stat border-l border-slate-300 pl-8 hover:border-teal-400 transition-colors duration-500">
                  <div className="text-5xl font-light text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Ambient floating elements */}
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-coral-200/20 rounded-full blur-[120px] animate-pulse delay-1000" />
    </section>
  );
}