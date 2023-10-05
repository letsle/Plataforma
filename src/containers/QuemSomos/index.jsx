// index.jsx
import {
  Container,
  Title,
  TeamContainer,
  TeamTitle,
  TeamText,
  AboutUs,
  TitleAboutUs,
  IconContainer,
  IconWrapper,
  IconText,
  IconTextContainer,
  SectionValues,
  TitleNossosValores,
  Paragraph,
  IconWrapperNossosValores,
  SectionResources,
  TitleResources,
  Text,
  Image,
  Mission,
  TitleNossaMissao,
  ContainerContent,
} from "./styles";
import Footer from "../../components/Footer/footer";

import { PiHandshakeBold, PiBookOpenTextBold } from "react-icons/pi";
import { BiTimer } from "react-icons/bi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaAward, FaRegCalendarCheck } from "react-icons/fa";
import { TbArrowsRight } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import img from "../../assets/pexels1181406.jpg";

import imgAboutUs from "../../assets/pexels3184431.jpg";
import FloatingWhatsAppButton from "../../components/FloatingButton/FloatingWhatsAppButton";

function Contato() {
  return (
    <>
      <Container>
        <a href="#team">
          <Title>Conheça nossa história</Title>
        </a>
      </Container>

      <ContainerContent>
        <TeamContainer id="team">
          <div className="content-wrapper">
            <img
              src={imgAboutUs}
              alt="Foto De Pessoas Perto De Uma Mesa De Madeira Com as mãos uma em cima da outra
              "
              className="img-about-us"
            />
            <div className="text-content">
              <TitleAboutUs>Sobre Nós</TitleAboutUs>
              <AboutUs>
                A SOFTMIG é uma empresa com uma sólida trajetória no setor de
                telecomunicações desde 2006, e recentemente expandiu suas
                operações para abranger também o campo da Tecnologia da
                Informação (TI), incluindo serviços de hospedagem de sites. Com
                um vasto leque de serviços em Telecomunicações e TI,
                estabelecemos parcerias com as principais operadoras e
                fabricantes do mercado. Nossa abordagem é inovadora, visando
                criar, adaptar e aprimorar soluções de maneira exclusiva para
                cada cliente, tanto no contexto das telecomunicações quanto na
                área de TI.
              </AboutUs>

              <TeamTitle>Nossa Equipe</TeamTitle>
              <TeamText>
                Nossa equipe é formada por profissionais capacitados,
                apaixonados por tecnologia e desafios. Somos uma mistura de
                analistas competidores, engenheiros criativos, construtores de
                relacionamento, caçadores de talentos, gestores carismáticos e
                executores de alta performance. Trabalhamos com muita sinergia e
                diligência em cada projeto. Somos reconhecidos pela qualidade,
                agilidade e capacitação técnica dos nossos colaboradores. O
                resultado esperado é a certeza de entregar um bom trabalho,
                superando as expectativas do cliente o que nos enche de orgulho
                e motivação.
              </TeamText>
            </div>
          </div>
        </TeamContainer>

        <IconContainer>
          <IconTextContainer>
            <IconText>
              A partir de 2014 com o resultado do trabalho sólido, conquistamos
              sede própria, adquirimos mais recursos especializados, firmamos
              novos contratos, fortalecemos a marca e expandimos nossa atuação
              para outras tecnologias e estados. Usamos uma metodologia de
              trabalho simples, objetiva e eficaz e com isso obtemos resultados
              extraordinários.
            </IconText>
          </IconTextContainer>

          <IconWrapper>
            <div>
              <AiOutlineFileDone className="icon"></AiOutlineFileDone>
              <p>Planejar</p>
            </div>
            <div>
              <FaRegCalendarCheck className="icon"></FaRegCalendarCheck>
              <p>Executar</p>
            </div>
            <div>
              <TbArrowsRight className="icon"></TbArrowsRight>
              <p>Continuar</p>
            </div>
          </IconWrapper>
        </IconContainer>

        <Mission>
          <TitleNossaMissao>Missão</TitleNossaMissao>
          <Paragraph>
            É o que todos nós nos propomos a fazer diariamente baseado em nossos
            valores. Fornecer serviços de alta qualidade com rapidez e
            excelência em busca da plena satisfação dos clientes.
          </Paragraph>
        </Mission>

        <SectionResources>
          <Text>
            <TitleResources>Recursos</TitleResources>
            <p>
              Nossa equipe é formada por profissionais capacitados, apaixonados
              por tecnologia e desafios. Somos uma mistura de analistas
              competidores, engenheiros criativos, construtores de
              relacionamento, caçadores de talentos, gestores carismáticos e
              executores de alta performance. Trabalhamos com muita sinergia e
              diligencia em cada projeto. O resultado esperado é a certeza de
              entregar um bom trabalho, superando as expectativas do cliente o
              que nos enche de orgulho e motivação.
            </p>
          </Text>
          <Image src={img} alt="Descrição da imagem" />
        </SectionResources>

        <SectionValues>
          <TitleNossosValores>Nossos Valores</TitleNossosValores>
          <Paragraph>
            Nossos valores são o cerne do nosso trabalho. Eles guiam nossas
            ações e decisões, e são a base de nossa cultura empresarial.
          </Paragraph>
          <IconWrapperNossosValores>
            <div>
              <PiHandshakeBold className="icon" />
              <p>Compromisso</p>
            </div>
            <div>
              <PiBookOpenTextBold className="icon" />
              <p>Ética</p>
            </div>
            <div>
              <BiTimer className="icon" />
              <p>Agilidade</p>
            </div>
            <div>
              <HiOutlineHandThumbUp className="icon" />
              <p>Entusiasmo</p>
            </div>
            <div>
              <FaAward className="icon" />
              <p>Qualidade</p>
            </div>
          </IconWrapperNossosValores>
        </SectionValues>
      </ContainerContent>

      <Footer />

      <FloatingWhatsAppButton />
    </>
  );
}

export default Contato;
