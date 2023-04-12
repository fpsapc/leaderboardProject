class GameScore {
  constructor(player, score) {
    this.player = player;
    this.score = score;
  }

  //  stores data in array
  scoresData = [];

  // API URL
  apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ABCD1234/scores/';

  // Show Scores
  showScores = () => {
    const scoresList = document.getElementById('list');
    scoresList.innerHTML = this.scoresData.map((item) => `
    <li>${item.name}:<span>${item.score}</span></li>`).join('');
  };

  // fetching data from API
  fetchScores = async () => {
    try {
      const data = await fetch(this.apiURL);
      const response = await data.json();
      this.scoresData = [];
      response.result.map((item) => this.scoresData.push(item));
      return this.showScores();
    } catch (error) { return error; }
  };

  // Add a new Score
  addNewScore = async ({ player, points }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ player, score: points }),
      };

      const data = await fetch(this.apiURL, config);
      const response = await data.json();
      this.scoresData.push(response);
      return this.fetchScores();
    } catch (error) { return error; }
  };
}

export default GameScore;
