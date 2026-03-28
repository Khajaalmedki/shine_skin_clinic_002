// app/contact/page.jsx
import RootLayout from "@/components/layout/RootLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/Sections/ContactPage";

//import { getClientData } from '../layout';

const formatName = (text) => {
  return text
    .replace(/_/g, " ")          // replace underscores with spaces
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default async function ContactPages( {params} ) {
  
  const {slug} = await params

  const [genderSlug, doctorSlug, clinicSlug] = slug.split("-");
  const clinicName = formatName(clinicSlug);

  return (
    <RootLayout>
      <Header slug={slug} clinicName={clinicName}/>
      <ContactPage />
      <Footer slug={slug} />
    </RootLayout>
  );
}