import styled from "styled-components";
// Define um componente estilizado para um contêiner de seção
export const SectionWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px;
  justify-content: stretch;
  padding: 30px;
  box-shadow: 0px 0px 7px 1px #064d7988; /* Adicione a box-shadow */
  //margin: 0 auto; /* Centralize a seção */
  max-width: 100%;   /* Define uma largura máxima para a seção */
  text-align: center;
  color:#003251;
  font-size: 16px;

  p,
  h3 {
    padding: 20px;
  }
`;

// Define um componente estilizado para uma imagem
export const Image = styled.img`
  width: 30%; /* Ajuste conforme necessário */
  opacity: 20%;
  margin-right: 10px;
`;


