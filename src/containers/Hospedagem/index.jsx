// Importa componentes e estilos de arquivos e diretórios específicos.
import { Section, IconSectionWrapper, Title } from "./styles";
import Footer from "../../components/Footer/footer";
import CardHospedagem from "../../components/ReusableCardDetails/CardHospedagem";
import CardSectionDetails from "../../components/ReusableSectionDetails/CardSectionDetailsEmail";
import CardIncludedPlans from "../../components/IncludedPlans/CardIncludedPlans";
import IconSection from "../../components/IconsSection/IconSection";
import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton"
// Define uma função chamada 'Hospedagem'.
function Hospedagem() {
  // Retorna uma estrutura JSX que representa a página de hospedagem.
  return (
    <>
      {/* Inicia uma seção (um contêiner) usando o componente 'Section'. */}
      <Section>
        {/* Renderiza o componente 'CardHospedagem'. */}
        <CardHospedagem />

        {/* Renderiza o componente 'CardSectionDetails'. */}
        <CardSectionDetails />

        {/* Renderiza o componente 'CardIncludedPlans'. */}
        <CardIncludedPlans />
      </Section>

      {/* Inicia uma seção (um contêiner) com o nome 'IconSectionWrapper'. */}
      <IconSectionWrapper>
        {/* Renderiza um elemento de título 'Title'. */}
        <Title>Lorem ipsum dolor</Title>

        {/* Renderiza o componente 'IconSection'. */}
        <IconSection />
      </IconSectionWrapper>

      {/* Renderiza o componente 'Footer'. */}
      <Footer />

      <FloatingWhatsAppButton />
    </>
  );
}

// Exporta a função 'Hospedagem' como padrão para que possa ser usada em outros lugares.
export default Hospedagem;
