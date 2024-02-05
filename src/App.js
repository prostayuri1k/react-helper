import './App.css';
import {HomeOutlined} from "@ant-design/icons";
import Navigation from "./components/Navigation/Navigation";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import VirtualDOM from "./components/VirtualDOM/VirtualDOM";
import PageComponents from "./components/PageComponents/PageComponents";
import Props from "./components/Props/Props";
import State from "./components/State/State";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Events from "./components/Events/Events";
import Refs from "./components/Refs/Refs";
import Fragment from "./components/Fragment/Fragment";
import Key from "./components/Key/Key";
import Memo from "./components/Memo/Memo";
import Routing from "./components/Router/Routing";
import SimpleRoutes from "./components/Router/SimpleRoutes/SimpleRoutes";
import DefineRouteParam from "./components/Router/DefineRouteParam/DefineRouteParam";
import NestedRoutes from "./components/Router/NestedRoutes/NestedRoutes";
import PrivateRoutes from "./components/Router/PrivateRoutes/PrivateRoutes";
import Form from "./components/Form/Form";
import Storages from "./components/Storages/Storages";
import Hoc from "./components/Hoc/Hoc";
import ContextPage from "./components/ContextPage/ContextPage";

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
                      <Route element={<PageComponents/>} path='/components'></Route>
                      <Route element={<Props/>} path='/props'></Route>
                      <Route element={<State/>} path='/state'></Route>
                      <Route element={<LifeCycle/>} path='/LifeCycle'></Route>
                      <Route element={<Events/>} path='/events'></Route>
                      <Route element={<Refs/>} path='/refs'></Route>
                      <Route element={<Fragment/>} path='/fragment'></Route>
                      <Route element={<Key/>} path='/key'></Route>
                      <Route element={<Memo/>} path='/memo'></Route>
                      <Route element={<ContextPage/>} path='/context'></Route>
                      <Route element={<Routing/>} path='/router'>
                          <Route element={<SimpleRoutes/>} path='/router/simple_routes'></Route>
                          <Route element={<DefineRouteParam/>} path='/router/define_route_param'></Route>
                          <Route element={<NestedRoutes/>} path='/router/nested_routes'></Route>
                          <Route element={<PrivateRoutes/>} path='/router/private_routes'></Route>
                      </Route>
                      <Route element={<Form/>} path='/form'></Route>
                      <Route element={<Storages/>} path='/storages'></Route>
                      <Route element={<Hoc/>} path='/HOC'></Route>
                  </Routes>
              </div>
          </main>
          <footer>
              <a href='https://github.com/prostayuri1k/react-helper' target='_blank'>
                  GitHub
              </a>
          </footer>
    </div>
  );
}

export default App;
