import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Property from './pages/Property';
import Agent from './pages/Agent';
import Blog from './pages/Blog';
import SingleProperty from './pages/SingleProperty';
// import {Home,Property,Blog,Agent} from './pages'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='property' element={<Property/>}/>
        <Route path='property/:id' element={<SingleProperty/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='Agent' element={<Agent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
