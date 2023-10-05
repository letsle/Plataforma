// Importa o componente ReusableCard e os estilos definidos nos arquivos "./styles"
import ReusableCard from "../ReusableCardDetails/ReusableCard";
import { CardRow, Title, CustomizeContainer, StyledParagraph, CustomizeImage } from "./styles";

// Componente Screen1 que renderiza uma tela com vários cartões de informações de Servidores VPS
const Screen1 = () => {
  // Dados dos cartões a serem exibidos na tela
  const cardData = [
    {
      title: "Planos VPS",
      value: "R$ 0,00",
      description: "Descrição do Card 1",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos VPS",
      value: "R$ 0,00",
      description: "Descrição do Card 2",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos VPS",
      value: "R$ 0,00",
      description: "Descrição do Card 3",
      //buttonText: "Contrate Agora",
    },

    {
      title: "Planos VPS",
      value: "R$ 0,00",
      description: "Descrição do Card 4",
      //buttonText: "Contrate Agora",
    },
  ];

  //buttonText está comentado porque não vai usado agora.

  // Divide os dados dos cartões em linhas de até 3 cartões por linha para melhor organização
  const cardRows = [];

  for (let i = 0; i < cardData.length; i += 3) {
    const row = cardData.slice(i, i + 3);
    cardRows.push(row);
  }

  return (
    <>
      {/* Título da tela */}
      <Title>Conheça os nossos planos de Servidores VPS</Title>
      <div>
        {/* Mapeia as linhas de cartões e renderiza cada linha */}
        {cardRows.map((cardRow, index) => (
          <CardRow key={index}>
            {/* Mapeia os cartões em cada linha e renderiza cada cartão usando o componente ReusableCard */}
            {cardRow.map((card, cardIndex) => (
              <ReusableCard
                key={cardIndex}
                title={card.title}
                value={card.value}
                description={card.description}
                buttonText={card.buttonText}
              />
            ))}
          </CardRow>
        ))}
      </div>
      
      <Title>Personalize o seu plano VPS</Title>
      <CustomizeContainer>
        <StyledParagraph>
          Não perca tempo, escolha o plano que melhor atende às suas necessidades
          e dê um impulso aos seus negócios hoje mesmo. Personalize o seu plano de
          email de acordo com as suas necessidades específicas. Nossos
          especialistas estão à disposição para ajudar a criar a solução perfeita
          para você. Entre em contato agora mesmo!
        </StyledParagraph>
        <CustomizeImage />
      </CustomizeContainer>
    
    </>
  );
};

export default Screen1; // Exporta o componente Screen1
