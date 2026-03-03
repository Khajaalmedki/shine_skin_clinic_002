/* // app/layout.jsx
import './globals.css'

export const metadata = {
  //title: 'Dr. Heena Firdouz | Premium Dermatology',
  title: "Premium Dermatology Clinic",
  description: 'Advanced dermatological care where medical precision meets aesthetic artistry.',
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-stone-950 text-stone-100 selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}

*/


import './globals.css';

export const metadata = {
  title: "Premium Dermatology Clinic",
  description: 'Advanced dermatological care where medical precision meets aesthetic artistry.',
};


export default function Layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-stone-950 text-stone-100 selection:bg-rose-500/30 selection:text-rose-200">
        {children}
      </body>
    </html>
  );
}