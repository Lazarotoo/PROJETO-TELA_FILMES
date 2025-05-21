// Importa o componente Link do React Router, usado para navegação entre páginas
import { Link } from "react-router-dom";

// Importa o ícone de estrela da biblioteca react-icons (Font Awesome)
import { FaStar } from "react-icons/fa";

// Define a URL base das imagens, vinda das variáveis de ambiente (arquivo .env)
const imagesURL = import.meta.env.VITE_IMG;

// Cria o componente MovieCard, que recebe o objeto movie e uma flag showLink (padrão é true)
const MovieCard = ({ movie, showLink = true }) => {
  return (
    // Container principal do cartão do filme
    <div className="movie-card">
      {/* Exibe a imagem do pôster do filme */}
      <img src={imagesURL + movie.poster_path} alt={movie.title} />

      {/* Exibe o título do filme */}
      <h2>{movie.title}</h2>

      {/* Exibe a média de avaliação do filme com um ícone de estrela */}
      <p>
        <FaStar /> {movie.vote_average}
      </p>

      {/* Se showLink for true, exibe um botão de link para a página de detalhes do filme */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default MovieCard;
