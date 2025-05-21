import React from "react";                      // Importa a biblioteca React (necessária para JSX)
import ReactDOM from "react-dom/client";        // Importa ReactDOM para renderizar o app no DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa componentes para roteamento

import App from "./App";                         // Importa o componente principal App (layout)
import Home from "./pages/Home";                 // Importa componente da página Home
import Movie from "./pages/Movie";               // Importa componente da página Movie (detalhes)
import Search from "./pages/Search";             // Importa componente da página Search (busca)

import "./index.css";                            // Importa arquivo CSS global

// Cria o root React no elemento HTML com id 'root' (geralmente no index.html)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>                            {/* Ativa checagens e avisos extras para desenvolvimento */}
    <BrowserRouter>                             {/* Habilita roteamento via URL com o React Router */}
      <Routes>                                 {/* Contém todas as rotas definidas */}
        {/* Rota pai que engloba todas as rotas filhas, usando o componente App como layout */}
        <Route element={<App />}>              
          {/* Rota para caminho "/" que renderiza o componente Home */}
          <Route path="/" element={<Home />} /> 

          {/* Rota dinâmica para "movie/:id" onde :id é parâmetro da URL, renderiza Movie */}
          <Route path="movie/:id" element={<Movie />} /> 

          {/* Rota para caminho "/search" que renderiza o componente Search */}
          <Route path="search" element={<Search />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
