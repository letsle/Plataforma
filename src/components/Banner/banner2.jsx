// Importa o componente BannerContainer de um arquivo chamado "styles"
import { BannerContainer } from "./styles";

// Define um componente funcional chamado Banner2
const Banner2 = () => {
  return (
    // Renderiza um componente BannerContainer, que provavelmente contém estilos CSS personalizados
    <BannerContainer>
      {/* Comentários dentro do JSX */}
      {/* Conteúdo do segundo banner */}
      <h3>Serviços de E-mail</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex
        vitae turpis fermentum convallis. Sed eleifend enim nec venenatis
        tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex
        vitae turpis fermentum convallis. Sed eleifend enim nec venenatis
        tristique.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex
        vitae turpis fermentum convallis. Sed eleifend enim nec venenatis
        tristique.
      </p>
    </BannerContainer>
  );
};

export default Banner2;
