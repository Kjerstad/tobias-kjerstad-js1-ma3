const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  const response = await fetch(url);

  const results = await response.json();

  const games = results.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].tags);

    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="results">Name: ${games[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="results">Rating: ${games[i].rating}</div>`;
    resultsContainer.innerHTML += `<div class="results">Number of tags: ${games[i].tags.length}</div>`;
  }
}
getGames();
