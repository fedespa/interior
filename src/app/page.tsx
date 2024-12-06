import HeroSection from "@/components/home/HeroSection";

export const metadata = {
  title: "Inicio",
  description: "Inicio",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-dvh border"></div>
    </>
  );
}
