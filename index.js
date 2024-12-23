// "https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games"
const gamesEl = document.querySelector('.games')

async function main() {
  try {
    const response = await fetch("https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games");
    const gamesData = await response.json();
    console.log(gamesData)
    gamesEl.innerHTML = gamesData.map(game => gameHTML(game)).join('');
  } catch (error) {
    console.error("Error fetching games:", error);
  }  
}

main();

function showGamePost(id) {
  localStorage.setItem('id100', id)
  window.location.href = `${window.location.origin}/game.html`
}

function gameHTML(game) {
  return `<div class="game" onclick="showGamePost(${game.id})">
    <a class="game__link" href="${game.game_url}" target="_blank">
      <figure class="game__img--wrapper">
        <img class="game__img" src="${game.thumbnail}" alt="">
      </figure>
    </a>
    <div class="game__info">
      <div class="game__title">
      <label class="label" for="">Title: </label>
        ${game.title}
      </div>
      <div class="game__description">
      <label class="label" for="">Description: </label>
        ${game.short_description}
      </div>
      <div class="game__genre">
      <label class="label" for="">Genre: </label>
      ${game.genre}
      </div>
      <div class="game__plubisher">
        <label class="label" for="">Publisher: </label>
        ${game.publisher}
      </div>
      <div class="game__developer">
        <label class="label" for="">Developer</label>
        ${game.developer}
      </div>
      <div class="game__relase-date">
        <label class="label" for="">Realse Date: </label>
        ${game.release_date}
      </div>
      <label class="label" for="">Profile Url: </label>
      <a class="game__url--link" href="${game.freetogame_profile_url}" target="_blank">
      ${game.freetogame_profile_url}
      </a>
    </div>
  </div>`
}


