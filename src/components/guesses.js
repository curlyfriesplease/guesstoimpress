import react from 'react';
import '../css/guesses.css';
import '../css/categories.css';

export const ListDiv = ({ predictionData }) => {
  console.log(typeof predictionData);
  console.log(`🐉🐉🐉 predictionData: 🐉🐉🐉`);
  console.dir(predictionData);
  return (
    <div className="listDiv">
      {predictionData.map((guess, guessIndex) => (
        <IndividualGuess guess={guess} />
      ))}
    </div>
  );
};

const StatusPending = () => <div className="statusPending status">PENDING</div>;
const StatusIncorrect = () => (
  <div className="statusIncorrect status">INCORRECT</div>
);
const StatusPartial = () => <div className="statusPartial status">PARTIAL</div>;
const StatusCorrect = () => <div className="statusCorrect status">CORRECT</div>;

const IndividualGuess = ({ guess }) => {
  const statusText = (num) => {
    switch (num) {
      case "1":
        return <StatusPending />;
      case "2":
        return <StatusIncorrect />;
      case "3":
        return <StatusPartial />;
      default:
        return <StatusCorrect />;
    }
  };

  const categoryText = (cat) => {
    switch (cat) {
      case 'DEATH':
        return (
          <div className="category DEATH">
            <span class="material-icons-outlined">person_remove</span> {cat}
          </div>
        );
      case 'ECONOMY':
        return (
          <div className="category ECONOMY">
            <span class="material-icons-outlined">trending_up</span> {cat}
          </div>
        );
      case 'ENVIRONMENT':
        return (
          <div className="category ENVIRONMENT">
            <span class="material-icons-outlined">air</span> {cat}
          </div>
        );
      case 'POLITICS':
        return (
          <div className="category POLITICS">
            <span class="material-icons-outlined">sports_kabaddi</span> {cat}
          </div>
        );
      case 'SPORTS':
        return (
          <div className="category SPORTS">
            <span class="material-icons-outlined">sports_basketball</span> {cat}
          </div>
        );
      case 'MEDIA':
        return (
          <div className="category MEDIA">
            <span class="material-icons-outlined">tv</span> {cat}
          </div>
        );
      case 'SCIENCE':
        return (
          <div className="category SCIENCE">
            <span class="material-icons-outlined">science</span> {cat}
          </div>
        );
      case 'CELEBRITY':
        return (
          <div className="category CELEBRITY">
            <span class="material-icons-outlined">photo_camera</span> {cat}
          </div>
        );
      case 'VIRUS':
        return (
          <div className="category VIRUS">
            <span class="material-icons-outlined">coronavirus</span> {cat}
          </div>
        );
      default:
        return (
          <div className="category MISC">
            <span class="material-icons-outlined">grade</span> {cat}
          </div>
        );
    }
  };

  return (
    <div className="individualGuess dropShadow2">
      <div className="guessCategory">{categoryText(guess.category)}</div>
      <div className="guessAuthor">{guess.Author}</div>
      <div className="guessText"> {guess.Prediction}</div>
      <div className="guessYear">{guess.Year}</div>
      <div className="guessStatus">{statusText(guess.status)}</div>
      <div className="guessInfo">{guess.info} </div>
    </div>
  );
};
