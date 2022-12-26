import { redirect, Link } from 'react-router-dom';
import '../css/header.css';
import { fetchAllPredictionsByYear } from './queries';

const handleClick = (year, setPredictions) => {
  redirect('/error');
  fetchAllPredictionsByYear(year, setPredictions);
};

export const Header = ({ setPredictions }) => (
  <div className="headerDiv dropShadow2">
    <Title />
    <MenuItems setPredictions={setPredictions} />
  </div>
);

const Title = () => <div className="title">Guess to Impress</div>;

const MenuItems = ({ setPredictions }) => (
  <>
    <div className="menuItems">
      <button className="menuButton">
        <Link to="/">HOME</Link>
      </button>
      <button className="menuButton">
        <Link to="/rules">RULES</Link>
      </button>
      <button className="menuButton">
        <Link to="/winners">WINNERS</Link>
      </button>
    </div>
  </>
);
