import PizzasCard from './PizzasCard';

const PizzasList = ({ pizzas }) => {
  if (!pizzas) {
    return (
      <div>
        <h3>Il n\'y a plus de pizzas désolé !!!</h3>
      </div>
    );
  } else {
    const pizzasListing = pizzas.map((pizza) => {
      const { name, price, img } = pizza;
      return <PizzasCard name={name} price={price} img={img} key={name} />;
    });
    return <section className="pizzaslist">{pizzasListing}</section>;
  }
};

export default PizzasList;
