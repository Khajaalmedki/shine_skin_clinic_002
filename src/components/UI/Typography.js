// components/UI/Typography.jsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function DisplayHeading({ children, className = '', as: Component = 'h1', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: 100, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          delay,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component 
      ref={ref}
      className={`text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9] text-slate-900 ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <h2 
      ref={ref}
      className={`text-xs uppercase tracking-[0.3em] text-teal-600 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className = '' }) {
  return (
    <p className={`text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl ${className}`}>
      {children}
    </p>
  );
}

export function Whisper({ children, className = '' }) {
  return (
    <span className={`text-[10px] uppercase tracking-[0.2em] text-slate-500 ${className}`}>
      {children}
    </span>
  );
}