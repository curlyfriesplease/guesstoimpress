import '../css/header.css';
import { useNavigate } from 'react-router-dom';

export const Header = ({ setPredictions }) => (
  <div className="headerDiv dropShadow2">
    <Title />
    <MenuItems setPredictions={setPredictions} />
    <div className="gameSuspendedNotice">
      Thanks for playing 2020-2024. No game in 2025 but it'll be back!
    </div>
  </div>
);

const Title = () => <div className="title">Guess to Impress</div>;

const MenuItems = ({ setPredictions }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuItems">
        <button className="menuButton" onClick={() => navigate('/')}>
          HOME
        </button>
        <button className="menuButton" onClick={() => navigate('/rules')}>
          RULES
        </button>
        <button className="menuButton" onClick={() => navigate('/winners')}>
          WINNERS
        </button>
      </div>
    </>
  );
};
