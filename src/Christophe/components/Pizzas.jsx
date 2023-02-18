import PizzasList from "./PizzasList";

const Pizzas = () => {

  const dataPizzas = [
    {
      name: 'marguarita',
      price: 25,
      img: './Christophe/assets/img/margarita.jpg',
    },
    {
      name: '4 fromages',
      price: 32,
      img: './Christophe/assets/img/fromages.jpg',
    },
    {
      name: 'savoyarde',
      price: 54,
      img: './Christophe/assets/img/savoyarde.jpg',
    },
    { name: 'saumon', price: 58, img: './Christophe/assets/img/saumon.jpg' },
  ];


  return (
    <>
      <h3>Carte des Pizzas</h3>
      <PizzasList dataPizzas/>
    </>

  );
};

export default Pizzas;
