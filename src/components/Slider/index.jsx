// Importa os componentes Swiper e SwiperSlide da biblioteca Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importa os estilos base do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importa os estilos personalizados do aplicativo a partir do arquivo './styles.css'
import "./styles.css";

// Importa os módulos necessários do Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Componente React principal do aplicativo
export default function App() {
  return (
    <>
      {/* Componente Swiper que envolve os slides */}
      <Swiper
        spaceBetween={30} // Espaço entre os slides
        centeredSlides={true} // Centraliza o slide ativo
        autoplay={{
          // Configuração da reprodução automática
          delay: 2500, // Delay entre os slides (em milissegundos)
          disableOnInteraction: false, // A reprodução automática não é desativada ao interagir com o slide
        }}
        pagination={{
          // Configuração da paginação
          clickable: true, // Permite clicar nos pontos de paginação para navegar para os slides
        }}
        navigation={true} // Habilita a navegação (setas de próxima e anterior)
        modules={[Autoplay, Pagination, Navigation]} // Adiciona os módulos necessários do Swiper
        className="mySwiper" // Classe CSS personalizada para o componente Swiper
      >
        {/* Cada SwiperSlide representa um slide individual */}
        <SwiperSlide>Slide 1 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 2 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 3 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 4 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 5 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 6 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 7 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 8 - Principais produtos em transição</SwiperSlide>
        <SwiperSlide>Slide 9 - Principais produtos em transição</SwiperSlide>
      </Swiper>
    </>
  );
}
