// app/contact/page.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionTitle, DisplayHeading } from '@/components/UI/Typography';
import { siteConfig } from '@/dataConfig';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.out' }
      );
      
      gsap.fromTo('.contact-form',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo('.info-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.info-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const { contact } = siteConfig;

  return (

      <main className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Hero */}
          <div className="contact-hero text-center mb-20">
            <SectionTitle className="justify-center">Get in Touch</SectionTitle>
            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 mb-6">
              {contact.hero.headline}{' '}
              <span className="text-teal-600">{contact.hero.headlineAccent}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {contact.hero.subheadline}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3" ref={formRef}>
              <div className="contact-form bg-white border border-slate-200 p-8 lg:p-12 shadow-xl">
                <h2 className="text-2xl font-light text-slate-900 mb-2">{contact.form.title}</h2>
                <p className="text-slate-500 mb-8">{contact.form.subtitle}</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                    <h3 className="text-xl text-slate-900 mb-2">Request Received</h3>
                    <p className="text-slate-600">{contact.form.successMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                          {contact.form.fields.name.label}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300"
                          placeholder={contact.form.fields.name.placeholder}
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                          {contact.form.fields.phone.label}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300"
                          placeholder={contact.form.fields.phone.placeholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                        {contact.form.fields.email.label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300"
                        placeholder={contact.form.fields.email.placeholder}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                          {contact.form.fields.service.label}
                        </label>
                        <select
                          name="service"
                          required
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">{contact.form.fields.service.placeholder}</option>
                          {contact.form.fields.service.options.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                          {contact.form.fields.date.label}
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formState.date}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-600 mb-2">
                        {contact.form.fields.message.label}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-300 transition-colors duration-300 resize-none"
                        placeholder={contact.form.fields.message.placeholder}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-teal-500 text-white text-sm uppercase tracking-wider font-medium hover:bg-teal-600 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                    >
                      {contact.form.submitButton}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="info-grid space-y-6">
                {contact.info.cards.map((card, index) => (
                  <div key={index} className="info-card p-6 bg-white border border-slate-200 hover:border-teal-200 transition-all duration-500 shadow-md hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-50 border border-teal-100">
                        {card.icon === 'MapPin' && <MapPin className="w-5 h-5 text-teal-500" />}
                        {card.icon === 'Phone' && <Phone className="w-5 h-5 text-teal-500" />}
                        {card.icon === 'Clock' && <Clock className="w-5 h-5 text-teal-500" />}
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-slate-900 mb-2">{card.title}</h3>
                        {card.content.map((line, i) => (
                          <p key={i} className="text-slate-600 text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="aspect-video bg-slate-100 border border-slate-200 overflow-hidden">
                <iframe
                  src={contact.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

  );
}