// Importa componentes, estilos e recursos específicos do diretório "../Hospedagem/styles".
import { Section, IconSectionWrapper, Title } from "../Hospedagem/styles";

// Importa o componente 'Footer' de um diretório específico.
import Footer from "../../components/Footer/footer";

// Importa o componente 'CardServidorVps' de um diretório específico.
import CardServidorVps from "../../components/ReusableCardDetails/CardServidorVps";

// Importa o componente 'CardSectionDetails' de um diretório específico.
import CardSectionDetails from "../../components/ReusableSectionDetails/CardSectionDetailsVps";

// Importa o componente 'CardIncludedPlans' de um diretório específico.
import CardIncludedPlans from "../../components/IncludedPlans/CardIncludedPlans";

// Importa o componente 'IconSection' de um diretório específico.
import IconSection from "../../components/IconsSection/IconSection";

import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";

// Define uma função chamada 'ServidoresVps'.
function ServidoresVps() {
  // Retorna uma estrutura JSX que representa a página de Servidores VPS.

  // Inicia um contêiner principal usando o componente 'Section'.
  return (
    <>
      <Section>
        {/* Renderiza o componente 'CardServidorVps'. */}
        <CardServidorVps />

        {/* Renderiza o componente 'CardSectionDetails'. */}
        <CardSectionDetails />

        {/* Renderiza o componente 'CardIncludedPlans'. */}
        <CardIncludedPlans />
      </Section>

      {/* Inicia um contêiner com o nome 'IconSectionWrapper'. */}
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

// Exporta a função 'ServidoresVps' como padrão para que possa ser usada em outros lugares.
export default ServidoresVps;
