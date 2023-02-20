import PizzasList from './PizzasList';
import margarita from '../assets/img/margarita.jpg';
import fromages from '../assets/img/fromages.jpg';
import saumon from '../assets/img/saumon.jpg';
import savoyarde from '../assets/img/savoyarde.jpg';

const Pizzas = () => {
  const dataPizzas = [
    {
      name: 'marguarita',
      price: 25,
      img: margarita,
    },
    {
      name: '4 fromages',
      price: 32,
      img: fromages,
    },
    {
      name: 'savoyarde',
      price: 54,
      img: savoyarde,
    },
    { name: 'saumon', price: 58, img: saumon },
  ];

  return (
    <>
      <h3>Carte des Pizzas</h3>
      <PizzasList pizzas={dataPizzas} />
    </>
  );
};

export default Pizzas;
