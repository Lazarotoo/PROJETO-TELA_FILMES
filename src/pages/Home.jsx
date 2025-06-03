import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    console.log("Componente Home renderizado!"); // Este log
    const [topMovies, setTopMovies] = useState([]);
    const [error, setError] = useState(null);

    const getTopRatedMovies = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Erro na requisição: " + res.status);
            const data = await res.json();
            setTopMovies(data.results);
        } catch (err) {
            setError(err.message);
            console.error("Erro ao buscar filmes:", err);
        }
    };

    useEffect(() => {
        console.log("useEffect do Home executado!"); // E este log
        const topRatedUrl = `<span class="math-inline">\{moviesURL\}top\_rated?</span>{apiKey}`;
        console.log("URL da API:", topRatedUrl); // E este, que é o mais importante!
        getTopRatedMovies(topRatedUrl);
    }, []);

    if (error) {
        return (
            <div style={{ color: 'red', backgroundColor: 'white', padding: '20px' }}>
                <h2>Ocorreu um erro ao carregar os filmes:</h2>
                <p>{error}</p>
                <p>Verifique sua chave de API e a conexão com a internet.</p>
            </div>
        );
    }

    console.log("Filmes carregados (estado):", topMovies); // Este também ajuda

    return (
        <div className="container">
            <h2>Melhores filmes:</h2>
            {topMovies.length === 0 && <p>Carregando filmes...</p>}
            <pre>{JSON.stringify(topMovies, null, 2)}</pre>
        </div>
    );
};

export default Home;