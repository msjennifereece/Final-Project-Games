// https://www.freetogame.com/api/games

async function main() {
  const games = await fetch('https://www.freetogame.com/api/games')
  const gamesData = await games.json()
  

}

main()