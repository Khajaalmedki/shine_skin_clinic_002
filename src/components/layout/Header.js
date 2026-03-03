// components/Navigation/Header.jsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import gsap from 'gsap';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header( { slug } ) {

  const navigation = {
    main: [
      { label: "Home", href: `/${slug}`, id: "home" },
      { label: "Services", href: `/${slug}/services`, id: "services" },
      { label: "Contact", href: `/${slug}/contact`, id: "contact" },
    ],
    cta: {
      label: "Book Consultation",
      href: `/${slug}/contact`,
    },
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo('.mobile-menu-item', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'expo.out' }
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 group">
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-light tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors duration-500">
                  Dr. Heena Firdouz
                </span>
                <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-slate-500 group-hover:text-slate-600 transition-colors duration-500">
                  Dermatology & Aesthetics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigation.main.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative text-sm tracking-wide uppercase transition-colors duration-300 group ${
                    pathname === item.href ? 'text-teal-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-teal-500 transition-all duration-500 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href={navigation.cta.href}
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-teal-500 text-white text-sm uppercase tracking-wider hover:bg-teal-600 transition-all duration-500 group shadow-md hover:shadow-lg"
            >
              {navigation.cta.label}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-700 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navigation.main.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu-item text-3xl font-light text-slate-800 hover:text-teal-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={navigation.cta.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-menu-item mt-8 px-8 py-4 bg-teal-500 text-white text-lg uppercase tracking-wider shadow-lg"
          >
            {navigation.cta.label}
          </Link>
        </div>
      </div>
    </>
  );
}