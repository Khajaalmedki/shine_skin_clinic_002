// app/page.jsx
import RootLayout from '@/components/layout/RootLayout';
import Header from '@/components/layout/Header';
import Hero from '@/components/Sections/Hero';
import Specialties from '@/components/Sections/Specialties';
import About from '@/components/Sections/About';
import Testimonials from '@/components/Sections/Testimonials';
import CTA from '@/components/Sections/CTA';
import Footer from '@/components/layout/Footer';
import DemoBanner from '@/components/layout/DemoBanner';
//import { siteConfig } from '@/dataConfig';

//import { getClientData } from './layout';

export const metadata = {
  title: "Premium Dermatology Clinic",
  description: "Advanced dermatological care where medical precision meets aesthetic artistry.",
};

const formatName = (text) => {
  return text
    .replace(/_/g, " ")          // replace underscores with spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// fd-heena_firdouz-shine_skin_clinic

export default async function Home( {params} ) {

  const {slug} = await params
  const [genderSlug, doctorSlug, clinicSlug] = slug.split("-");

  const drname = formatName(doctorSlug);
  const clinicName = formatName(clinicSlug);

  return (
    <RootLayout>
      <DemoBanner />
      <Header slug={slug} clinicName={clinicName}/>
      <main>
        <Hero drname={drname} slug={slug}/>
        <Specialties slug={slug}/>
        <About drname={drname} drGender={genderSlug}/>
        <Testimonials />
        <CTA slug={slug} />
      </main>
      <Footer slug={slug} />
    </RootLayout>
  );
}