import './App.css';
import {HomeOutlined} from "@ant-design/icons";
import Navigation from "./components/Navigation/Navigation";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import VirtualDOM from "./components/VirtualDOM/VirtualDOM";

function App() {
  return (
    <div className="App">
          <header>
              <div>
                  <NavLink to='/' activeClassName='active'>
                      <HomeOutlined />
                  </NavLink>
              </div>
              <div className='header_title'>
                  Основная теория по библиотеке React
              </div>
          </header>
          <main>
              <nav>
                  <Navigation/>
              </nav>
              <div className='main_page'>
                  <Routes>
                      <Route element={<Home/>} path='/'></Route>
                      <Route element={<VirtualDOM/>} path='/virtualDOM'></Route>
                  </Routes>
              </div>
          </main>
          <footer>footer</footer>
    </div>
  );
}

export default App;
