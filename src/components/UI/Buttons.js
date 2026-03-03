// components/UI/Buttons.jsx
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function PrimaryButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-white text-sm uppercase tracking-wider font-medium hover:bg-teal-600 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
    </Link>
  );
}

export function SecondaryButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-8 py-4 border border-slate-300 text-slate-700 text-sm uppercase tracking-wider hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all duration-500 ${className}`}
    >
      {children}
      <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-500" />
    </Link>
  );
}

export function TextLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors duration-300"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </span>
      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  );
}