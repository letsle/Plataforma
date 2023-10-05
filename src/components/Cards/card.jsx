// Importações dos componentes e estilos necessários do arquivo './styles'
import { CardContainer, Button } from "./styles";
import { Link } from "react-router-dom"; 

// Definição do componente Card
const Card = () => {
  return (
    // Contêiner do cartão
    <CardContainer>
      <h3>Serviços de VPS</h3> {/* Título do cartão */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 1 */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 2 */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 3 */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 4 */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 5 */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
      {/* Parágrafo 6 */}
      <Link to="/servidoresvps">
      <Button>Conheça</Button> {/* Botão "Conheça" */}
      </Link>
    </CardContainer>
  );
};

export default Card; // Exporta o componente Card
