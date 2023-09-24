import { getPokemon, getRandomId, showPokemon } from './helpers';

let pkmnName = '';

document.addEventListener('DOMContentLoaded', async () => {
  const id = getRandomId();
  const pokemon = await getPokemon( id );
  pkmnName = pokemon.name;
  showPokemon( pokemon );
});

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const userInput = document.getElementById('userInput');
  
  if (userInput.value.toLocaleLowerCase().trim() !== pkmnName) {
    alert('incorrecto!');
  } else {
    alert('muy bien!');
    const id = getRandomId();
    const pokemon = await getPokemon( id );
    pkmnName = pokemon.name;
    showPokemon( pokemon );
  }
  
  userInput.value = userInput.defaultValue;
})