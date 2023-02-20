import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { ListArticles, TestComponent, FormDelivery } from './Components';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Christophe, Entreprises, Home, Pizzas } from './Christophe';
// index.css
// App.css
// Shop.css
const fakeData = [
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
let point = 0;

const addSomePoint = () => {
  point = point + 1;
  console.log(point);
};
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <NavLink to="/christophe/home">
            <Button type="primary">Christophe</Button>
          </NavLink>
          <section className='appBlock'>
            Edit <code>src/App.js</code> and Bonjour save to reload.
            <Routes>
              <Route path="/Delivery" element={<FormDelivery />} />
              <Route path="/List" element={<ListArticles articles={fakeData} />} />
              <Route path="/Test" element={<TestComponent functionClick={addSomePoint} points={point} />} />
              <Route path="/Pomme" element={<h1>Quel idée des pommes sur une pizza ?!</h1>} />
              <Route path="/christophe" element={<Christophe />}>
                <Route path="/christophe/home" element={<Home />} />
                <Route path="/christophe/entreprises" element={<Entreprises />} />
                <Route path="/christophe/pizzas" element={<Pizzas />} />
              </Route>
            </Routes>
          </section>
        </header>
      </div>
    </Router>
  );
}

export default App;
