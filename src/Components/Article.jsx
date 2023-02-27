import { Card } from 'antd';
const Article = (props) => (
    <div className='pizzaCards'>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
    <p>Pizza{props.name}</p>
    <p>Prix: {props.price? props.price : 12} €</p>
  </Card>
      </div>
);
export default Article;