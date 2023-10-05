// Importa componentes, estilos e recursos específicos.
import { Container, CardContainer, Card, Title, LogoImage } from "./styles";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

// Define uma função chamada 'PreHome'.
function PreHome() {
  // Retorna uma estrutura JSX que representa a página pré-inicial.

  // Inicia um contêiner principal usando o componente 'Container'.
  return (
    <Container>
      {/* Renderiza uma imagem de logotipo com base no recurso 'Logo'. */}
      <LogoImage src={Logo} alt="Logo da empresa" />

      {/* Renderiza um título com um cabeçalho de nível 1. */}
      <Title>
        <h1>Seja bem-vindo(a)</h1>
      </Title>

      {/* Inicia um contêiner de cartões usando o componente 'CardContainer'. */}
      <CardContainer>
        {/* Renderiza um cartão com informações sobre "Serviços de Telecomunicação". */}
        <Card>
          <h2>Serviços de Telecomunicação</h2>
          {/* Renderiza um botão que abre um link em uma nova aba. */}
          <a
            href="https://www.softmig.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Acessar</button>
          </a>
        </Card>

        {/* Renderiza um cartão com informações sobre "Serviços de Hospedagem". */}
        <Card>
          <h2>Serviços de Hospedagem</h2>
          {/* Renderiza um botão que navega para a rota '/home'. */}
          <Link to="/home">
            <button>Acessar</button>
          </Link>
        </Card>
      </CardContainer>
    </Container>
  );
}

// Exporta a função 'PreHome' como padrão para que possa ser usada em outros lugares.
export default PreHome;
