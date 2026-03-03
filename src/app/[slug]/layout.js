import '../globals.css';
import {supabase} from "@/lib/supabase";


export const metadata = {
  title: "Premium Dermatology Clinic",
  description: 'Advanced dermatological care where medical precision meets aesthetic artistry.',
};

export async function getClientData(slug) {
  const { data, error } = await supabase
    .schema("labs")
    .from("client_demo")
    .select("client_details")
    .eq("project-key", "shine_skin_clinic_002")
    .eq("client-slug", slug)
    .single();

  if (error || !data) console.log(error);

  return data.client_details

}

export default function SlugLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}