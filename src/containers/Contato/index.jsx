import CardContact from "../../components/CardContact/CardContact";
import { Section } from "./styles";
import Footer from "../../components/Footer/footer";
import CardSection from "../../components/Cards/CardSection";

// Componente React chamado Contato
function Contato() {
  return (
    <>
      {/* Renderiza uma seção com um componente CardContact */}
      <Section>
        <CardContact />
      </Section>

      {/* Renderiza um componente CardSection */}
      <CardSection />

      {/* Renderiza o componente Footer (rodapé) */}
      <Footer />
    </>
  );
}

// Exporta o componente Contato
export default Contato;
