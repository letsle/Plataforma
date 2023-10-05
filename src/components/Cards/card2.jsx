// Importações dos componentes e estilos necessários do arquivo "./styles"
import { CardContainer, Button } from "./styles";

import {Link} from "react-router-dom"

// Definição do componente Card
const Card = () => {
  return (
    // Contêiner do cartão
    <CardContainer>
      {/* Título do cartão */}
      <h3>Serviços de Hospedagem</h3>
      {/* Parágrafos de texto */}
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
      {/* Botão "Conheça" */}
      <Link to={"/hospedagem"}>
      <Button>Conheça</Button>
      </Link>
    </CardContainer>
  );
};

export default Card; // Exporta o componente Card
