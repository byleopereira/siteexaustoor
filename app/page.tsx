import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Descritiva from "@/components/sections/Descritiva";
import Fatos from "@/components/sections/Fatos";
import Catalogo from "@/components/sections/Catalogo";
import SobMedida from "@/components/sections/SobMedida";
import Publicos from "@/components/sections/Publicos";
import Normas from "@/components/sections/Normas";
import FAQ from "@/components/sections/FAQ";
import Orcamento from "@/components/sections/Orcamento";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Descritiva />
        <Fatos />
        <Catalogo />
        <SobMedida />
        <Publicos />
        <Normas />
        <FAQ />
        <Orcamento />
      </main>
      <Rodape />
    </>
  );
}
