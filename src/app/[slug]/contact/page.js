// app/contact/page.jsx
import RootLayout from "@/components/layout/RootLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/Sections/ContactPage";

//import { getClientData } from '../layout';

export default async function ContactPages( {params} ) {
  
  const {slug} = await params
  console.log("Contact Slug", slug)

  return (
    <RootLayout>
      <Header slug={slug} />
      <ContactPage />
      <Footer slug={slug} />
    </RootLayout>
  );
}