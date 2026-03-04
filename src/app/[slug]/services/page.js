// app/services/page.jsx
import ServicePage from '@/components/Sections/ServicePage';
import RootLayout from '@/components/layout/RootLayout';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import { getClientData } from '../layout';

export default async function ServicesPage({ params }) {

  const {slug} = await params
  const siteConfig = await getClientData(slug);

  return (
    <RootLayout>
      <Header slug={slug} brand={siteConfig.brand}/>
      <ServicePage siteConfig={siteConfig} slug={slug} />
      <Footer slug={slug} />
    </RootLayout>
  );
}