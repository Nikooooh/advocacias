import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

const Home = lazy(() => import("./components/routes/Home"));
const Sobre = lazy(() => import("./components/routes/Sobre"));
const Contato = lazy(() => import("./components/routes/Contato"));
const Cadastro = lazy(() => import("./components/routes/Cadastro"));
const Artigos = lazy(() => import("./components/routes/Artigos"));
const DetalhesAdvogado = lazy(() =>
  import("./components/routes/PaginaAdvogado")
);
const TermosDeUso = lazy(() => import("./components/routes/TermosDeUso"));
const Admin = lazy(() => import("./components/routes/Admin"));
const ConfirmationPage = lazy(() =>
  import("./components/routes/ConfirmationPage")
);
const ArtigoCompleto = lazy(() => import("./components/routes/ArtigoCompleto"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/artigos/:id" element={<ArtigoCompleto />} />
          <Route path="/advogado/:id" element={<DetalhesAdvogado />} />
          <Route path="/terms-of-use" element={<TermosDeUso />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/confirmation-page" element={<ConfirmationPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
