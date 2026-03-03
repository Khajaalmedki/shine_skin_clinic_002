// components/Layout/Footer.jsx
'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/dataConfig';

export default function Footer( { slug } ) {
  const { contactDetails, brand } = siteConfig;

  const footer = {
    tagline: "Transforming skin, transforming lives.",
    quickLinks: [
      { label: "Home", href: `${slug}/` },
      { label: "Services", href: `${slug}/services` },
      { label: "Contact", href: `${slug}/contact` },
      { label: "Privacy Policy", href: `${slug}/privacy` },
      { label: "Terms of Service", href: `${slug}/terms` },
    ],
    newsletter: {
      title: "Stay Updated",
      placeholder: "Your email address",
      button: "Subscribe",
      description: "Receive skincare tips and exclusive offers",
    },
    copyright: "© 2024 Dr. Heena Firdouz. All rights reserved.",
    credits: "Crafted with care in Mumbai",
  }

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-light text-slate-900">{brand.name}</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {[ 
                { icon: Instagram, href: contactDetails.social.instagram },
                { icon: Facebook, href: contactDetails.social.facebook },
                { icon: Linkedin, href: contactDetails.social.linkedin },
                { icon: Youtube, href: contactDetails.social.youtube },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-slate-200 text-slate-500 hover:border-teal-300 hover:text-teal-600 hover:shadow-md transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-700 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-700 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" />
                <span>{contactDetails.address.street}, {contactDetails.address.city}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{contactDetails.phone.display}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{contactDetails.email.primary}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-700 mb-6">{footer.newsletter.title}</h4>
            <p className="text-slate-600 text-sm mb-4">{footer.newsletter.description}</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="flex-1 bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-300 transition-colors duration-300"
              />
              <button 
                type="submit"
                className="px-4 py-3 bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                {footer.newsletter.button}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">{footer.copyright}</p>
          <p className="text-xs text-slate-500">{footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}