import styled from 'styled-components';

const StyledPizzasListStyledComponent = styled.li`
  font-family: 'Dancing Script', cursive;
  margin: 2rem;
  text-transform: capitalize;
  &:after {
    display: block;
    content: '';
    margin-top: 0.7rem;
    width: 60%;
    padding-left: 50px;
    border-bottom: solid 2px #1b444b;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const PizzasListStyledComponent = ({ name, price }) => {
  return (
    // retourne une li stylisée
    <StyledPizzasListStyledComponent>
      <span style={{ color: '#61dbfb', fontSize: '2rem' }}>{name}</span> : <span className="price">{price}</span> €
    </StyledPizzasListStyledComponent>
  );
};

export default PizzasListStyledComponent;
