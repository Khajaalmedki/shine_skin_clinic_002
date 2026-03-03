// components/Sections/Testimonials.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionTitle } from '@/components/UI/Typography';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {

  const testimonials = {
      sectionTitle: "Client Stories",
      sectionSubtitle: "Real transformations, real confidence",
      reviews: [
        {
          id: 1,
          name: "Priya Malhotra",
          role: "Business Executive",
          image: "/images/testimonial-1.jpg",
          quote: "After years of struggling with hormonal acne, Dr. Firdouz's approach was the first that actually understood my skin. Six months later, I finally feel confident without makeup.",
          treatment: "Acne Solutions",
          rating: 5,
        },
        {
          id: 2,
          name: "Arjun Mehta",
          role: "Creative Director",
          image: "/images/testimonial-2.jpg",
          quote: "The hair restoration treatment exceeded every expectation. The attention to detail, the follow-ups, the results—this is healthcare as it should be.",
          treatment: "Hair Restoration",
          rating: 5,
        },
        {
          id: 3,
          name: "Sarah Khan",
          role: "Model",
          image: "/images/testimonial-3.jpg",
          quote: "Dr. Firdouz doesn't just treat skin; she sculpts confidence. Her laser work is subtle, natural, and absolutely transformative.",
          treatment: "Laser Rejuvenation",
          rating: 5,
        },
      ],
    }

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-container',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.reviews.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.reviews.length) % testimonials.reviews.length);
  };

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 bg-slate-100 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <SectionTitle className="justify-center">{testimonials.sectionTitle}</SectionTitle>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900">{testimonials.sectionSubtitle}</h2>
        </div>

        <div className="testimonial-container max-w-4xl mx-auto">
          <div className="relative bg-white border border-slate-200 p-8 lg:p-16 shadow-xl">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-teal-200" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-3xl font-light text-slate-800 leading-relaxed mb-8">
                "{testimonials.reviews[activeIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-teal-200">
                  <Image
                    src={testimonials.reviews[activeIndex].image}
                    alt={testimonials.reviews[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg text-slate-900 font-medium">
                    {testimonials.reviews[activeIndex].name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonials.reviews[activeIndex].role} • {testimonials.reviews[activeIndex].treatment}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="p-3 border border-slate-300 text-slate-600 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-3 border border-slate-300 text-slate-600 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex ? 'bg-teal-500 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}