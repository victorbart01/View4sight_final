import CareerHero from "@/components/view4sight/CareerHero";
import CareerOpenings from "@/components/view4sight/CareerOpenings";

export const metadata = {
  title: "Careers - View4Sight | Join Our Team",
  description: "Join View4Sight and help revolutionize 3D data visualization for the surveying industry. Explore career opportunities in our innovative team.",
};

export default function CarrieresPage() {
  return (
    <>
      <CareerHero />
      <CareerOpenings />
    </>
  );
} 