const ul = document.getElementById("planet");
const url = "https://swapi.co/api/planets/";

// Planet API

fetch(url)
  .then(response => response.json())
  .then(data => {
    let planets = data.results;
    return planets.map(planet => {
      let li = createNode("li");
      //    let span = createNode("span");
      li.innerHTML = `Welcome to ${planet.name}, with ${
        planet.population
      } residents on the planet!`;
      append(ul, li);
    });
  })
  .catch(error => console.log("Uh-oh", error));

function createNode(element) {
  return document.createElement(element);
}
function append(parent, element) {
  return parent.appendChild(element);
}
