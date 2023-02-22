import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './nav.css';
import logo from '../assets/img/logo.jpg';

const Nav = () => {
  return (
    <nav>
      <div className="logoBlock">
        <img className="logo" src={logo} alt="logo christophe" />
      </div>
      <h2>Les exercices de Christophe</h2>
      <ul>
        <li>
          <NavLink to="/christophe/home">
            <Button className="homeButton">Acceuil</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/christophe/entreprises">
            <Button className="homeButton">Entreprises</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/christophe/pizzas">
            <Button className="homeButton">Pizzas</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
