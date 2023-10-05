import { Section, IconSectionWrapper, Title } from "../Hospedagem/styles";
import Footer from "../../components/Footer/footer";
import CardEmail from "../../components/ReusableCardDetails/CardEmail";
import CardSectionDetails from "../../components/ReusableSectionDetails/CardSectionDetailsEmail";
import CardIncludedPlans from "../../components/IncludedPlans/CardIncludedPlans";
import IconSection from "../../components/IconsSection/IconSection";
import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";
// Componente React chamado Email
function Email() {
  return (
    <>
      {/* Renderiza uma seção com um componente CardEmail e CardSectionDetails */}
      <Section>
        <CardEmail />
        <CardSectionDetails />
        <CardIncludedPlans />
      </Section>

      {/* Renderiza uma seção de ícones com um título e o componente IconSection */}
      <IconSectionWrapper>
        <Title>Lorem ipsum dolor</Title>
        <IconSection />
      </IconSectionWrapper>

      {/* Renderiza o componente Footer (rodapé) */}
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

// Exporta o componente Email
export default Email;
