import { useState } from 'react';
import { Button, Avatar, Badge } from 'antd';
import logo from '../assets/img/logo.jpg';

const Compteur = () => {
  const [count, setCount] = useState(null);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  console.log(count);

  return (
    <div className="compteurBlock">
      <h1>Compteur de like</h1>
      <Badge count={count}>
        <Avatar shape="square" src={logo} className="avatar" />
      </Badge>
      <div className="buttonBlock">
        <Button type="primary" className="btn btnSuccess" onClick={handlePlus}>
          j'aime
        </Button>
        <Button type="primary" danger className="btn btnSuccess" onClick={handleMinus}>
          je n'aime pas
        </Button>
      </div>
    </div>
  );
};

export default Compteur;
