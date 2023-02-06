import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Compteur from './Pages/Compteur';
import Articles from './Pages/Articles';
import ApiAdvice from './Pages/ApiAdvice';
import ApiGouv from './Pages/ApiGouv';

const fakeDate = [
  {
    id: 0,
    name: 'marguarita',
    price: 15,
    img: './assets/img/pizza-margarita.jpeg',
  },
  {
    id: 1,
    name: '4 saisons',
    price: 18,
    img: './assets/img/pizza-4-saisons.jpg',
  },
  {
    id: 2,
    name: 'savoyarde',
    price: 21,
    img: './assets/img/pizza-savoyarde.webp',
  },
  {
    id: 3,
    name: 'végétarienne',
    price: 19,
    img: './assets/img/pizza-vegetarienne.webp',
  },
];

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/listing-articles'
            element={<Articles articles={fakeDate} />}
          />
          <Route path='/counter' element={<Compteur />} />
          <Route path='/api-advice' element={<ApiAdvice />} />
          <Route path='/api-gouv' element={<ApiGouv />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
