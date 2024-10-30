import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import ProductList from './components/ProductList';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
