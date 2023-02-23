import ActionAreaCard from './ActionAreaCard';
import PizzasListStyledComponent from './PizzasListStyledComponent';
import './pizzaslist.css';

const PizzasList = ({ pizzas }) => {
  if (!pizzas) {
    return (
      <div>
        <h3>Il n\'y a plus de pizzas désolé !!!</h3>
      </div>
    );
  } else {
    // boucle liste des pizzas sous forme li
    const pizzasList = pizzas.map((pizza) => {
      const { name, price, img } = pizza;
      return <PizzasListStyledComponent name={name} price={price} img={img} key={name} />;
    });
    // boucle liste des pizzas sous forme card
    const pizzasCard = pizzas.map((pizza) => {
      const { name, price, img } = pizza;
      return <ActionAreaCard name={name} price={price} img={img} key={name} />;
    });

    return (
      <>
        <section className="pizzaslist">
          <ul style={{ display: 'block', textAlign:'left', width:'300px' }} className="listpizzali">
            {pizzasList}
          </ul>
        </section>
        <section className="pizzascard">{pizzasCard}</section>
      </>
    );
  }
};

export default PizzasList;
