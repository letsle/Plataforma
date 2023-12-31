import styled from "styled-components";
import imgBackground from "../../assets/background.png";

// Define um componente estilizado chamado FooterWrapper para o rodapé.
export const FooterWrapper = styled.footer`
  background: url(${imgBackground}) left/cover no-repeat;
  color: white;
  padding: 10px 0;
`;

// Define um componente estilizado chamado FooterContent para o conteúdo do rodapé.
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 12px;
`;

// Define um componente estilizado chamado CompanyInfo para informações da empresa.
export const CompanyInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h4 {
    padding: 8px;
  }
`;

// Define um componente estilizado chamado Divider para uma linha divisória horizontal.

export const Divider = styled.hr`
  border-top: 1px solid #ccc;
  margin: 5px 0;
  width: 40%;
`;

// Define um componente estilizado chamado ContactInfo para informações de contato.
export const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
// Define um componente estilizado chamado SocialLink para um link de rede social.
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

// Define um componente estilizado chamado SocialLinks para links de redes sociais.
export const SocialLink = styled.a`
  margin-top: 8px;
  color: #ffffff;
  font-size: 24px;
  margin-right: 10px;
  transition: color 0.3s ease;
  padding: 8px;

  &:hover {
    color: #00c2e0;
    text-decoration: none;
  }
`;
// Define um componente estilizado chamado LogoImage para exibir uma imagem do logotipo.
export const LogoImage = styled.img`
  max-width: 280px;
  padding: 10px;
`;
