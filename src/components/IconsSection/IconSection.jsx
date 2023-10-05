// Importações dos componentes e ícones necessários
import { SectionWrapper, IconBox, Text, Icon } from "./styles";
import { FiMail } from "react-icons/fi"; // Ícone de e-mail da biblioteca react-icons/fi
import { BsCloudCheckFill } from "react-icons/bs"; // Ícone de nuvem com marca de verificação da biblioteca react-icons/bs
import { TbWorldCheck, TbCloudDataConnection } from "react-icons/tb"; // Ícones personalizados da biblioteca react-icons/tb
import { FaCogs, FaNetworkWired } from "react-icons/fa"; // Ícones de engrenagens e conexão de rede da biblioteca react-icons/fa

// Componente IconsSection que renderiza uma seção de ícones com texto
const IconsSection = () => {
  return (
    <SectionWrapper>
      {/* Primeiro ícone: E-mail */}
      <IconBox>
        <Icon>
          <FiMail className="icon" /> {/* Ícone de e-mail */}
          <Text>E-mail</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Segundo ícone: Nuvem com marca de verificação */}
      <IconBox>
        <Icon>
          <BsCloudCheckFill className="icon" />{" "}
          {/* Ícone de nuvem com marca de verificação */}
          <Text>Lorem ipsum</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Terceiro ícone: Verificação de mundo (personalizado) */}
      <IconBox>
        <Icon>
          <TbWorldCheck className="icon" /> {/* Ícone personalizado */}
          <Text>Hospedagem</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Quarto ícone: Conexão de dados na nuvem (personalizado) */}
      <IconBox>
        <Icon>
          <TbCloudDataConnection className="icon" /> {/* Ícone personalizado */}
          <Text>Lorem ipsum</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Quinto ícone: Engrenagens */}
      <IconBox>
        <Icon>
          <FaCogs className="icon" /> {/* Ícone de engrenagens */}
          <Text>Lorem ipsum</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>

      {/* Sexto ícone: Conexão de rede */}
      <IconBox>
        <Icon>
          <FaNetworkWired className="icon" /> {/* Ícone de conexão de rede */}
          <Text>Lorem ipsum</Text> {/* Texto descritivo */}
        </Icon>
      </IconBox>
    </SectionWrapper>
  );
};

export default IconsSection; // Exporta o componente IconsSection
