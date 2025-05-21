// Importa o componente Outlet do react-router-dom para renderizar as rotas filhas da rota atual
import { Outlet } from "react-router-dom";

// Importa o componente Navbar que fica na pasta components
import Navbar from "./components/Navbar";

// Importa o arquivo CSS para aplicar os estilos gerais da aplicação
import "./App.css";

// Função principal do componente App, que é a raiz da aplicação React
function App() {
  return (
    // Div principal que envolve todo o conteúdo da aplicação, com a classe para estilização
    <div className="app-container">
      
      {/* Renderiza o componente Navbar, que normalmente é a barra de navegação fixa */}
      <Navbar />
      
      {/* O Outlet é um espaço reservado onde as rotas filhas vão ser exibidas */}
      <Outlet />
    </div>
  );
}

// Exporta o componente App para poder ser usado em outros arquivos
export default App;
