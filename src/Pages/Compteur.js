import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import dices from '../assets/img/dices.png';
import Button from 'react-bootstrap/Button';

const Compteur = () => {
  let [counter, setCounter] = useState(0);

  const decrementBy10 = () => {
    setCounter((prevCounter) => prevCounter - 10);
  };
  const decrementBy1 = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const incrementBy1 = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const incrementBy10 = () => {
    setCounter((prevCounter) => prevCounter + 10);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  const randomConter = () => {
    setCounter(Math.floor(Math.random() * 100 + 1));
  };
  return (
    <>
      <Navigation />
      <main>
        <div className='container container-compteur mt-5'>
          <h1 className='text-center mb-5'>Compteur</h1>
          <div className='wrapper-counter'>
            <div className='counter-body'>
              <Button variant='danger' onClick={decrementBy10}>
                -10
              </Button>
              <Button variant='danger' onClick={decrementBy1}>
                -1
              </Button>
              <span>{counter}</span>
              <Button variant='success' onClick={incrementBy1}>
                +1
              </Button>
              <Button variant='success' onClick={incrementBy10}>
                +10
              </Button>
            </div>
            <Button variant='warning' onClick={resetCounter}>
              Remise à zéro
            </Button>
            <Button variant='warning' onClick={randomConter}>
              <img src={dices} alt='icon dices' />
              Random compteur
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Compteur;
