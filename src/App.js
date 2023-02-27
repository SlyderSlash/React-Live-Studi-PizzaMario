import './App.css'
import {
  ListArticles, 
  TestComponent, 
  FormDelivery,
  NavBar,
  Footer
} from './Components'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState } from 'react'
// index.css
// App.css
// Shop.css
const fakeDate = [
  {name : 'marguarita', price : 25},
  {name : '4 saisons', price: 32},
  {name : 'marguarita sans prix'},
  {name : '4 saisons', price: 58}
]
let point = 0
const addSomePoint = () => {
  point = point + 1
  console.log(point)
}
function App() {
  const [page, setPage] = useState([])
  return (
    <>
    <NavBar/>
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            <h1>{page}</h1>
            <Routes>
              <Route path='/Delivery' element={<FormDelivery />} />
              <Route path='/List' element={<ListArticles articles={fakeDate}/>} />
              <Route path='/Test' element={<TestComponent functionClick={addSomePoint} points={point} />}/>
              <Route path='/Pomme' element={<h1>Quel idée des pommes sur une pizza ?!</h1>}/>
            </Routes> 
          </p>
        </header>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
