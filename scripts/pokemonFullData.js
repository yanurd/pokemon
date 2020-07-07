const pokemonFullData = (pokemon) => {
  const selectedPokemon = pokemon.map((data) => ({
    id: data.id,
    name: data.name,
    //hombe
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    fshiny: data.sprites.front_shiny,
    bshiny: data.sprites.back_shiny,
    //mujer
    fback: data.sprites.back_female,
    ffront: data.sprites.front_female,
    ffshiny: data.sprites.front_shiny_female,
    fbshiny: data.sprites.back_shiny_female,
    //
    weight: data.weight,
    height: data.height,
    types: data.types.map(type => type.type.name).join(", "),
    moves: data.moves.map(moves => moves.move.name),
  }));
  fullDataDisplay(selectedPokemon);
};
