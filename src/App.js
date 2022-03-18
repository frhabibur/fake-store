import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const getCount = (event) => {
    setCount(count + 1)
    event.target.setAttribute('disabled', true)
  }
  console.log(count)
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts getCount={getCount}></AllProducts>
    </div>
  );
}

export default App;
