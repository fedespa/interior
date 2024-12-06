import Image from "next/image";
import backgroundImage from "../../../public/HeroSection.webp";
import Section from "@/components/Section";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import OutlineButton from "@/components/buttons/OutlineButton";

function HeroSection() {
  return (
    <section className="relative flex-grow flex border justify-center">
      <Image
        alt="Fondo de sección"
        src={backgroundImage}
        fill={true}
        priority={true}
        className="object-center object-cover -z-10"
      />
      <Section>
        <div className="w-3/5">
          <h1 className="text-8xl text-blue suranna">
            Transformamos espacios,{" "}
            <span className="text-green fasthand">creamos</span> emociones.
          </h1>
          <p className="medium text-black">
            Diseño de interiores completamente personalizado para transformar tu
            hogar o negocio en un espacio único, funcional y lleno de estilo,
            adaptado a tus necesidades y preferencias.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <PrimaryButton/>
            <OutlineButton/>
          </div>
        </div>
      </Section>
    </section>
  );
}

export default HeroSection;
