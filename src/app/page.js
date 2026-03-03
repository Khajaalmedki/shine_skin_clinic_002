// app/page.jsx
import RootLayout from '@/components/layout/RootLayout';
import Header from '@/components/layout/Header';
import Hero from '@/components/Sections/Hero';
import Specialties from '@/components/Sections/Specialties';
import About from '@/components/Sections/About';
import Testimonials from '@/components/Sections/Testimonials';
import CTA from '@/components/Sections/CTA';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/dataConfig';

export const metadata = {
  title: "Premium Dermatology Clinic",
  description: "Advanced dermatological care where medical precision meets aesthetic artistry.",
};

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <main>
        <Hero data={siteConfig.brand} />
        <Specialties data={siteConfig.home.specialties} />
        <About data={siteConfig.brand} />
        <Testimonials />
        <CTA/>
      </main>
      <Footer />
    </RootLayout>
  );
}