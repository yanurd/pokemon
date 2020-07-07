const fullDataDisplay = (pokemon) => {
  var output = "";
  var moves = 1;
  pokemon.forEach((p) => {
    if (p.front) {
      document.getElementById("content--front__male").innerHTML = `
        <img src="${p.front}" alt="${p.name}">
      `;
    }
    if (p.back) {
      document.getElementById("content--back__male").innerHTML = `
        <img src="${p.back}" alt="${p.name}">
      `;
    }
    if (p.ffront) {
      document.getElementById("content--front__female").innerHTML = `
        <img src="${p.ffront}" alt="${p.name}"> 
      `;
    }
    if (p.fback) {
      document.getElementById("content--back__female").innerHTML = `
        <img src="${p.fback}" alt="${p.name}">
      `;
    }
    if (p.fshiny) {
      document.getElementById("content--front__mshiny").innerHTML = `
        <img src="${p.fshiny}" alt="${p.name}">
      `;
    }
    if (p.bshiny) {
      document.getElementById("content--back__mshiny").innerHTML = `
        <img src="${p.bshiny}" alt="${p.name}">
      `;
    }
    if (p.ffshiny) {
      document.getElementById("content--front__fshiny").innerHTML = `
        <img src="${p.ffshiny}" alt="${p.name}">
      `;
    }
    if (p.fbshiny) {
      document.getElementById("content--back__fshiny").innerHTML = `
        <img src="${p.fbshiny}" alt="${p.name}">
      `;
    }
    document.getElementById("content--info").innerHTML = `
      <h4>${p.id}- ${p.name.toUpperCase()}</h4>
    `;
    document.getElementById("content--general").innerHTML = `
      <p>Height: ${p.height} m | ${(p.height * 3.28084).toFixed(2)} ft</p>
      <p>Weight: ${p.weight} hg | ${p.weight * (0.1).toFixed(1)} kg | ${
      p.weight * (0.220462).toFixed(2)
    } lb </p>
      <p>Type: ${p.types}</p>
    `;
    p.moves.forEach((m) => {
      output += `
      <tr>
        <td class="pokemon--moves">${moves++}</td>
        <td class="pokemon--moves">${m}</td>
      </tr>
      `;
    });
    document.getElementById("_tbody").innerHTML = output;
  });
};
