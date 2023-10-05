import styled from "styled-components";

// Define um componente chamado SectionWrapper 
export const SectionWrapper = styled.div`
  padding: 100px;
  display: flex;
  justify-content: space-between;
  height: 40%;
`;

// Define um componente chamado IconBox 
export const IconBox = styled.div`
  height: 80px; /* Igual à largura para criar um círculo */
  display: flex;
  justify-content: center;
  background-color:#00C2E00A; /* Cor de fundo */
  box-shadow: 5px 8px 8px #064d7988;
  border-radius: 13px; /* Transforma o contêiner em um círculo */
  text-align: center;
  width: 90px;
  border: none;

    // Define estilos quando o mouse está sobre o componente
  &:hover{
    box-shadow: 0px 0px 20px 6px #064d7988;
    transition: 0.2s;
    border: none;
  }
`;

// Define um componente chamado Icon
export const Icon = styled.i`
  font-size: 90px;
  color: #064d79;
  cursor: pointer;
`;

// Define um componente chamado Text com estilos CSS
export const Text = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #003251;
`;
