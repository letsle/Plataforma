// Importa o componente ReusableCard de '../ReusableCardDetails/ReusableCard'
import ReusableCard from '../ReusableCardDetails/ReusableCard';

// Importa os estilos definidos nos arquivos './styles'
import {
    CardSection,
    Title
} from './styles';

// Componente funcional CardSectionDetails
const CardSectionDetails = () => {
    return (
        <>
        {/* Título da seção */}
        <Title>Detalhes do Plano de Servidores VPS</Title>
        {/* Componente CardSection que contém três cartões ReusableCard */}
        <CardSection>
            {/* Card 1 */}
            <ReusableCard
                title="Card 1 Title"
                value="Descrição do card 1"
                description="Lorem ipsum dolor sit amet"
            />
  
            {/* Card 2 */}
            <ReusableCard
                title="Card 2 Title"
                value="Descrição do card 2"
                description="Lorem ipsum dolor sit amet"
            />
  
            {/* Card 3 */}
            <ReusableCard
                title="Card 3 Title"
                value="Descrição do card 3"
                description="Lorem ipsum dolor sit amet"
            />
        </CardSection>
        </>
    );
};

// Exporta o componente CardSectionDetails para ser utilizado em outros lugares do aplicativo
export default CardSectionDetails;
