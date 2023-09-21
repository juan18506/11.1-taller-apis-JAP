const POKEMONS_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async ( id ) => {
  const pokemonEndpoint = `${ POKEMONS_ENDPOINT }${ id }`;

  const res = await fetch( pokemonEndpoint );
  const data = res.json();
  
  return data;
};