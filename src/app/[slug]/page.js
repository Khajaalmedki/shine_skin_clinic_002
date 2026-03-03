// app/page.jsx
import RootLayout from '@/components/layout/RootLayout';
import Header from '@/components/layout/Header';
import Hero from '@/components/Sections/Hero';
import Specialties from '@/components/Sections/Specialties';
import About from '@/components/Sections/About';
import Testimonials from '@/components/Sections/Testimonials';
import CTA from '@/components/Sections/CTA';
import Footer from '@/components/layout/Footer';
//import { siteConfig } from '@/dataConfig';

import { getClientData } from './layout';

export const metadata = {
  title: "Premium Dermatology Clinic",
  description: "Advanced dermatological care where medical precision meets aesthetic artistry.",
};

export default async function Home( {params} ) {

  const {slug} = await params
  const siteConfig = await getClientData(slug);

  return (
    <RootLayout>
      <Header slug={slug} />
      <main>
        <Hero data={siteConfig.brand} />
        <Specialties data={siteConfig.home.specialties} />
        <About data={siteConfig.brand} />
        <Testimonials />
        <CTA/>
      </main>
      <Footer slug={slug} />
    </RootLayout>
  );
}