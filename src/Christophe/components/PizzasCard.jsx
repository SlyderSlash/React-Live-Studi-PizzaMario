import { Card } from 'antd';
import './pizzascard.css';


const PizzasCard = ({ name, price, img }) => {
  return (
    <>
      <Card
        style={{
          width: 250,
        }}
        cover={
          <img
            src={img}
            alt={name}
            style={{
              height: ' 150px',
            }}
          />
        }

        bordered={false}
      >
        <Card title={name}>{price} €</Card>
      </Card>
    </>
  );
};

export default PizzasCard;
