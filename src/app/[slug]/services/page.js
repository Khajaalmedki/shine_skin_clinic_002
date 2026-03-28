// app/services/page.jsx
import ServicePage from '@/components/Sections/ServicePage';
import RootLayout from '@/components/layout/RootLayout';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

//import { getClientData } from '../layout';

const formatName = (text) => {
  return text
    .replace(/_/g, " ")          // replace underscores with spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default async function ServicesPage({ params }) {

  const {slug} = await params
  const [genderSlug, doctorSlug, clinicSlug] = slug.split("-");

  const drname = formatName(doctorSlug);
  const clinicName = formatName(clinicSlug);

  return (
    <RootLayout>
      <Header slug={slug} clinicName={clinicName}/>
      <ServicePage slug={slug} />
      <Footer slug={slug} />
    </RootLayout>
  );
}