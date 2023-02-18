
const PizzasCard = ({ name, price }) => {
  return (
    <div>
      <h1>Pizza : {name}</h1>
      <h2>Prix : {price}€</h2>
    </div>
  );
};

export default PizzasCard;
