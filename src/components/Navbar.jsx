// Importa o useState do React para lidar com estados
import { useState } from "react";

// Importa Link para navegação e useNavigate para redirecionar programaticamente
import { Link, useNavigate } from "react-router-dom";

// Importa ícones de câmera e de busca da biblioteca react-icons
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// Importa o arquivo CSS com os estilos do navbar
import "./Navbar.css";

// Cria o componente Navbar
const Navbar = () => {
  // Estado para armazenar o texto da busca
  const [search, setSearch] = useState("");

  // Hook para redirecionar o usuário para outra rota
  const navigate = useNavigate();

  // Função chamada quando o formulário for enviado
  const handleSubmit = (e) => {
    // Impede que a página recarregue
    e.preventDefault();

    // Se o campo de busca estiver vazio, não faz nada
    if (!search) return;

    // Redireciona o usuário para a página de busca com a query
    navigate(`/search?q=${search}`, { replace: true });

    // Limpa o campo de busca
    setSearch("");
  };

  return (
    // Tag de navegação com o ID navbar
    <nav id="navbar">
      {/* Título com ícone de câmera que redireciona para a página inicial */}
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>

      {/* Formulário de busca de filmes */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto para buscar o nome do filme */}
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado conforme o usuário digita
          value={search} // Valor atual do estado
        />
        {/* Botão com ícone de lupa para enviar a busca */}
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

// Exporta o componente para ser usado em outros lugares
export default Navbar;
