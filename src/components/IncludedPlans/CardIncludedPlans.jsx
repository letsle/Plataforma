// Importações dos componentes e estilos necessários
import {
  TitleIncludedPlans, // Componente para o título da seção
  IncludedList, // Componente para a lista de itens incluídos
  IncludedListItem, // Componente para cada item da lista
  IconWrapper, // Componente para envolver o ícone
  Text, // Componente para o texto descritivo
  IncludedPlans, // Componente para envolver a lista de itens
} from "./styles";

import { FcOk } from "react-icons/fc"; // Ícone de marca de seleção da biblioteca react-icons/fc

// Função do componente CardIncludedPlans
function CardIncludedPlans() {
  return (
    <>
      {/* Título da seção */}
      <TitleIncludedPlans>Inclusos no plano</TitleIncludedPlans>

      {/* Envolve a lista de itens incluídos */}
      <IncludedPlans>
        {/* Lista de itens incluídos */}
        <IncludedList>
          {/* Item 1: Gerencie até 100 sites */}
          <IncludedListItem>
            {/* Envolve o ícone */}
            <IconWrapper>
              <FcOk /> {/* Ícone de marca de seleção */}
            </IconWrapper>
            {/* Texto descritivo do item */}
            <Text>Publique seus sites num piscar de olhos com nosso Criador de Sites</Text>
          </IncludedListItem>

          {/* Item 2: Gerencie até 100 sites (repetido) */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>Publique seus sites num piscar de olhos com nosso Criador de Sites</Text>
          </IncludedListItem>

          {/* Item 3: Publique seus sites com Criador de Sites */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>
              Publique seus sites num piscar de olhos com nosso Criador de Sites.
            </Text>
          </IncludedListItem>

          {/* Itens 4, 5 e 6: Repetição dos itens anteriores */}
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>
              Publique seus sites num piscar de olhos com nosso Criador de Sites.
            </Text>
          </IncludedListItem>
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>
              Publique seus sites num piscar de olhos com nosso Criador de Sites.
            </Text>
          </IncludedListItem>
          <IncludedListItem>
            <IconWrapper>
              <FcOk />
            </IconWrapper>
            <Text>
              Publique seus sites num piscar de olhos com nosso Criador de Sites.
            </Text>
          </IncludedListItem>
        </IncludedList>
      </IncludedPlans>
    </>
  );
}

export default CardIncludedPlans; // Exporta o componente CardIncludedPlans
