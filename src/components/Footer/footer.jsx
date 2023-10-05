// Importação da imagem do logotipo da empresa
import Logo from "../../assets/Logo.png";

// Importações dos componentes e estilos necessários do arquivo "./styles"
import {
  FooterWrapper,
  FooterContent,
  CompanyInfo,
  ContactInfo,
  Divider,
  SocialLinks,
  SocialLink,
  LogoImage,
} from "./styles";

// Importações de ícones de redes sociais da biblioteca "react-icons"
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";

// Definição do componente Footer (rodapé)
const Footer = () => {
  return (
    // Contêiner do rodapé
    <FooterWrapper>
      <FooterContent>
        {/* Informações da empresa */}
        <CompanyInfo>
          {/* Logotipo da empresa */}
          <LogoImage src={Logo} />
          <h4>Sobre nós</h4>
          <p>Softmig Software e Telecomunicações</p>
          <p>Telefone: (31) 3327-2711</p>
        </CompanyInfo>
        {/* Informações de contato */}
        <ContactInfo>
          <h4>Contato</h4>
          <p>Email: contato@softmig.com</p>
        </ContactInfo>
        <Divider /> {/* Linha divisória */}
        {/* Links para redes sociais */}
        <SocialLinks>
          {/* Link para o LinkedIn */}
          <SocialLink
            href="http://linkedin.com/company/softmig-software-e-telecomunicacoes"
            target="_blank"
          >
            <SlSocialLinkedin className="fab fa-linkedin"></SlSocialLinkedin>
          </SocialLink>
          {/* Link para o Instagram */}
          <SocialLink
            href="https://www.instagram.com/sejasoftmig/"
            target="_blank"
          >
            <AiOutlineInstagram className="fab fa-instagram"></AiOutlineInstagram>
          </SocialLink>
          {/* Link para o WhatsApp */}
          <SocialLink href="https://api.whatsapp.com/send?phone=553132182710" target="_blank">
            <IoLogoWhatsapp className="fab fa-whatsapp"></IoLogoWhatsapp>
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer; // Exporta o componente Footer
