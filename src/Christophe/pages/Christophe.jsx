import './christophe.css';
import Nav from '../components/Nav';

import { Outlet } from 'react-router-dom';

const Christophe = () => {
  return (
    <section className="christopheContainer">
      <Nav />
      <Outlet />
    </section>
  );
};

export default Christophe;
