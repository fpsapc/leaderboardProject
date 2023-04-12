class GameScore {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  //  stores data in array
  scoresData = [];

  // API URL
  apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yMzG8blKxFRkRArKy24E/scores/';

  // Show Scores
  showScores = () => {
    const scoresList = document.getElementById('list');
    scoresList.innerHTML = this.scoresData.map((item) => `
    <li>${item.user} : ${item.score}</li>`).join('');
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
  addNewScore = async ({ user, score }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score }),
      };

      const data = await fetch(this.apiURL, config);
      const response = await data.json();
      this.scoresData.push(response);
      return this.fetchScores();
    } catch (error) { return error; }
  };
}

export default GameScore;
