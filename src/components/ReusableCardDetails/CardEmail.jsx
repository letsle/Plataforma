// Importações de bibliotecas e componentes
import { useState } from "react";
import Modal from "react-modal";
import { IoLogoWhatsapp, IoIosCloseCircleOutline } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import ReusableCard from "../ReusableCardDetails/ReusableCard";
import { CardRow, Title, ModalContent} from "./styles";
import "./styleModal.css";

// Componente Screen1 que renderiza uma tela com vários cartões de informações
const Screen1 = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Estado para controlar o cartão selecionado
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar a exibição do modal

  // // Função para abrir o modal com os detalhes do cartão selecionado
  // const handleOpenModal = (cardData) => {
  //   setSelectedCard(cardData);
  //   setModalIsOpen(true);
  // Código comentando pois não vamos usar este botão neste momento};

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
  };

  // Função para renderizar o conteúdo do modal com base no cartão selecionado
  const renderModal = () => {
    if (!selectedCard) {
      return null;
    }

    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h1 className="modal-title">Contrate agora o seu plano</h1>
        <p className="modal-paragraph">Fale com nossos especialistas</p>

        <div className="button-container">
          <a
            className="modal-whatsapp"
            href="https://api.whatsapp.com/send?phone=553132182710"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
          <p className="modal-paragraph">
            <br />
            Faça o seu cadastro e contrate o seu plano
          </p>
          <div className="modal-buttons">
            <button className="modal-pf">
              <FaUserAlt /> Pessoa Física
            </button>
            <button className="modal-pj">
              <BsFillBuildingsFill /> Pessoa Jurídica
            </button>
          </div>
        </div>
        <h1></h1>
        <button className="close-button" onClick={handleCloseModal}>
          <IoIosCloseCircleOutline />
        </button>
      </Modal>
    );
  };

  // Dados dos cartões a serem exibidos na tela
  const cardData = [
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 1",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 2",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 3",
      //buttonText: "Contrate Agora",
    },

    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 4",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 5",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Plano de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 6",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 7",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 8",
      //buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 9",
      // buttonText: "Contrate Agora",
    },
    {
      title: "Planos de Email",
      value: "R$ 0,00",
      description: "Descrição do Card 10",
      // buttonText: "Contrate Agora",
    },
    //buttonText está comentado porque não vai usado neste momento
  ];

  // Divide os dados dos cartões em linhas de até 3 cartões por linha
  const cardRows = [];

  for (let i = 0; i < cardData.length; i += 3) {
    const row = cardData.slice(i, i + 3); // Cria uma "row" (linha) que contém até 3 cartões, começando a partir da posição 'i' no array.
    cardRows.push(row); // Adiciona a linha recém-criada ao array de "cardRows".
  }

  return (
    <>
      {/* Título da tela */}
      <Title>Conheça os nossos planos de Email</Title>
      <div>
        {/* Mapeia as linhas de cartões e renderiza cada linha */}
        {cardRows.map((cardRow, index) => (
          <CardRow key={index}>
            {/* Mapeia os cartões em cada linha e renderiza cada cartão */}
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

      <ModalContent>
        {/* Renderiza o modal quando ele estiver aberto */}
        {modalIsOpen && renderModal()}

        {/* <button className="button-modal" onClick={handleOpenModal}>
        Contrate Agora
      </button> Código comentando pois não vamos usar este botão neste momento*/}
      </ModalContent>
    </>
  );
};

export default Screen1;
