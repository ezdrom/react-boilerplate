import { useState, useEffect } from 'react';
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      const urls = Array.from({ length: 20 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);
      const requests = urls.map(url => axios.get<Pokemon>(url));
      const responses = await axios.all(requests);
      const data = responses.map(response => response.data);
      setPokemon(data);
    }
    fetchData();
  }, []);
  if (!pokemon) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map((p) => (
          <>
            <li key={p.name}>{p.name}</li>
            <img src={p.sprites.front_default} alt={p.name} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;