export const showPokemon = ( pokemon ) => {
  document.getElementById('pkmn').innerHTML = `
    <img 
      src="${ pokemon.sprites.other['official-artwork'].front_default }" 
      alt="A pokemon"
      class="m-auto"
    >
  `
}