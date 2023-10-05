// Importa os estilos definidos nos arquivos "./styles"
import { Card, CardTitle, Value, Description, Button } from "./styles";

// Componente funcional ReusableCard que aceita as seguintes propriedades:
// - title: O título a ser exibido no cartão.
// - value: O valor a ser exibido no cartão.
// - description: A descrição a ser exibida no cartão.
// - buttonText: O texto do botão (opcional) a ser exibido no cartão.
// eslint-disable-next-line react/prop-types
const ReusableCard = ({ title, value, description, buttonText }) => {
  return (
    <Card>
      {/* Título do cartão */}
      <CardTitle>{title}</CardTitle>
      {/* Valor do cartão */}
      <Value>{value}</Value>
      {/* Descrição do cartão */}
      <Description>{description}</Description>
      {/* Renderiza o botão se a propriedade buttonText estiver definida */}
      {buttonText && <Button>{buttonText}</Button>}
    </Card>
  );
};

// Exporta o componente ReusableCard para ser utilizado em outros lugares do aplicativo
export default ReusableCard;
