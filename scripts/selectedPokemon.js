const selectedPokemon = () => {
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id");
  const API = "https://pokeapi.co/api/v2/pokemon/";
  axios
    .get(API + id)
    .then(function (response) {
      var pokeInfo = [response.data]
      pokemonFullData(pokeInfo)
    })
    .catch(function (error) {
      console.log(error);
    });
};
