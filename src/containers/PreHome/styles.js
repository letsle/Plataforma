import styled from "styled-components";
import img from "../../assets/background.png";
// Define um componente estilizado para um contêiner principal
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
// Define um componente estilizado para um contêiner de cards
export const CardContainer = styled.div`
  display: flex; /* Exibe os cards lado a lado */
  justify-content: center; /* Centraliza os cards horizontalmente */
  align-items: center; /* Centraliza os cards verticalmente */
  margin-top: 50px; /* Espaçamento entre o título e os cards */
`;
// Define um componente estilizado para um card
export const Card = styled.div`
  z-index: 99;
  width: 200px;
  height: 200px;
  background-color: transparent;
  border-radius: 25px;
  border: none;
  padding: 20px;
  margin: 70px;
  text-align: center;
  box-shadow: 2px 2px 20px 1px rgba(17, 210, 240, 0.219);

  &:hover {
    background-color: transparent;
    box-shadow: 2px 2px 20px 15px rgba(17, 210, 240, 0.219);
    transition: 0.8s;
  }

  h2 {
    margin: 10px;
    color: #ffffff;
    font-size: 16px;
  }

  button {
    background-color: #f0003c;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 6px 12px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 50px;

    &:hover {
      background-color: #f3f5f9;
      color: #f0003c;
      transition: 0.6s;
    }
  }
`;
// Define um componente estilizado para um título
export const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 99;
  padding-top: 50px;
`;
// Define um componente estilizado para uma imagem de logotipo
export const LogoImage = styled.img`
  width: 450px; /* Defina o tamanho da imagem */
  height: auto; /* Mantenha a proporção da imagem */
  margin-bottom: 30px; /* Espaçamento abaixo da imagem */
  padding-top: 20px;
  z-index: 99;
`;
