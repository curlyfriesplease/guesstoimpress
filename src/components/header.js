import '../css/header.css';
import { fetchAllPredictionsByYear } from './queries';

export const Header = ({ setPredictions }) => (
  <div className="headerDiv dropShadow2">
    <Title />
    <MenuItems setPredictions={setPredictions} />
  </div>
);

const Title = () => <div className="title">Guess to Impress</div>;

const MenuItems = ({ setPredictions }) => (
  <div className="menuItems">
    <button
      className="menuButton"
      onClick={() => fetchAllPredictionsByYear('2023', setPredictions)}
    >
      2023
    </button>
    <button
      className="menuButton"
      onClick={() => fetchAllPredictionsByYear('2022', setPredictions)}
    >
      2022
    </button>
    <button
      className="menuButton"
      onClick={() => fetchAllPredictionsByYear('2021', setPredictions)}
    >
      2021
    </button>
    <button className="menuButton">RULES</button>
  </div>
);
