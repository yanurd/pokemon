var pokemon = [];
const API = "https://pokeapi.co/api/v2/pokemon/";
// const searchPokemon = (async () => {
//   for (let i = 1; i < 20; i++) {

//     const pokemones = await axios.get(API+i)
//     .then(function (response){
//       const pokemones = response.data
//       pokemon.push(pokemones)
//       console.log(pokemon[i-1])
//       pokemonCard();
//     })
//     .catch(function (error){
//       console.log(error)
//     })
//   }
// })()
const searchPokemon = () => {
  for (let i = 1; i < 20; i++) {
    axios
      .get(API + i)
      .then(function (response) {
        // handle success
        let pokeInfo = response.data;
        pokemon.push(pokeInfo);
        //console.log(pokeInfo);
        pokemonCard();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
};
