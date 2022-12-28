import react from 'react';
import '../css/guesses.css';
import '../css/categories.css';
import { fetchAllPredictionsByStatus, fetchAllPredictionsByAuthor, fetchAllPredictionsByCategory } from './queries';

export const ListDiv = ({ predictionData, setPredictions }) => {
  console.log(typeof predictionData);
  console.log(`🐉🐉🐉 predictionData: 🐉🐉🐉`);
  console.dir(predictionData);
  return (
    <div className="listDiv">
      {predictionData.map((guess, guessIndex) => (
        <IndividualGuess guess={guess} setPredictions={setPredictions} />
      ))}
    </div>
  );
};

const StatusPending = ({setPredictions}) => <div className="statusPending status"  onClick={() => fetchAllPredictionsByStatus('1', setPredictions)}>PENDING</div>;
const StatusIncorrect = ({setPredictions}) => (
  <div className="statusIncorrect status" onClick={() => fetchAllPredictionsByStatus('2', setPredictions)}>INCORRECT</div>
);
const StatusPartial = ({setPredictions}) => <div className="statusPartial status" onClick={() => fetchAllPredictionsByStatus('3', setPredictions)}>PARTIAL</div>;
const StatusCorrect = ({setPredictions}) => <div className="statusCorrect status" onClick={() => fetchAllPredictionsByStatus('4', setPredictions)}>CORRECT</div>;

const IndividualGuess = ({ guess, setPredictions }) => {
  const statusText = (num) => {
    switch (num) {
      case "1":
        return <StatusPending  setPredictions={setPredictions}/>;
      case "2":
        return <StatusIncorrect setPredictions={setPredictions}/>;
      case "3":
        return <StatusPartial  setPredictions={setPredictions}/>;
      default:
        return <StatusCorrect setPredictions={setPredictions} />;
    }
  };

  const categoryText = (cat) => {
    switch (cat) {
      case 'DEATH':
        return (
          <div className="category DEATH" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">person_remove</span> {cat}
          </div>
        );
      case 'ECONOMY':
        return (
          <div className="category ECONOMY" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">trending_up</span> {cat}
          </div>
        );
      case 'ENVIRONMENT':
        return (
          <div className="category ENVIRONMENT" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">air</span> {cat}
          </div>
        );
      case 'POLITICS':
        return (
          <div className="category POLITICS" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">sports_kabaddi</span> {cat}
          </div>
        );
      case 'SPORTS':
        return (
          <div className="category SPORTS" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">sports_basketball</span> {cat}
          </div>
        );
      case 'MEDIA':
        return (
          <div className="category MEDIA" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">tv</span> {cat}
          </div>
        );
      case 'SCIENCE':
        return (
          <div className="category SCIENCE" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">science</span> {cat}
          </div>
        );
      case 'CELEBRITY':
        return (
          <div className="category CELEBRITY" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">photo_camera</span> {cat}
          </div>
        );
      case 'VIRUS':
        return (
          <div className="category VIRUS" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">coronavirus</span> {cat}
          </div>
        );
      default:
        return (
          <div className="category MISC" onClick={() => fetchAllPredictionsByCategory(guess.category, setPredictions)}>
            <span className="material-icons-outlined">grade</span> {cat}
          </div>
        );
    }
  };

  return (
    <div className="individualGuess dropShadow2">
      <div className="guessCategory">{categoryText(guess.category)}</div>
      <div className="guessAuthor" onClick={() => fetchAllPredictionsByAuthor(guess.Author, setPredictions)}>{guess.Author}</div>
      <div className="guessText"> {guess.Prediction}</div>
      <div className="guessYear">{guess.Year}</div>
      <div className="guessStatus">{statusText(guess.status)}</div>
      <div className="guessInfo">{guess.info} </div>
    </div>
  );
};

