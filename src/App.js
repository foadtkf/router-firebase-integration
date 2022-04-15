import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FourZeroFour from './Components/FourZeroFour/FourZeroFour';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <h1>Milestone 10 day 4</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/orders' element={<RequireAuth>
                                      <Orders></Orders>
                                      </RequireAuth>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
