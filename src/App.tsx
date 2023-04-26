import { useState, useEffect } from 'react';
import getAllPokemon from './api/PokeRequests';

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      const allPokemon = await getAllPokemon();
      setPokemon(allPokemon);
    }
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;