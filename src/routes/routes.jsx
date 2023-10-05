// Importa os componentes 'Route' e 'Routes' do pacote 'react-router-dom'.
import { Route, Routes } from "react-router-dom";

// Importa os diferentes contêineres e layouts usados nas rotas.
import Home from "../containers/Home";
import Hospedagem from "../containers/Hospedagem";
import Email from "../containers/Email/index";
import DefaultLayout from "../layout/DefaultLayout";
import PreHome from "../containers/PreHome";
import ServidoresVps from "../containers/ServidoresVps";
import Contato from "../containers/Contato/";
import ContrateAgora from "../containers/ContrateAgora";
import QuemSomos from "../containers/QuemSomos";

// Define uma função chamada 'Router'.
function Router() {
  return (
    <Routes>
      {/* Define um roteamento comum para todas as rotas dentro do elemento 'DefaultLayout'. */}
      <Route element={<DefaultLayout />}>
        {/* Define as rotas específicas dentro do layout padrão. */}
        <Route path="home" element={<Home />} />
        <Route path="hospedagem" element={<Hospedagem />} />
        <Route path="servidoresvps" element={<ServidoresVps />} />
        <Route path="email" element={<Email />} />
        <Route path="contato" element={<Contato />} />
        <Route path="contrateagora" element={<ContrateAgora />} />
        <Route path="quemsomos" element={<QuemSomos />} />
      </Route>
      {/* Define a rota padrão, que corresponde à página 'PreHome'. */}
      <Route path="/" element={<PreHome />} />
    </Routes>
  );
}

// Exporta a função 'Router' como padrão para ser usada na configuração das rotas da aplicação.
export default Router;
