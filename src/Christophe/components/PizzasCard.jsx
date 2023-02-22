import { Card } from 'antd';
import './pizzascard.css';
const { Meta } = Card;

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
        <Meta
          title={name}
          description={price + '€'}
          style={{
            height: 120,
            display: 'flex',
            alignItems: 'center',
          }}
        />
      </Card>
    </>
  );
};

export default PizzasCard;
