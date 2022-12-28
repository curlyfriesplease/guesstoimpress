import { redirect, Link } from 'react-router-dom';
import '../css/header.css';
import { fetchAllPredictionsByYear } from './queries';
import { useNavigate } from "react-router-dom";


// const handleClick = (year, setPredictions) => {
//   redirect('/error');
//   fetchAllPredictionsByYear(year, setPredictions);
// };

export const Header = ({ setPredictions }) => (
  <div className="headerDiv dropShadow2">
    <Title />
    <MenuItems setPredictions={setPredictions} />
  </div>
);

const Title = () => <div className="title">Guess to Impress</div>;

const MenuItems = ({ setPredictions }) => {
const { push } = useNavigate()
return (
  <>
    <div className="menuItems">
      <button className="menuButton" onClick={() => push('/')}>
        HOME
      </button>
      <button className="menuButton"onClick={() => push('/rules')}>
        RULES
      </button>
      <button className="menuButton"onClick={() => push('/winners')}>
        WINNERS
      </button>
    </div>
  </>
)};
