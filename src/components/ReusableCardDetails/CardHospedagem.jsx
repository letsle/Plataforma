// Importa o componente ReusableCard e os estilos definidos nos arquivos "./styles"
import ReusableCard from "../ReusableCardDetails/ReusableCard";
import { CardSection } from "../ReusableSectionDetails/styles";
import {CardRow, Title} from "./styles"


// Componente Screen1 que renderiza uma tela com vários cartões de informações de Hospedagem
const Screen1 = () => {
  // Dados dos cartões a serem exibidos na tela
  const cardData = [
    {
      title: "Título Card Hospedagem",
      value: "R$ 0,00",
      description: "Descrição do Card 1",
      //buttonText: "Contrate agora",
    },
    {
      title: "Título Card Hospedagem",
      value: "R$ 0,00",
      description: "Descrição do Card 2",
      //buttonText: "Contrate agora",
    },
    {
      title: "Título Card Hospedagem",
      value: "R$ 0,00",
      description: "Descrição do Card 3",
      //buttonText: "Contrate agora",
    },

    {
        title: "Título Card Hospedagem",
        value: "R$ 0,00",
        description: "Descrição do Card 4",
    // buttonText: "Contrate agora",
      },
      {
        title: "Título Card Hospedagem",
        value: "R$ 0,00",
        description: "Descrição do Card 5",
      //buttonText: "Contrate agora",
      },
      {
        title: "Título Card Hospedagem",
        value: "R$ 0,00",
        description: "Descrição do Card 6",
        //buttonText: "Contrate agora",
      },
      {
        title: "Título Card Hospedagem",
        value: "R$ 0,00",
        description: "Descrição do Card 7",
       // buttonText: "Contrate agora",
        
      },
      {
        title: "Título Card Hospedagem",
        value: "R$ 0,00",
        description: "Descrição do Card 8",
        //buttonText: "Contrate agora",
      },
      
      //buttonText está comentado porque não vai usado agora.

    // Adicione mais objetos de card conforme necessário
  ];

  const cardRows = [];

  for (let i = 0; i < cardData.length; i += 3) {
    const row = cardData.slice(i, i + 3);
    cardRows.push(row);
  }

  return (
    <>
      {/* Título da tela */}
    <Title>Conheça os nossos planos de Hospedagem</Title>
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
     {/* Renderiza um componente CardSection */}
    < CardSection />
    </>
  );
};

export default Screen1;





