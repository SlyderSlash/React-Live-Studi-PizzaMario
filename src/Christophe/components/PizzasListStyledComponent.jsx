import styled from 'styled-components';

const StyledPizzasListStyledComponent = styled.li`
  font-family: 'Dancing Script', cursive;
  margin: 2rem;
  text-transform: capitalize;
  &:after {
    display: block;
    content: '';
    margin-top: 0.7rem;
    width: 70%;
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
    <StyledPizzasListStyledComponent style={{ color: '#fff', fontSize: '2rem', textTransform: 'uppercase' }}>
      <span style={{ color: '#61dbfb', fontSize: '2rem', textTransform: 'uppercase' }}>{name}</span> :{' '}
      <span style={{ fontSize: '2rem',color: '#fff' }} className="price">
        {price}
      </span>{' '}
      €
    </StyledPizzasListStyledComponent>
  );
};

export default PizzasListStyledComponent;
