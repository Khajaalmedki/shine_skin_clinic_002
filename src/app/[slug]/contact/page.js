// app/contact/page.jsx
import RootLayout from "@/components/layout/RootLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/Sections/ContactPage";

//import { getClientData } from '../layout';

export default async function ContactPages( {params} ) {
  
  const {slug} = await params
  const siteConfig = await getClientData(slug);

  return (
    <RootLayout>
      <Header slug={slug} brand={siteConfig.brand}/>
      <ContactPage />
      <Footer slug={slug} />
    </RootLayout>
  );
}