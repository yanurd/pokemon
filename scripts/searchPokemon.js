var pokemon = [];
const API = "https://pokeapi.co/api/v2/pokemon/";
const maxPokemon = 100
async function searchPokemon() {
  for (let i = 1; i < maxPokemon; i++) {
   await axios
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
