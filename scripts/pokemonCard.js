const pokemonCard = () => {
  const pokeInfo = pokemon.map((data) => ({
    name: data.name,
    id: data.id,
    image: data.sprites.front_default,
    type: data.types.map((type) => type.type.name).join(", ")
  }))
  pokemonDisplay(pokeInfo);
}