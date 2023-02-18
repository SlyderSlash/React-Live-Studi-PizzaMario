import PizzasCard from './PizzasCard';

const PizzasList = ( props ) => {
  if (!props) {
    return (
      <div>
        <h3>Il n\'y a plus de pizzas désolé !!!</h3>
      </div>
    );
  } else {
    const pizzasListing = props.articles.map((article) => {
      return <PizzasCard name={props.name} price={props.price} />;
    });

    return <div>{pizzasListing}</div>;
  }
};

export default PizzasList;
