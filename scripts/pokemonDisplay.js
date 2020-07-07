const pokemonDisplay = (pokeInfo) => {
  console.log(pokeInfo);
  var output = "";
  pokeInfo.forEach((pokemon) => {
    output += `
    <div class="content--card"
      <li>
        <h4>${pokemon.id} - ${pokemon.name.toUpperCase()}</h4>
        <img loading="lazy" src="${pokemon.image}" alt="${pokemon.name}">
        <p>Type: ${pokemon.type}</p>
        <a href='./pokemon.html?id=${pokemon.id}'>Info</a>
      </li>
    </div>
    `;
  });
  document.getElementById("content").innerHTML = output;
};
