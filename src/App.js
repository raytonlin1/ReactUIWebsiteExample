import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  const [page,setPage] = useState('home');
  function makeHome() {
    setPage('home');
  }
  function makePage2() {
    setPage('page2');
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className="title"> Rayton Lin </p> 
        <div className="navlinks">
          <p className="navlink"> <a onClick={makeHome} className="navtext"> Home </a>  </p> 
          <p className="navlink"> <a onClick={makePage2} className="navtext"> Example Page 2 </a>  </p> 
          <p className="navlink"> <a href="https://raytonlin1.github.io" className="navtext"> My Website </a>  </p> 
          <p className="navlink"> <a href="https://github.com/Raytonlin1" className="navtext"> My Github </a>  </p> 
        </div>
      </header>
      {page === 'home' ? <Body /> : null}
      {page === 'page2' ? <p> Page 2</p> : null}
      <Footer />
    </div>
  );
}

export default App;
