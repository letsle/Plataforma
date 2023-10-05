import {SectionWrapper, Image } from "./styles";
import Img from "../../assets/host1.png";

// Componente React chamado TextSection
const TextSection = () => {
  return (
    // Componente SectionWrapper contém todos os elementos da seção de texto
    <SectionWrapper>
      {/* Uma imagem renderizada a partir do arquivo 'Img' */}
      <Image src={Img} alt="imagem" />

      {/* Um título de terceiro nível */}
      <h3>Quais os tipos de servidores de hospedagem, e suas diferenças ?</h3>

      {/* Um parágrafo de texto informativo */}
      <p>
        A hospedagem de sites é um serviço que permite que você coloque um site
        ou aplicativo web na internet, tornando-o acessível para usuários de
        todo o mundo.
        <br /> Basicamente, quando você cria um site, ele precisa ser armazenado
        em um servidor para que as pessoas possam acessá-lo através da internet.
        Isso é exatamente o que a hospedagem de sites faz.
        <br /> A hospedagem de sites envolve alugar espaço em um servidor que
        está conectado à internet 24 horas por dia, 7 dias por semana.
        <br /> Esse servidor armazena os arquivos do seu site, como páginas
        HTML, imagens, vídeos, bancos de dados e outros recursos necessários
        para que o site funcione corretamente.
        <br /> Os provedores de hospedagem de sites oferecem diferentes tipos de
        planos, como compartilhado, VPS, dedicado, hospedagem em nuvem, entre
        outros.
        <br /> Cada tipo de plano tem suas próprias características, recursos e
        níveis de controle.
        <br /> Em resumo, a hospedagem de sites é o serviço que permite que seu
        site seja acessado e visualizado na internet, tornando-o disponível para
        pessoas em todo o mundo.
        <br /> É um componente essencial para qualquer presença online, seja um
        site pessoal, blog, loja online ou aplicativo web.
      </p>

    </SectionWrapper>
  );
};

// Exporta o componente TextSection
export default TextSection;
